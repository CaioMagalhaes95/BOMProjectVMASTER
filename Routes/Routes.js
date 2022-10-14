const router = require('express').Router()
const bodyParser = require('body-parser')
const sequelize = require('../comoseeuquiser');
const { QueryTypes } = require('sequelize');


router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))

//material routes

router.post('/material', (req,res) => {
    const {nome, descricao, datac, quantidade, sistema, massa, custo, unidadedemedida, composicao} = req.body

    console.log(nome);
   
    sequelize.query(`INSERT INTO Materiais (nome, descricao, datac, quantidade, sistema, massa, custo, unidadedemedida, composicao) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`, {
        
        type: QueryTypes.INSERT,
        replacements: [nome, descricao, datac, quantidade, sistema, massa, custo, unidadedemedida, composicao]
    })
    .then(() => res.end('done'))
    .catch(err => res.end(err));
    
    

})


module.exports = router;