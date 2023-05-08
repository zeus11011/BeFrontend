import axios from "axios";
import React, { useState } from "react";

import { URL } from "../../creds";

const index = () => {
  const [file, setFile] = useState(null);

  const upload = () => {
    axios
      .postForm(URL + "/auth/admin/upload", {
        img: file,
        data: "asasas",
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
        type={"file"}
        // value={file?.name}
        onChange={(event) => {
          setFile(event.target.files[0]);
        }}
      />
      <button onClick={upload}>Upload</button>
    </div>
  );
};

export default index;
