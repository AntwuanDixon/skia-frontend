import { Box, Container } from "@mui/material";
import { ReactElement, useContext, useState } from "react";
import AddressInput from "./AddressInput";
import { getBalances } from "../utils/balances";
import TabPanel from "./TabPanel";
import { isKaruraAddress } from "../utils";
import StakeKSMForm from "./Forms/StakeKSMForm";
import { AppContext, ApiContext } from "../App";
import { tokens, lpSpecs } from "../utils/tokens";

function MainCard(): ReactElement {
  const [statusMsg, setStatusMsg] = useState("");
  const [activeToken, setActiveToken] = useState(tokens[0])
  const {state, dispatch} = useContext(AppContext) as AppContextType;
  const [api] = useContext(ApiContext);

  const handleAddressInput = async (address: string) => {
    setStatusMsg(
      isKaruraAddress(address) ? "Fetching data..." : "Your address is invalid"
    );
    try {
      const balances = await getBalances(address, { tokens, lpSpecs, api });
      dispatch({ type: "NEW_ACCOUNT", payload: {balances, address}});
    } catch (err) {
      const statusMessage = `Querying failed!`;
      setStatusMsg(statusMessage);
    }
  };

  const setToken = (activeTab) => {
    setActiveToken(tokens[activeTab])
  }

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
          <StakeKSMForm activeToken={activeToken}/>
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
          {state[0] ? (<TabPanel setToken={setToken} />) : null}
          
        </Box>
      </Box>
    </Container>
  );
}

export default MainCard;
