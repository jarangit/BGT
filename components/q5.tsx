import React, { useCallback, useEffect, useState } from 'react'
import { mockEmp } from '../data/mock/emp'
type Props = {}

const Question5 = (props: Props) => {


  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>5. What’s Virtual DOM? How does it work?</div>
      <div style={{ margin: "10px" }}>
        <p>
          Virtual DOM คือโครงสร้างของ HTML, CSS และ JavaScript ที่ถูกสร้างขึ้นโดย React เพื่อจัดการกับการอัปเดตและแสดงผลบนหน้าเว็บไซต์ได้อย่างมีประสิทธิภาพ โดย Virtual DOM จะเป็นตัวกลางที่อยู่ระหว่างจัดการกับโครงสร้าง DOM จริง ๆ และการแสดงผลบนหน้าเว็บไซต์
        </p>
        <p>
          เมื่อมีการอัปเดตข้อมูล จะเกิดการสร้าง Virtual DOM ใหม่ขึ้น โดย Virtual DOM จะเปรียบเทียบและอัปเดตข้อมูลเฉพาะส่วนที่เปลี่ยนแปลง แล้วจึงแสดงผลบนหน้าเว็บไซต์ โดยการทำงานของ Virtual DOM นั้นจะช่วยเพิ่มประสิทธิภาพในการแสดงผลของหน้าเว็บไซต์ เนื่องจากไม่ต้องทำการ render หรือแสดงผลทั้งหมดใหม่ทุกครั้งที่มีการอัปเดตข้อมูล แต่จะอัปเดตและแสดงผลเฉพาะส่วนที่เปลี่ยนแปลงเท่านั้น ซึ่งทำให้การแสดงผลมีความรวดเร็วและสมบูรณ์กว่า
        </p>
        <p>
          ในกระบวนการทำงานของ Virtual DOM นั้น จะมีการสร้างต้นแบบของ DOM จำลองขึ้นมาเป็นโครงสร้างเดียวกับ DOM จริง ๆ แต่ถูกเก็บไว้ในหน่วยความจำ แล้วจึงเปรียบเทียบกับ DOM จริง ๆ เพื่อหาความแตกต่างระหว่างสองโครงสร้าง จากนั้น Virtual DOM จะอัปเดตข้อมูลเฉพาะส</p>
      </div>
    </div>
  )
}

export default Question5