/*
todo 组合模式:组合模式又叫部分-整体模式，它将所有对象组合成树形结构。使得用户只需要操作最上层的接口，就可以对所有成员做相同的操作。
*/
//实践
//一个表单验证的实践的伪代码
form.validata = function(){
    forEach( fields, function( index, field ){
        if ( field.validata() === false  ){
            return false;
        }
    })
    return true;
}