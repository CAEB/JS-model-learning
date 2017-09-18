/*
todo 适配器模式
todo 适配器模式（Adapter）是将一个类（对象）的接口（方法或属性）转化成客户希望的另外一个接口（方法或属性），
todo 适配器模式使得原本由于接口不兼容而不能一起工作的那些类（对象）可以一些工作。速成包装器（wrapper）。
*/
//一个实现的实例
//鸭子
var Duck = function () {

};
Duck.prototype.fly = function () {
    throw new Error ('该方法必须被重写');
};
Duck.prototype.quack = function () {
    throw new Error ('该方法必须被重写');
};
//火鸡
var Turkey = function () {
    
};
Turkey.prototype.fly = function () {
    throw new Error ('该方法必须被重写');
};
Turkey.prototype.gobble = function () {
    throw new Error ('该方法必须被重写');
};
//鸭子的构造函数
var NewDuck = function () {
    Duck.apply(this);
};
NewDuck.prototype = new Duck();
NewDuck.prototype.fly = function () {
    console.log('duck flying');
};
NewDuck.prototype.quack = function () {
    console.log('嘎嘎');
};
//火鸡的构造函数
var NewTurkey = function () {
    Turkey.apply(this)
};
NewTurkey.prototype = new Turkey();
NewTurkey.prototype.fly = function () {
    console.log('turkey flying');
};
NewTurkey.prototype.gobble = function () {
    console.log('咯咯');
};
//火鸡适配器，目的是让火鸡支持鸭子的quack方法
//该构造函数接受一个火鸡的实例对象，然后使用Duck进行apply，其适配器原型是Duck，然后要重新修改其原型的quack方法，以便内部调用oTurkey.gobble()方法。
// 其fly方法也做了一些改变，让火鸡连续飞5次（内部也是调用自身的oTurkey.fly()方法）。
var TurkeyAdapter = function (oTurkey) {
    Duck.apply(this);
    this.oTurkey = oTurkey;
};
TurkeyAdapter.prototype = new Duck();
TurkeyAdapter.prototype.quack = function () {
    this.oTurkey.gobble();
};
TurkeyAdapter.prototype.fly = function () {
    var nFly = 0;
    var nLenFly = 5;
    for (; nFly < nLenFly;) {
        this.oTurkey.fly();
        nFly = nFly + 1;
    }
};
var duck = new NewDuck();
var turkey = new NewTurkey();
var turkeyAdapter = new TurkeyAdapter(turkey);
duck.fly();
turkey.fly();
turkeyAdapter.fly();
duck.quack();
turkey.gobble();
turkeyAdapter.quack();