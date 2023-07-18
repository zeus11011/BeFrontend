import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL } from "../creds";
import style from "../styles/Tablemodal.module.scss";
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
      width: 120,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "column",
    },
    { field: "email", headerName: "Email", width: 350 },
    { field: "branch", headerName: "Department", width: 180 },
    {
      field: "cgpa",
      headerName: "CGPA",
      width: 80,
      renderCell: (params) => {
        return <> {parseFloat(params.value).toFixed(2)}</>;
      },
    },
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
          <div className={style.headerCells}>
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
      headerName: "",
      width: 300,
      renderCell: (params) => {
        return (
          <div className={style.buttonlay}>
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
    <div className={style.main}>
      <div>
        <h2>{details.nameCompany}</h2>
        <h4>Dates:</h4>
        <div className={style.grid}>
          <p>{new Date(details.dates[0].start).toLocaleDateString()}</p>
          <p>TO </p>
          <p>{new Date(details.dates[0].end).toLocaleDateString()}</p>
        </div>
        <h4>Branches:</h4>
        <div className={style.grid}>
          {details?.branch.map((ele, index) => {
            return <p key={index}>{ele}</p>;
          })}
        </div>
        <h4>Roles:</h4>
        <div className={style.grid}>
          {details?.roles.map((ele, index) => {
            return <p key={index}>{ele}</p>;
          })}
        </div>
        <h4>CTC:</h4>
        <div className={style.grid}>
          {details?.ctc.map((ele, index) => {
            return <p key={index}>{ele} LPA</p>;
          })}
        </div>
      </div>
      {loading ? (
        <></>
      ) : (
        <DataGrid
          sx={{ fontSize: "1.5rem", fontWeight: "700" }}
          columns={columns}
          rows={rows}
          getRowId={(ele) => ele._id}
        />
      )}
    </div>
  );
};

export default TabelModal;
