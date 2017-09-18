/*
todo 策略模式:策略模式的意义是定义一系列的算法，把它们一个个封装起来，并且使它们可相互替换。
*/
$('button').on('click',function () {
    $('div').animate({left:"200px"},1000,'linear');
});
//实践，表单的验证
var validataList = {
    notNull (value) {
        return value!==''
    },
    maxL (value,length) {
        return value.length > length
    },
    onlyNumber (value) {
        return !isNaN(value)
    }
};

