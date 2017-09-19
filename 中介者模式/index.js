/*
todo 中介者模式:中介者对象可以让各个对象之间不需要显示的相互引用，从而使其耦合松散，而且可以独立的改变它们之间的交互。
*/
//设计思想 基于backbone的
var mode1 = Mode.create(),  mode2 = Mode.create();
var view1 = View.create(),   view2 = View.create();
var controler1 = Controler.create( mode1, view1, function(){
    view1.el.find( 'div' ).bind( 'click', function(){
        this.innerHTML = mode1.find( 'data' );
    } )
})
var controler2 = Controler.create( mode2 ,view2, function(){
    view1.el.find( 'div' ).bind( 'click', function(){
        this.innerHTML = mode2.find( 'data' );
    } )
})