import './StandarStyled.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from 'axios'
import { useParams } from 'react-router-dom';


export default function CarUpdate() {
  const params = useParams();
    
    const OnHandleClickRegister = (values) => {
      console.log('registerrr', values);
      
      Axios.put(`http://localhost:3000/cars/${params.id}`, {
       
        nome: values.nome,
        descricao: values.descricao       
      })
      alert("Successfully Updated")
    }
    
    const validationRegister = yup.object().shape({
      nome: yup.string().required("Campo obrigatório"),
      descricao: yup.string().min(10, "Mínimo de 10 caracteres").required("Campo obrigatório")
     
    
    });
    
      return (
        
    
        <div className="container">
          <h1>Car Update</h1>
        
            <Formik initialValues={{}} 
    
             onSubmit={OnHandleClickRegister}
            validationSchema={validationRegister}>
    
             <Form className="material-form">
                

                <div className="material-form-group">
                  <Field name="nome" className="form-field" placeholder="New car name"/>
                  <ErrorMessage component="span" name="nome" className="form-error"/>
                </div>
    
                <div className="material-form-group">
                  <Field name="descricao" className="form-field" placeholder="New car description"/>
                  <ErrorMessage component="span" name="descricao" className="form-error"/>
                </div>
    
    
                <button className='button' type="submit">Update</button>
              </Form>
            </Formik>
        </div>
      );
    }
    