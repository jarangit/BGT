import React, { useCallback, useEffect, useState } from 'react'
import { mockEmp } from '../data/mock/emp'
import CompanyInfoClass from './companyInfoClass'
import Image from 'next/image';
type Props = {}
const company = {
  name: `Brink\'s Global Technology Limited`,
  address: 'No.129 9th floor, The Mall Thapra',
  district: 'Thonburi',
  city: 'Bangkok',
  postcode: '10600',
  map: 'https://goo.gl/maps/jCXPZbcztgoTypX5A'
};
const Question7 = (props: Props) => {
  

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}> 7. Write a Class Component that will display information from the given object. </div>
      <div style={{ margin: "10px" }}>
        <CompanyInfoClass company={company}/>
      </div>
      <Image  
        src = {"/img/class.png"}
        alt=''
        width={400}
        height={400}
      />
    </div>
  )
}

export default Question7