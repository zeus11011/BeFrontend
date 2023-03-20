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
          <div className={styles.main2}>
            <div className={styles.profile}>
              <div className={styles.dp}>
                <Image
                  alt=""
                  src={"/Infosys_logo.svg.png"}
                  width={150}
                  height={150}
                  className={styles.img}
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <h1 className={styles.h1}>Infosys</h1>
            <p className={styles.p}>91+ 6969696969</p>
            <p className={styles.p}>infosys@gmail.com</p>
            <div className={styles.card}>
              <p className={styles.p1}>Company</p>
              <p className={styles.p2}>TCS</p>
            </div>
            <div className={styles.card}>
              <p className={styles.p1}>Date</p>
              <p className={styles.p2}>21/02/2023</p>
            </div>
            <div className={styles.card}>
              <p className={styles.p1}>Time</p>
              <p className={styles.p2}>10-11am</p>
            </div>
            <div className={styles.card}>
              <p className={styles.p1}>Venue</p>
              <p className={styles.p2}>IT Dept</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
