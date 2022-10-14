const express = require('express');

const app = express();
const cors = require('cors');

var path = require('path')

const router = require('./Routes/Routes.js');
const sequelize = require('./comoseeuquiser')

const port = 3000;


// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'html')
// app.set('views', path.join(__dirname, './views'))


app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, ()=>{
        
})

sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada");
    
}).catch(function(err){
    console.log("Erro de conexão")
    console.error(err);
})




