import React, { useState } from "react";
import styles from "../../../styles/Form.module.scss";

function index() {
  const [tab, setTab] = useState(0);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.buttonbar}>
          <button
            onClick={() => {
              setTab(0);
            }}
          >
            Company Details
          </button>
          <button
            onClick={() => {
              setTab(1);
            }}
          >
            Offer Details
          </button>
          <button
            onClick={() => {
              setTab(2);
            }}
          >
            Campany Details
          </button>
        </div>
        <div className={styles.formcont}>
          <div hidden={tab !== 0}>
            <div>
              <label>Company Name</label>
              <input type={"text"} />
              <label>Company Website Link</label>
              <input type={"text"} />
              <label>Company Contact</label>
              <input type={"text"} />
            </div>
          </div>
          <div hidden={tab !== 1}>
            <div>
              <label>Job Title</label>
              <input type={"text"} />
              <label>Job Title</label>
              <textarea type={"text"} />
              <label>Mode of title</label>
              <input type={"text"} />
              <label>Location of Job</label>
              <input type={"text"} />
            </div>
          </div>
          <div hidden={tab !== 2}>
            <div>
              <label>Pakagae for Job</label>
              <input type={"text"} />
              <label>Process:</label>
              <input type={"text"} />
              <label>Skills Required</label>
              <input type={"text"} />
              <label>Qualification</label>
              <input type={"text"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

index.propTypes = {};

export default index;
