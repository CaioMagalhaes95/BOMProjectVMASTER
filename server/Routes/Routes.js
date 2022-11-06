const router = require('express').Router()
const bodyParser = require('body-parser')
const sequelize = require('../comoseeuquiser');
const { QueryTypes } = require('sequelize');
const flash = require('connect-flash')
const session = require('express-session');
const { replace } = require('formik');


router.use(session({
    secret: 'run',
    saveUninitialized: true,
    resave: true
}))
router.use(flash())
router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))

//material routes

router.post('/material', (req, res) => {
    const { nome, descricao, datac, quantidade, sistema, massa, custo, unidadedemedida, composicao } = req.body

    sequelize.query(`INSERT INTO Materiais (nome, descricao, datac, quantidade, sistema, massa, custo, unidadedemedida, composicao) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`, {

        type: QueryTypes.INSERT,
        replacements: [nome, descricao, datac, quantidade, sistema, massa, custo, unidadedemedida, composicao],

    })
        .then(() => res.end('done'))
        .catch(err => res.end(err));
})


router.get('/material', (req, res) => {

    sequelize.query(`Select * from Materiais where nome like ?`,  {
        type: QueryTypes.Select,
        replacements: ['%' + req.query.search + '%']
    }).then(mat => {
        res.json(mat[0]);
    })

})

router.delete('/Material/:id', (req, res)=> {
    
    sequelize.query(`DELETE from Materiais where IDMaterial like ?`,  {
        type: QueryTypes.DELETE,
        replacements: [req.params.id]
    }).then(mat => {
        res.json(mat);
    })
})

router.put('/Material/:id', (req, res) => {

    console.log(req.body)
    const { nome, descricao, datac, quantidade, sistema, massa, custo, unidadedemedida, composicao } = req.body
    
    sequelize.query(`update Materiais set nome = ?, descricao = ?, datac = ?, quantidade = ?, sistema = ?, massa = ?, custo = ?, unidadedemedida = ?, composicao = ? where IDMaterial = ?`,  {
        type: QueryTypes.UPDATE,
        replacements: [nome, descricao, datac, quantidade, sistema, massa, custo, unidadedemedida, composicao, req.params.id]
    }).then(mat => {
        res.json(mat);
    })

})


router.post('/cars', (req, res) => {
    const { nome, descricao } = req.body

    sequelize.query(`INSERT INTO Carros (nomeCarro, descricaoCarro) values (?, ?)`, {

        type: QueryTypes.INSERT,
        replacements: [nome, descricao],
    })
        .then(() => res.end('done'))
        .catch(err => res.end(err.message));
})

router.get('/cars', (req, res)=> {
    
    sequelize.query(`Select * from Carros where nomeCarro like ?`,  {
        type: QueryTypes.Select,
        replacements: ['%' + req.query.search + '%']
    }).then(cars => {
        res.json(cars[0]);
    })
})


router.delete('/cars/:id', (req, res)=> {
    
    sequelize.query(`DELETE from Carros where IDCarro like ?`,  {
        type: QueryTypes.DELETE,
        replacements: [req.params.id]
    }).then(cars => {
        res.json(cars);
    })
})

router.put('/cars/:id', (req, res) => {

    console.log(req.body)
    const { nome, descricao } = req.body
    
    sequelize.query(`update Carros set nomeCarro = ?, descricaoCarro = ? where IDCarro = ?`,  {
        type: QueryTypes.UPDATE,
        replacements: [nome, descricao, req.params.id]
    }).then(arm => {
        res.json(arm);
    })

})

router.post('/storage', (req, res) => {
    const { shelf, tom } = req.body

    sequelize.query(`INSERT INTO Armazem (Prateleira, tipodeproduto) values (?, ?)`, {

        type: QueryTypes.INSERT,
        replacements: [shelf, tom]
    })
        .then(() => res.end('done'))
        .catch(err => res.end(err));
})

router.get('/storage', (req, res) => {

    sequelize.query(`Select * from Armazem where prateleira like ?`,  {
        type: QueryTypes.Select,
        replacements: ['%' + req.query.search + '%']
    }).then(arm => {
        res.json(arm[0]);
    })

})


router.delete('/storage/:id', (req, res) => {
 
    sequelize.query(`Delete from Armazem where IDArmazem = ?`,  {
        type: QueryTypes.DELETE,
        replacements: [req.params.id]
    }).then(arm => {
        res.json(arm);
    })

})

router.put('/storage/:id', (req, res) => {

    console.log(req.body)
    const { shelf, tom } = req.body
    
    sequelize.query(`update Armazem set Prateleira = ?, tipodeproduto = ? where IDArmazem = ?`,  {
        type: QueryTypes.UPDATE,
        replacements: [shelf, tom, req.params.id]
    }).then(arm => {
        res.json(arm);
    })

})

module.exports = router;