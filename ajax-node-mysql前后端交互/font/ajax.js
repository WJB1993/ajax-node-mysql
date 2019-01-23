//发起注册的post方式，ajax请求
function registryfn() {
    // 1.创建AJAX对象
    var myajax = new XMLHttpRequest();
    // 2.打开AJAX请求
    myajax.open("post", "http://127.0.0.1:8081/registry");
    myajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//必须加这行代码
    var username=document.querySelectorAll("input[name=username]")[0].value;
    var password=document.querySelectorAll("input[name=password]")[0].value;
    // 3.发送AJAX请求
    myajax.send("username="+username+"&password="+password);
    // 4.监听请求状态
    myajax.onreadystatechange = function () {
        if (myajax.readyState == 4) { //判断请求是否完成
            if (myajax.status == 200) { //判断请求是否成功
                var val = myajax.responseText; //获取请求返回的数据
                console.info(val);
                //把字符串数据转成对象数组
                var ar=JSON.parse(val);
                console.log(ar);
                if(ar.state){
                    alert("注册成功");
                }
                else alert("注册失败，原因："+ar.mes);
            }
        }
    }
}

//发起登录ost方式，ajax请求
function loginfn() {
    // 1.创建AJAX对象
    var myajax = new XMLHttpRequest();
    // 2.打开AJAX请求
    myajax.open("post", "http://127.0.0.1:8081/login");
    myajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//必须加这行代码
    var username=document.querySelectorAll("input[name=username]")[1].value;
    var password=document.querySelectorAll("input[name=password]")[1].value;
    // 3.发送AJAX请求
    myajax.send("username="+username+"&password="+password);
    // 4.监听请求状态
    myajax.onreadystatechange = function () {
        if (myajax.readyState == 4) { //判断请求是否完成
            if (myajax.status == 200) { //判断请求是否成功
                var val = myajax.responseText; //获取请求返回的数据
                console.info(val);
                //把字符串数据转成对象数组
                // var ar=JSON.parse(val);
            }
        }
    }
}