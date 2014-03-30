//2007-8-17を表すオブジェクトを生成する
var date = new Date(2007, 8 - 1, 17);

document.write(date.getFullYear()  + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "<br />\r\n");