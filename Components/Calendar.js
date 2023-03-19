import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "@emotion/styled";
export const StyleWrapper = styled.div`
  .fc-button.fc-prev-button,
  .fc-button.fc-next-button,
  .fc-button.fc-button-primary {
    cursor: pointer;
    background-color: black;
  }
  .fc-border-color: black;
  .fc-daygrid-event-dot-width: 5px;
  .fc-daygrid-event {
    white-space: normal !important;
    align-items: normal !important;
  }

  .fc-daygrid-event {
    display: block !important;
    padding-left: 15px !important;
  }
  .fc-daygrid-event-dot {
    display: inline-flex;
    position: absolute;
    left: 0px;
    top: 6px;
  }
  .fc-event-time,
  .fc-event-title {
    display: inline;
  }
  .fc-daygrid-day {
    overflow: hidden;
  }

  a {
    cursor: default;
    color: black;
  }
  h2 {
    cursor: default;
  }
  --fc-today-bg-color: lightblue;
`;

const Calendar = () => {
  return (
    <StyleWrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
        }}
        eventColor="skyblue"
        eventTextColor="black"
        eventBorderColor="black"
        //   initialView="DayGridMonth"

        //   views={"dayGridMonth,timeGridWeek"}
        eventContent={renderEventContent}
        events={[
          { title: "event 1", date: "2023-03-13" },
          { title: "event 2", date: "2023-03-15" },
          { title: "event 2", date: "2023-03-15" },
          { title: "event 2", date: "2023-03-15" },
          { title: "event 2", date: "2023-03-16" },
          { title: "event 2", date: "2023-03-17" },
          { title: "event 2", date: "2023-03-18" },
          { title: "event 2", date: "2023-03-19" },
          { title: "event 2", date: "2023-03-10" },
        ]}
      />
    </StyleWrapper>
  );
};
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
export default Calendar;
