import React from 'react'
import "./FinanceSales.css"

const FinanceSales = () => {
  return (
    <div>
    <div className="sales-card-container">
      <div className="sub-sales-container">
        <p className="display-text display-text-color1">Sales(daily)</p>
        <input className="display-value" type="text"></input>
      </div>
      <div className="sub-sales-container">
        <p className="display-text display-text-color2">Sales(monthly)</p>
        <input className="display-value" type="text"></input>
      </div>
      <div className="sub-sales-container">
        <p className="display-text display-text-color3">Sales(annual)</p>
        <input className="display-value" type="text"></input>
      </div>
    </div>
    </div>
  )
}

export default FinanceSales
