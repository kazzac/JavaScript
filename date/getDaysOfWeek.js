//2007年8月10日の曜日を表示
//金曜日が表示されます
var week = new Array("日", "月", "火", "水", "木", "金", "土");
var dt = new Date(2007, 8 - 1, 10);
var dayOfWeek = week[dt.getDay()];

document.write("曜日=" + dayOfWeek + "<br />\r\n");