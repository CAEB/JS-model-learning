/*
todo 备忘录模式在js中经常用于数据缓存.
*/
//实践伪代码
var Page = function(){
    var page = 1,
        cache = {},
        data;
    return function( page ){
        if ( cache[ page ] ){
            data =  cache[ page ];
            render( data );
        }else{
            Ajax.send( 'cgi.xx.com/xxx', function( data ){
                cache[ page ] = data;
                render( data );
            })
        }
    }
}()