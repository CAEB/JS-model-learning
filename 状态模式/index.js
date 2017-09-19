/*
todo 状态模式主要可以用于这种场景
todo 1 一个对象的行为取决于它的状态
todo 2 一个操作中含有庞大的条件分支语句
*/
//传统的状态通过if-else语句来实现
function game() {
    if (state === 'jump'){
        if (currState === 'attack' || currState === 'defense') {
            return false;
        }
    }else if (state === 'wait') {
        if (currState === 'attack' || currState === 'defense') {
            return false;
        }
    }
}//一个游戏,如果处于跳跃状态和倒下状态时，攻击和防御无法使用。
//通过状态模式来进行管理
var StateManager = function () {
    var currState = 'wait';
    var states = {
        jump: function (state) {

        },
        wait: function (state) {

        },
        attack: function (state) {

        },
        crouch: function (state) {
            
        },
        defense: function (state) {
            if ( currState === 'jump') {
                return false;
            }
            currState = state
        }
    };
    var changeState = function (state) {
        states[state] && states[state]()
    }
    return {changeState}
}
var stateManager = StateManager();
stateManager.changeState('defense');