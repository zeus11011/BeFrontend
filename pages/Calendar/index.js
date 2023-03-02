import { Eventcalendar, getJson, toast } from "@mobiscroll/react";
import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import styles from "../../styles/Calendar.module.scss";
import Image from "next/image";

const Calendar = () => {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      "https://trial.mobiscroll.com/events/?vers=5",
      (events) => {
        setEvents(events);
      },
      "jsonp"
    );
  }, []);

  const onEventClick = React.useCallback((event) => {
    toast({
      message: event.event.title,
    });
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: { labels: true, type: "month" },
    };
  }, []);
  const responsive = React.useMemo(() => {
    return {
      xsmall: {
        view: {
          calendar: {
            type: "week",
          },
          agenda: {
            type: "day",
          },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          calendar: {
            labels: true,
          },
        },
      },
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <div className={styles.main1}>
          <Eventcalendar
            theme="ios"
            themeVariant="light"
            clickToCreate={true}
            dragToCreate={false}
            dragToMove={true}
            dragToResize={false}
            eventDelete={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
          />
        </div>
      </div>
      <div className={styles.updates}>
        <div className={styles.main2}></div>
      </div>
    </div>
  );
};

export default Calendar;
