// http://jsfiddle.net/wfbY8/4/
// http://stackoverflow.com/questions/4117466/javascript-disable-text-selection-via-doubleclick
function blackdrag_init(){
    var div = document.getElementById('blackdrag');
    div.style.position = 'absolute';
    div.style.bottom = 0;
    div.addEventListener('mousedown', mouseDown, false);
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
    div.style.top = e.clientY + 'px';
    if (window.getSelection)
        window.getSelection().removeAllRanges();
    else if (document.selection)
        document.selection.empty();
}
