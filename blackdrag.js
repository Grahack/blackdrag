// http://jsfiddle.net/wfbY8/4/
// http://stackoverflow.com/questions/4117466/javascript-disable-text-selection-via-doubleclick
function blackdrag_init(){
    var div = document.getElementById('blackdrag');
    div.style.position = 'absolute';
    div.style.bottom = 0;
    div.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
    scrolling();
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
function scrolling(e) {
    var div = document.getElementById('blackdrag');
    var vscroll = (document.all ? document.scrollTop : window.pageYOffset);
    div.style.bottom = -vscroll + 'px';
}
window.onscroll = scrolling
function checkKey(e) {
    e = e || window.event;
    if (e.ctrlKey && (e.keyCode == '38' || e.keyCode == '40')) {
        var inc = e.shiftKey ? 25 : 5;
        var div = document.getElementById('blackdrag');
        var top_pos = div.style.top;
        if (top_pos == '') return;
        var top_val = parseInt(top_pos.substring(0, top_pos.indexOf('p')));
        if (e.keyCode == '38') {
            // up
            top_val = top_val - inc;
        }
        else if (e.keyCode == '40') {
            // down
            top_val = top_val + inc;
        }
        div.style.top = top_val + 'px';
    }
}
document.onkeydown = checkKey;
