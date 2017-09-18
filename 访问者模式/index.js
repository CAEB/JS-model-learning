/*
todo 访问者模式先把一些可复用的行为抽象到一个函数(对象)里，这个函数我们就称为访问者（Visitor）。
todo 如果另外一些对象要调用这个函数，只需要把那些对象当作参数传给这个函数
todo 在js里我们经常通过call或者apply的方式传递this对象给一个Visitor函数.
*/
var Visitor = {};
Visitor.push = function () {
    return Array.prototype.push.apply(this,arguments)
}
var obj = {};
obj.push = Visitor.push;
obj.push('first');
console.log(obj)