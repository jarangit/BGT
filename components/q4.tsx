import { mockEmp } from '@/data/mock/emp'
import React, { useCallback, useEffect, useState } from 'react'
type Props = {}

const Question4 = (props: Props) => {

  const [data, setData] = useState<any>()
  const [newNameState, setNewNameState] = useState("")
  const [updateModeId, setUpdateModeId] = useState("")
  const onGetData = useCallback(async () => {
    setData(mockEmp)
  }, [],)

  const onUpdateEmpName = useCallback((id: string, newName: string) => {
    console.log(id)
    const updatedItems = data.map((item: any) => {
      if (item.Id === id) {
        return { ...item, Firstname: newName };
      } else {
        return item;
      }
    });
    setData(updatedItems);
    setUpdateModeId("")
    console.log(data)
  }, [data, newNameState, updateModeId])

  useEffect(() => {
    onGetData()
  }, [])
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>4. Write CSS to change the display of a table with the requirements below
        <div>
          - Using font “Times New Roman” with a size of 11px.
        </div>
        <div>
          - Header have bold white text with a light-blue background.
        </div>
        <div>
          - Id will align to the right.
        </div>
        <div>
          - Id will have a width of 50px, others are 100px.
        </div>
        <div>
          - If the text is too long, the table will hide excess content and add dots at the end.
        </div>
      </div>
      <div style={{ margin: "10px" }}>
        <table style={{  fontSize:"11px"}}>
          <thead style={{background:"#007bff", color:"white"}}>
            <tr>
              <th style={{width:"100px"}}>Firstname</th>
              <th style={{width:"100px"}}>Lastname</th>
              <th style={{textAlign:"right" ,padding:"0 10px", width:"50px"}}>Id</th>
              <th style={{width:"100px"}}>UID</th>

            </tr>
          </thead>
          <tbody>
            {data && data.length && data.map((item: any, key: any) => (
              <React.Fragment key={key}>
                <tr>
                  <td>
                    {item.Firstname}
                  </td>
                  <td>{item.Lastname}</td>
                  <td style={{textAlign:"right" ,padding:"0 10px"}}> {item.Id}</td>
                  <td >
                    <div className='textEllipsis'>{item.UID}</div>
                  </td>

                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {updateModeId && (
          <div style={{
            width: "100%",
            textAlign: "center",
            marginTop: "10px"
          }}>
            <button onClick={() => onUpdateEmpName(updateModeId, newNameState)}>update</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Question4