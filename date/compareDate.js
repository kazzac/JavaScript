//2007-8-10と2007-7-31を比較します
//処理Aが実行されます
var dt1 = new Date(2007, 8 - 1, 10);
var dt2 = new Date(2007, 7 - 1, 31);
if(dt1.getTime() > dt2.getTime()) {
    //処理A
    document.write("A<br />\r\n");
} else {
    //処理B
    document.write("B<br />\r\n");
}