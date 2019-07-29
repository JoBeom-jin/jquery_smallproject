const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!')) //



app.use(express.static('beomjin_img'))
app.use(express.static('img'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/edit_page', function (req, res) {
    console.log(req.query);
    res.send('제목 : ' + req.query.title + ', 내용 : ' + req.query.content + ', 작성자 : ' + req.query.name + '  <a href="/bj_notice">게시판으로</a>')
});

router.get('/login_page', function (req, res) {
    console.log(req.query);
    res.send('ID : ' + req.query.id + ', PW : ' + req.query.password + '  <a href="/bj_index">로그아웃</a>')
});

router.get('/signup_page', function (req, res) {
    console.log(req.query);
    res.send('ID : ' + req.query.id + ', PW : ' + req.query.password + ', Name : ' + req.query.name + ', H.P : ' + req.query.hp + '  <a href="/bj_index">메인으로</a>')
});

router.get('/external', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/external.html'));
    //__dirname : It will resolve to your project folder.
});



router.get('/bj_index', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_notice', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/notice.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_login', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/login.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/signup.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_gallery', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/gallery.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/jo_utilities2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_utilities2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_try_utilities.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_grid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sungho', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/boot2', function (req, res) {
    res.sendFile(path.join(__dirname + '/boot2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/boot3', function (req, res) {
    res.sendFile(path.join(__dirname + '/boot3.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/boot4', function (req, res) {
    res.sendFile(path.join(__dirname + '/boot4.html'));
    //__dirname : It will resolve to your project folder.
});








router.get('/textadd', function (req, res) {
    console.log(req.query);
    res.send('제목 : ' + req.query.text1 + '  내용 : ' + req.query.text2 + '  날짜 : ' + req.query.text3 + '  작성자 : ' + req.query.text4)
});

router.get('/login1', function (req, res) {
    console.log(req.query);
    res.send('email: ' + req.query.loginemail + '  password : ' + req.query.loginpassword + '  check : ' + req.query.logincheckbox)
});

router.get('/sh_ipad', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/ipad.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_iphone', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/iphone.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_mac', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/mac.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_main', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/main.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_music', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/music.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_notice', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/notice.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_watch', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/watch.html'));
    //__dirname : It will resolve to your project folder.
});





app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
