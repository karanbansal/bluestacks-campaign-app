import React, { useState } from "react";
import MuiTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./table.css";
import ViewPriceIcon from "../assets/Price.png";
import CSVIcon from "../assets/file.png";
import ReportIcon from "../assets/statistics-report.png";
import PriceModal from "./priceModal";
import Calendar from "./calendar";
var moment = require("moment");

// table component responsible for displaying the data in a table format

function Table({ data, updateDate }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  //opens the modal to view price
  const onViewPriceClick = (row) => {
    setModalContent(row);
    setOpenModal(true);
  };

  //closes the modal
  const handleModalClose = () => {
    setOpenModal(false);
  };

  //handler for date change
  const changeDate = (date, id) => {
    updateDate(date, id);
  };

  return (
    <div className="table-root">
      <PriceModal
        show={openModal}
        content={modalContent}
        close={handleModalClose}
      />
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell>DATE</TableCell>
            <TableCell>CAMPAIGN</TableCell>
            <TableCell>VIEW</TableCell>
            <TableCell>ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="date-cell">
                  <span className="text-color">
                    {moment(row.createdOn).format("MMM YYYY, DD")}
                  </span>
                  <span className="italic sub-color">
                    {moment(row.createdOn).fromNow()}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="campaign-cell">
                  <img
                    src={require("../assets/" + row.image_url).default}
                    alt="game_img"
                    className="game-icon-size"
                  />
                  <div className="campaign-cell-inner">
                    <span className="text-color">{row.name}</span>
                    <span className="italic sub-color">{row.region}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="view-cell">
                  <button
                    onClick={() => onViewPriceClick(row)}
                    className="calendar"
                  >
                    <img
                      src={ViewPriceIcon}
                      alt="price"
                      className="icon-size"
                    />
                    <span className="calendar-span sub-color">
                      View Pricing
                    </span>
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <div className="action-cell">
                  <div className="action-cell-inner">
                    <img alt="csv" src={CSVIcon} className="icon-size" />
                    <label className="sub-color">CSV</label>
                  </div>
                  <div className="action-cell-inner">
                    <img alt="report" src={ReportIcon} className="icon-size" />
                    <label className="sub-color">Report</label>
                  </div>
                  <div>
                    <Calendar
                      selected={row.createdOn}
                      changeDate={changeDate}
                      rowId={row.id}
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </div>
  );
}

export default Table;
