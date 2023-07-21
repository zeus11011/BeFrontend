import React, { useState, Component, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/Archive.module.scss";
import { Icon } from "@iconify/react";
import TableScrollbar from "react-table-scrollbar";
import { ColorRing } from "react-loader-spinner";
import {
  Bar,
  Doughnut,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
  Line,
} from "react-chartjs-2";
import Select from "react-select";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../../Components/Loader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import axios from "axios";
import { URL } from "../../creds";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);
const columns = [
  {
    field: "studentid",
    headerName: "Name",
    width: 200,
    headerClassName: "column",
    valueGetter: (params) => {
      return params.row.studentid.name;
    },
  },
  {
    field: "company",
    headerName: "Company",
    width: 160,

    valueGetter: (params) => {
      return params.row.offerid.nameCompany;
    },
  },
  {
    field: "department",
    headerName: "Department",
    width: 200,
    valueGetter: (params) => {
      return params.row.studentid.branch;
    },
  },
  { field: "package", headerName: "Package", width: 140 },
];

// const Chart = dynamic(() => import("../../Components/Chart/Chart"));
const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    // title: {
    //   display: true,
    //   text: "Overview",
    //   font: { size: 30 },
    // },
  },
};

const optionsB = Array.from(
  { length: new Date().getFullYear() - 2018 },
  (value, index) => {
    return {
      value: new Date().getFullYear() - index,
      label: new Date().getFullYear() - index,
    };
  }
);

const optionsline = {
  // responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Students Placed",
    },
  },
};

// const data2 = {
//   labels: labels,
//   datasets: [
//     {
//       data: [40, 38, 10, 11, 8, 15],
//       backgroundColor: [
//         "#806BFF",
//         "#A15BF9",
//         "#23B9F9",
//         "#2200F4",
//         "#47FFDE",
//         "#002966",
//       ],
//     },
//   ],
// };
// const optionsB = [
//   { value: "Year", label: "Year" },
//   { value: "2020", label: "2020" },
//   { value: "2021", label: "2021" },
//   { value: "2022", label: "2022" },
//   { value: "2023", label: "2023" },
//   { value: "2024", label: "2024" },
//   { value: "2025", label: "2025" },
// ];

const Archive = () => {
  const [students, setStudents] = useState([]);
  const [selects, setSelects] = useState(2023);
  const [graph, setGraph] = useState({});
  const [loading, setLoading] = useState(true);
  const chartref = useRef();
  const [doughnutdata, setDoughnutdata] = useState([]);
  const [griddata, setGriddata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [genderCharts, setGenderCharts] = useState({
    placed: {},
    unplaced: {},
  });
  const [categoryChart, setCategoryChart] = useState({});
  const [ctccharts, setCtccharts] = useState([]);

  const getGenderChart = () => {
    axios
      .get(URL + "/charts/genderchart", { params: { year: selects } })
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
      .get(URL + "/charts/categorychart", { params: { year: selects } })
      .then((res) => {
        setCategoryChart(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching some Date");
      });
  };
  const getCTCChart = () => {
    axios
      .get(URL + "/charts/ctccharts", { params: { year: selects } })
      .then((res) => {
        setCtccharts(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching some Date");
      });
  };

  useEffect(() => {
    setLoading(true);
    var temp = new Date().setFullYear(selects);
    console.log(new Date(temp), "temp");
    axios
      .get(URL + "/placed/archive")
      .then((res) => {
        setGraph(res.data);
        setDoughnutdata(res.data.accumilate);
        fetchSelects();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetchSelects();
    getGenderChart();
    getCategoryChart();
    getCTCChart();
  }, [selects]);

  const fetchSelects = () => {
    axios
      .get(URL + "/placed", {
        params: { year: new Date(new Date().setFullYear(selects)) },
      })
      .then((res) => {
        setStudents(res.data);
        var temp = [];

        Object.keys(res.data.doc).map((ele) => {
          temp = temp.concat(res.data.doc[ele]);
        });
        console.log(temp, "Ele");
        setGriddata(temp);
        setLoading(false);
        // console.log(res.data, "fateched results of year" + selects);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onChartclick = (event) => {
    var t = getElementsAtEvent(chartref.current, event)[0];
    if (!t) {
      setDoughnutdata(graph.accumilate);
      return;
    }
    setDoughnutdata(graph.years[t.index].students);
  };

  // if (loading) return <>Loading</>;
  const user = useSelector((state) => state.user.value);
  if (user == null) return <></>;
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.con1}>
          <div className={styles.graCon}>
            {/* <Chart /> */}
            {!loading ? (
              <Line
                height={333}
                width={333}
                style={{ margin: "auto" }}
                ref={chartref}
                options={optionsline}
                data={{
                  labels: graph.years?.map((ele) => {
                    return ele.year;
                  }),
                  datasets: [
                    {
                      label: "Students placed record",
                      data: graph.years?.map((ele) => {
                        return ele.count;
                      }),
                      borderColor: "rgb(0, 0,0)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    // {
                    //   label: "Dataset 2",
                    //   data: [100, 200, 300, 5, 120, 500, 12],
                    //   borderColor: "rgb(53, 162, 235)",
                    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
                    // },
                  ],
                }}
                onClick={onChartclick}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
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
              </div>
            )}
          </div>
          <div className={styles.overCon}>
            {!loading ? (
              <Doughnut
                data={{
                  labels: Object.keys(doughnutdata),
                  datasets: [
                    {
                      data: Object.values(doughnutdata),
                      backgroundColor: [
                        "#806BFF",
                        "#002966",
                        "#2200F4",
                        "#A15BF9",
                        "#23B9F9",
                        "#47FFDE",
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
                    title: {
                      display: true,
                      text: "Student Placed",
                      font: { size: 30 },
                    },
                  },
                }}
              />
            ) : (
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
            )}
          </div>
        </div>
        <div className={styles.dpCon}>
          <h1>Current Year</h1>
          <Select
            className={styles.dropdown}
            placeholder={selects}
            options={optionsB}
            value={selects}
            onChange={(event) => {
              console.log(event, "event");
              setSelects(event.label);
              console.log(selects, "selects value");
            }}
          ></Select>
        </div>
        <div className={styles.con2}>
          <div className={styles.barchartbisection}>
            <div className={styles.barchartcont}>
              <p>Package Category</p>
              {loading ? (
                <>Loading</>
              ) : (
                <Bar
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
                <>Loading</>
              ) : (
                <Bar
                  data={{
                    labels: ["Male", "Female"],
                    datasets: [
                      {
                        data: loading ? [] : Object.values(genderCharts.placed),
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                        label: "Placed",
                      },
                      {
                        data: loading
                          ? []
                          : Object.values(genderCharts.unplaced),
                        backgroundColor: "rgba(53, 162, 235, 0.5)",
                        label: "Not Placed",
                      },
                    ],
                  }}
                />
              )}
            </div>
          </div>
          <div className={styles.barCon}>
            <p>Company Package</p>
            <div className={styles.barchartcont}>
              {!loading ? (
                <Bar
                  // title="false"
                  options={options}
                  data={{
                    labels: ctccharts.map((ele) => ele.name),
                    datasets: [
                      {
                        label: "Package offered",
                        data: ctccharts.map((ele) => ele.ctc),
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
                  }}
                />
              ) : (
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
              )}
            </div>
          </div>
          <div className={styles.listMainCon}>
            <div className={styles.listCon}>
              {/*<div className={styles.dpCon}>
                <Select
                  className={styles.dropdown}
                  placeholder={"2023"}
                  options={optionsB}
                  // onChange={filterChangeHandler}
                ></Select>
              </div>*/}
              <div className={styles.listHeader}>
                <p>Placed Students</p>
              </div>
              <div className={styles.list}>
                {!loading ? (
                  <DataGrid
                    rows={griddata}
                    columns={columns}
                    getRowId={(ele) => {
                      return ele._id;
                    }}
                    sx={{
                      ".MuiDataGrid-columnHeaderTitle": {
                        fontWeight: "900 !important",
                        overflow: "visible !important",
                        fontSize: "1.7rem !important",
                      },
                      ".MuiDataGrid-columnHeaderTitleContainer": {
                        display: "flex",
                        justifyContent: "center",
                      },
                      ".MuiDataGrid-footerContainer": {
                        height: "4rem",
                        minHeight: "0",
                      },
                      ".MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                        { display: "flex", justifyContent: "center" },
                      fontSize: 12,
                      fontWeight: 500,
                      width: "100%",
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
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
