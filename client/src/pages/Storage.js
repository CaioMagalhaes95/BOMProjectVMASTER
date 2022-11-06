import './StandarStyled.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from 'axios'



export default function Storage() {
  

const OnHandleClickRegister = (values) => {
  console.log('registerrr', values);
  
  Axios.post("http://localhost:3000/storage", {
    shelf: values.shelf,
    tom: values.tom
    
  })
  alert("Successfully registered")
}

const validationRegister = yup.object().shape({
  shelf: yup.string().required("Required field"),
  tom: yup.string().min(10, "Please, at least 10 characters").required("Required field")
 

});

  return (
    

    <div className="container">
      <h1>Storage</h1>
    
        <Formik initialValues={{}} 

         onSubmit={OnHandleClickRegister}
        validationSchema={validationRegister}>

         <Form className="material-form">
            <div className="material-form-group">
              <Field name="shelf" className="form-field" placeholder="Shelf"/>
              <ErrorMessage component="span" name="shelf" className="form-error"/>
            </div>

            <div className="material-form-group">
              <Field name="tom" className="form-field" placeholder="Type of material"/>
              <ErrorMessage component="span" name="tom" className="form-error"/>
            </div>

         

            <button className='button' type="submit">Register</button>
          </Form>
        </Formik>
    </div>
  );
}

