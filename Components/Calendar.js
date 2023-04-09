import React, { useEffect, useState } from "react";
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
import { style } from "@mui/system";
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

const Calendar = () => {
  const [modalopen, setModalopen] = useState(false);
  const [startdate, setStartdate] = useState(null);
  const [enddate, setEnddate] = useState(null);
  const [title, setTitle] = useState("");
  const [evets, setEvets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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

  const edit = (data) => {
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
  };

  const deleterecord = (data) => {
    if (data.event.extendedProps._id != undefined) {
      setLoading(true);
      console.log(data.event.extendedProps._id, "event click");
      axios
        .get(URL + "/events/delete", {
          params: { id: data.event.extendedProps._id },
        })
        .then((res) => {
          console.log(res);
          toast.success("Deleted The event !", {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: "dark",
          });
          fetchdata();
        })
        .catch((err) => {
          toast.error("Error Deleting event !", {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: "dark",
          });
          console.log(err);
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
            eventClick={deleterecord}
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
                  <p>From: {new Date(startdate).toString()}</p>
                  <p>End: {new Date(enddate).toString()}</p>
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
