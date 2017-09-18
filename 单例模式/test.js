var createMask=(function () {
    var mask;
    return function () {
        return mask || (mask=document.body.appendChild(document.createElement('div')))
    }
})();
$('button').on('click',createMask);