
var loadFont = function(url) {
    // the 'fetch' equivalent has caching issues
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var css = xhr.responseText;
            css = css.replace(/}/g, 'font-display: swap; }');
            var head = document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.appendChild(document.createTextNode(css));
            head.appendChild(style);
        }
    };
    xhr.send();
}
loadFont('https://fonts.googleapis.com/css?family=Montserrat:300,500,700|Roboto:300,500,700|Roboto Slab:300,500,700&amp;subset=cyrillic');
