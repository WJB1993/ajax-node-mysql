var mysql=require("mysql");

var DBObj={
    host:"127.0.0.1",
    user: 'root', //数据库用户名
    password: '123456A', //数据库密码
    database: 'w1807_4' //数据库名
}

function getConObj(obj=DBObj) { 
    var con=mysql.createConnection(obj); //创建链接对象
    con.connect();//正式开启链接
    return con;
 }

 module.exports=getConObj;