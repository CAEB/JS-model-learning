/*
todo 代理模式 代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西。
*/
//实现原理
var girl = function (name) {
    this.name=name;
};
var eb = function (girl) {
    this.girl = girl ;
    this.sendGift = function (gift) {
        alert(`hello,${girl.name},eb送你一个礼物:${gift}`);
    }
};
//代理
var proxyEB = function (girl) {
    this.girl = girl;
    this.sendGift = function (gift) {
        new eb(girl).sendGift(gift);
    }
};
var proxy = new proxyEB(new girl('jerry'));
proxy.sendGift('999朵玫瑰');
