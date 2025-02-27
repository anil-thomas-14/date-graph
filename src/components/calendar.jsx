import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Calendar as BigCalendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import UserChart from '../components/user-chart';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { selectDate } from '../redux/calendarSlice';

const localizer = momentLocalizer(moment);

const Calendar = () => {

  const dispatch = useDispatch();

  const { data, userData, selectedDate } = useSelector((state) => state.calendar);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");
  const [open, setOpen] = useState(false);

  const handleSelect = (dateInfo) => {
    const date = new Date(dateInfo.start)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

    setOpen(true);
    dispatch(selectDate({ userData: data[date], selectedDate: date }));
  };

  const events = Object.entries(data).map(([date, users]) => ({
    title: `Users: ${users.length}`,
    start: moment(date, "DD-MM-YYYY").toDate(),
    end: moment(date, "DD-MM-YYYY").toDate(),
    allDay: true,
  }));

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
        events={events}
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
        onSelectEvent={handleSelect}
        style={{ height: '500px' }}
        dayPropGetter={dayPropGetter}
      />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle className="popup-title">{userData?.length > 0 ? 'User Graph' : 'No Data'}</DialogTitle>
        <DialogContent>
          {
            userData?.length > 0 ?
            <UserChart graphData={userData} />
            : <p className="popup-no-data">No data found for the selected date.</p>

          }
        </DialogContent>
        <DialogActions>
          <Button className="popup-close-btn" onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    
    </>
  )
}

export default Calendar;