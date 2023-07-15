import React from "react";

const ConfirmationModel = ({ data, close }) => {
  return (
    <div>
      <h2>{data.nameCompany}</h2>
      <p>{data.jobdescription}</p>
      <button>Confirm Job Offer</button>
    </div>
  );
};

export default ConfirmationModel;
