/**
 * 年月日と加算月からnヶ月後、nヶ月前の日付を求める
 * year 年
 * month 月
 * day 日
 * addMonths 加算月。マイナス指定でnヶ月前も設定可能
 */
function computeMonth(year, month, day, addMonths) {
    month += addMonths;
    var endDay = getMonthEndDay(year, month);//ここで、前述した月末日を求める関数を使用します
    if(day > endDay) day = endDay;
    var dt = new Date(year, month - 1, day);
    return dt;
}

//2000年1月31日の1ヶ月後の日付
//2000-2-29が表示されます
var date = computeMonth(2000, 1, 31, 1);
document.write("2000-1-31 + 1 month = " + date.getFullYear()  + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "<br />\r\n");

//2000年7月31日の2ヶ月後の日付
//2007-9-30が表示されます
var date = computeMonth(2007, 7, 31, 2);
document.write("2007-7-31 + 2 months = " + date.getFullYear()  + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "<br />\r\n");