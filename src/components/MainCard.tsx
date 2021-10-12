import { Box, Container } from "@mui/material";
import { ReactElement, useState } from "react";
import { BalancesContainer } from "./BalancesContainer";
import AddressInput from "./AddressInput";
import { getBalances } from "../utils/balances";
import { ApiPromise } from "@polkadot/api";
import StakeCard from "./StakeCard";
import TabPanel from "./TabPanel";
import { isKaruraAddress } from "../utils";

export type BalanceDict = Record<string, bigint>;
export type BalanceList = Array<{ token: string; balance: bigint }>;
export type LpSpec = [string, string];

interface Props {
  api: ApiPromise;
}

const lpSpecs: Array<LpSpec> = [
  ["KSM", "LKSM"],
  ["KUSD", "KSM"],
  ["KAR", "KSM"],
];

function MainCard({ api }: Props): ReactElement {
  const [statusMsg, setStatusMsg] = useState("");
  const [balances, setBalances] = useState<BalanceDict>({});
  const [tokens, setTokens] = useState(["KAR", "KSM", "KUSD", "LKSM"]);

  const handleAddressInput = async (address: string) => {
    setStatusMsg(
      isKaruraAddress(address) ? "Fetching data..." : "Your address is invalid"
    );
    try {
      const balances = await getBalances(address, { tokens, lpSpecs, api });
      setBalances(balances);
      const sortedTokens = Object.keys(balances).sort();
      setTokens(sortedTokens);
      return { balances, sortedTokens };
    } catch (err) {
      const statusMessage = `Querying failed!)`;
      setStatusMsg(statusMessage);
      return null;
    }
  };

  return (
    <Container maxWidth="lg">
      <AddressInput handler={handleAddressInput} />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          marginTop: "2rem",
          backgroundColor: "#8978F2",
          padding: ".3rem",
          borderRadius: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
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
          {tokens[0] !== "" ? (<TabPanel tokens={tokens} balances={balances} api={api} />) : null}
          
        </Box>
      </Box>
    </Container>
  );
}

export default MainCard;
