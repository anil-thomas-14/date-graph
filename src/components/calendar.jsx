import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Calendar as BigCalendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
// import Dialog from "material-ui/Dialog";
// import FlatButton from "material-ui/FlatButton";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { selectDateStart, selectDateSuccess, selectDateFailure } from '../redux/calendarSlice';

const localizer = momentLocalizer(moment);

const Calendar = () => {

  const dispatch = useDispatch();

  const { data, isSelected, selectedDate, isLoading } = useSelector((state) => state.calendar);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

  const dateArr = Object.keys(data);

  const handleSelect = (dateInfo) => {
    const date = new Date(dateInfo.start)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-")

    dispatch(selectDateSuccess({ data, selectedDate: date }));
  }

  const dayPropGetter = (date) => {
    const formattedDate = moment(date).format("DD-MM-YYYY");

    if (selectedDate === formattedDate) {
      return {
        style: {
          backgroundColor: "rgb(106 132 249)",
          color: "#000",
          borderRadius: "5px",
        },
      };
    }
    return {};
  };

  const handleNavigate = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };

  return (
    <>
      <h2 className="title">Date Graph</h2>
      <BigCalendar
        localizer={localizer}
        events={[]}
        views={["month", "week", "day", "agenda"]}
        timeslots={2}
        defaultView="month"
        defaultDate={new Date()}
        date={currentDate}
        view={currentView}
        onNavigate={handleNavigate}
        onView={handleViewChange}
        selectable={true}
        onSelectSlot={handleSelect}
        style={{ height: '500px' }}
        dayPropGetter={dayPropGetter}
      />
    
    </>
  )
}

export default Calendar;