import { mockEmp } from '@/data/mock/emp'
import React, { useCallback, useEffect, useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'
type Props = {}

const Question2 = (props: Props) => {

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
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>2. Write a function to update the name of the employee and show the result to the user.</div>
      <div style={{ margin: "10px" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Id</th>
              <th>UID</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length && data.map((item: any, key: any) => (
              <React.Fragment key={key}>
                <tr>
                  <td>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}>
                      {updateModeId == item.Id ? (
                        <input value={newNameState} placeholder={item.Firstname} onChange={(e) => setNewNameState(e.target.value)} />
                      ) : (
                        <div>{item.Firstname}</div>
                      )}
                      <AiTwotoneEdit size={10} onClick={() => {setUpdateModeId(item.Id), setNewNameState("")}} />
                    </div>
                  </td>
                  <td>{item.Lastname}</td>
                  <td>{item.Id}</td>
                  <td>{item.UID}</td>
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

export default Question2