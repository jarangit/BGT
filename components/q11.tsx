import React, { useCallback, useEffect, useState } from 'react'
import { mockEmp } from '../data/mock/emp'
type Props = {}

const Question11 = (props: Props) => {


  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>11. แสดง Customer name, Sales name แสดงเฉพาะลูกค ้าที,อยู่ในประเทศสหรัฐอเมริกา
      </div>
      <div style={{ margin: "10px" }}>
        <ul>
          <li>      SELECT c.Customer_name, s.Sales_name
          </li>
          <li>FROM CUSTOMER c
          </li>
          <li>JOIN Sales s ON c.Sales_id = s.Sales_id
          </li>
          <li>JOIN Shipments sh ON c.Customer_id = sh.Consignee
          </li>
          <li>{`WHERE c.Country_code = 'US';`}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Question11