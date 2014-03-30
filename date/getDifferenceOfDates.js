/**
 * 2つの日付の差を求める関数
 * year1 1つのめ日付の年
 * month1 1つめの日付の月
 * day1 1つめの日付の日
 * year2 2つのめ日付の年
 * month2 2つめの日付の月
 * day2 2つめの日付の日
 */
function compareDate(year1, month1, day1, year2, month2, day2) {
    var dt1 = new Date(year1, month1 - 1, day1);
    var dt2 = new Date(year2, month2 - 1, day2);
    var diff = dt1 - dt2;
    var diffDay = diff / 86400000;//1日は86400000ミリ秒
    return diffDay;
}

//2007年8月9日と2007年7月9日の差を求める
//31が表示されます
var days = compareDate(2007, 8, 9, 2007, 7, 9);
document.write("2007-8-9 - 2007-7-9 = " + days + "days<br />\r\n");

//2007年1月10日と2006年10月10日の差を求める
//92が表示されます
var days = compareDate(2007, 1, 10, 2006, 10, 10);
document.write("2007-1-10 - 2006-10-10 = " + days + " days<br />\r\n");