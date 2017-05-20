/**
 * Created by haoxiao on 2017-05-20.
 */
let express = require('express');
let router = express.Router();
router.get('/signup',function (req,res) {
    res.send("注册")
});
router.get('/signin',function (req,res) {
    res.send("登录")
});
router.get('/signout',function (req,res) {
    res.send("退出")
});
module.exports = router;