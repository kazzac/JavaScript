/**
 * 日付の妥当性チェック
 * year 年
 * month 月
 * day 日
 */
function checkDate(year, month, day) {
    var dt = new Date(year, month - 1, day);
    if(dt == null || dt.getFullYear() != year || dt.getMonth() + 1 != month || dt.getDate() != day) {
        return false;
    }
    return true;
}

//flag1はfalseになります
var flag1 = checkDate(2007, 4, 31);
document.write("flag1=" + flag1 + "<br />\r\n");

//flag2はtrueになります
var flag2 = checkDate(2007, 1, 31);
document.write("flag2=" + flag2 + "<br />\r\n");

//flag3はtrueになります
var flag3 = checkDate(2000, 2, 29);
document.write("flag3=" + flag3 + "<br />\r\n");