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
    var vscroll = (document.all ? document.scrollTop : window.pageYOffset);
    div.style.top = (e.clientY + vscroll)+ 'px';
    div.style.bottom = -vscroll;
    if (window.getSelection)
        window.getSelection().removeAllRanges();
    else if (document.selection)
        document.selection.empty();
}
window.onscroll = function(e) {
    var div = document.getElementById('blackdrag');
    var vscroll = (document.all ? document.scrollTop : window.pageYOffset);
    div.style.bottom = -vscroll + 'px';
}
