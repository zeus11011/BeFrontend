import React from "react";
import styles from "../../styles/Calendar.module.scss";
import Image from "next/image";
import Calendar from "../../Components/Calendar";
const CalendarView = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.calendar}>
          <div className={styles.main1}>
            <Calendar />
          </div>
        </div>
        <div className={styles.updates}>
          <div className={styles.main2}></div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
