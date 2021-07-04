import React, { useState } from "react";
import DatePicker from "react-datepicker";
import CalendarIcon from "../assets/calendar.png";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";

// calendar component - pops up a date picker, used to change schedule of the campaign

function Calendar({ selected, changeDate, rowId }) {
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const openDatePicker = () => {
    setDatePickerIsOpen(!datePickerIsOpen);
  };
  return (
    <div className="action-cell-inner">
      <button onClick={() => openDatePicker()} className="calendar">
        <img alt="calendar" src={CalendarIcon} className="icon-size" />
        <span className="calendar-span sub-color">Schedule Again</span>
      </button>
      <DatePicker
        className="calendar-picker"
        selected={selected}
        onChange={(date) => {
          openDatePicker();
          changeDate(date, rowId);
        }}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        onClickOutside={openDatePicker}
        open={datePickerIsOpen}
      />
    </div>
  );
}

export default Calendar;
