import './StandarStyled.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Search(){
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

    function getFunction(){
      axios.get('http://localhost:3000/cars?search=' + encodeURIComponent(search))
      .then(res => {
        setData(res.data)
      })

    }

    useEffect(()=>{
      getFunction();
    },[]
    )

    
    function deleteFunction(id){
      axios.delete(`http://localhost:3000/cars/${id}`)
      .then(()=>{
        getFunction();
      })
    }



  return(
    
    <div className="container">
      <input className="Nome" placeholder="Search..." value={search} onChange={(e)=> setSearch(e.target.value)}></input>
      <button onClick={(e)=> getFunction()}>Search</button>
      <h1>Search</h1>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Car Name</th>
          <th>Description</th>
          
        </tr>
      </thead>
      <tbody>
        {
          data.map((car, i)=>{
              return(
                
                <tr key={i}>
                  <td>
                    {car.IDCarro}
                  </td>
                  <td>
                    {car.nomeCarro}
                  </td>
                  <td>
                    {car.descricaoCarro}
                  </td>
                  <td><button className="btn btn-danger" onClick={() => deleteFunction(car.IDCarro)}>Delete</button></td>
                  <td><Link to={"/CarUpdate/" + car.IDCarro}>Update</Link></td>
                </tr>
              )
          })

        }
        
      </tbody>
    </Table>
    </div>
  )
}

