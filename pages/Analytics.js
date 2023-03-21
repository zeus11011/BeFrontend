import React, { useEffect, useState } from "react";
import styles from "../styles/Analytics.module.scss";
import { Icon } from "@iconify/react";
import TableScrollbar from "react-table-scrollbar";
import { useRouter } from "next/router";
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
      // position: "top",
      // labels: {
      //   font: {
      //     size: "13rem",
      //   },
      // },
      display: false,
    },
    title: {
      display: true,
      // text: "DEPARTMENT VIEW",
    },
  },
};

const labels = ["COMP", "IT", "MECH", "CIVIL", "ENE", "ETC"];
const data = {
  labels: labels,
  datasets: [
    {
      // label: "Students Placed",
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
const Sdata = [
  {
    company: "TCS",
    name: "John Doe",
    department: "Computer Science",
  },
  {
    company: "TCS",
    name: "Jane Doe",
    department: "Mechanical Engineering",
  },
  {
    company: "TCS",
    name: "Jim Smith",
    department: "Electronics Engineering",
  },
  {
    company: "TCS",
    name: "Sarah Johnson",
    department: "Civil Engineering",
  },
  {
    company: "TCS",
    name: "Bob Wilson",
    department: "Computer Science",
  },
  {
    company: "TCS",
    name: "Emily Davis",
    department: "Mechanical Engineering",
  },
  {
    company: "TCS",
    name: "Michael Brown",
    department: "Electronics Engineering",
  },
  {
    company: "TCS",
    name: "John Doe",
    department: "Computer Science",
  },
  {
    company: "TCS",
    name: "Bob Wilson",
    department: "Computer Science",
  },
  {
    company: "TCS",
    name: "Emily Davis",
    department: "Mechanical Engineering",
  },
  {
    company: "TCS",
    name: "Michael Brown",
    department: "Electronics Engineering",
  },
  {
    company: "TCS",
    name: "John Doe",
    department: "Computer Science",
  },
];
const Analytics = () => {
  const [students, setStudents] = useState(Sdata);
  const [currentpage, setCurrentpage] = useState("/Analytics");
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname, "name");
    setCurrentpage(router.pathname);
  }, [router]);
  return (
    <div className={styles.main}>
      <div className={styles.descboxes}>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="mdi:account-school-outline"
                width={"4rem"}
                onClick={() => {
                  router.push("Analytics");
                }}
              />
            </div>
          </div>
          <p className={styles.head}>Total Students</p>
          <p className={styles.p}>1600</p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="mdi:handshake"
                width={"4rem"}
                onClick={() => {
                  router.push("Placed");
                }}
              />
            </div>
          </div>
          <p className={styles.head}>Students Placed</p>
          <p className={styles.p}>160/1600</p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="mdi:company"
                width={"4rem"}
                onClick={() => {
                  router.push("Archive");
                }}
              />
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
        <div className={styles.listCon}>
          <div className={styles.list}>
            <TableScrollbar>
              <table className={styles.table} scro>
                <thead className={styles.thead}>
                  <tr className={styles.tr}>
                    <th className={styles.th}>Name</th>
                    <th className={styles.th}>Department</th>
                    <th className={styles.th}>Company</th>
                  </tr>
                </thead>
                <tbody className={styles.tbody}>
                  {students.map((student) => (
                    <tr key={student.roll}>
                      <td className={styles.td}>{student.name}</td>
                      <td className={styles.td}>{student.department}</td>
                      <td className={styles.td}>{student.company}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableScrollbar>
          </div>
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
