import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StakingInfo from "./StakingInfo";
import { useContext } from "react";
import { AppContext } from "../App";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface BalancesContainerProps {
  setToken: (activeTab: any) => void;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const headers = [
  ["Staked", "Avg. APR", "Interest"],
  ["Staked", "Avg. APR", "Interest"],
  ["Staked", "Avg. APR", "Interest"],
];
const stats = [
  ["1.13", "11%", "0.12"],
  ["2.31", "14%", "0.58"],
  ["0.91", "9%", "0.08"],
];

const BalancesContainer = ({ setToken }: BalancesContainerProps) => {
  const { state, dispatch } = useContext(AppContext) as AppContextType;
  const { balances } = state[0];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setToken(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 650 }}>
      <Box
        sx={{
          borderBottom: ".5rem",
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {Object.keys(balances).map((token, index) => (
            <Tab label={token} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {Object.keys(balances).map((token, index) => (
        <TabPanel value={value} index={index}>
          <StakingInfo
            headers={headers[0]}
            stats={stats[0]}
            key={`balance-panel-${token}`}
            token={token}
            balance={balances[token]}
            // price={prices[index]}
          />
        </TabPanel>
      ))}
    </Box>
  );
};

export default BalancesContainer;
