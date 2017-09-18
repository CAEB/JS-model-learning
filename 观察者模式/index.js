/*
todo 观察者模式:又叫发布者——订阅者模式，它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象。
todo 对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。
*/
//todo 实现
var pubsub={};
(function (t) {
    var topics = {},
        subId = -1;
    //发布方法
    t.publish = function (topic,args) {
        if (!topics[topic]) {
            return false;
        }
        setTimeout(function () {
            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0;
            while (len--) {
                subscribers[len].func(topic,args);
            }
        },0);
        return true;
    };
    //订阅方法
    t.subscribe = function (topic,func) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subId).toString();
        topics[topic].push({
            token:token,
            func:func
        });
        return token;
    }
})(pubsub);
pubsub.subscribe('example',function (topics,data) {
    console.log(topics,data);
    console.log(topics+':'+data);
});
pubsub.publish('example','qwe');
pubsub.publish('example',['qwd','eb']);
pubsub.publish('example',[{'color':'red','age':23}]);
//todo 另一种的实现(自定义事件)
function selfEvent () {
    this.handlers = {};
}
selfEvent.prototype = {
    constructor: selfEvent,
    //todo 订阅
    add: function (type,handler) {
        if (typeof this.handlers[type] === 'undefined') {
            this.handlers[type]=[];
        }
        this.handlers[type].push(handler);
    },
    //todo 发布
    notify: function (event) {
        if (!event.target) {
            event.target=this;
        }
        if (this.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type];
            for (var i = 0; i < handlers.length; i++) {
                handlers[i];
            }
        }
    },
    //todo 取消订阅
    removeAdd: function (type,handler) {
        if (this.handler[type] instanceof Array) {
            var handlers=this.handlers[type];
            for (var i = 0; i < handlers.length; i++) {
                 if (handlers[i] === handler) {
                     break;
                 }
            }
            handlers.splice(i,1);
        }
    }
};
//todo 具体实践1
var Event = {
    //订阅
    on:function (name,callback) {
        if (!this.handles) {
           /* this.handles={};*/
           Object.defineProperty(this,'handles',{
               value:{},
               enumerable:false,
               configurable:true,
               writable:true
           })
        }
        if (!this.handles[name]) {
            this.handles[name] = []
        }
        this.handles[name].push(callback);
    },
    //发布
    emit:function (name) {
        if (this.handles[arguments[0]]) {
            for (var i = 0; i < this.handles[arguments[0]].length; i++) {
                this.handles[arguments[0]][i](arguments[1]);
            }
        }
    }
};
Event.on('test',function (result) {
    console.log(result);
});
Event.on('test',function () {
    console.log('test');
});
Event.emit('test','hello world');//输出 'hello world' 和 'test'
var person1 = {};
var person2 = {};
/*
todo ES6的新对象方法，用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
todo Object.assign(target,...sources);
todo 如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
todo 意思是将Event里面的可枚举的对象和方法放到person1里面。
*/
Object.assign(person1,Event);
Object.assign(person2,Event);
person1.on('call1',function () {
    console.log('person1');
});
person2.on('call2',function () {
    console.log('person2');
});
//todo 由于订阅的时候已经存在handles，合并是属性为对象是合并的是引用，所有发布的时候都涵盖了定义的方法。通过使用自定义属性api可解决这一问题。
person1.emit('call1');//person1
person1.emit('call2');//person2,无
person2.emit('call1');//person1，无
person2.emit('call2');//person2
//todo 基本的设计思想
/*
todo 把订阅者放在一个对象中，然后发布者在合适的时机通知订阅者
*/
//todo 一个优雅的实现
var Events=function () {
    var listen,obj,one,remove,trigger,self;
    obj = {};
    self = this;
    listen = function (key,fn) {
        var stack,ref;
        stack = (ref = obj[key]) !=null ? ref : obj[key] = [];
        return stack.push(fn);
    };
    one = function (key,fn) {
        remove(key);
        return listen(key,fn)
    };
    remove = function (key) {
        var ref;
        return (ref = obj[key]) !=null ? ref.length = 0 : void 0;
    };
    trigger = function () {
        var fn,stack,ref,key;
        key = Array.prototype.shift.call(arguments);
        stack = (ref = obj[key]) !=null ? ref : obj[key] = [];
        for (var j = 0; j < stack.length; j++) {
            fn = stack[j];
            if (!fn.apply(self,arguments)) {
                return false;
            }
        }
    };
    return {listen,one,remove,trigger}
};
var tipName =  Events();
tipName.one('all',function (data) {
    alert(`全名为${data.name}`)
});
tipName.trigger('all',{name:'qwd'});
tipName.remove('all');
tipName.trigger('all',{name:'qwe'});
//todo jquery中的实现
(function ($) {
    var event=$({});
    $.listen = function () {
        event.on.apply(event,arguments)
    };
    $.unListen = function () {
        event.off.apply(event,arguments)
    };
    $.publish = function () {
        event.trigger.apply(event,arguments)
    }
})(jQuery);
function cb(event,a,b,c) {
    console.log(event,a+b+c);
}
$.listen('jquery',cb);
$.publish('jquery',['q','w','d']);
