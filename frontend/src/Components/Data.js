import React from 'react'

import IndividualData from './IndividualData'

const Data = ({excelData}) => {
  return excelData.map((individualExcelData) =>(
    <tr key={individualExcelData.SalesID}>
        <IndividualData individualExcelData={individualExcelData}/>
    </tr>
  ))
}

export default Data
