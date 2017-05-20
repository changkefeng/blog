/**
 * Created by haoxiao on 2017-05-20.
 */
let express = require('express');
let router = express.Router();
router.get('/',function (req,res) {
    res.render('index',{title:'博客首页'});
});
module.exports = router;