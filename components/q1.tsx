import React, { useCallback, useEffect, useState } from 'react'
import { mockEmp } from '../data/mock/emp'
type Props = {}

const Question1 = (props: Props) => {
  const [data, setData] = useState<any>()

  const onGetData = useCallback(async () => {
    // const response = await fetch('https://api.example.com/data');
    // const jsonData = await response.json();
    // setData(jsonData);
    setData(mockEmp)
  }, [],)


  useEffect(() => {
    onGetData()
  }, [])

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>1. Write a function to retrieve Employee information.</div>
      <div style={{ margin: "10px" }}>{JSON.stringify(data)}</div>
    </div>
  )
}

export default Question1