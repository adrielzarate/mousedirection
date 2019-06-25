(function() {

    let oldX = 0;
    let oldY = 0;
    let xDirection = '';
    let yDirection = '';
    let mouseMovements = [];
    let timeout;

    function mostDirection(arr) {
        var max = 1,
            m = [],
            val = arr[0],
            i, x;
        for(i = 0; i < arr.length; i ++) {
            x = arr[i]
            if (m[x]) {
                ++m[x] > max && (max = m[i], val = x);
            } else {
                m[x] = 1;
            }
        } return val;    
    }

    function getMouseDirection(e) {
        xDirection = (oldX < e.pageX) ? 'right' : 'left' ;
        yDirection = (oldY < e.pageY) ? 'down' : 'up' ;
        ( Math.abs((e.pageY - oldY)) > Math.abs((e.pageX - oldX )) ) ? mouseMovements.push(yDirection) : mouseMovements.push(xDirection);
        oldX = e.pageX;
        oldY = e.pageY;
    }

    function mouseMoveEv(ev) {
        getMouseDirection(ev);
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            console.log(mostDirection(mouseMovements));
            mouseMovements = [];
        }, 30);
    }

    window.addEventListener('mousemove', mouseMoveEv);

})();