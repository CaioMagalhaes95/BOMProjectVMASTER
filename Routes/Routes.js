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


router.get('/material/:nome', (req, res) => {
    const nomeSearch = req.params.nome

    if (!nomeSearch) {
        return res.status(404).json({ msg: 'Usuario não encontrado' })
    }
    sequelize.query(`SELECT * FROM Materiais where nome = ?`, nomeSearch, {

        type: QueryTypes.SELECT,
        replacements: nomeSearch

    }).then(() => res.end())
        .catch(err => res.end(err))
})


router.post('/cars', (req, res) => {
    const { nome, descricao } = req.body

    sequelize.query(`INSERT INTO Carros (nomeCarro, descricaoCarro) values (?, ?)`, {

        type: QueryTypes.INSERT,
        replacements: [nome, descricao],
    })
        .then(() => res.end('done'))
        .catch(err => res.end(err));
})

router.get('/cars', (req, res)=> {
    
    sequelize.query(`Select * from Carros where nomeCarro like ?`,  {
        type: QueryTypes.Select,
        replacements: ['%' + req.query.search + '%']
    }).then(cars => {
        res.json(cars[0]);
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

module.exports = router;