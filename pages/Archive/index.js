import React, { useState, Component } from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/Archive.module.scss";
import { Icon } from "@iconify/react";
import TableScrollbar from "react-table-scrollbar";
import { Bar, Doughnut } from "react-chartjs-2";
import Select from "react-select";
import { DataGrid } from "@mui/x-data-grid";
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
const columns = [
  { field: "name", headerName: "Name", width: 200, headerClassName: "column" },
  { field: "company", headerName: "Company", width: 160 },
  { field: "department", headerName: "Department", width: 200 },
  { field: "package", headerName: "Package", width: 140 },
];
const datagridSX = {
  "& .MuiDataGrid-columnHeaders": {
    fontSize: 16,
  },
};

const Chart = dynamic(() => import("../../Components/Chart/Chart"));
const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Overview",
      font: { size: 30 },
    },
  },
};

const labels = ["COMP", "IT", "MECH", "CIVIL", "ENE", "ETC"];

const data = [
  {
    id: 1,
    cgpa: "8.5",
    company: "TCS",
    name: "John Doe",
    roll: "101",
    department: "CS",
    package: "6 LPA",
    email: "johndoe@email.com",
  },
  {
    id: 2,
    cgpa: "8.5",
    company: "TCS",
    name: "Jane Doe",
    roll: "102",
    department: "MEC",
    package: "5 LPA",
    email: "janedoe@email.com",
  },

  {
    id: 3,
    cgpa: "8.5",
    company: "TCS",
    name: "Jim Smith",
    roll: "103",
    department: "EE",
    package: "7 LPA",
    email: "jimsmith@email.com",
  },
  {
    id: 4,
    cgpa: "8.5",
    company: "TCS",
    name: "Sarah Johnson",
    roll: "104",
    department: "Civil",
    package: "6.5 LPA",
    email: "sarahjohnson@email.com",
  },
  {
    id: 5,
    cgpa: "8.5",
    company: "TCS",
    name: "Bob Wilson",
    roll: "105",
    department: "CS",
    package: "5.5 LPA",
    email: "bobwilson@email.com",
  },
  {
    id: 6,
    cgpa: "8.5",
    company: "TCS",
    name: "Emily Davis",
    roll: "106",
    department: "MEC",
    package: "6 LPA",
    email: "emilydavis@email.com",
  },
  {
    id: 7,
    cgpa: "8.5",
    company: "TCS",
    name: "Michael Brown",
    roll: "107",
    department: "EE",
    package: "7.5 LPA",
    email: "michaelbrown@email.com",
  },
  {
    id: 8,
    cgpa: "8.5",
    company: "TCS",
    name: "John Doe",
    roll: "101",
    department: "CS",
    package: "6 LPA",
    email: "johndoe@email.com",
  },

  {
    id: 9,
    cgpa: "8.5",
    company: "TCS",
    name: "Jane Doe",
    roll: "102",
    department: "MEC",
    package: "5 LPA",
    email: "janedoe@email.com",
  },

  {
    id: 10,
    cgpa: "8.5",
    company: "TCS",
    name: "Jim Smith",
    roll: "103",
    department: "EE",
    package: "7 LPA",
    email: "jimsmith@email.com",
  },
  {
    id: 11,
    cgpa: "8.5",
    company: "TCS",
    name: "Sarah Johnson",
    roll: "104",
    department: "Civil",
    package: "6.5 LPA",
    email: "sarahjohnson@email.com",
  },
  {
    id: 12,
    cgpa: "8.5",
    company: "TCS",
    name: "Bob Wilson",
    roll: "105",
    department: "CS",
    package: "5.5 LPA",
    email: "bobwilson@email.com",
  },
  {
    id: 13,
    cgpa: "8.5",
    company: "TCS",
    name: "Emily Davis",
    roll: "106",
    department: "IT",
    package: "6 LPA",
    email: "emilydavis@email.com",
  },
  {
    id: 14,
    cgpa: "8.5",
    company: "TCS",
    name: "Michael Brown",
    roll: "107",
    department: "IT",
    package: "7.5 LPA",
    email: "michaelbrown@email.com",
  },
  {
    id: 15,
    cgpa: "8.5",
    company: "TCS",
    name: "Jennifer Clark",
    roll: "108",
    department: "Civil",
    package: "6 LPA",
    email: "jenniferclark@email.com",
  },
  {
    id: 16,
    cgpa: "8.5",
    company: "TCS",
    name: "William Jones",
    roll: "109",
    department: "CS",
    package: "5.5 LPA",
    email: "williamjones@email.com",
  },
  {
    id: 17,
    cgpa: "8.5",
    company: "TCS",
    name: "Amanda Smith",
    roll: "110",
    department: "MEC",
    package: "6.5 LPA",
    email: "amandasmith@email.com",
  },
  {
    id: 18,
    cgpa: "8.5",
    company: "TCS",
    name: "David Johnson",
    roll: "111",
    department: "EE",
    package: "7 LPA",
    email: "davidjohnson@email.com",
  },
  {
    id: 19,
    cgpa: "8.5",
    company: "TCS",
    name: "James Davis",
    roll: "112",
    department: "Civil",
    package: "6 LPA",
    email: "jamesdavis@email.com",
  },
  {
    id: 20,
    cgpa: "8.5",
    company: "TCS",
    name: "Daniel Wilson",
    roll: "113",
    department: "CS",
    package: "5.5 LPA",
    email: "danielwilson@email.com",
  },
  {
    id: 21,
    cgpa: "8.5",
    company: "TCS",
    name: "Emily Jones",
    roll: "114",
    department: "MEC",
    package: "6.5 LPA",
    email: "emilyjones@email.com",
  },
  {
    id: 22,
    cgpa: "8.5",
    company: "TCS",
    name: "Michael Smith",
    roll: "115",
    department: "EE",
    package: "7 LPA",
    email: "michaelsmith@email.com",
  },
  {
    id: 23,
    cgpa: "8.5",
    company: "TCS",
    name: "Jennifer Davis",
    roll: "116",
    department: "Civil",
    package: "6 LPA",
    email: "jenniferdavis@email.com",
  },
  {
    id: 24,
    cgpa: "8.5",
    company: "TCS",
    name: "William Clark",
    roll: "117",
    department: "CS",
    package: "5.5 LPA",
    email: "williamclark@email.com",
  },

  {
    id: 25,
    cgpa: "8.5",
    company: "TCS",
    name: "John Doe",
    roll: "101",
    department: "CS",
    package: "6 LPA",
    email: "johndoe@email.com",
  },
  {
    id: 26,
    cgpa: "8.5",
    company: "TCS",
    name: "Jane Doe",
    roll: "102",
    department: "MEC",
    package: "5 LPA",
    email: "janedoe@email.com",
  },
  {
    id: 27,
    cgpa: "8.5",
    company: "TCS",
    name: "Jim Smith",
    roll: "103",
    department: "EE",
    package: "7 LPA",
    email: "jimsmith@email.com",
  },
  {
    id: 28,
    cgpa: "8.5",
    company: "TCS",
    name: "Sarah Johnson",
    roll: "104",
    department: "Civil",
    package: "6.5 LPA",
    email: "sarahjohnson@email.com",
  },
  // Add more dummy student data as needed
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
  { value: "Year", label: "Year" },
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
            <Chart />
          </div>
          <div className={styles.overCon}>
            <Doughnut
              data={data2}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                  },
                  title: {
                    display: true,
                    text: "Student Placed",
                    font: { size: 30 },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className={styles.con2}>
          <div className={styles.listMainCon}>
            <div className={styles.listCon}>
              <div className={styles.dpCon}>
                <Select
                  className={styles.dropdown}
                  placeholder={"2023"}
                  options={optionsB}
                ></Select>
              </div>
              <div className={styles.list}>
                <DataGrid
                  rows={students}
                  columns={columns}
                  sx={{
                    ".MuiDataGrid-columnHeaderTitle": {
                      fontWeight: "900 !important",
                      overflow: "visible !important",
                      fontSize: "1.35rem !important",
                    },
                    ".MuiDataGrid-columnHeaderTitleContainer": {
                      display: "flex",
                      justifyContent: "center",
                    },
                    ".MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                      { display: "flex", justifyContent: "center" },
                    fontSize: 15,
                    fontWeight: 500,
                    width: 700,
                  }}
                  hideFooter
                  isColumnSelectable={(params) => {
                    setSelected(params.column);
                  }}
                  isRowSelectable={(params) => {
                    setSelected(params.row);
                  }}
                  pageSizeOptions={[10, 20, 30]}

                  // se
                />
              </div>
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
