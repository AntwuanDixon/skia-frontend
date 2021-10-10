import { Box, Container } from "@mui/material";
import { ReactElement } from "react";
import { BalancesContainer } from "./BalancesContainer";
import { LpSpec } from "../utils/balances";
import { ApiPromise } from "@polkadot/api";
import StakeCard from "./StakeCard";
import TabPanel from "./TabPanel";

interface Props {
  api: ApiPromise;
}

const TOKENS = ["KAR", "KSM", "KUSD", "LKSM"];
const LP_SPECS: Array<LpSpec> = [
  ["KSM", "LKSM"],
  ["KUSD", "KSM"],
  ["KAR", "KSM"],
];


function MainCard({ api }: Props): ReactElement {
  return (
    <Container maxWidth="lg">
      <BalancesContainer api={api} tokens={TOKENS} lpSpecs={LP_SPECS} />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          marginTop: "2rem",
          backgroundColor: "#8978F2",
          padding: ".3rem",
          borderRadius: "1rem",
          display: "flex",
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}
      >
        <Box
          sx={{
            padding: "1rem",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "row",
            width: "35%",
          }}
        >
          <StakeCard />
        </Box>
        
        <Box
          sx={{
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabPanel />
        </Box>
      </Box>
    </Container>
  );
}

export default MainCard;
