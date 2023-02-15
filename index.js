const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('register')
});

const arrayUser = [];
app.post('/user/register', upload.array('multifile'), (req, res) => {
    console.log(req.files);
    if (req.body.username && req.body.password) {
        const user = {
            username: req.body.username,
            password: req.body.password
        }

        arrayUser.push(user);
        console.log(arrayUser);
        res.render('success', { user: user });
    } else {
        res.render('error');
    }
});

app.listen(port, () => {
    console.log('server is running at ' + port);
})