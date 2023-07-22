import React, { useEffect, useState } from "react";
import styles from "../../styles/Analytics.module.scss";
import { Icon } from "@iconify/react";
import TableScrollbar from "react-table-scrollbar";
import { useRouter } from "next/router";
import { Bar, Doughnut } from "react-chartjs-2";
import { DataGrid } from "@mui/x-data-grid";
import { ColorRing } from "react-loader-spinner";
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
import { toast } from "react-toastify";
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
  { field: "name", headerName: "Name", width: 200, headerClassName: "column" },
  { field: "company", headerName: "Company", width: 200 },
  { field: "department", headerName: "Department", width: 180 },
  { field: "package", headerName: "Package", width: 180 },
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
  const [genderCharts, setGenderCharts] = useState({
    placed: {},
    unplaced: {},
  });
  const [categoryChart, setCategoryChart] = useState({});
  const [ctccharts, setCtccharts] = useState([]);
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

        getCategoryChart();
        getGenderChart();
        getCTCChart();
        // console.log(res.data, "header");
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getGenderChart = () => {
    axios
      .get(URL + "/charts/genderchart")
      .then((res) => {
        setGenderCharts(res.data);
        console.log(res.data, " gender charts data");
      })
      .catch((err) => {
        toast.error("Error from server!!");
      });
  };

  const getCategoryChart = () => {
    axios
      .get(URL + "/charts/categorychart")
      .then((res) => {
        setCategoryChart(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching some Date");
      });
  };

  const getCTCChart = () => {
    axios
      .get(URL + "/charts/ctccharts")
      .then((res) => {
        setCtccharts(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching some Date");
      });
  };
  const options = {
    indexAxis: "y",
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
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
                {header.studentdoc[0]?._id
                  ? header.studentdoc[0]?.count
                  : header.studentdoc[1]?.count}
                /{header.studentdoc[0]?.count + header.studentdoc[1]?.count}
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
      <div className={styles.barchartbisection}>
        <div className={styles.barchartcont}>
          <p>Package Category</p>
          {loading ? (
            <>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#806BFF",
                    "#A15BF9",
                    "#23B9F9",
                    "#2200F4",
                    "#47FFDE",
                    "#002966",
                  ]}
                />
                Loading...
              </div>
            </>
          ) : (
            <Bar
              // options={options}
              data={{
                labels: Object.keys(categoryChart),
                datasets: [
                  {
                    data: Object.values(categoryChart),
                    label: "Companies",
                    backgroundColor: "#ffe0f0",
                  },
                ],
              }}
            />
          )}
        </div>
        <div className={styles.barchartcont}>
          <p>Total Students</p>
          {loading ? (
            <>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#806BFF",
                    "#A15BF9",
                    "#23B9F9",
                    "#2200F4",
                    "#47FFDE",
                    "#002966",
                  ]}
                />
                Loading...
              </div>
            </>
          ) : (
            <Bar
              // options={options}
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    data: loading ? [] : Object.values(genderCharts.placed),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    label: "Placed",
                  },
                  {
                    data: loading ? [] : Object.values(genderCharts.unplaced),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                    label: "Not Placed",
                  },
                ],
              }}
            />
          )}
        </div>
      </div>
      <div className={styles.barchartsection}>
        <p>Company Package</p>
        {loading ? (
          <>
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[
                  "#806BFF",
                  "#A15BF9",
                  "#23B9F9",
                  "#2200F4",
                  "#47FFDE",
                  "#002966",
                ]}
              />
              Loading...
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className={styles.barchartcont}>
              <Bar
                options={options}
                data={{
                  scales: { y: "CTC Offered" },
                  labels: ctccharts.map((ele) => ele.name),
                  datasets: [
                    {
                      label: "CTC Package",
                      data: ctccharts.map((ele) => ele.ctc),
                      backgroundColor: [
                        "#806BFF",
                        "#23B9F9",
                        "#2200F4",
                        "#8B7499",
                        "#47FFDE",
                        "#002966",

                        // "#A52A2A",
                        // "#FF00FF",
                        // " #00FF00",
                        // "#FFFF00",
                        // "#FFA500",
                      ],
                    },
                  ],
                }}
              />
            </div>
          </>
        )}
      </div>

      <div className={styles.bottomsec}>
        <div className={styles.doughnutBox}>
          <p>Analysis</p>
          {loading ? (
            <>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#806BFF",
                    "#A15BF9",
                    "#23B9F9",
                    "#2200F4",
                    "#47FFDE",
                    "#002966",
                  ]}
                />
                Loading...
              </div>
            </>
          ) : (
            <>
              <div className={styles.doughnut}>
                {" "}
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
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                      legend: {
                        display: true,
                      },
                      // title: {
                      //   display: true,
                      //   text: "Department Overview",
                      //   font: { size: 30 },
                      // },
                    },
                  }}
                  className={styles.cir}
                />
              </div>
            </>
          )}
        </div>
        <div className={styles.listCon}>
          <div className={styles.listHeader}>
            <p>Placed Students</p>
          </div>
          {loading ? (
            <>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#806BFF",
                    "#A15BF9",
                    "#23B9F9",
                    "#2200F4",
                    "#47FFDE",
                    "#002966",
                  ]}
                />
                Loading...
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className={styles.list}>
                <DataGrid
                  rows={students}
                  columns={columns}
                  sx={{
                    ".MuiDataGrid-columnHeaderTitle": {
                      fontWeight: "900 !important",
                      // overflow: "visible !important",
                      fontSize: "2rem !important",
                    },
                    ".MuiDataGrid-columnHeaderTitleContainer": {
                      display: "flex",
                      justifyContent: "center",
                    },
                    ".MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                      { display: "flex", justifyContent: "center" },
                    ".MuiDataGrid-footerContainer": {
                      height: "4rem",
                      minHeight: "0",
                    },
                    fontSize: 12,
                    fontWeight: 500,
                    // width: 700,
                  }}
                  // isColumnSelectable={(params) => {
                  //   setSelected(params.column);
                  // }}
                  // isRowSelectable={(params) => {
                  //   setSelected(params.row);
                  // }}
                  pageSizeOptions={[5, 10, 15]}

                  // se
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
