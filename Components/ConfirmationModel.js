import React, { useEffect, useState } from "react";
import styles from "../styles/Confirmmodal.module.scss";
import axios from "axios";
import { URL } from "../creds";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ConfirmationModel = ({ data, close }) => {
  const [details, setDetails] = useState(data);
  const user = useSelector((state) => state.user.value);
  const [edit, setEdit] = useState(false);
  const [startdate, setStartdate] = useState(new Date(data.dates[0].start));
  const [endDate, setEndDate] = useState(new Date(data.dates[0].end));

  const handelconfirm = () => {
    axios
      .get(URL + "/offerdetails/confirmoffer", {
        params: { id: details._id },
        headers: {
          Authorization: "Token " + user.token,
        },
      })
      .then((res) => {
        close(false);
      })
      .catch((err) => {
        toast.error("Error while confirming!!");
      });
  };

  const handelEdit = () => {
    // setEdit(false);
    axios
      .post(URL + "/offerdetails/admin/editoffer", {
        id: details._id,
        start: startdate,
        end: endDate,
      })
      .then((res) => {
        data.dates[0].start = startdate;
        data.dates[0].end = endDate;
        console.log("done");
        close(false);
      })
      .catch((err) => {
        console.log(err, "im error");
        toast.error("Error editing!!", { position: "bottom-right" });
      });
  };
  return (
    <div className={styles.main}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div className={styles.details}>
          <h2>{details.nameCompany}</h2>
          <h4>Dates:</h4>
          <div className={styles.grid}>
            <p>{new Date(details.dates[0]?.start).toLocaleDateString()}</p>
            <p>TO</p>
            <p>{new Date(details.dates[0]?.end).toLocaleDateString()}</p>
          </div>
          <h4>Branches:</h4>
          <div className={styles.grid}>
            {details?.branch.map((ele, index) => {
              return <p key={index}>{ele}</p>;
            })}
          </div>
          <h4>Roles:</h4>
          <div className={styles.grid}>
            {details?.roles.map((ele, index) => {
              return <p key={index}>{ele}</p>;
            })}
          </div>
          <h4>CTC:</h4>
          <div className={styles.grid}>
            {details?.ctc.map((ele, index) => {
              return <p key={index}>{ele} LPA</p>;
            })}
          </div>
          <h4>Job Description</h4>
          <p>{details.jobdescription}</p>
        </div>
        {edit ? (
          <div>
            <h4>New Dates:</h4>
            <div className={styles.grid}>
              <div style={{ marginRight: "3rem" }}>
                <p>Start Date:</p>
                <input
                  type="date"
                  value={startdate}
                  onChange={(value) => {
                    setStartdate(value.target.value);
                  }}
                />
              </div>
              <div>
                <p>End Date:</p>
                <input
                  type="date"
                  value={endDate}
                  onChange={(value) => {
                    setEndDate(value.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      {!edit ? (
        <div className={styles.footer}>
          <button
            className={styles.edit}
            onClick={() => {
              setEdit(true);
              setStartdate(new Date());
              setEndDate(new Date());
            }}
          >
            Request Edit Dates
          </button>
          <button className={styles.confirm} onClick={handelconfirm}>
            Confirm Job Offer
          </button>
        </div>
      ) : (
        <div className={styles.footer}>
          <button
            className={styles.confirm}
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancle
          </button>
          <button
            className={styles.edit}
            onClick={() => {
              handelEdit();
            }}
          >
            Confirm Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmationModel;
