! function(e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var s = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    e.exports = n(1)
}, function(e, t, n) {
    var a = n(2);
    window.trace = function(e) {
        console.log(e)
    }, window.app = new a
}, function(e, t, n) {
    var a = n(3),
        s = n(4),
        o = n(5),
        i = n(6),
        c = n(7),
        r = n(8),
        l = n(9),
        u = n(10),
        d = n(14),
        m = n(15),
        f = n(16),
        v = n(17),
        p = n(18),
        g = n(19),
        y = function() {
            var e = document.getElementsByClassName("dropdown"),
                t = document.getElementsByClassName("nav-drawer"),
                n = document.getElementsByClassName("nav-footer"),
                y = document.getElementsByTagName("form"),
                h = document.getElementsByClassName("page-transition-container"),
                E = document.getElementsByClassName("notification"),
                L = document.getElementsByClassName("filter"),
                N = [],
                b = document.getElementsByClassName("cd-item"),
                B = document.getElementsByClassName("code-snippet"),
                C = document.getElementsByClassName("module"),
                w = document.querySelectorAll(".billboard.animate"),
                T = document.querySelectorAll(".back-to-top"),
                x = document.getElementsByClassName("nav-contextual-mobile");
            if (e.length > 0 && Array.prototype.forEach.call(e, function(e, t) {
                    var n = a(e);
                    n["public"]()
                }), t.length > 0) {
                var k = s();
                k["public"]()
            }
            if (w.length > 0 && Array.prototype.forEach.call(w, function(e, t) {
                    var n = o();
                    n["public"](e)
                }), n.length > 0) {
                var S = i();
                S["public"]()
            }
            if (y.length > 0) {
                var A = c();
                A["public"]()
            }
            if (L.length > 0) {
                Array.prototype.forEach.call(L, function(e, t) {
                    var n = l(e);
                    n["public"](), N.push(n)
                }), document.addEventListener("click", function(e) {
                    for (var t = 0; t < N.length; t++) {
                        var n = N[t],
                            a = n.getFilterOpened(),
                            s = n.getEl();
                        a & e.target !== s && !s.contains(e.target) && n.close()
                    }
                });
                var q = document.querySelectorAll(".filtered-modules .module");
                u(L, q, !0)
            }
            if (b.length > 0 && Array.prototype.forEach.call(b, function(e, t) {
                    var n = d(e);
                    n["public"]()
                }), B.length > 0 && Array.prototype.forEach.call(B, function(e, t) {
                    var n = m(e);
                    n["public"]()
                }), h.length > 0) {
                var M = r();
                M["public"]()
            }
            if (C.length > 0) {
                var k = f();
                k["public"]()
            }
            if (E.length > 0 && Array.prototype.forEach.call(E, function(e, t) {
                    var n = v(e);
                    n["public"](e)
                }), T.length > 0 && Array.prototype.forEach.call(T, function(e, t) {
                    var n = p(e);
                    n["public"]()
                }), x.length > 0) {
                var H = g(x[0]);
                H["public"]()
            }
            return {}
        };
    e.exports = y
}, function(e, t) {
    function n(e) {
        function t() {}
        var n = (document.getElementsByClassName("error-message"), function(e, t) {
            var n = [];
            if (t) var a = t.charAt(0);
            for (; e && e !== document; e = e.parentNode) t ? ("." === a && e.classList.contains(t.substr(1)) && n.push(e), "#" === a && e.id === t.substr(1) && n.push(e), "[" === a && e.hasAttribute(t.substr(1, t.length - 1)) && n.push(e), e.tagName.toLowerCase() === t && n.push(e)) : n.push(e);
            return 0 === n.length ? null : n
        });
        return {
            "public": function() {
                function a(e) {
                    for (var t = e.parentNode.childNodes, n = 0, a = 0; a < t.length; a++) {
                        if (t[a] == e) return n;
                        1 == t[a].nodeType && n++
                    }
                    return -1
                }

                function s(e, t) {
                    if (e.classList.toggle(t), 0 == o) {
                        o = !0;
                        var n = e.querySelector("ul").getBoundingClientRect().height;
                        f && (f.style.minHeight = f.getBoundingClientRect().height + n + "px")
                    } else o = !1, f && (f.style.minHeight = v)
                }
                t();
                var o = !1,
                    i = e.getElementsByClassName("title"),
                    c = e.getElementsByTagName("input")[0],
                    r = i[0].getElementsByTagName("span"),
                    l = e.getElementsByTagName("ul"),
                    u = l[0].getElementsByTagName("li"),
                    d = r[0].innerHTML,
                    m = !1,
                    f = document.querySelector(".form-container .t-row"),
                    v = null == f ? "1000px" : window.getComputedStyle(f).minHeight,
                    p = function(t) {
                        var a = n(e, ".dropdown-container");
                        a[0].classList.contains("disabled") || s(e, "closed")
                    };
                i[0].addEventListener("keypress", p), i[0].addEventListener("click", p);
                for (var g = 0; g < u.length; g++) {
                    u[g].addEventListener("keypress", y), u[g].addEventListener("click", y);
                    var y = function(t) {
                        var n = t.target;
                        if (0 != a(n) && a(n) != u.length - 1) {
                            t.preventDefault();
                            var o = n.innerHTML,
                                f = n.dataset.val;
                            if (r[0].innerHTML = o, c.value = f, s(e, "closed"), i[0].classList.remove("error"), o != d && m === !1) {
                                var v = l[0].querySelector(".hidden");
                                v.style.display = "block", m = !0
                            }
                        }
                    }
                }
                document.addEventListener("click", function(t) {
                    1 != o || t.target === e || e.contains(t.target) || (e.classList.add("closed"), o = !1, f.style.minHeight = v)
                })
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        return {
            "public": function() {
                function e() {
                    "undefined" != typeof m && null !== m && m.classList.remove("active"), "undefined" != typeof o[0] && o[0].classList.remove("animate"), "undefined" != typeof s[0] && s[0].classList.remove("animate")
                }

                function n() {
                    h = !0, u.classList.add("active");
                    var e = new XMLHttpRequest;
                    e.open("GET", "assets/data/suggestions.json", !0), d.innerHTML = "", E = [], e.onload = function(e) {
                        if (this.status >= 200 && this.status < 400) {
                            var t = JSON.parse(this.response),
                                n = t[0].suggestions;
                            Array.prototype.forEach.call(n, function(e, t) {
                                var n = document.createElement("li"),
                                    a = document.createTextNode(e);
                                n.appendChild(a), E.push(n), d.appendChild(n)
                            }), Array.prototype.forEach.call(E, function(e, t) {
                                e.addEventListener("click", function(e) {
                                    l.value = this.innerHTML, u.classList.remove("active")
                                })
                            })
                        }
                    }, e.onerror = function() {}, e.send()
                }

                function a(e, t) {
                    if (e.classList) e.classList.toggle(t);
                    else {
                        var n = e.className.split(" "),
                            a = n.indexOf(t);
                        a >= 0 ? n.splice(a, 1) : n.push(t), e.className = n.join(" ")
                    }
                }
                t();
                var s = document.getElementsByClassName("nav-drawer"),
                    o = document.getElementsByClassName("masthead"),
                    i = document.getElementsByClassName("signed-in_dropdown"),
                    c = document.getElementsByClassName("avatar"),
                    r = (document.getElementsByClassName("header-left"), document.getElementsByClassName("search")),
                    l = document.querySelector(".search input"),
                    u = document.querySelector(".search-suggestions"),
                    d = document.getElementById("search-list"),
                    m = document.getElementById("loader"),
                    f = document.getElementsByClassName("sticky-cta"),
                    v = document.querySelector(".nav-contextual-mobile"),
                    p = document.querySelector(".nav-contextual-mobile .current"),
                    g = !1,
                    y = !1,
                    h = !1,
                    E = [];
                f.length > 0 && (s[0].classList.add("with-cta"), "undefined" != typeof o[0] && o[0].classList.add("with-cta")), setTimeout(function() {
                    e()
                }, 1e3);
                for (var L = 0; L < s.length; L++) ! function(e) {
                    var t = s[L].getElementsByClassName("header-left")[0];
                    t.addEventListener("click", function(t) {
                        t.preventDefault();
                        var o = N(this, ".nav-drawer");
                        if (!o[0].classList.contains("no-interaction")) return a(s[e], "active"), a(n, "active"), !1
                    });
                    var n = s[L].getElementsByClassName("nav-icon")[0];
                    "undefined" != typeof n && n.addEventListener("click", function(t) {
                        return t.preventDefault(), a(s[e], "active"), a(n, "active"), !1
                    }), document.addEventListener("click", function(t) {
                        "undefined" != typeof s[e] && (t.target === s[e] || s[e].contains(t.target) || (s[e].classList.remove("active"), n.classList.remove("active")))
                    })
                }(L);
                var N = function(e, t) {
                    var n = [];
                    if (t) var a = t.charAt(0);
                    for (; e && e !== document; e = e.parentNode) t ? ("." === a && e.classList.contains(t.substr(1)) && n.push(e), "#" === a && e.id === t.substr(1) && n.push(e), "[" === a && e.hasAttribute(t.substr(1, t.length - 1)) && n.push(e), e.tagName.toLowerCase() === t && n.push(e)) : n.push(e);
                    return 0 === n.length ? null : n
                };
                // JB - adding existence check
                if (typeof variable !== 'undefined') {
                // JB - end existence check
	                l.addEventListener("keypress", function(e) {
	                    0 == h && n()
	                }), document.addEventListener("click", function(e) {
	                    1 != g || e.target === c[0] || c[0].contains(e.target) || e.target === i[0] || i[0].contains(e.target) || (i[0].classList.remove("active"), g = !1), 1 != y || e.target === r[0] || r[0].contains(e.target) || (u.classList.remove("active"), l.value = "", r[0].classList.remove("opened"), y = !1, h = !1)
	                });
	            // JB - start adding existence bracket    
	            }
	            // JB - end adding existence bracket
                var b = document.querySelector(".nav-contextual-mobile .current ul");
                "undefined" != typeof p && null !== p && p.addEventListener("click", function(e) {
                    return e.target === b || b.contains(e.target) ? void 0 : (e.preventDefault(), a(v, "active"), !1)
                });
                var B = document.querySelector("#contextual-container .nav-contextual-mobile"),
                    C = document.querySelector("#contextual-container  .nav-contextual-mobile .current"),
                    w = document.querySelector("#contextual-container .nav-contextual-mobile .current ul");
                "undefined" != typeof C && null !== C && C.addEventListener("click", function(e) {
                    return e.target === w || w.contains(e.target) ? void 0 : (e.preventDefault(), a(B, "active"), !1)
                })
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        return {
            "public": function(e) {
                t(), window.setTimeout(function() {
                    e.classList.remove("animate")
                }, 3e3)
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        var n = document.getElementsByClassName("language")[0],
            a = document.getElementsByClassName("lang-selection")[0],
            s = document.getElementsByClassName("lang-flyout")[0],
            o = !1;
        return {
            "public": function() {
                t(), "undefined" != typeof n && a.addEventListener("click", function(e) {
                    return e.preventDefault(), 0 == o ? (o = !0, n.classList.add("active")) : (o = !1, n.classList.remove("active")), !1
                }), document.addEventListener("click", function(e) {
                    1 != o || e.target === s || s.contains(e.target) || e.target === a || a.contains(e.target) || (n.classList.remove("active"), o = !1)
                })
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        var n = document.getElementById("input-email"),
            a = document.getElementsByClassName("error-message"),
            s = document.getElementsByClassName("dropdown"),
            o = document.getElementsByTagName("textarea");
        return {
            "public": function() {
                function e() {
                    m.passes("test-form") && (console.log("validation test passes"), a[0].classList.remove("active"), n.classList.remove("error")), m.fails("test-form") && (console.log("validation test fails"), a[0].classList.add("active"), n.classList.add("error")), Array.prototype.forEach.call(s, function(e, t) {
                        var n = e.getElementsByClassName("title")[0].getElementsByTagName("span")[0];
                        "Select Country" == n.innerHTML ? n.parentNode.classList.add("error") : n.parentNode.classList.remove("error")
                    }), Array.prototype.forEach.call(o, function(e, t) {
                        var n = e.value.length,
                            a = e.nextElementSibling;
                        140 > n ? (a.classList.add("active"), e.classList.add("error")) : (a.classList.remove("active"), e.classList.remove("error"))
                    })
                }

                function i(e) {
                    var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    return e ? t.setAttributeNS(null, "viewBox", "0 0 100 100") : t.setAttributeNS(null, "viewBox", "0 0 100 100"), t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t
                }

                function c(e, t, n) {
                    var a = i(n);
                    "saved" === n ? L.appendChild(a) : e.parentNode.appendChild(a), e.checked && r(e, t), e.addEventListener("change", function() {
                        e.checked ? r(e, t) : l(e)
                    })
                }

                function r(e, t, n) {
                    var a, s, o = [];
                    if ("saved" === n) var i = L.querySelector("svg");
                    else var i = e.parentNode.querySelector("svg");
                    a = g.checkmark, s = y.checkmark, o.push(document.createElementNS("http://www.w3.org/2000/svg", "path"));
                    for (var c = 0, r = o.length; r > c; ++c) {
                        var l = o[c];
                        i.appendChild(l), l.setAttributeNS(null, "d", a[c]);
                        var u = l.getTotalLength();
                        l.style.strokeDasharray = u + " " + u, 0 === c ? l.style.strokeDashoffset = Math.floor(u) - 1 : l.style.strokeDashoffset = u, l.getBoundingClientRect(), l.style.transition = l.style.WebkitTransition = l.style.MozTransition = "stroke-dashoffset " + s.speed + "s " + s.easing + " " + c * s.speed + "s", l.style.strokeDashoffset = "0"
                    }
                }

                function l(e) {
                    Array.prototype.slice.call(e.parentNode.querySelectorAll("svg > path")).forEach(function(e) {
                        e.parentNode.removeChild(e)
                    })
                }
                t();
                var u = document.getElementsByClassName("validate"),
                    d = {};
                if (d["test-form"] = {}, Array.prototype.forEach.call(u, function(e, t) {
                        d["test-form"][e.id] = e.classList[1]
                    }), "undefined" != typeof Validatinator) var m = new Validatinator(d);
                n && n.addEventListener("blur", function(e) {
                    return e.preventDefault(), !1
                });
                var f = document.getElementById("submit-test");
                n && f.addEventListener("click", function(t) {
                    return t.preventDefault(), e(), !1
                });
                var v = document.getElementsByClassName("circle-loader")[0];
                "undefined" != typeof v && v.classList.add("active");
                var p = Array.prototype.slice.call(document.querySelectorAll('.ac-checkmark input[type="checkbox"]')),
                    g = {
                        checkmark: ["M11.3,67 38.6,90.3 82.1,23.4"]
                    },
                    y = {
                        checkmark: {
                            speed: .2,
                            easing: "ease-in-out"
                        }
                    };
                p.forEach(function(e, t) {
                    c(e, "checkmark")
                });
                var h = document.getElementsByClassName("btn-saved")[0];
                if ("undefined" != typeof h) {
                    var E = h.getElementsByTagName("span")[0],
                        L = h.getElementsByClassName("check")[0];
                    h.addEventListener("click", function(e) {
                        return e.preventDefault(), this.classList.add("loading"), E.classList.add("loading"), c(L, "checkmark", "saved"), window.setTimeout(function() {
                            h.classList.remove("loading"), h.classList.add("end")
                        }, 3e3), window.setTimeout(function() {
                            r(L, "checkmark", "saved")
                        }, 3e3), !1
                    })
                }
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        var n, a = document.getElementById("loader"),
            s = document.getElementById("first"),
            o = document.getElementById("second"),
            i = !1;
        return {
            "public": function() {
                function e() {
                    first.classList.remove("active");
                    var e = new XMLHttpRequest;
                    e.open("GET", "page-transition-content-2.html", !0), e.onload = function() {
                        this.status >= 200 && this.status < 400 && (o.innerHTML = this.response)
                    }, e.send(), setTimeout(function() {
                        s.style.left = -n + "px", o.style.left = "0px", a.classList.remove("active")
                    }, 3e3), setTimeout(function() {
                        info.classList.add("active")
                    }, 4e3), i = !0
                }

                function c() {
                    n = window.innerWidth, a.width = n + "px", 0 == i && (o.style.left = n + "px")
                }
                t();
                var r = new XMLHttpRequest;
                r.open("GET", "page-transition-content-1.html", !0), r.onload = function() {
                    this.status >= 200 && this.status < 400 && (s.innerHTML = this.response)
                }, r.send(), setTimeout(function() {
                    a.classList.add("active")
                }, 2e3), setTimeout(function() {
                    first.classList.add("active"), a.classList.remove("active")
                }, 4500), c(), o.style.left = n + "px", s.addEventListener("click", function(t) {
                    setTimeout(function() {
                        a.classList.add("active")
                    }, 1e3), e()
                }), window.addEventListener("resize", function(e) {
                    c()
                })
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t(e) {
            var e = e;
            u = !1, i = e.getElementsByClassName("title"), c = e.getElementsByTagName("span"), r = e.getElementsByTagName("ul"), l = e.getElementsByTagName("li")
        }

        function n() {
            window.addEventListener("resize", function(e) {
                o()
            }), i[0].addEventListener("click", function(t) {
                s(e, "closed")
            })
        }

        function a() {
            e.classList.add("closed"), u = !1
        }

        function s(e, t) {
            e.classList.toggle(t), u = 0 == u
        }

        function o() {}
        var i = null,
            c = null,
            r = null,
            l = null,
            u = !1;
        return {
            "public": function() {
                t(e), n()
            },
            getFilterOpened: function() {
                return u
            },
            getEl: function() {
                return e
            },
            close: function() {
                a()
            },
            resize: function() {
                o()
            }
        }
    }
    e.exports = n
}, function(e, t, n) {
    function a(e, t, n) {
        function a(e) {
            f = e, v = t;
            for (var n = 0; n < f.length; n++) {
                var a = f[n];
                m.push({
                    active: [],
                    tracker: !1,
                    inputsEl: a.getElementsByTagName("input")
                })
            }
            for (var n = 0; n < v.length; n++) {
                var s = v[n],
                    o = s.dataset.tags,
                    i = o.split(",");
                i = i.filter(Boolean);
                for (var c = [], r = 0; r < i.length; r++) {
                    i[r];
                    var l = i[r].split("/");
                    if (l.length > 1) var u = l[1].split("+");
                    u.length > 1 && (l[1] = u), c.concat(u), Array.prototype.push.apply(c, u)
                }
                g.push({
                    active: !0,
                    filters: c,
                    itemEl: v[n]
                })
            }
        }

        function i() {
            for (var e = 0; e < f.length; e++) f[e].addEventListener("change", function(e, t) {
                c()
            })
        }

        function c() {
            for (var e = 0; e < m.length; e++) {
                var t = m[e];
                t.active = [];
                for (var n = 0; n < t.inputsEl.length; n++) {
                    var a = t.inputsEl[n],
                        s = a.getAttribute("id");
                    a.checked && t.active.push(s)
                }
                t.active.length && (t.tracker = 0)
            }
            r()
        }

        function r() {
            var e = !1,
                t = function(e) {
                    for (var t = !0, n = 0; n < m.length; n++) {
                        var a = m[n],
                            s = !0;
                        if (a.active.length) {
                            for (var s = !1, o = 0; o < a.active.length; o++)
                                for (var i = a.active[o], c = 0; c < e.filters.length; c++) {
                                    var r = e.filters[c];
                                    r === i && (s = !0)
                                }
                            0 == s && (t = !1)
                        }
                    }
                    return t
                },
                n = function() {
                    0 == g.length && (e = !0);
                    for (var n = 0; n < g.length; n++) {
                        var a = g[n],
                            s = t(a);
                        s ? a.active = !0 : a.active = !1, n === g.length - 1 && (e = !0)
                    }
                };
            do n(); while (!e);
            u()
        }

        function l() {
            for (var e = 0; e < m.length; e++) m[e].active = [];
            r()
        }

        function u() {
            function e(e, t, a) {
                setTimeout(function() {
                    e.itemEl.style.display = "inline-block", n && (o(e.itemEl, "no-margin"), a % p === 0 ? s(e.itemEl, "no-margin") : s(e.itemEl, "active"))
                }, t - 50), setTimeout(function() {
                    e.itemEl.style.opacity = 1
                }, t)
            }

            function t(e, t) {
                setTimeout(function() {
                    e.itemEl.style.display = "none"
                }, t)
            }
            for (var a = y, i = 0, c = 0; c < g.length; c++) {
                var r = g[c];
                r.itemEl.style.opacity = 0, r.active ? (i++, e(r, a, i), a += h) : t(r, y)
            }
        }

        function d() {}
        var m = [],
            f = null,
            v = null,
            n = n ? n : !1,
            p = 3,
            g = [],
            y = 500,
            h = 120;
        return a(e), i(), {
            "public": function() {},
            resetFilters: function() {
                l()
            },
            resize: function() {
                d()
            }
        }
    }
    var s = n(11),
        o = n(13);
    e.exports = a
}, function(e, t, n) {
    function a(e, t) {
        e.classList ? e.classList.add(t) : s(e, t) || (e.className += " " + t)
    }
    var s = n(12);
    e.exports = a
}, function(e, t) {
    function n(e, t) {
        return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
    }
    e.exports = n
}, function(e, t, n) {
    function a(e, t) {
        if (e.classList) e.classList.remove(t);
        else if (s(e, t)) {
            var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className.replace(n, " ")
        }
    }
    var s = n(12);
    e.exports = a
}, function(e, t) {
    function n(e) {
        function t() {}
        var n = e.querySelector("h5");
        e.querySelectorAll(".cdi-content"), e.querySelectorAll(".arrow-down");
        return {
            "public": function() {
                t(), n.addEventListener("click", function(t) {
                    e.classList.toggle("opened"), t.preventDefault()
                })
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        var n = e.getElementsByClassName("codelinecopybtn"),
            a = e.getElementsByClassName("cs-code"),
            s = a[0].getElementsByTagName("code");
        return {
            "public": function() {
                function o(e) {
                    var t = l(e, "cs-code"),
                        n = e.innerHTML,
                        a = n.split("\n");
                    e.style.display = "none", "PRE" == e.parentElement.nodeName && (e.parentElement.style.display = "none");
                    for (var s = 0; s < a.length; s++) {
                        var o = s;
                        if (10 > s && (o = "0" + s), 0 == s || s == a.length - 1) {
                            var c = new RegExp("\\s", "g"),
                                r = c.test(a[s]);
                            if (r || "" == a[s]) continue
                        }
                        i(o, a[s], t)
                    }
                }

                function i(e, t, n) {
                    var a = document.createElement("code");
                    a.innerHTML = t;
                    var s = document.createElement("pre");
                    s.appendChild(a);
                    var o = document.createElement("div");
                    o.className = "number-line", o.innerHTML = e;
                    var i = document.createElement("div");
                    i.className = "cs-code-line", i.appendChild(o), i.appendChild(s), n.appendChild(i)
                }

                function c(e) {
                    var t, n, a;
                    if (n = "", t = e.parentNode.previousElementSibling.querySelectorAll("div.cs-code-line code"), t.length > 0) {
                        for (a = 0; a < t.length; a++) n = n + t[a].textContent + " \n";
                        var s = new ZeroClipboard(e);
                        s.on("ready", function(e) {
                            s.on("copy", function(e) {
                                e.clipboardData.setData("text/plain", n)
                            }), s.on("aftercopy", function(e) {})
                        }), s.on("error", function(e) {
                            ZeroClipboard.destroy()
                        })
                    }
                }

                function r(e) {
                    var t, n, a, s;
                    if (n = "", t = e.parentNode.previousElementSibling.querySelectorAll("div.cs-code-line code"), t.length > 0) {
                        for (s = 0; s < t.length; s++) n = n + t[s].textContent + " \n";
                        var o = Math.floor((new Date).getTime() / 1e3),
                            i = "cs_code_copy_" + o;
                        a = document.createElement("textarea"), a.id = i, a.style.position = "fixed", a.style.opacity = 0, a.value = n, document.body.appendChild(a), document.getElementById(i).focus(), document.getElementById(i).select();
                        try {
                            document.execCommand("copy")
                        } catch (c) {} finally {
                            document.body.removeChild(a)
                        }
                    }
                }

                function l(e, t) {
                    for (;
                        (e = e.parentElement) && !e.classList.contains(t););
                    return e
                }
                t(), Array.prototype.forEach.call(s, function(e, t) {
                    o(e)
                }), Array.prototype.forEach.call(n, function(e, t) {
                    document.queryCommandSupported("copy") ? e.addEventListener("click", function(t) {
                        r(e)
                    }) : "undefined" != typeof ZeroClipboard && (ZeroClipboard.config({
                        swfPath: "/assets/swf/zeroclipboard.swf",
                        cacheBust: !0
                    }), c(e))
                });
                var u = e;
                if (Array.prototype.forEach.call(a, function(e, t) {
                        var n = e.querySelectorAll(".cs-code-line").length;
                        if (n > 16 && !u.classList.contains("code-snippet-styleguide")) {
                            e.classList.add("reduced"), e.parentElement.classList.add("grad");
                            for (var t = 16; n > t; t++) e.querySelectorAll(".cs-code-line")[t].classList.add("hidden");
                            var a = e.parentNode.querySelector(".see");
                            u.classList.contains("code-snippet-styleguide") ? a.addEventListener("click", function(e) {
                                u.classList.toggle("opened")
                            }) : (a.classList.add("active"), a.classList.add("more"), a.addEventListener("click", function(t) {
                                if (this.classList.contains("more")) {
                                    this.getElementsByTagName("span")[0].innerHTML = "See Less";
                                    for (var a = 16; n > a; a++) e.querySelectorAll(".cs-code-line")[a].classList.remove("hidden");
                                    e.parentElement.classList.remove("grad"), this.classList.remove("more"), this.classList.add("less")
                                } else {
                                    this.getElementsByTagName("span")[0].innerHTML = "See More";
                                    for (var a = 16; n > a; a++) e.querySelectorAll(".cs-code-line")[a].classList.add("hidden");
                                    this.classList.remove("less"), this.classList.add("more"), e.parentElement.classList.add("grad")
                                }
                            }))
                        }
                    }), e.classList.contains("code-snippet-styleguide")) {
                    var d = e.getElementsByTagName("h5")[0];
                    d.addEventListener("click", function(t) {
                        e.classList.toggle("opened")
                    });
                    var m = e.getElementsByClassName("see")[0];
                    m.addEventListener("click", function(t) {
                        e.classList.toggle("opened")
                    })
                }
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        return {
            "public": function() {
                t()
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        return {
            "public": function() {
                t(), e.addEventListener("click", function(e) {
                    return e.preventDefault(), this.classList.remove("active"), !1
                })
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        return {
            "public": function() {
                function n() {
                    var t = document.querySelector("footer"),
                        n = e.querySelector("button");
                    n.getBoundingClientRect().top >= t.getBoundingClientRect().top - 200 && n.classList.add("absolute"), t.getBoundingClientRect().top - window.innerHeight > 10 && n.classList.remove("absolute")
                }

                function a(e, t, n) {
                    var a = e.scrollTop,
                        s = t - a,
                        o = 0,
                        i = 20,
                        c = function() {
                            o += i;
                            var t = Math.easeOutQuart(o, a, s, n);
                            e.scrollTop = t, n > o && setTimeout(c, i)
                        };
                    c()
                }
                t(), n(), e.addEventListener("click", function(e) {
                    var t = document.documentElement.scrollTop > 0 ? document.documentElement : document.body;
                    a(t, 0, 1e3)
                });
                var s = null;
                e.addEventListener("mouseover", function(t) {
                    var n = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop;
                    n > 400 ? (clearTimeout(s), e.classList.add("reveal")) : e.classList.remove("reveal")
                }), document.addEventListener("scroll", function() {
                    clearTimeout(s);
                    var t = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop;
                    t > 400 ? (e.classList.add("reveal"), n()) : e.classList.remove("reveal"), s = setTimeout(function() {
                        e.classList.remove("reveal")
                    }, 500)
                }), Math.easeOutQuart = function(e, t, n, a) {
                    return e /= a, e--, -n * (e * e * e * e - 1) + t
                }
            }
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        function t() {}
        return {
            "public": function() {
                t();
                var n = document.getElementsByClassName("transparent"),
                    a = function(e, t) {
                        var n = [];
                        if (t) var a = t.charAt(0);
                        for (; e && e !== document; e = e.parentNode) t ? ("." === a && e.classList.contains(t.substr(1)) && n.push(e), "#" === a && e.id === t.substr(1) && n.push(e), "[" === a && e.hasAttribute(t.substr(1, t.length - 1)) && n.push(e), e.tagName.toLowerCase() === t && n.push(e)) : n.push(e);
                        return 0 === n.length ? null : n
                    },
                    s = a(e, ".t-row");
                s[0].classList.add("t-row-contextual");
                var o = document.getElementsByClassName("styleguide");
                n.length > 0 && !o && s[0].classList.add("transp");
                var i = document.getElementsByClassName("nav-contextual-mobile")[0];
                document.addEventListener("scroll", function() {
                    var e = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop,
                        t = window.innerWidth;
                    e > 400 && 900 > t ? i.classList.add("fixedPos") : i.classList.remove("fixedPos")
                })
            }
        }
    }
    e.exports = n
}]);