let express    = require('express')
let app        = express()
let bodyParser = require('body-parser')
// moteur de template
app.set('view engine', 'ejs')

//Midelware

app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes

app.get('/', (request, response)=>{
    response.render('pages/index', {test: 'salut'})
})

app.post('/', (request, response)=>{
    if (request.body.message === undefined || request.body.message === ''){
    response.redirect('/')
    // ('pages/index', { error: 'pas de message detecter '})
    }

})
 app.listen(8080)










// let bodyParser = require('body-parser')
// let session   = require('express-session')
// // Moteur de template
// app.set('view engine', 'ejs')
// // Middleware
// app.use('/assets', express.static('public'))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }))
// app.use(require('./middlewares/flash'))
// app.get('/', (req, res) => {
//     res.render('pages/index')
// })
// app.post('/', (req, res) => {
//     if (req.body == undefined || req.body.message == '') {
//         req.flash('error', "Vous n'avez pas posté de message")
//         res.redirect('/')
//     }
// })
// app.listen(8080)