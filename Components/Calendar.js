import React, { useEffect, useLayoutEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import styles from "../styles/Modalcalendar.module.scss";
import { URL } from "../creds";
import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify";

// import resourceTimelinePlugin from "@fullcalendar/resource-timeline"; // a plugin!
import styled from "@emotion/styled";
// import { style } from "@mui/system";
import axios from "axios";
const StyleWrapper = styled.div`
  // .fc-button.fc-prev-button,
  // .fc-button.fc-next-button,
  // .fc-button.fc-button-primary {
  //   cursor: pointer;
  //   background-color: black;
  // }
  // .fc-border-color: black;
  // .fc-daygrid-event-dot-width: 5px;
  // .fc-daygrid-event {
  //   white-space: normal !important;
  //   align-items: normal !important;
  // }

  // .fc-daygrid-event {
  //   display: block !important;
  //   padding-left: 15px !important;
  // }
  // .fc-daygrid-event-dot {
  //   display: inline-flex;
  //   position: absolute;
  //   left: 0px;
  //   top: 6px;
  // }
  // .fc-event-time,
  // .fc-event-title {
  //   display: inline;
  // }

  // .fc-daygrid-day {
  //   overflow: hidden;
  // }

  a {
    cursor: default;
    color: black;
  }
  h2 {
    cursor: default;
  }
  --fc-today-bg-color: lightblue;
`;

const Calendar = ({ hook }) => {
  const [modalopen, setModalopen] = useState(false);
  const [startdate, setStartdate] = useState(null);
  const [enddate, setEnddate] = useState(null);
  const [title, setTitle] = useState("");
  const [evets, setEvets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventtype, setEventtype] = useState("College");
  useLayoutEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios
      .get(URL + "/events/all")
      .then((res) => {
        setEvets(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const add = () => {
    console.log("adding");
    axios
      .post(URL + "/events/add", {
        start: startdate,
        end: enddate,
        title: title,
        type: eventtype,
      })
      .then((res) => {
        console.log("data");
        setLoading(true);
        fetchdata();
        setTitle("");
      })
      .catch((err) => {
        console.log(err);
      });
    setModalopen(false);
  };
  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  const edit = (data) => {
    if (dateDiffInDays(new Date(), new Date(data.start)) >= 0) {
      console.log(data.oldEvent.extendedProps, "data", data.event);
      axios
        .post(URL + "/events/edit", {
          id: data.oldEvent.extendedProps._id,
          start: data.event.start,
          end: data.event.end,
        })
        .then((res) => {
          console.log("done");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Can't Edit Previos Events");
    }
  };

  const selectevent = (data) => {
    if (data.event.extendedProps._id != undefined) {
      // setLoading(true);
      console.log(data.event, "event click");
      hook({
        id: data.event.extendedProps._id,
        title: data.event.title,
        start: data.event.start,
        end: data.event.end,
      });
    } else {
    }
  };
  return (
    <StyleWrapper>
      {loading && evets.length > 0 ? (
        <BallTriangle
          height={100}
          width={"100%"}
          radius={5}
          color="#000"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      ) : (
        <>
          <FullCalendar
            dayHeaderClassNames={["deafult"]}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              googleCalendarPlugin,
            ]}
            initialView={"dayGridMonth"}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
            }}
            googleCalendarApiKey={"AIzaSyCRZxEeCX1mBWshynkIIeYgo8JwBIgln2s"}
            selectable={true}
            height={"70vh"}
            eventSources={[
              {
                googleCalendarId:
                  "en.indian#holiday@group.v.calendar.google.com",
                color: "grey",
                resourceEditable: false,
                durationEditable: false,
                textColor: "white",
                startEditable: false,
                onClick: () => {},
              },
              // {
              //   url: URL + "/events/all",
              //   durationEditable: true,
              //   resourceEditable: true,
              //   startEditable: true,
              // },
            ]}
            resourceEditable={true}
            // initialEvents={evets}
            eventSourceFailure={() => console.log("falis")}
            eventSourceSuccess={(params) => setLoading(false)}
            events={evets}
            // initialEvents={evets}
            // events={[
            //   {
            //     start: new Date(),
            //     end: new Date(new Date().getDay() + 1),
            //     title: "hii",
            //   },
            // ]}
            select={(params) => {
              let today = new Date(params.end);
              let yesterday = new Date(today);
              yesterday.setDate(today.getDate() - 1);
              setStartdate(params.start);
              setEnddate(yesterday);
              console.log(startdate, enddate, "dates");
              setModalopen(true);
            }}
            eventChange={edit}
            editable={true}
            eventDurationEditable={true}
            eventMouseEnter={(eve) => console.log(eve, "Eve")}
            eventClick={selectevent}
          />
          {modalopen ? (
            <div className={styles.modal}>
              <div className={styles.cont}>
                <div>
                  <p>Event details</p>
                  <input
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Event Type</label>
                  <select
                    value={eventtype}
                    onChange={(event) => {
                      setEventtype(event.target.value);
                    }}
                  >
                    <option value={"College"}>College event</option>
                    <option value={"Company"}>Company Event</option>
                  </select>
                </div>
                <div>
                  <p>
                    From:{" "}
                    {new Date(startdate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p>
                    End:{" "}
                    {new Date(enddate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <button onClick={() => add()}>Confirm</button>
                  <button onClick={() => setModalopen(false)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </StyleWrapper>
  );
};

const renderEventContent = (eventInfo) => {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
};
export default Calendar;
