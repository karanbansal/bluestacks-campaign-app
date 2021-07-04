import React, { useState, useEffect } from "react";
import Tabs from "./tabs";
import data from "./data";
import Table from "./table";
import "./index.css";
var moment = require("moment");

// main body of the application is rendered through this component

function Body() {
  const [appData, setAppData] = useState(data.TableData);
  const [updated, setUpdated] = useState(data.TableData);
  const [currTabValue, setCurrTabValue] = useState(0);

  // resposible for updating the changes made to a date
  const updateDate = (date, id) => {
    let temparr = [...appData];
    let objIndex = temparr.findIndex((obj) => obj.id === id);
    temparr[objIndex].createdOn = moment(date).unix() * 1000;
    setAppData(temparr);
  };

  // updates the content of the table when we switch tabs or a date is changed
  const changeDataAsPerTabValue = () => {
    let temparr = [...appData];
    temparr = temparr.filter((element) => {
      let elementDate = moment(element.createdOn).format("YYYY-MM-DD");
      let todayDate = moment(new Date()).format("YYYY-MM-DD");
      if (currTabValue === 0) {
        return moment(elementDate).isAfter(todayDate);
      } else if (currTabValue === 1) {
        return elementDate === todayDate;
      } else {
        return moment(elementDate).isBefore(todayDate);
      }
    });
    setUpdated(temparr);
  };

  useEffect(() => {
    changeDataAsPerTabValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currTabValue, appData]);

  return (
    <div className="index">
      <h1>Manage Campaigns</h1>
      <Tabs updateTabValue={setCurrTabValue} />
      <Table data={updated} updateDate={updateDate} />
    </div>
  );
}

export default Body;
