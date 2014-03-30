/**
 * 任意の年月の第n曜日の日付を求める関数
 * year 年
 * month 月
 * number 何番目の曜日か、第1曜日なら1。第3曜日なら3
 * dayOfWeek 求めたい曜日。0〜6までの数字で曜日の日〜土を指定する
 */
function getWhatDayOfWeek(year, month, number, dayOfWeek) {
    var firstDt = new Date(year, month - 1, 1);
    var firstDayOfWeek = firstDt.getDay();//指定した年月の1日の曜日を取得
    var day = dayOfWeek - firstDayOfWeek + 1;
    if(day <= 0) day += 7;//1週間を足す
    var dt = new Date(year, month - 1, day);
    var msTime = dt.getTime();
    msTime += (86400000 * 7 * (number - 1));//n曜日まで1週間を足し込み
    dt.setTime(msTime);
    return dt;
}

//2007-8 第4月曜日を求める
//2007-8-27が表示されます
var date = getWhatDayOfWeek(2007, 8, 4, 1);
document.write("2007-8 第4月曜日 = " + date.getFullYear()  + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "<br />\r\n");

//2007-8 第3水曜日を求める
//2007-8-15が表示されます
var date = getWhatDayOfWeek(2007, 8, 3, 3);
document.write("2007-8 第3水曜日 = " + date.getFullYear()  + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "<br />\r\n");