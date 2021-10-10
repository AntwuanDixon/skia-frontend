import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "./StakingInfo";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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

const headers = [["KSM-LKSM Staked", 'Avg. APR', "Interest"], ["KSM-KAR Staked", 'Avg. APR', "Interest"], ["KSM-KUSD Staked", 'Avg. APR', "Interest"]]
const stats = [["1.13", '11%', "0.12"],["2.31", '14%', "0.58"],["0.91", '9%', "0.08"]]

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: '.5rem', borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="LKSM" {...a11yProps(0)} />
          <Tab label="KAR" {...a11yProps(1)} />
          <Tab label="KUSD" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <Accordion headers={headers[0]} stats={stats[0]}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Accordion headers={headers[1]} stats={stats[1]}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Accordion headers={headers[2]} stats={stats[2]}/>
      </TabPanel>
    </Box>
  );
}
