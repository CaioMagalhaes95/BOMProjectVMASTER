import './StandarStyled.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function StorageSearch(){
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

    function getFunction(){
      axios.get('http://localhost:3000/storage?search=' + encodeURIComponent(search))
      .then(res => {
        setData(res.data)
      })

    }

    useEffect(()=>{
      getFunction();
    },[]
    )


  return(
    
    <div className="container">
      <input className="Nome" placeholder="Search..." value={search} onChange={(e)=> setSearch(e.target.value)}></input>
      <button onClick={(e)=> getFunction()}>Search</button>
      <h1>Storage Search</h1>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Shelf</th>
          <th>Type of Material</th>
          
        </tr>
      </thead>
      <tbody>
        {
          data.map((arm, i)=>{
              return(
                
                <tr key={i}>
                  <td>
                    {arm.IDArmazem}
                  </td>
                  <td>
                    {arm.Prateleira}
                  </td>
                  <td>
                    {arm.tipodeproduto}
                  </td>
                </tr>
              )
          })

        }
        
      </tbody>
    </Table>
    </div>
  )
}