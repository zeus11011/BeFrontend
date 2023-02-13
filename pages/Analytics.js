import React from "react";
import styles from "../styles/Analytics.module.scss";
import { Icon } from "@iconify/react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        font: {
          size: "3rem",
        },
      },
    },
    title: {
      display: true,
      text: "DEPARTMENT VIEW",
    },
  },
};

const labels = ["COMP", "IT", "MECH", "CIVIL", "ENE", "ETC"];
const data = {
  labels: labels,
  datasets: [
    {
      data: [40, 38, 10, 11, 8, 15],
      backgroundColor: [
        "#806BFF",
        "#A15BF9",
        "#23B9F9",
        "#2200F4",
        "#47FFDE",
        "#002966",
      ],
    },
  ],
};

const Analytics = () => {
  return (
    <div className={styles.main}>
      <div className={styles.descboxes}>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon icon="mdi:account-school-outline" width={"4rem"} />
            </div>
          </div>
          <p className={styles.head}>Total Students</p>
          <p className={styles.p}>1600</p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon icon="mdi:handshake" width={"4rem"} />
            </div>
          </div>
          <p className={styles.head}>Students Placed</p>
          <p className={styles.p}>160/1600</p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon icon="mdi:company" width={"4rem"} />
            </div>
          </div>
          <p className={styles.head}>Company Arrived</p>
          <p className={styles.p}>1600</p>
        </div>
      </div>
      <div className={styles.barchartsection}>
        <p>DEPARTMENT VIEW</p>
        <div className={styles.barchartcont}>
          <Bar options={options} data={data} />
        </div>
      </div>

      <div className={styles.bottomsec}>
        <div className={styles.list}>
          <div></div>
        </div>
        <div className={styles.doughnut}>
          <p>Analysis</p>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
