import React, { useCallback, useEffect, useState } from 'react'
import { mockEmp } from '../data/mock/emp'
type Props = {}

const Question13 = (props: Props) => {


  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>13. แสดง ข้อมูล Shipment เฉพาะที,อยู่ในความดูแลของ Sales name “ขจร” แต่ไม่รวม shipper ที,อยู่ประเทศ
        ไทย
      </div>
      <div style={{ margin: "10px" }}>

        <ul>
          <li>      SELECT Shipments.Job_no, CUSTOMER.Customer_name, Sales.Sales_name
          </li>
          <li>FROM Shipments
          </li>
          <li>JOIN CUSTOMER ON CUSTOMER.Customer_id = Shipments.Consignee
          </li>
          <li>JOIN Sales ON Sales.Sales_id = CUSTOMER.Sales_id
          </li>
          <li>{`WHERE Sales.Sales_name = 'ขจร' AND CUSTOMER.Country_code <> 'TH';
`}</li>
        </ul>
      </div>
    </div>
  )
}

export default Question13