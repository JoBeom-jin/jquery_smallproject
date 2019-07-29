const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!')) //



app.use(express.static('beomjin_img'))
app.use(express.static('img'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/main.html'));
    //__dirname : It will resolve to your project folder.
});












router.get('/sh_ipad', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/support.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_iphone', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/event.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_mac', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/main.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/content', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/content.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/content2', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/content2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/content3', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/content3.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/content_main', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/content_main1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/error', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/error.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/login.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/signup.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/manager', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Manager_server.html'));
    //__dirname : It will resolve to your project folder.
});




router.get('/sh_watch', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/watch.html'));
    //__dirname : It will resolve to your project folder.
});





app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
