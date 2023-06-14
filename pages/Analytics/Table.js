import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "../../styles/Company.module.scss";
import { Icon } from "@iconify/react";
import { data } from "../Placed";

const columns = [
    {
      field: "roll",
      headerName: "Roll No.",
      width: 80,
    },
    { field: "name", headerName: "Name", width: 150, headerClassName: "column" },
    { field: "department", headerName: "Department", width: 180 },
    { field: "package", headerName: "Package", width: 120 },
    { field: "company", headerName: "Company", width: 150 },
    { field: "cgpa", headerName: "CGPA", width: 80 },
    { field: "email", headerName: "Email", width: 220 },
  ];
  
const Table = () => {
    const [students, setStudents] = useState(data);
    const [selected, setSelected] = useState(data[0]);

    useEffect(() => {
        const d = data.map((element, index) => {
          return { ...element, id: index };
        });
        console.log(d);
        setStudents(d);
      }, []);
//   const { URL } = require("../../creds");
const user = useSelector((state) => state.user.value);
  if (user == null) return <></>;
  return (
<div className={styles.main1}>
        <div className={styles.container2}>
          <h1 className={styles.h1LnC}>PLACED STUDENTS</h1>
        </div>
        <div className={styles.container3}>
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
            }}
            // hideFooter
            isColumnSelectable={(params) => {
              setSelected(params.column);
            }}
            isRowSelectable={(params) => {
              setSelected(params.row);
            }}
            pageSizeOptions={[10, 20, 30]}
          />
        </div>
      </div>
  )
}
export default Table;
