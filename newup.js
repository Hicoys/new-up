// JavaScript Document
// 一定期間New/Upマークを表示する
function newUp(y, m, d, c) {
  delDay = 7; // 何日後に削除するか
  oldDay = new Date(y + "/" + m + "/" +d);
  newDay = new Date();
  d =(newDay - oldDay) / (1000 * 24 * 3600);
  if(d <= delDay) {
    // Newマーク
    if(c == "new") document.write("<IMG src='new.gif' border='0'>");
    // Upマーク
    if(c == "up") document.write("<IMG src='up.gif' border='0'>");
  }
}
//
