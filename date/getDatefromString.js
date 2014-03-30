//文字列からミリ秒を取得
var time = Date.parse("2007/08/16 10:30:15");

//ミリ秒から日付を求める
var date = new Date();
date.setTime(time);

document.write(date.getFullYear()  + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "<br />\r\n");