var express = require("express");
var bodyParser = require("body-parser");
var getCon = require("./conDB.js");

var app = express();//得到服务器相关对象
app.listen(8081, function () {
    console.log("服务器开启成功，地址与端口为：http://127.0.0.1:8081");
}); //监听端口，开启服务器

//使用bodyParser模块，接收post参数
app.use(bodyParser.urlencoded({ entend: false }));
app.use(bodyParser.json());


//设置跨域访问（设置在所有的请求前面即可）
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == 'OPTIONS')
        res.send(200); //让options尝试请求快速结束
    else
        next();
});

//正式构建后端接口
app.get("/", function (req, res) {
    res.send("你好，已经收到你的请求！");
})

app.post("/registry", function (req, res) {
    var obj = req.body;//获取前端post传来的参数
    console.log(obj);
    var resobj={};
    //先验证数据库里面是否已经存在此用户，如果存在，就拒绝注册
    var sql1 = `select * from users where w_username="${obj.username}"`;
    var conObj = getCon(); //获取数据库链接对象
    conObj.query(sql1, function (error, result) {
        if (error) {
            resobj.state=false;
            resobj.mes=error.message
            res.send(JSON.stringify(resobj));
        }
        else {
            //说明存在数据
            if (result.length > 0) {
                resobj.state=false;
                resobj.mes="此用户已存在，不允许重复注册";
                res.send(JSON.stringify(resobj));
            }
            //说明不存在，可以注册
            else {
                //构建注册的sql语句
                var sql = `insert into users values("${obj.username}","${obj.password}")`;
                conObj.query(sql,function(e,r){ //e:错误，r正确
                    if(e){
                        resobj.state=false;
                        resobj.mes=error.message
                        res.send(JSON.stringify(resobj));
                    }
                    else {
                        resobj.state=true;
                        resobj.mes="注册成功";
                        res.send(JSON.stringify(resobj));
                    }
                });
            }
        }
        conObj.end();//关闭数据库链接
    })
})


app.post("/login", function (req, res) {
    var obj = req.body;//获取前端post传来的参数
    console.log(obj);
    //先验证数据库里面是否已经存在此用户，如果存在，就拒绝注册
    var sql1 = `select * from users where w_username="${obj.username}" and w_password="${obj.password}"`;
    var conObj = getCon(); //获取数据库链接对象
    conObj.query(sql1, function (error, result) {
        if (error) {
            res.send("sql执行出错" + error.message);
        }
        else {
            //说明存在数据
            if (result.length > 0) {
                res.send("登录成功");
            }
            //说明不存在，可以注册
            else {
                res.send("登录失败");
            }
        }
        conObj.end();//关闭数据库链接
    })


})
