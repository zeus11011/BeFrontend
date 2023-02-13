import React, { useState } from "react";
import styles from "../../styles/Archive.module.scss";
import { Icon } from "@iconify/react";
import TableScrollbar from "react-table-scrollbar";
import { Bar, Doughnut } from "react-chartjs-2";
import Select from "react-select";
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

const data = [
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
];
const data2 = {
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
const optionsB = [
  { value: "Year", label: "2000" },
  { value: "Year", label: "2001" },
  { value: "Year", label: "2002" },
  { value: "Year", label: "2003" },
  { value: "Year", label: "2004" },
  { value: "Year", label: "2005" },
];

const Archive = () => {
  const [students, setStudents] = useState(data);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.con1}>
          <div className={styles.graCon}>
            <p>Overview</p>
            <Doughnut data={data2} />
          </div>
          <div className={styles.overCon}>
            <p>Overview</p>
            <Doughnut data={data2} />
          </div>
        </div>
        <div className={styles.con2}>
          <div className={styles.listCon}>
            <div className={styles.dpCon}>
              <Select
                className={styles.dropdown}
                placeholder={"YEAR"}
                options={optionsB}
              ></Select>
            </div>
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
          <div className={styles.barCon}>
            <p>DEPARTMENT VIEW</p>
            <div className={styles.barchartcont}>
              <Bar options={options} data={data2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
