import React, { useCallback, useEffect, useState } from 'react'
import { mockEmp } from '../data/mock/emp'
type Props = {}

const Question6 = (props: Props) => {


  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>6. What’re the differences between a Class Component and a Functional Component? </div>
      <div style={{ margin: "10px" }}>
      <p>
      คลาสคอมโพเนนต์เป็นคอมโพเนนต์ใน React ที่ถูกสร้างจากคลาส โดยมีการสืบทอดคุณสมบัติและเมธอดจากคลาส Component ของ React ซึ่งทำให้มีการใช้งาน state และ lifecycle methods ได้อย่างเต็มรูปแบบ
      </p>
      <p>
      ฟังก์ชันคอมโพเนนต์เป็นคอมโพเนนต์ใน React ที่ถูกสร้างจากฟังก์ชัน โดยใช้ Hook ต่าง ๆ เช่น useState, useEffect เป็นต้น เมื่อต้องการใช้งาน state หรือ lifecycle methods ในฟังก์ชันคอมโพเนนต์จะใช้ Hook เพื่อใช้งานได้เช่นกัน
      </p>
      <p>
      ความแตกต่างระหว่างคลาสคอมโพเนนต์และฟังก์ชันคอมโพเนนต์คือการเขียนและการใช้งาน โดยในคลาสคอมโพเนนต์จะต้องสร้าง class และสืบทอด Component ของ React มาใช้งาน ในขณะที่ฟังก์ชันคอมโพเนนต์จะเขียนเป็นฟังก์ชันโดยตรง โดยใช้ Hook เพื่อใช้งาน state และ lifecycle methods ได้
      </p>
      <p>
      อีกความแตกต่างหนึ่งคือการใช้งาน this โดยในคลาสคอมโพเนนต์จะต้องใช้ this เพื่อเข้าถึง state หรือเมธอด ในขณะที่ในฟังก์ชันคอมโพเนนต์จะไม่ต้องใช้ this แต่จะใช้การ return ค่าออกมาเป็น element ของ JSX  ได้เลย
      </p>
      </div>
    </div>
  )
}

export default Question6