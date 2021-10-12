import { Box, Divider, Paper, Typography } from "@mui/material";
import { ReactElement } from "react";

interface BalancePanelProps {
  token: string;
  balance: bigint;
  // price: bigint;
  headers: string[]
  stats: string[]
}

function StakeStats({token, balance, headers, stats}: BalancePanelProps): ReactElement {
  const balanceString = balance ? balance.toString() : 0
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#121212",
        borderRadius: "2rem",
        marginBottom: '1rem'
      }}
    >
      <Paper elevation={1} >
        <Box sx={{ display: "flex", flexDirection: "row", padding: ".4rem" }}>
        <Box
            sx={{ display: "flex", flexDirection: "column", padding: "0rem", width: '30%' }}
          >
            <Typography sx={{ flexShrink: 0 }}>{token}</Typography>
            <Typography sx={{ flexShrink: 0, color: "text.secondary", marginTop: '.2rem' }}>
             {balanceString}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "0rem", width: '30%' }}
          >
            <Typography sx={{ flexShrink: 0 }}>{headers[0]}</Typography>
            <Typography sx={{ flexShrink: 0, color: "text.secondary", marginTop: '.2rem' }}>
              {stats[0]}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "0rem",  width: '30%' }}
          >
            <Typography sx={{ flexShrink: 0 }}>{headers[1]}</Typography>
            <Typography sx={{ flexShrink: 0, color: "text.secondary", marginTop: '.2rem' }}>
              {stats[1]}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: "0rem",  width: '30%' }}
          >
            <Typography sx={{ flexShrink: 0 }}>{headers[2]}</Typography>
            <Typography sx={{ flexShrink: 0, color: "text.secondary", marginTop: '.2rem' }}>
              {stats[2]}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default StakeStats;
