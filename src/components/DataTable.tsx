import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, styled, Typography } from '@mui/material';

function createData(
  name: string,
  ticker: string,
  APR: number,
  icons: string,
) {
  return { name, APR, icons, ticker };
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({

    '&': {
        borderTop: '2px solid #8978F2',
      },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  

export default function DataTable() {

  const generateRandomAPRs = () => {
      let randomAPR = Math.random()
      randomAPR = (randomAPR * 5) + 10
      return parseFloat(randomAPR.toFixed(1))
  }


const rows = [
  createData('Karura', 'KAR', generateRandomAPRs(), "/Assets/Kusama_Coin_Icons/Karura_KAR.png"),
  createData('Liquid Kusama', 'LKSM', generateRandomAPRs(), "/Assets/Kusama_Coin_Icons/Kusama_KSM.png"),
  createData('Moonriver', 'MOVR', generateRandomAPRs(), "/Assets/Kusama_Coin_Icons/Moonriver_MOVR.png"),
  createData('Shiden', 'SDN', generateRandomAPRs(), "/Assets/Kusama_Coin_Icons/Shiden_SDN.png"),
];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" >Coin</TableCell>
            
            <TableCell>Ticker</TableCell>
            <TableCell align="right">APR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="right" size="small" sx={{padding: ".5rem", display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}><Typography sx={{marginLeft: '1rem'}}>{row.name}</Typography><Avatar alt="A" src={row.icons} sx={{marginLeft: '.3rem'}}/></TableCell>
            
              <TableCell component="th" scope="row">
                {row.ticker}
              </TableCell>
              <TableCell align="right">{row.APR}%</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
