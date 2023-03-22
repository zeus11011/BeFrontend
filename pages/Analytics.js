import React, { useEffect, useState } from "react";
import styles from "../styles/Analytics.module.scss";
import { Icon } from "@iconify/react";
import TableScrollbar from "react-table-scrollbar";
import { useRouter } from "next/router";
import { Bar, Doughnut } from "react-chartjs-2";
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
  { field: "name", headerName: "Name", width: 190, headerClassName: "column" },
  { field: "company", headerName: "Company", width: 150 },
  { field: "department", headerName: "Department", width: 190 },
  { field: "package", headerName: "Package", width: 170 },
];

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
            {/* <TableScrollbar>
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
            </TableScrollbar> */}
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

        <div className={styles.doughnut}>
          <p>Analysis</p>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
