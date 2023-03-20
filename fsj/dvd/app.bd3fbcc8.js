(function(t) {
    function e(e) {
        for (var o, s, r = e[0], c = e[1], l = e[2], d = 0, v = []; d < r.length; d++)
            s = r[d],
            Object.prototype.hasOwnProperty.call(a, s) && a[s] && v.push(a[s][0]),
            a[s] = 0;
        for (o in c)
            Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
        u && u(e);
        while (v.length)
            v.shift()();
        return i.push.apply(i, l || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], o = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== a[c] && (o = !1)
            }
            o && (i.splice(e--, 1),
            t = s(s.s = n[0]))
        }
        return t
    }
    var o = {}
      , a = {
        app: 0
    }
      , i = [];
    function s(e) {
        if (o[e])
            return o[e].exports;
        var n = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.m = t,
    s.c = o,
    s.d = function(t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    s.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(t, e) {
        if (1 & e && (t = s(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (s.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                s.d(n, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return n
    }
    ,
    s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return s.d(e, "a", e),
        e
    }
    ,
    s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    s.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = r.push.bind(r);
    r.push = e,
    r = r.slice();
    for (var l = 0; l < r.length; l++)
        e(r[l]);
    var u = c;
    i.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "0dc5": function(t, e, n) {
        "use strict";
        var o = n("1c6e")
          , a = n.n(o);
        e["default"] = a.a
    },
    "12df": function(t, e, n) {
        t.exports = {
            button: "dvd-MvymrtSQ",
            outline: "dvd-2-tBRZjE",
            primary: "dvd-28HznPuK"
        }
    },
    "1c6e": function(t, e, n) {
        t.exports = {
            toolbar: "dvd-1few534o",
            toolbarActive: "dvd-2hhg91e7",
            title: "dvd-29NLX8Nc",
            closeButton: "dvd-zsE07ZcF"
        }
    },
    "40ae": function(t, e, n) {
        "use strict";
        var o = n("bc93")
          , a = n.n(o);
        e["default"] = a.a
    },
    4566: function(t, e, n) {
        t.exports = {
            rangeGroup: "dvd-2CJ1S_H_",
            label: "dvd-10VvHPaM",
            range: "dvd-1waaxT-F"
        }
    },
    4846: function(t, e, n) {
        t.exports = n.p + "img/dvd-logo.2b70538b.png"
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
        var o = n("2b0e")
          , a = n("2bdd")
          , i = n.n(a)
          , s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("router-view")
        }
          , r = []
          , c = n("2877")
          , l = {}
          , u = Object(c["a"])(l, s, r, !1, null, null, null)
          , d = u.exports
          , v = n("8c4f")
          , f = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("Screensaver"), n("Toolbar")], 1)
        }
          , h = []
          , p = function() {
            var t, e, n = this, o = n.$createElement, a = n._self._c || o;
            return a("main", {
                class: n.$style.screensaver,
                on: {
                    mousemove: n.handleMouseMove
                }
            }, [a("Canvas"), a("Stats", {
                class: [n.$style.stats, (t = {},
                t[n.$style.statsActive] = n.$store.state.statsActive,
                t)]
            }), a("Button", {
                class: [n.$style.button, (e = {},
                e[n.$style.buttonActive] = n.mouseMoving && !n.$store.state.toolbarActive,
                e)],
                attrs: {
                    primary: !0
                },
                on: {
                    "button-click": function(t) {
                        return n.$store.commit("toggleToolbar")
                    }
                }
            }, [n._v(" Options ")])], 1)
        }
          , m = []
          , y = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("canvas", {
                ref: "canvas"
            })
        }
          , b = []
          , g = (n("99af"),
        n("4846"))
          , $ = n.n(g)
          , w = 239 / 488
          , x = {
            data: function() {
                return {
                    iconImage: null,
                    icon: null,
                    context: null,
                    raf: null,
                    directionX: 1,
                    directionY: 1
                }
            },
            computed: {
                vx: function() {
                    return this.$store.state.velocityX * this.directionX
                },
                vy: function() {
                    return this.$store.state.velocityY * this.directionY
                },
                canvas: function() {
                    return this.$refs.canvas
                }
            },
            mounted: function() {
                this.initiateCanvas()
            },
            methods: {
                initiateCanvas: function() {
                    window.removeEventListener("resize", this.handleWindowResize),
                    this.setCanvasDimensions(),
                    this.setDefaultImage(),
                    window.addEventListener("resize", this.handleWindowResize)
                },
                setDefaultImage: function() {
                    var t = .15 * this.canvas.width
                      , e = t * w
                      , n = "".concat(location.protocol, "//").concat(location.host).concat(location.pathname).concat($.a);
                    this.iconImage = new Image(t,e),
                    this.iconImage.src = n,
                    this.iconImage.addEventListener("load", this.renderIcon)
                },
                setCanvasDimensions: function() {
                    var t = this.canvas.parentElement
                      , e = t.clientWidth
                      , n = t.clientHeight;
                    this.canvas.width = e,
                    this.canvas.height = n
                },
                checkCanvasBoundaries: function() {
                    var t = this.iconImage
                      , e = t.width
                      , n = t.height
                      , o = this.icon
                      , a = o.x + e + 1
                      , i = o.y + n + 1
                      , s = o.x + this.vx
                      , r = o.y + this.vy
                      , c = !1
                      , l = !1;
                    (a > this.canvas.width || s < 0) && (this.directionX = -this.directionX,
                    this.$store.commit("incrementWallCount"),
                    c = !0),
                    (i > this.canvas.height || r < 0) && (this.directionY = -this.directionY,
                    this.$store.commit("incrementWallCount"),
                    l = !0),
                    c && l && this.$store.commit("incrementCornerCount")
                },
                updateImageDimensions: function() {
                    var t = .15 * this.canvas.width
                      , e = t * w;
                    this.iconImage.width = t,
                    this.iconImage.height = e
                },
                handleWindowResize: function() {
                    this.setCanvasDimensions(),
                    this.checkCanvasBoundaries(),
                    this.updateImageDimensions()
                },
                draw: function() {
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
                    this.icon.draw(),
                    this.icon.x += this.vx,
                    this.icon.y += this.vy,
                    this.checkCanvasBoundaries(),
                    this.raf = window.requestAnimationFrame(this.draw)
                },
                renderIcon: function() {
                    var t = this.iconImage
                      , e = t.width
                      , n = t.height
                      , o = this.canvas
                      , a = o.width
                      , i = o.height
                      , s = this.context = this.canvas.getContext("2d");
                    this.icon = {
                        x: Math.floor(Math.random() * Math.floor(a - e)),
                        y: Math.floor(Math.random() * Math.floor(i - n)),
                        draw: function() {
                            s.drawImage(t, this.x, this.y, e, n)
                        }
                    },
                    this.raf = window.requestAnimationFrame(this.draw),
                    this.icon.draw()
                }
            },
            beforeDestroy: function() {
                this.iconImage.removeEventListener("load", this.renderIcon)
            }
        }
          , _ = x
          , C = Object(c["a"])(_, y, b, !1, null, null, null)
          , M = C.exports
          , I = function() {
            var t, e, n = this, o = n.$createElement, a = n._self._c || o;
            return a(n.href ? "a" : "button", {
                tag: "button",
                class: [n.$style.button, (t = {},
                t[n.$style.primary] = n.primary,
                t), (e = {},
                e[n.$style.outline] = n.outline,
                e)],
                attrs: {
                    href: n.href,
                    target: n.target,
                    rel: n.rel,
                    type: n.type
                },
                on: {
                    click: function(t) {
                        return n.$emit("button-click")
                    }
                }
            }, [n._t("default")], 2)
        }
          , O = []
          , S = {
            props: {
                href: {
                    type: String,
                    default: null
                },
                target: {
                    type: String,
                    default: null
                },
                rel: {
                    type: String,
                    default: null
                },
                type: {
                    type: String,
                    default: null
                },
                outline: {
                    type: Boolean,
                    default: !1
                },
                primary: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , j = S
          , k = n("dde2");
        function A(t) {
            this["$style"] = k["default"].locals || k["default"]
        }
        var X = Object(c["a"])(j, I, O, !1, A, null, null)
          , E = X.exports
          , T = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: t.$style.stats
            }, [n("table", [n("tbody", [n("tr", [n("th", [t._v("Velocity X")]), n("td", [t._v(" " + t._s(t.$store.state.velocityX) + " ")])]), n("tr", [n("th", [t._v("Velocity Y")]), n("td", [t._v(" " + t._s(t.$store.state.velocityY) + " ")])]), n("tr", [n("th", [t._v("Wall Count")]), n("td", [t._v(" " + t._s(t.$store.state.wallCount) + " ")])]), n("tr", [n("th", [t._v("Corner Count")]), n("td", [t._v(" " + t._s(t.$store.state.cornerCount) + " ")])])])])])
        }
          , Y = []
          , B = n("40ae")
          , P = {};
        function W(t) {
            this["$style"] = B["default"].locals || B["default"]
        }
        var D = Object(c["a"])(P, T, Y, !1, W, null, null)
          , R = D.exports
          , V = null
          , z = {
            data: function() {
                return {
                    mouseMoving: !1
                }
            },
            components: {
                Canvas: M,
                Button: E,
                Stats: R
            },
            methods: {
                handleMouseMove: function() {
                    var t = this;
                    this.mouseMoving = !0,
                    clearTimeout(V),
                    V = setTimeout((function() {
                        t.mouseMoving = !1
                    }
                    ), 1e3)
                }
            },
            destroyed: function() {
                V = null
            }
        }
          , N = z
          , F = n("d99a");
        function G(t) {
            this["$style"] = F["default"].locals || F["default"]
        }
        var H = Object(c["a"])(N, p, m, !1, G, null, null)
          , L = H.exports
          , J = function() {
            var t, e = this, n = e.$createElement, o = e._self._c || n;
            return o("aside", {
                class: [e.$style.toolbar, (t = {},
                t[e.$style.toolbarActive] = e.$store.state.toolbarActive,
                t)]
            }, [o("h1", {
                class: e.$style.title
            }, [e._v("Options")]), o("Range", {
                attrs: {
                    max: 25,
                    value: parseInt(e.$store.state.velocityX),
                    id: "velocityX"
                },
                on: {
                    "range-input": function(t) {
                        return e.$store.commit("setVelocityX", parseInt(t.target.value))
                    }
                }
            }, [e._v(" Velocity X ")]), o("Range", {
                attrs: {
                    max: 25,
                    value: parseInt(e.$store.state.velocityY),
                    id: "velocityY"
                },
                on: {
                    "range-input": function(t) {
                        return e.$store.commit("setVelocityY", parseInt(t.target.value))
                    }
                }
            }, [e._v(" Velocity Y ")]), o("Checkbox", [e._v("Show Stats")]), o("Button", {
                class: e.$style.closeButton,
                attrs: {
                    outline: !0
                },
                on: {
                    "button-click": function(t) {
                        return e.$store.commit("toggleToolbar")
                    }
                }
            }, [e._v(" Close ")])], 1)
        }
          , Z = []
          , q = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: t.$style.rangeGroup
            }, [n("label", {
                class: t.$style.label,
                attrs: {
                    for: t.id
                }
            }, [t._t("default")], 2), n("input", {
                class: t.$style.range,
                attrs: {
                    type: "range",
                    id: t.id,
                    min: t.min,
                    max: t.max,
                    step: t.step
                },
                domProps: {
                    value: t.value
                },
                on: {
                    input: function(e) {
                        return t.handleInput(e)
                    }
                }
            })])
        }
          , K = []
          , Q = (n("a9e3"),
        {
            props: {
                min: {
                    type: Number,
                    default: 1
                },
                max: {
                    type: Number,
                    default: 100
                },
                step: {
                    type: Number,
                    default: 1
                },
                value: {
                    type: Number,
                    default: 1
                },
                id: {
                    type: String,
                    default: null
                }
            },
            methods: {
                handleInput: function(t) {
                    this.$emit("range-input", t)
                }
            }
        })
          , U = Q
          , tt = n("74ef");
        function et(t) {
            this["$style"] = tt["default"].locals || tt["default"]
        }
        var nt = Object(c["a"])(U, q, K, !1, et, null, null)
          , ot = nt.exports
          , at = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("label", {
                class: t.$style.label,
                attrs: {
                    checked: t.$store.state.statsActive
                },
                on: {
                    change: function(e) {
                        return t.$store.commit("toggleStats")
                    }
                }
            }, [n("div", {
                class: t.$style.checkboxWrapper
            }, [n("input", {
                class: t.$style.checkbox,
                attrs: {
                    type: "checkbox"
                }
            })]), t._t("default")], 2)
        }
          , it = []
          , st = n("a989")
          , rt = {};
        function ct(t) {
            this["$style"] = st["default"].locals || st["default"]
        }
        var lt = Object(c["a"])(rt, at, it, !1, ct, null, null)
          , ut = lt.exports
          , dt = {
            components: {
                Button: E,
                Range: ot,
                Checkbox: ut
            }
        }
          , vt = dt
          , ft = n("0dc5");
        function ht(t) {
            this["$style"] = ft["default"].locals || ft["default"]
        }
        var pt = Object(c["a"])(vt, J, Z, !1, ht, null, null)
          , mt = pt.exports
          , yt = {
            components: {
                Screensaver: L,
                Toolbar: mt
            }
        }
          , bt = yt
          , gt = Object(c["a"])(bt, f, h, !1, null, null, null)
          , $t = gt.exports;
        o["a"].use(v["a"]);
        var wt = [{
            path: "/",
            name: "index",
            component: $t
        }]
          , xt = new v["a"]({
            mode: "history",
            base: "/",
            routes: wt
        })
          , _t = xt
          , Ct = n("2f62");
        o["a"].use(Ct["a"]);
        var Mt = new Ct["a"].Store({
            state: {
                toolbarActive: !1,
                statsActive: !1,
                velocityX: 3,
                velocityY: 3,
                wallCount: 0,
                cornerCount: 0
            },
            mutations: {
                toggleToolbar: function(t) {
                    t.toolbarActive = !t.toolbarActive
                },
                toggleStats: function(t) {
                    t.statsActive = !t.statsActive
                },
                setVelocityX: function(t, e) {
                    t.velocityX = e
                },
                setVelocityY: function(t, e) {
                    t.velocityY = e
                },
                incrementWallCount: function(t) {
                    t.wallCount++
                },
                incrementCornerCount: function(t) {
                    t.cornerCount++
                }
            },
            actions: {},
            modules: {}
        });
        n("c1c3");
        o["a"].config.productionTip = !1,
        o["a"].use(i.a, {
            config: {
                id: "G-MNTXDS0Z7G",
                anonymize_ip: !0
            }
        }),
        new o["a"]({
            router: _t,
            store: Mt,
            render: function(t) {
                return t(d)
            }
        }).$mount("#dvd")
    },
    "74ef": function(t, e, n) {
        "use strict";
        var o = n("4566")
          , a = n.n(o);
        e["default"] = a.a
    },
    "7b4a": function(t, e, n) {
        t.exports = {
            screensaver: "dvd-3mChPAqP",
            button: "dvd-1lM1OJB4",
            buttonActive: "dvd-65FuTrAk",
            stats: "dvd-1jp1dXrr",
            statsActive: "dvd-1QW5TYs6"
        }
    },
    a989: function(t, e, n) {
        "use strict";
        var o = n("e611")
          , a = n.n(o);
        e["default"] = a.a
    },
    bc93: function(t, e, n) {
        t.exports = {
            stats: "dvd-10Mi1TWk"
        }
    },
    c1c3: function(t, e, n) {},
    d99a: function(t, e, n) {
        "use strict";
        var o = n("7b4a")
          , a = n.n(o);
        e["default"] = a.a
    },
    dde2: function(t, e, n) {
        "use strict";
        var o = n("12df")
          , a = n.n(o);
        e["default"] = a.a
    },
    e611: function(t, e, n) {
        t.exports = {
            label: "dvd-am9wGK4R",
            checkboxWrapper: "dvd-3dtHhVxM",
            checkbox: "dvd-2MaRDyMZ"
        }
    }
});
//# sourceMappingURL=app.bd3fbcc8.js.map
