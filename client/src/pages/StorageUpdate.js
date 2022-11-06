import './StandarStyled.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from 'axios'
import { useParams } from 'react-router-dom';


export default function StorageUpdate() {
  const params = useParams();
    
    const OnHandleClickRegister = (values) => {
      console.log('registerrr', values);
      
      Axios.put(`http://localhost:3000/storage/${params.id}`, {
       
        shelf: values.shelf,
        tom: values.tom       
      })
      alert("Successfully updated")
    }
    
    const validationRegister = yup.object().shape({
      shelf: yup.string().required("Campo obrigatório"),
      tom: yup.string().min(10, "Mínimo de 10 caracteres").required("Campo obrigatório")
     
    
    });
    
      return (
        
    
        <div className="container">
          <h1>Storage Update</h1>
        
            <Formik initialValues={{}} 
    
             onSubmit={OnHandleClickRegister}
            validationSchema={validationRegister}>
    
             <Form className="material-form">
                

                <div className="material-form-group">
                  <Field name="shelf" className="form-field" placeholder="New shelf name"/>
                  <ErrorMessage component="span" name="nome" className="form-error"/>
                </div>
    
                <div className="material-form-group">
                  <Field name="tom" className="form-field" placeholder="Type of Material"/>
                  <ErrorMessage component="span" name="descricao" className="form-error"/>
                </div>
    
    
                <button className='button' type="submit">Update</button>
              </Form>
            </Formik>
        </div>
      );
    }
    