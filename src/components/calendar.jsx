import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Calendar as BigCalendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { selectDateStart, selectDateSuccess, selectDateFailure } from '../redux/calendarSlice';

const localizer = momentLocalizer(moment);

const Calendar = () => {

  const dispatch = useDispatch();

  const { data, isSelected, selectedDate, isLoading } = useSelector((state) => state.calendar);

  const dateArr = Object.keys(data);

  const handleSelect = (dateInfo) => {
    const date = new Date(dateInfo.start)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

    dispatch(selectDateSuccess({ data, selectedDate: date }));
  }


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
        selectable={true}
        // onSelectEvent={() => {}}
        onSelectSlot={handleSelect}
        style={{ height: '500px' }}
      />
    
    </>
  )
}

export default Calendar;