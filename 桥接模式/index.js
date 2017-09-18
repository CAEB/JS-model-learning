/*
todo 桥接模式 桥接模式（Bridge）将抽象部分与它的实现部分分离，使它们都可以独立地变化。
*/
//抽象部分
var single = function (fn) {
    var result;
    return function () {
        return result || (result = fna.apply(this,arguments))
    }
};
//实现部分
var createMask = single(function () {
    return document.body.appendChild(document.createElement('div'));
});
//实现 迭代数组
/*
todo forEach 为实现部分，fn为抽象部分，两者互不影响。
*/
var forEach = function (arr,fn) {
    for (var i = 0,l=arr.length; i < l; i++) {
        var c = arr[i];
        if (fn.call(c,i,c) === false) {
            return false;
        }
    }
};
var arr=[1,2,3];
forEach(arr,function (i,n) {
    console.log(n*2);
});
