//うるう年（閏年）の判定
function checkLeapyear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

//flag1はtrueになります
var flag1 = checkLeapyear(2000);
document.write("flag1=" + flag1 + "<br />\r\n");

//flag2はfalseになります
var flag2 = checkLeapyear(2007);
document.write("flag2=" + flag2 + "<br />\r\n");