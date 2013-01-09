function blackdrag_init(){
    document.getElementById('blackdrag').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
    window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('blackdrag');
    div.style.position = 'absolute';
    div.style.top = e.clientY + 'px';
}
