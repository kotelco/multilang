var mobnav = document.getElementById("mobile_nav");
var hamb = document.getElementById("menuToggle");
var wrap_def = document.getElementById("default_layout");
function mobmenu_check()  {
    if (mobnav.style.transform == 'none') {
        mobnav.style.transform = 'translate(-100%, 0)';
        wrap_def.style.opacity = '1';
    }
    else {
        wrap_def.style.opacity = '.1';
        mobnav.style.transform = 'none';
    }
}
hamb.onclick = mobmenu_check;