//n日後、n日前の日付を求める
/**
 * 年月日と加算日からn日後、n日前を求める関数
 * year 年
 * month 月
 * day 日
 * addDays 加算日。マイナス指定でn日前も設定可能
 */
function computeDate(year, month, day, addDays) {
    var dt = new Date(year, month - 1, day);
    var baseSec = dt.getTime();
    var addSec = addDays * 86400000;//日数 * 1日のミリ秒数
    var targetSec = baseSec + addSec;
    dt.setTime(targetSec);
    return dt;
}

//2007年8月10日の30日後の日付を取得
//2007-9-9が表示されます
var date = computeDate(2007, 8, 10, 30);
document.write(date.getFullYear()  + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "<br />\r\n");

//2007年8月10日の2週間前の日付を取得
//2007-7-27が表示されます
var date = computeDate(2007, 8, 10, -14);
document.write(date.getFullYear()  + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "<br />\r\n");