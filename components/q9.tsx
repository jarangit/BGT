import React, { useCallback, useEffect, useState } from 'react'
import { mockEmp } from '../data/mock/emp'
type Props = {}

const Question9 = (props: Props) => {
 

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>9. How to verify if the datatype in an object is correct?
      </div>
      <div style={{ margin: "10px" }}>
        <p>1. ใช้ typeof ตัวอย่าง console.log(typeof obj.name)</p>
        <p>2. PropTypes library คือ library ของ React ที่ใช้ในการตรวจสอบ props ว่ามีค่าในรูปแบบที่ถูกต้องหรือไม่ โดย library จะช่วยตรวจสอบว่า props ที่รับเข้ามามีชนิดข้อมูลตรงตามที่กำหนดหรือไม่</p>
        <p>3. typeScript คือ library ของ React ที่ใช้ในการตรวจสอบ props ว่ามีค่าในรูปแบบที่ถูกต้องหรือไม่ โดย library จะช่วยตรวจสอบว่า props ที่รับเข้ามามีชนิดข้อมูลตรงตามที่กำหนดหรือไม่</p>
      </div>
    </div>
  )
}

export default Question9