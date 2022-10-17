import './StandarStyled.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from 'axios'


export default function Car() {
  

    const OnHandleClickRegister = (values) => {
      console.log('registerrr', values);
      
      Axios.post("http://localhost:3000/cars", {
        nome: values.nome,
        descricao: values.descricao        
      })
    }
    
    const validationRegister = yup.object().shape({
      nome: yup.string().required("Campo obrigatório"),
      descricao: yup.string().min(10, "Mínimo de 10 caracteres").required("Campo obrigatório")
     
    
    });
    
      return (
        
    
        <div className="container">
          <h1>Car</h1>
        
            <Formik initialValues={{}} 
    
             onSubmit={OnHandleClickRegister}
            validationSchema={validationRegister}>
    
             <Form className="material-form">
                <div className="material-form-group">
                  <Field name="nome" className="form-field" placeholder="Car name"/>
                  <ErrorMessage component="span" name="nome" className="form-error"/>
                </div>
    
                <div className="material-form-group">
                  <Field name="descricao" className="form-field" placeholder="Description"/>
                  <ErrorMessage component="span" name="descricao" className="form-error"/>
                </div>
    
    
                <button className='button' type="submit">Register</button>
              </Form>
            </Formik>
        </div>
      );
    }
    