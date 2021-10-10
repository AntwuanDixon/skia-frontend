import * as React from "react";
import DataTable from "./DataTable";
import { Box } from "@mui/material";
import StakeStats from "./StakeStats";

interface Props {
  headers: string[]
  stats: string[]
}

export default function StakingInfo({headers, stats
}: Props) {

  return (
      <>
        <Box
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <StakeStats headers={headers} stats={stats} />
          <DataTable />
        </Box>
        
</>
  );
}
