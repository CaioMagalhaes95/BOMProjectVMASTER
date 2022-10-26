import './StandarStyled.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function MaterialSearch(){
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

    function getFunction(){
      axios.get('http://localhost:3000/material?search=' + encodeURIComponent(search))
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
      <h1>Material Search</h1>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Purchase date</th>
          <th>Amount</th>
          <th>System</th>
          <th>KG weight</th>
          <th>Cost</th>
          <th>IDK</th>
          <th>Composition</th>
          
        </tr>
      </thead>
      <tbody>
        {
          data.map((mat, i)=>{
              return(
                
                <tr key={i}>
                  <td>
                    {mat.IDMaterial}
                  </td>
                  <td>
                    {mat.descricao}
                  </td>
                  <td>
                    {mat.datac}
                  </td>
                  <td>
                    {mat.quantidade}
                  </td>
                  <td>
                    {mat.sistema}
                  </td>
                  <td>
                    {mat.sistema}
                  </td>
                  <td>
                    {mat.massa}
                  </td>
                  <td>
                    {mat.custo}
                  </td>
                  <td>
                    {mat.unidadedemedida}
                  </td>
                  <td>
                    {mat.composicao}
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


