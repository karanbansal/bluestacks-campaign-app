import React, { useState } from "react";
import MuiTabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./tabs.css";

// component that displays the tabs

function Tabs({ updateTabValue }) {
  const [tabValue, setTabValue] = useState(0);

  // function to handle tab change
  const onTabChange = (event, value) => {
    setTabValue(value);
    updateTabValue(value);
  };
  return (
    <div className="tabs">
      <MuiTabs value={tabValue} onChange={onTabChange}>
        <Tab label="Upcoming Campaigns"></Tab>
        <Tab label="Live Campaigns"></Tab>
        <Tab label="Past Campaigns"></Tab>
      </MuiTabs>
    </div>
  );
}

export default Tabs;
