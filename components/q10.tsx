import React, { useCallback, useEffect, useState } from 'react'
import { mockEmp } from '../data/mock/emp'
type Props = {}

const Question10 = (props: Props) => {


  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>10. แสดง Job no, Shipper name, Consignee name โดยเรียงลําดับตาม Shipper name
      </div>
      <div style={{ margin: "10px" }}>
        <ul>
          <li>        SELECT Job_no, Shipper.name AS Shipper_name, Consignee.name AS Consignee_name
          </li>
          <li>        FROM Shipments
          </li>
          <li>        JOIN Companies AS Shipper ON Shipments.Shipper = Shipper.id
          </li>
          <li>        JOIN Companies AS Consignee ON Shipments.Consignee = Consignee.id
          </li>
          <li>        ORDER BY Shipper.name ASC
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Question10