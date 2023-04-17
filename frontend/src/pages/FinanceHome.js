import React from 'react'
import FinanceSales from '../Components/FinanceSales'
import FinanceChart from '../Components/FinanceChart'
import "./FinanceHome"

const FinanceHome = () => {
  return (
    <div className="fhome-container">
      <FinanceSales/>
      <FinanceChart/>
    </div>
  )
}

export default FinanceHome
