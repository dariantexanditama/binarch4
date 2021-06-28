const express = require('express')
const app = express()
const port = 3000
var users = require('./db/users.json')

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}

app.use(logger)

app.use(express.static('static'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    if (!req.user) {
        res.render('index', {login_info: false})
    } else {
        res.render('index', {login_info: true})
    }
})

app.get('/games', function(req, res) {
    res.render('games')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/api/v1/users', (req, res) => {
    res.status(200).json(users)
})

app.get('/api/v1/users/:id', (req, res) => {
    const user = users.find(i => i.id === +req.params.id)
    res.status(200).json(user)
})

app.post('/api/v1/users', (req, res) => {
    const { name, email, password } = req.body
    const id = users[users.length - 1].id + 1
    const user = { id, name, email, password }
    users.push(user)
    res.status(201).json(user)
})

app.put('/api/v1/users/:id', (req, res) => {
    let user = users.find(user => user.id === +req.params.id)
    const params = { name: req.body.name, email: req.body.email, password: req.body.password }
    user = { ...user, ...params }
    users = users.map(i => i.id === user.id ? user : i)
    res.status(200).json(user)
})

app.use(function(err, req, res, next) {
    console.error(err)
    res.status(500).json({
        status: 'fail',
        errors: err.message
    })
})

app.use(function(err, req, res, next) {
    res.status(404).json({
        status: 'fail',
        errors: 'Are you lost?'
    })
})

app.listen(port)
console.log('Server started at http://localhost:' + port)