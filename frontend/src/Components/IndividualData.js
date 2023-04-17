import React from "react";

const IndividualData = ({ individualExcelData }) => {
  return (
    <tr key={individualExcelData.salesId}>
      <td>{individualExcelData.salesId}</td>
      <td>{individualExcelData.invoiceId}</td>
      <td>{individualExcelData.dateAndTime}</td>
      <td>{individualExcelData.amount}</td>
      <td>{individualExcelData.branchId}</td>
    </tr>
  );
};

export default IndividualData;
