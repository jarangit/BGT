import { mockEmp } from '@/data/mock/emp'
import React, { useCallback, useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

type Props = {}

const Question3 = (props: Props) => {

  const [data, setData] = useState<any>()
  const [searchText, setSearchText] = useState("")
  const [toggleSortById, setToggleSortById] = useState(true)
  const onGetData = useCallback(async () => {
    setData(mockEmp)
  }, [],)

  const onSearch = useCallback((searchText: string) => {
    const found = data.filter((item: any) => {
      return item.Firstname.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(found)
    if (found) {
      setData(found)
    }
  }, [searchText, data])

  const onSortById = useCallback(() => {
    setToggleSortById(!toggleSortById)
    if (toggleSortById) {
      const sorted = data.sort((a: any, b: any) => b.Id - a.Id)
      if (sorted) {
        setData(sorted)
      }

    } else {
      const sorted = data.sort((a: any, b: any) => a.Id - b.Id)
      if (sorted) {
        setData(sorted)
      }

    }
  }, [data, toggleSortById])

  useEffect(() => {
    onGetData()
  }, [])
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ padding: '10px', background: "#007bff", color: "white" }}>3. Write a function that will filter Employee first name with input keyword and display it as a table  with the order by Id. (Not display UID) </div>
      <div style={{ margin: "10px" }}>
        <div>
          <input type="text" placeholder='search name' onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={() => onSearch(searchText)}>search</button>
          <button onClick={() => onGetData()}>reset</button>
          <button onClick={() => onSortById()}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <div>sort by id </div>
              {toggleSortById ? (
                <IoMdArrowDropdown size={15} />

              ) : (
                <IoMdArrowDropup size={15} />
              )}
            </div>
          </button>
        </div>
        <table style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length ? data.map((item: any, key: any) => (
              <React.Fragment key={key}>
                <tr>
                  <td>
                    <div>{item.Firstname}</div>
                  </td>
                  <td>{item.Lastname}</td>
                  <td>{item.Id}</td>
                </tr>
              </React.Fragment>
            )) : (
              <tr style={{ width: "100%", textAlign: "center", color: "red" }}>
                <td>ไม่พบข้อมูล</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Question3