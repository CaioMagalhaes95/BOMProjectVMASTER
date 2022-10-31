import './StandarStyled.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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

    function deleteFunction(id){
      axios.delete(`http://localhost:3000/storage/${id}`)
      .then(()=>{
        getFunction();
      })
    }

    


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
          <th>Delete</th>
          
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
                  <td><button className="btn btn-danger" onClick={() => deleteFunction(arm.IDArmazem)}>Delete</button></td>
                  <td><Link to={"/storageUpdate/" + arm.IDArmazem}>Update</Link></td>
                </tr>
              )
          })

        }
        
      </tbody>
    </Table>
    </div>
  )
}