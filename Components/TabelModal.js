import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL } from "../creds";
import styles from "../styles/Tablemodal.module.scss";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
var offerId = null;

const TabelModal = ({ data }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(data[0]);
  const [refresh, setRefresh] = useState(false);
  const handelremove = (studentid) => {
    axios
      .delete(URL + "/offerdetails/admin/removestudent", {
        params: { studentid, offerid: offerId },
      })
      .then((res) => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        toast.error("Error removing student!!", { position: "bottom-right" });
      });
  };

  const handeladd = (studentid) => {
    axios
      .put(URL + "/offerdetails/admin/removestudent", {
        offerid: offerId,
        studentid,
      })
      .then((res) => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        toast.error("Error removing student!!", { position: "bottom-right" });
      });
  };

  const columns = [
    {
      field: "rollno",
      headerName: "Roll No.",
      width: 180,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "column",
    },

    { field: "branch", headerName: "Department", width: 180 },

    {
      field: "rounds",
      headerName: "Current Round",
      width: 150,
    },

    {
      headerName: "Status",
      width: 180,
      field: "completed",
      renderCell: (params) => {
        console.log(params.row, "params");
        return (
          <div className={styles.headerCells}>
            {params.value ? (
              <>
                <p>Selected</p>
              </>
            ) : params.row.rejected ? (
              <>Rejected</>
            ) : params.row.removed ? (
              <>Removed</>
            ) : (
              <>Pending</>
            )}
          </div>
        );
      },
    },
    {
      field: "cgpa",
      headerName: "CGPA",
      width: 80,
      renderCell: (params) => {
        return <> {parseFloat(params.value).toFixed(2)}</>;
      },
    },
    { field: "email", headerName: "Email", width: 350 },

    {
      headerName: "Remove",
      width: 300,
      renderCell: (params) => {
        return (
          <div className={styles.buttonlay}>
            {!params.row.removed ? (
              <button
                onClick={() => {
                  handelremove(params.row._id);
                }}
              >
                <Icon icon="mdi:remove-bold" /> Remove
              </button>
            ) : (
              <button
                onClick={() => {
                  handeladd(params.row._id);
                }}
              >
                <Icon icon="gridicons:add-outline" /> Add
              </button>
            )}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    console.log(data[0], "Data");
    setLoading(true);
    offerId = data[0]._id;
    // setRows(data[0]);
    axios
      .get(URL + "/offerdetails/admin/companystudents", {
        params: {
          id: data[0]._id,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRows(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  return (
    <div className={styles.main}>
      <div className={styles.details}>
        <h2 className={styles.nameCompany}>
          {details.nameCompany} Placement Drive
        </h2>
        <div className={styles.dateCtcBox}>
          <div>
            <div className={styles.branches}>
              {" "}
              <h3>Branches :</h3>
              <div className={styles.grid}>
                {details?.branch.map((ele, index) => {
                  return <h2 key={index}>{ele}</h2>;
                })}
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <h3>Dates :</h3>
            <p>{new Date(details.dates[0]?.start).toLocaleDateString()}</p>
            <p>TO</p>
            <p>{new Date(details.dates[0]?.end).toLocaleDateString()}</p>
          </div>
        </div>

        <div className={styles.grid}>
          <h3>CTC :</h3>
          {details?.ctc.map((ele, index) => {
            return <p key={index}>{ele} LPA</p>;
          })}
        </div>
        <div className={styles.roles}>
          {" "}
          <h3>Roles :</h3>
          <div className={styles.grid}>
            {details?.roles.map((ele, index) => {
              return <p key={index}>{ele}</p>;
            })}
          </div>
        </div>

        <div className={styles.description}>
          {" "}
          <h3>Job Description :</h3>
          <p>{details.jobdescription}</p>
        </div>
      </div>
      {loading ? (
        <>
          <div className={styles.loading}>
            <p>Loading list...</p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.listHeader}>
            <h2>Students Applying For {details.nameCompany}</h2>
          </div>
          <div className={styles.list}>
            {" "}
            <DataGrid
              // sx={{ fontSize: "1.5rem", fontWeight: "700" }}
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
              columns={columns}
              rows={rows}
              getRowId={(ele) => ele._id}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TabelModal;
