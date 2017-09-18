/*
todo 单例模式的定义是产生一个类的唯一实例,保证一个类只有一个实例,
todo 实现的方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。
*/
//todo 实现，最简单的就是对象字面量的方式
var eb={
    name:'qwd',
    age:23,
    run:function () {
        console.log('qwe');
    }
};//todo 一个简单的单例模式
//todo js实现公有，私有成员和方法
var eb1=function () {
    //私有
    var privateName='eb1';
    function showPrivate1() {
        console.log(privateName);
    }
    //公有
    return {
        publicName:'qwd',
        showPublic:function () {
            showPrivate1();
        }
    }
};
var single1=eb1();
single1.showPublic();//todo 调用公有方法
console.log(single1.publicName);//todo 调用公有成员
//todo 实现单例的初始化
var single2=(function () {
    var isInit;
    function init() {
        return {
            publicName1:'qwd1',
            showPublic1:function () {
                console.log('123');
            }
        }
    }
    return {
        getInit:function () {
            if(!isInit){
                isInit = init();
            }
            return isInit;
        }
    }
})();
single2.getInit().showPublic1();//todo 调用公有方法。
//todo 单例使用场景 系统的各种模式的通信协调
var singleTest1=(function () {
    function SingleP1(args) {
        var args=args || {};
        this.name='eb';
        this.x=args.x || 5;
        this.y=args.y || 6;
    }
    var instance;//实例容器
    var _static={
        name:'qwd',
        getInstance:function (args) {
            if(instance === undefined){
                instance=new SingleP1(args);
            }
            return instance;
        }
    }
    return _static;
})();
var singleTester1=singleTest1.getInstance({x:8});
console.log('singleTester1',singleTester1,singleTest1.name);
//todo 其他实现方式
//1.
function Test1() {
    //判断是否存在实例
    if(typeof Test1.instance ==='object') {
        return Test1.instance;
    }
    this.name='qwd';
    this.age=23;
    //缓存
    Test1.instance=this;
}
var Test1_test_1=new Test1();
var Test1_test_2=new Test1();
console.log('Test1',Test1_test_1 === Test1_test_2);//只有一个实例
//2.
function Test2() {
    var instance=this;
    this.name='qwd';
    this.age=23;
    Test2=function () {
        return instance;
    }//重写构造函数Test2
};
var Test2_test1=new Test2();
var Test2_test2=new Test2();
console.log('Test2',Test2_test1===Test2_test2);
//3.
var Test3;
(function () {
    var instance;
    Test3 = function Test3() {
        if(instance){
            return instance;
        }
        instance=this;
        this.name='qwd';
        this.age=23;
    }
})();
var Test3_test1=new Test3();
var Test3_test2=new Test3();
console.log('Test3',Test3_test1 === Test3_test2);
//4.
function Test4() {
    var instance;//缓存实例
    Test4 = function Test4() {
        return instance;
    }//重新构造函数
    Test4.prototype = this;//处理原型属性
    instance=new Test4();//实例
    instance.constructor = Test4;//重设构造函数指针
    instance.name='qwd';
    instance.age=23;
    return instance;
}
var Test4_test1=new Test4();
var Test4_test2=new Test4();
console.log('Test4',Test4_test1 === Test4_test2);
Test4.prototype.x=1;
Test4.prototype.y=1;
console.log(Test4_test1.x,Test4_test2.x);
console.log(Test4_test1.constructor === Test4);









