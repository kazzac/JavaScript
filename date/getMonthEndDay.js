/**
 * 年月を指定して月末日を求める関数
 * year 年
 * month 月
 */
function getMonthEndDay(year, month) {
    //日付を0にすると前月の末日を指定したことになります
    //指定月の翌月の0日を取得して末日を求めます
    //そのため、ここでは month - 1 は行いません
    var dt = new Date(year, month, 0);
    return dt.getDate();
}

//2007年2月の月末日を求めます
//28が表示されます
var day = getMonthEndDay(2007, 2);
document.write("2007-2 = " + day + "<br />\r\n");

//2007年12月の月末日を求めます
//31が表示されます
var day = getMonthEndDay(2007, 12);
document.write("2007-12 = " + day + "<br />\r\n");