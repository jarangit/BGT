import React, { useCallback, useEffect, useState } from 'react'
import { mockEmp } from '../data/mock/emp'
type Props = {}

const Question12 = (props: Props) => {


  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>12. แสดง Job no, Shipper name, Amount (Thai), Sales name โดยเรียงตาม Sales name
      </div>
      <div style={{ margin: "10px" }}>

        <ul>
          <li> {`SELECT
            s.Job_no,
            c.Customer_name as Shipper_name,
            FORMAT(s.Amount_usd * s.usd2thb_rate, 'N2') as Amount_TH,
            sa.Sales_name`}</li>
          <li>FROM Shipments
          </li>
          <li>{`INNER JOIN Customer c ON s.Shipper = c.Customer_id AND c.Country_code != 'TH'`}
          </li>
          <li>{`INNER JOIN Sales sa ON s.Sales_id = sa.Sales_id AND sa.Sales_name = 'ขจร'`}
          </li>
          <li>{`LEFT JOIN Customer co ON s.Consignee = co.Customer_id AND co.Country_code != 'TH'`}
          </li>
          <li>{`ORDER BY sa.Sales_name;`}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Question12