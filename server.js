/**
 * Created by haoxiao on 2017-05-20.
 */
let express = require('express');
let path = require('path');
let app = express();
app.listen(8080);
app.use(express.static(path.resolve('node_modules')));
//配置模板引擎
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);

let index = require('./routes/index');
let user = require('./routes/user');
let article = require('./routes/article');
app.use('/',index);
app.use('/user',user);
app.use('/article',article);

