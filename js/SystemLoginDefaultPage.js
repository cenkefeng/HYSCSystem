/**
 * Created by Administrator on 2016/11/22.
 */

/*
 var num1=prompt("请输入考试数量","");
 var myFunction=function (num1) {


 if(isNaN(num1)){
 alert("输入的不是数字！");
 }else if(num1<0){
 alert("成绩不能是负数");
 }else{
 prompt(num1);
 }
 };
 myFunction(num1);
 */
/*<!--等腰三角形-->
 var num=prompt("请输入要打印的行数","");

 var myFun=function (num) {
 document.write("<center>");
 for(var i=1;i<=num;i++){
 for(var j=1;j<=2*i-1;j++){
 document.write("*");
 }
 document.write("<br>")
 }
 document.write("</center>");
 }
 myFun(num);*/
/*
<!--倒等腰三角形-->
var num = prompt("请输入要打印的行数", "");
var myFun2 = function (num) {


    document.write("<center>");
    for (var i = num; i >= 1; i--) {
        for (var j = 1; j <= 2 * i - 1; j++) {
            document.write("*");
        }
        document.write("<br>")
    }
    document.write("</center>");
}
myFun2(num);
*/

<!--菱形-->
var num = prompt("请输入要打印的行数", "");
var myFun3= function (num) {
    document.write("<center>");
    for(var i=1;i<num;i++){
        for(var j=1;j<=2*i-1;j++){
            document.write("*");
        }
        document.write("<br/>")
    }
    for (var i = num; i >= 1; i--) {
        for (var j = 1; j <= 2 * i - 1; j++) {
            document.write("*");
        }
        document.write("<br/>")
    }
    document.write("</center>");
}
myFun3(num);