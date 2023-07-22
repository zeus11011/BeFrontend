import React from "react";
import { Uploader } from "rsuite";
import styles from "../styles/ResultUpload.module.scss";
const ResultUpload = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Upload Result here</h1>
      </div>
      <div className={styles.uploadbox}>
        <Uploader
          action="//jsonplaceholder.typicode.com/posts/"
          draggable
          shouldUpload={() => {
            alert("File check passed, run upload");
            return true;
          }}
        >
          <div
            style={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Click or Drag files to this area to upload</span>
          </div>
        </Uploader>
      </div>
      <div className={styles.buttonbox}>
        <button>Upload</button>
      </div>
    </div>
  );
};

export default ResultUpload;
