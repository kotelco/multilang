function detectmob() {

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        // If mobile, then we do all this
    }
    else {
        // If not mobile then do this
        document.getElementById("video").innerHTML = '<source src="images/colors300.webm" type="video/webm"><source src="images/colors300.mp4" type="video/mp4"><source src="images/colors300.ogg" type="video/ogg">';
        /*document.getElementById("video").reload();*/
    }
}
detectmob();