import React, { useEffect, useState } from "react";
import Image from "next/image";
import Select from "react-select";
import styles from "../../styles/Students.module.scss";
import TableScrollbar from "react-table-scrollbar";
import { DataGrid } from "@mui/x-data-grid";
import { Icon } from "@iconify/react";

import EditModal from "../../Components/Modal";
import { Button, Modal } from "antd";



import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";
import { URL } from "../../creds.js";
import { useSelector } from "react-redux";
const columns = [
  {
    field: "prnumber",
    headerName: "Roll No.",
    width: 80,
  },
  { field: "name", headerName: "Name", width: 150, headerClassName: "column" },
  { field: "branch", headerName: "Department", width: 180 },
  {
    field: "package",
    headerName: "Package",
    width: 120,
    renderCell: (param) => {
      if (param.row.placedDoc) return <>{param.row.placedDoc.package}</>;
      else return <>-</>;
    },
  },
  {
    // field: "company",
    headerName: "Company",
    width: 150,
    renderCell: ({ params }) => <>hi</>,
  },
  { field: "cgpa", headerName: "CGPA", width: 80 },
  { field: "email", headerName: "Email", width: 220 },
];
console.log(URL, "url");
const dropdownoptions = [
  { value: "MECH", label: "Mechanical" },
  { value: "CIVIL", label: "Civil" },
  { value: "ENE", label: "Electronics and Electrical" },
  { value: "ETC", label: "Electronics and Telecommunication" },
  { value: "IT", label: "Informartion Technology" },
  { value: "COMP", label: "Computers" },
];

const Students = () => {

  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [dept, setDept] = useState(dropdownoptions[0].value);

  useEffect(() => {
    getStudents();
  }, [dept]);

  const getStudents = () => {
    console.log("getting", dept);

    axios
      .get("http://localhost:3001/student/dept", { params: { dept: dept } })
      .then((res) => {
        console.log(res, "data");
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  const user = useSelector((state) => state.user.value);
  if (user == null) return <></>;
  return (
    <div className={styles.main}>
      <div className={styles.main1}>
        <div className={styles.container2}>
          <h1 className={styles.h1LnC}>ALL STUDENTS</h1>
          <div>
            <Dropdown
              options={dropdownoptions}
              onChange={(value) => {
                console.log(value, "value");
                setDept(value.value);
              }}
              value={dept}
              placeholder="Select an option"
            />
          </div>
        </div>
        <div className={styles.container3}>
          <DataGrid
            rows={students}
            columns={columns}
            getRowId={(params) => {
              return params._id;
            }}
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
            }}
            hideFooter
            isColumnSelectable={(params) => {
              console.log(params, "params afer selected columns");
              setSelected(params.column);
            }}
            isRowSelectable={(params) => {
              console.log(params, "params afer selected row");
              setSelected(params.row);
            }}
            pageSizeOptions={[10, 20, 30]}
          />
        </div>
        <div className={styles.addBoxCon}>
          <div className={styles.addButtonBox}>
            <button name="add" onClick="" className={styles.addButton}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className={styles.main2}>
        <h1 className={styles.h1LnC}>STUDENT</h1>
        {selected != undefined ? (
          <>
            <div className={styles.dp}>
              <Image
                alt=""
                src={"/dp.jpg"}
                width={150}
                height={150}
                className={styles.img}
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>

            <h1 className={styles.h1}>{selected.name}</h1>
            <p className={styles.p}>{selected.email}</p>
            <div className={styles.card}>
              <p className={styles.p1}>Company :</p>
              <p className={styles.p2}>{selected.company}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.p1}>Department :</p>
              <p className={styles.p2}>{selected.branch}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.p1}>CGPA :</p>
              <p className={styles.p2}>{selected.cgpa}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.p1}>Package :</p>
              <p className={styles.p2}>
                {selected.placedDoc !== undefined ? (
                  <>{selected.placedDoc.package}</>
                ) : (
                  <>-</>
                )}
              </p>

            </div>
          </div>
        </div>
        <div className={styles.main2}>
          <h1 className={styles.h1LnC}>STUDENT</h1>
          {selected != undefined ? (
            <>
              <div className={styles.dp}>
                <Image
                  alt=""
                  src={"/dp.jpg"}
                  width={150}
                  height={150}
                  className={styles.img}
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </div>
              <h1 className={styles.h1}>{selected.name}</h1>
              <p className={styles.p}>{selected.email}</p>
              <div className={styles.card}>
                <p className={styles.p1}>Company :</p>
                <p className={styles.p2}>{selected.company}</p>
              </div>

            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Students;
