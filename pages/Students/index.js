import React, { useEffect, useState } from "react";
import Image from "next/image";
import Select from "react-select";
import styles from "../../styles/Students.module.scss";
import TableScrollbar from "react-table-scrollbar";
import { DataGrid } from "@mui/x-data-grid";
import { Icon } from "@iconify/react";
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

const Students = () => {
  const [students, setStudents] = useState(data);
  const [selected, setSelected] = useState(data[0]);

  useEffect(() => {
    const d = data.map((element, index) => {
      return { ...element, id: index };
    });
    console.log(d);
    setStudents(d);
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.main1}>
        <div className={styles.container2}>
          <h1 className={styles.h1List}>ALL STUDENTS</h1>
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
        <div className={styles.addBoxCon}>
          <div className={styles.addButtonBox}>
            <button name="add" onClick="" className={styles.addButton}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className={styles.main2}>
        <h1 className={styles.h1}>STUDENT</h1>
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
              <p className={styles.p1}>Company</p>
              <p className={styles.p2}>{selected.company}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.p1}>Department</p>
              <p className={styles.p2}>{selected.department}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.p1}>CGPA</p>
              <p className={styles.p2}>{selected.cgpa}</p>
            </div>
            <div className={styles.card}>
              <p className={styles.p1}>Package</p>
              <p className={styles.p2}>{selected.package}</p>
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttonBox}>
                <button name="save" onClick="" className={styles.button}>
                  <Icon
                    style={{ color: "black", height: "30", width: "30" }}
                    icon="mdi:edit"
                    width={"4rem"}
                    onClick={""}
                  ></Icon>
                </button>
              </div>
              <div className={styles.buttonBox2}>
                <button name="save" onClick="" className={styles.button}>
                  <Icon
                    style={{ color: "black", height: "30", width: "30" }}
                    icon="mdi:message-outline"
                    width={"4rem"}
                    onClick={""}
                  ></Icon>
                </button>
              </div>
              <div className={styles.buttonBox}>
                <button name="save" onClick="" className={styles.button}>
                  <Icon
                    style={{ color: "black", height: "30", width: "30" }}
                    icon="mdi:delete"
                    width={"4rem"}
                    onClick={""}
                  ></Icon>
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Students;
