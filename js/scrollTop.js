var wrap = document.getElementById("wrapper");
(function () {
    function b() {
        var a = document.getElementById("gotop");
        a || (a = document.createElement("a"), a.id = "gotop", a.className = "scrollTop", a.href = "#", a.style.display = "none", a.style.position = "fixed", a.style.zIndex = "9999", a.onclick = function (a) {
            a.preventDefault();
            window.top.goTop()
        }, document.body.appendChild(a));
        300 < (document.body.scrollTop || wrap.scrollTop) ? (a.style.display = "block", l(a, "show", 30, !1)) : l(a, "hide", 30, function () {
            a.style.display = "none"
        });
        return !1
    }

    function l(a, e, f, c) {
        function k() {
            g <
            h ? (d += 5, d < h ? window.top.timeout = setTimeout(k, f) : c && c()) : (d -= 5, d > h ? window.top.timeout = setTimeout(k, f) : c && c());
            var e = a, b = d;
            e.style.opacity = b / 100;
            e.style.filter = "alpha(opacity=" + b + ")"
        }

        var g = Math.round(100 * a.style.opacity), d = g, h = "show" == e ? 100 : 0;
        clearTimeout(window.top.timeout);
        window.top.timeout = setTimeout(k, 30)
    }

    wrap.addEventListener ? (wrap.addEventListener("scroll", b, !1), wrap.addEventListener("load", b, !1)) : wrap.attachEvent && (wrap.attachEvent("onscroll", b), window.attachEvent("onload", b));
    window.top.goTop =
        function (a, e) {
            a = a || 0.1;
            e = e || 12;
            var f = 0, c = 0, b = 0, g = 0, d = 0, h = 0;
            wrap && (f = wrap.scrollLeft || 0, c = wrap.scrollTop || 0);
            wrap && (b = wrap.scrollLeft || 0, g = wrap.scrollTop || 0);
            d = wrap.scrollX || 0;
            h = wrap.scrollY || 0;
            f = Math.max(d, Math.max(b, f));
            c = Math.max(h, Math.max(g, c));
            g = 1 + a;
            wrap.scrollTo(Math.floor(f / g), Math.floor(c / g));
            (0 < f || 0 < c) && window.setTimeout("top.goTop(" + a + ", " + e + ")", 12);
            return !1
        }
})();