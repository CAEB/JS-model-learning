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



