import DataTable from "./DataTable";
import { Box } from "@mui/material";
import StakeStats from "./StakeStats";

interface Props {
  token: string;
  balance: bigint;
  // price: bigint;
  headers: string[];
  stats: string[];
}

export default function StakingInfo({token, balance, headers, stats}: Props) {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <StakeStats token={token} balance={balance} headers={headers} stats={stats} />
        <DataTable />
      </Box>
    </>
  );
}
