import React, { useEffect, useState } from "react";
import styles from "../../styles/Analytics.module.scss";
import { Icon } from "@iconify/react";
import TableScrollbar from "react-table-scrollbar";
import { useRouter } from "next/router";
import { Bar, Doughnut } from "react-chartjs-2";
import { DataGrid } from "@mui/x-data-grid";

import { InfinitySpin } from "react-loader-spinner";

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
import axios from "axios";
import { useSelector } from "react-redux";
const { URL } = require("../../creds");
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

const Analytics = () => {
  const [students, setStudents] = useState([]);
  const router = useRouter();
  const [placeddata, setPlaceddata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [header, setHeader] = useState(null);
  useEffect(() => {
    axios
      .get(URL + "/placed", { params: { year: new Date() } })
      .then((res) => {
        console.log(res.data.doc, "docs data");
        setPlaceddata(res.data.doc);
        var t = [];
        setHeader(res.data.students);
        Object.values(res.data.doc).map((ele) => {
          t = t.concat(ele);
        });

        setStudents(
          t.map((ele) => {
            return {
              id: ele._id,
              company: ele.offerid.nameCompany,
              name: ele.studentid.name,
              roll: "101",
              department: ele.studentid.branch,
              package: ele.package,
              email: ele.studentid.email,
            };
          })
        );
        // console.log(res.data, "header");
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const user = useSelector((state) => state.user.value);
  if (user == null) return <></>;
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
          <p className={styles.p}>
            {loading ? (
              <InfinitySpin width="200" color="#4fa94d" />
            ) : (
              <>{header.studentdoc[0]?.count + header.studentdoc[1]?.count}</>
            )}
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="mdi:handshake"
                width={"4rem"}
                // onClick={() => {
                //   router.push("Placed");
                // }}
              />
            </div>
          </div>
          <p className={styles.head}>Students Placed</p>
          <p className={styles.p}>
            {loading ? (
              <InfinitySpin width="200" color="#4fa94d" />
            ) : (
              <>
                {header.studentdoc[0]?.count}/
                {header.studentdoc[0]?.count + header.studentdoc[1]?.count}
              </>
            )}
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="ri:building-2-line"
                width={"4rem"}
                // onClick={() => {
                //   router.push("Archive");
                // }}
              />
            </div>
          </div>
          <p className={styles.head}>Company Arrived</p>
          <p className={styles.p}>
            {loading ? (
              <InfinitySpin width="200" color="white" />
            ) : (
              <>{header.docs.length}</>
            )}
          </p>
        </div>
      </div>
      <div className={styles.barchartsection}>
        <p>DEPARTMENT VIEW</p>
        <div className={styles.barchartcont}>
          <Bar
            options={options}
            data={{
              labels: Object.keys(placeddata),
              datasets: [
                {
                  label: "Students Placed",
                  data: Object.values(placeddata).map((ele) => {
                    return ele.length;
                  }),
                  backgroundColor: [
                    "#806BFF",
                    "#23B9F9",
                    "#2200F4",
                    "#47FFDE",
                    "#002966",
                  ],
                },
              ],
            }}
          />
        </div>
      </div>

      <div className={styles.bottomsec}>
        <div className={styles.listCon}>
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
              // isColumnSelectable={(params) => {
              //   setSelected(params.column);
              // }}
              // isRowSelectable={(params) => {
              //   setSelected(params.row);
              // }}
              pageSizeOptions={[10, 20, 30]}

              // se
            />
          </div>
        </div>

        <div className={styles.doughnut}>
          {/* <p>Analysis</p> */}
          <Doughnut
            data={{
              labels: Object.keys(placeddata),
              datasets: [
                {
                  label: "Students Placed",
                  data: Object.values(placeddata).map((ele) => {
                    return ele.length;
                  }),
                  backgroundColor: [
                    "#806BFF",
                    "#23B9F9",
                    "#2200F4",
                    "#47FFDE",
                    "#002966",
                  ],
                },
              ],
            }}
            className={styles.cir}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
