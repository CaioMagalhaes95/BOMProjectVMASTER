import './StandarStyled.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from 'axios'



export default function Register() {
  

const OnHandleClickRegister = (values) => {
  console.log('registerrr', values);
  
  Axios.post("http://localhost:3000/material", {
    nome: values.nome,
    descricao: values.descricao,
    datac: values.datac,
    quantidade: values.quantidade,
    sistema: values.sistema,
    massa: values.massa,
    custo: values.custo,
    unidadedemedida: values.unidadedemedida,
    composicao: values.composicao
  })
}

const validationRegister = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  descricao: yup.string().min(20, "Mínimo de 20 caracteres").required("Campo obrigatório")
 

});

  return (
    

    <div className="container">
      <h1>Material</h1>
    
        <Formik initialValues={{}} 

         onSubmit={OnHandleClickRegister}
        validationSchema={validationRegister}>

         <Form className="material-form">
            <div className="material-form-group">
              <Field name="nome" className="form-field" placeholder="Nome do produto"/>
              <ErrorMessage component="span" name="nome" className="form-error"/>
            </div>

            <div className="material-form-group">
              <Field name="descricao" className="form-field" placeholder="Descrição"/>
              <ErrorMessage component="span" name="descricao" className="form-error"/>
            </div>

            <div className='material-form-group'>
              <Field name="datac" className="form-field" placeholder="Data de compra"/>
           
                           
                
            </div>

            <div className="material-form-group">
              <Field name="quantidade" className="form-field" placeholder="Quantidade"/>
              
            </div>

            <div className="material-form-group">
              <Field name="sistema" className="form-field" placeholder="Sistema"/>
             
            </div>

            <div className="material-form-group">
              <Field name="massa" className="form-field" placeholder="Massa em KG"/>
              
            </div>

            <div className="material-form-group">
              <Field name="custo" className="form-field" placeholder="Custo"/>
              
            </div>

            <div className="material-form-group">
              <Field name="unidadedemedida" className="form-field" placeholder="Unidade de Medida"/>
              
            </div>

            <div className="material-form-group">
              <Field name="composicao" className="form-field" placeholder="Composição"/>
              
            </div>

            <button className='button' type="submit">Cadastrar</button>
          </Form>
        </Formik>
    </div>
  );
}

