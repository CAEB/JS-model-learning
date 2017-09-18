/*
todo 外观模式:外观模式（Facade）为子系统中的一组接口提供了一个一致的界面，此模块定义了一个高层接口，这个接口使得这一子系统更加容易使用。
*/
//原理
var getName = function () {
    return 'qwd'
};
var getSex = function () {
    return 'man'
};
var getInfo = function () {
    return getName() + getSex();
}
console.log(getInfo());
//实践
var stopEvent = function (e) {
    e.stopPropagation();
    e.preventDefault();
};
