import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../styles/ResultUpload.module.scss";
import axios from "axios";
import { URL } from "../creds";
import { toast } from "react-toastify";
function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const ResultUpload = ({ onClose }) => {
  const [dataToSend, setDataToSend] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = JSON.parse(reader.result);
        setDataToSend(binaryStr);
      };
      reader.readAsText(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const SendData = () => {
    axios
      .post(URL + "/student/addresult", {
        results: dataToSend,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Result uploaded !!");
        onClose();
      })
      .catch((err) => {
        toast.error("Upload Result failed try Again!");
      });
  };
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Upload Result here</h1>
      </div>
      {dataToSend === null ? (
        <div className={styles.uploadbox}>
          <div
            {...getRootProps()}
            style={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div
        className={styles.buttonbox}
        onClick={() => {
          // const filereader = new FileReader().readAsText(fileInfo[0].blobFile);
          SendData();
        }}
      >
        <button>Upload</button>
      </div>
    </div>
  );
};

export default ResultUpload;
