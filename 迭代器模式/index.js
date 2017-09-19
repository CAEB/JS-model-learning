/*
todo 迭代器模式 迭代器模式提供一种方法顺序访问一个聚合对象中各个元素，而又不需要暴露该方法中的内部表示。
*/
//数组迭代器
var forEach = function (arr,fn) {
    for (var i = 0; i < arr.length; i++) {
        var c=arr[i];
        if (fn.call(c,i,c) === false) {
            return false;
        }
    }
};
forEach([1,2,3],function (i,n) {
    alert(n);
});
//对象迭代器
var forIn = function (obj,fn) {
    for (var o in obj) {
        var O=obj[o];
        if (fn.call(O,o,O) === false) {
            return false;
        }
    }
}
forIn({a:1,b:3},function (i,n) {
    alert(n);
})
