/**
 * Created by Administrator on 2016/11/22.
 */
window.onload = function () {
    var images = document.getElementsByTagName('img');
    var pos = 0;
    var len = images.length;
    setInterval(function () {
        images[pos].style.display = 'none';
        pos = ++pos == len ? 0 : pos;
        images[pos].style.display = 'inline';
    }, 10000);
};