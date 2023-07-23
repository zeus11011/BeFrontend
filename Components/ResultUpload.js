import React, { useState } from "react";
import { Uploader } from "rsuite";
import styles from "../styles/ResultUpload.module.scss";
function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const ResultUpload = () => {
  const [fileInfo, setFileInfo] = React.useState(null);
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Upload Result here</h1>
      </div>
      <div className={styles.uploadbox}>
        <Uploader
          action="//jsonplaceholder.typicode.com/posts/"
          draggable
          onUpload={(file) => {
            setUploading(true);
            previewFile(file.blobFile, (value) => {
              console.log(value, "from file");
              setFileInfo(value);
            });
          }}
          autoUpload={false}
          multiple={false}
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
