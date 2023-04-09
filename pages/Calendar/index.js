import React from "react";
import styles from "../../styles/Calendar.module.scss";
import Image from "next/image";
import Calendar from "../../Components/Calendar";

import { Icon } from "@iconify/react";

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
            <h1 className={styles.h1}>Placement Drive</h1>
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

            <div className={styles.card}>
              <p className={styles.p1}>Company</p>
              <p className={styles.p2}>Infosys</p>
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
            <div className={styles.buttons}>
              <div className={styles.buttonBox}>
                <button name="save" className={styles.button}>
                  <Icon
                    style={{ color: "black", height: "30", width: "30" }}
                    icon="mdi:add"
                    width={"4rem"}
                  ></Icon>
                </button>
              </div>
              <div className={styles.buttonBox2}>
                <button name="save" className={styles.button}>
                  <Icon
                    style={{ color: "black", height: "30", width: "30" }}
                    icon="mdi:edit"
                    width={"4rem"}
                  ></Icon>
                </button>
              </div>
              <div className={styles.buttonBox}>
                <button name="save" className={styles.button}>
                  <Icon
                    style={{ color: "black", height: "30", width: "30" }}
                    icon="mdi:delete"
                    width={"4rem"}
                  ></Icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
