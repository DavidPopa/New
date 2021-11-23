import React from "react";

const ReadData = ({ dataInfo, handleClick }) => {
  return (
    <tr>
      <td>{dataInfo.fullName}</td>
      <td>{dataInfo.id}</td>
      <td>{dataInfo.email}</td>
      <td>{dataInfo.phoneNumber}</td>
      <td>
        <button type="button" onClick={handleClick}>
          Mai multe detalii
        </button>
      </td>
    </tr>
  );
};

export default ReadData;
