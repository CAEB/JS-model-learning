/*
todo 模版方法模式:模式方法是预先定义一组算法，先把算法的不变部分抽象到父类，再将另外一些可变的步骤延迟到子类去实现。
*/
var gameCenter = function () {

};
gameCenter.prototype.init = function () {
    this.login();
    this.gameStart();
    this.end();
};
gameCenter.prototype.login = function () {
    alert('game login!!!')
};
gameCenter.prototype.gameStart = function () {
    //空的，由子类去重新
};
gameCenter.prototype.end = function () {
    alert('欢迎下次再来!!!');
}
var game = function () {

};
game.prototype = gameCenter.prototype;
game.prototype.gameStart = function () {
    alert('game start!!!')
};
var gameTest = new game()
gameTest.init();