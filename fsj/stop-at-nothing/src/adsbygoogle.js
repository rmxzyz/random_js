var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function() {
        /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
        var n;
        function aa(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }
        var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype)
                return a;
            a[b] = c.value;
            return a
        }
        ;
        function ca(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("Cannot find global object");
        }
        var da = ca(this)
          , ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x")
          , q = {}
          , fa = {};
        function t(a, b) {
            var c = fa[b];
            if (null == c)
                return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
        function x(a, b, c) {
            if (b)
                a: {
                    var d = a.split(".");
                    a = 1 === d.length;
                    var e = d[0], f;
                    !a && e in q ? f = q : f = da;
                    for (e = 0; e < d.length - 1; e++) {
                        var g = d[e];
                        if (!(g in f))
                            break a;
                        f = f[g]
                    }
                    d = d[d.length - 1];
                    c = ea && "es6" === c ? f[d] : null;
                    b = b(c);
                    null != b && (a ? ba(q, d, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    }) : b !== c && (fa[d] = ea ? da.Symbol(d) : "$jscp$" + d,
                    d = fa[d],
                    ba(f, d, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    })))
                }
        }
        x("Symbol", function(a) {
            function b(e) {
                if (this instanceof b)
                    throw new TypeError("Symbol is not a constructor");
                return new c("jscomp_symbol_" + (e || "") + "_" + d++,e)
            }
            function c(e, f) {
                this.a = e;
                ba(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: f
                })
            }
            if (a)
                return a;
            c.prototype.toString = function() {
                return this.a
            }
            ;
            var d = 0;
            return b
        }, "es6");
        x("Symbol.iterator", function(a) {
            if (a)
                return a;
            a = (0,
            q.Symbol)("Symbol.iterator");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = da[b[c]];
                "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return ha(aa(this))
                    }
                })
            }
            return a
        }, "es6");
        function ha(a) {
            a = {
                next: a
            };
            a[t(q.Symbol, "iterator")] = function() {
                return this
            }
            ;
            return a
        }
        function ia(a) {
            return a.raw = a
        }
        function y(a) {
            var b = "undefined" != typeof q.Symbol && t(q.Symbol, "iterator") && a[t(q.Symbol, "iterator")];
            return b ? b.call(a) : {
                next: aa(a)
            }
        }
        function ja(a) {
            if (!(a instanceof Array)) {
                a = y(a);
                for (var b, c = []; !(b = a.next()).done; )
                    c.push(b.value);
                a = c
            }
            return a
        }
        var ka = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        }
        , la;
        if (ea && "function" == typeof Object.setPrototypeOf)
            la = Object.setPrototypeOf;
        else {
            var ma;
            a: {
                var na = {
                    Ja: !0
                }
                  , oa = {};
                try {
                    oa.__proto__ = na;
                    ma = oa.Ja;
                    break a
                } catch (a) {}
                ma = !1
            }
            la = ma ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b)
                    throw new TypeError(a + " is not extensible");
                return a
            }
            : null
        }
        var pa = la;
        function z(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (pa)
                pa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.ab = b.prototype
        }
        function qa(a, b, c) {
            if (null == a)
                throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp)
                throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        }
        x("String.prototype.endsWith", function(a) {
            return a ? a : function(b, c) {
                var d = qa(this, b, "endsWith");
                void 0 === c && (c = d.length);
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var e = b.length; 0 < e && 0 < c; )
                    if (d[--c] != b[--e])
                        return !1;
                return 0 >= e
            }
        }, "es6");
        function ra(a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e];
                if (b.call(c, f, e, a))
                    return {
                        ua: e,
                        Ia: f
                    }
            }
            return {
                ua: -1,
                Ia: void 0
            }
        }
        x("Array.prototype.find", function(a) {
            return a ? a : function(b, c) {
                return ra(this, b, c).Ia
            }
        }, "es6");
        x("String.prototype.startsWith", function(a) {
            return a ? a : function(b, c) {
                var d = qa(this, b, "startsWith")
                  , e = d.length
                  , f = b.length;
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var g = 0; g < f && c < e; )
                    if (d[c++] != b[g++])
                        return !1;
                return g >= f
            }
        }, "es6");
        function sa(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
        var ta = ea && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d)
                        sa(d, e) && (a[e] = d[e])
            }
            return a
        }
        ;
        x("Object.assign", function(a) {
            return a || ta
        }, "es6");
        x("Promise", function(a) {
            function b(g) {
                this.a = 0;
                this.f = void 0;
                this.c = [];
                this.u = !1;
                var h = this.g();
                try {
                    g(h.resolve, h.reject)
                } catch (k) {
                    h.reject(k)
                }
            }
            function c() {
                this.a = null
            }
            function d(g) {
                return g instanceof b ? g : new b(function(h) {
                    h(g)
                }
                )
            }
            if (a)
                return a;
            c.prototype.c = function(g) {
                if (null == this.a) {
                    this.a = [];
                    var h = this;
                    this.f(function() {
                        h.h()
                    })
                }
                this.a.push(g)
            }
            ;
            var e = da.setTimeout;
            c.prototype.f = function(g) {
                e(g, 0)
            }
            ;
            c.prototype.h = function() {
                for (; this.a && this.a.length; ) {
                    var g = this.a;
                    this.a = [];
                    for (var h = 0; h < g.length; ++h) {
                        var k = g[h];
                        g[h] = null;
                        try {
                            k()
                        } catch (l) {
                            this.g(l)
                        }
                    }
                }
                this.a = null
            }
            ;
            c.prototype.g = function(g) {
                this.f(function() {
                    throw g;
                })
            }
            ;
            b.prototype.g = function() {
                function g(l) {
                    return function(m) {
                        k || (k = !0,
                        l.call(h, m))
                    }
                }
                var h = this
                  , k = !1;
                return {
                    resolve: g(this.J),
                    reject: g(this.h)
                }
            }
            ;
            b.prototype.J = function(g) {
                if (g === this)
                    this.h(new TypeError("A Promise cannot resolve to itself"));
                else if (g instanceof b)
                    this.L(g);
                else {
                    a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                    }
                    h ? this.G(g) : this.j(g)
                }
            }
            ;
            b.prototype.G = function(g) {
                var h = void 0;
                try {
                    h = g.then
                } catch (k) {
                    this.h(k);
                    return
                }
                "function" == typeof h ? this.M(h, g) : this.j(g)
            }
            ;
            b.prototype.h = function(g) {
                this.m(2, g)
            }
            ;
            b.prototype.j = function(g) {
                this.m(1, g)
            }
            ;
            b.prototype.m = function(g, h) {
                if (0 != this.a)
                    throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.a);
                this.a = g;
                this.f = h;
                2 === this.a && this.K();
                this.B()
            }
            ;
            b.prototype.K = function() {
                var g = this;
                e(function() {
                    if (g.I()) {
                        var h = da.console;
                        "undefined" !== typeof h && h.error(g.f)
                    }
                }, 1)
            }
            ;
            b.prototype.I = function() {
                if (this.u)
                    return !1;
                var g = da.CustomEvent
                  , h = da.Event
                  , k = da.dispatchEvent;
                if ("undefined" === typeof k)
                    return !0;
                "function" === typeof g ? g = new g("unhandledrejection",{
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection",{
                    cancelable: !0
                }) : (g = da.document.createEvent("CustomEvent"),
                g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.f;
                return k(g)
            }
            ;
            b.prototype.B = function() {
                if (null != this.c) {
                    for (var g = 0; g < this.c.length; ++g)
                        f.c(this.c[g]);
                    this.c = null
                }
            }
            ;
            var f = new c;
            b.prototype.L = function(g) {
                var h = this.g();
                g.ba(h.resolve, h.reject)
            }
            ;
            b.prototype.M = function(g, h) {
                var k = this.g();
                try {
                    g.call(h, k.resolve, k.reject)
                } catch (l) {
                    k.reject(l)
                }
            }
            ;
            b.prototype.then = function(g, h) {
                function k(r, u) {
                    return "function" == typeof r ? function(w) {
                        try {
                            l(r(w))
                        } catch (v) {
                            m(v)
                        }
                    }
                    : u
                }
                var l, m, p = new b(function(r, u) {
                    l = r;
                    m = u
                }
                );
                this.ba(k(g, l), k(h, m));
                return p
            }
            ;
            b.prototype.catch = function(g) {
                return this.then(void 0, g)
            }
            ;
            b.prototype.ba = function(g, h) {
                function k() {
                    switch (l.a) {
                    case 1:
                        g(l.f);
                        break;
                    case 2:
                        h(l.f);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.a);
                    }
                }
                var l = this;
                null == this.c ? f.c(k) : this.c.push(k);
                this.u = !0
            }
            ;
            b.resolve = d;
            b.reject = function(g) {
                return new b(function(h, k) {
                    k(g)
                }
                )
            }
            ;
            b.race = function(g) {
                return new b(function(h, k) {
                    for (var l = y(g), m = l.next(); !m.done; m = l.next())
                        d(m.value).ba(h, k)
                }
                )
            }
            ;
            b.all = function(g) {
                var h = y(g)
                  , k = h.next();
                return k.done ? d([]) : new b(function(l, m) {
                    function p(w) {
                        return function(v) {
                            r[w] = v;
                            u--;
                            0 == u && l(r)
                        }
                    }
                    var r = []
                      , u = 0;
                    do
                        r.push(void 0),
                        u++,
                        d(k.value).ba(p(r.length - 1), m),
                        k = h.next();
                    while (!k.done)
                }
                )
            }
            ;
            return b
        }, "es6");
        x("WeakMap", function(a) {
            function b(g) {
                this.a = (f += Math.random() + 1).toString();
                if (g) {
                    g = y(g);
                    for (var h; !(h = g.next()).done; )
                        h = h.value,
                        this.set(h[0], h[1])
                }
            }
            function c() {}
            function d(g) {
                var h = typeof g;
                return "object" === h && null !== g || "function" === h
            }
            if (function() {
                if (!a || !Object.seal)
                    return !1;
                try {
                    var g = Object.seal({})
                      , h = Object.seal({})
                      , k = new a([[g, 2], [h, 3]]);
                    if (2 != k.get(g) || 3 != k.get(h))
                        return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }())
                return a;
            var e = "$jscomp_hidden_" + Math.random()
              , f = 0;
            b.prototype.set = function(g, h) {
                if (!d(g))
                    throw Error("Invalid WeakMap key");
                if (!sa(g, e)) {
                    var k = new c;
                    ba(g, e, {
                        value: k
                    })
                }
                if (!sa(g, e))
                    throw Error("WeakMap key fail: " + g);
                g[e][this.a] = h;
                return this
            }
            ;
            b.prototype.get = function(g) {
                return d(g) && sa(g, e) ? g[e][this.a] : void 0
            }
            ;
            b.prototype.has = function(g) {
                return d(g) && sa(g, e) && sa(g[e], this.a)
            }
            ;
            b.prototype.delete = function(g) {
                return d(g) && sa(g, e) && sa(g[e], this.a) ? delete g[e][this.a] : !1
            }
            ;
            return b
        }, "es6");
        x("Map", function(a) {
            function b() {
                var h = {};
                return h.F = h.next = h.head = h
            }
            function c(h, k) {
                var l = h.a;
                return ha(function() {
                    if (l) {
                        for (; l.head != h.a; )
                            l = l.F;
                        for (; l.next != l.head; )
                            return l = l.next,
                            {
                                done: !1,
                                value: k(l)
                            };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            }
            function d(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g,
                f.set(k, l)) : l = "p_" + k;
                var m = h.c[l];
                if (m && sa(h.c, l))
                    for (h = 0; h < m.length; h++) {
                        var p = m[h];
                        if (k !== k && p.key !== p.key || k === p.key)
                            return {
                                id: l,
                                list: m,
                                index: h,
                                l: p
                            }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    l: void 0
                }
            }
            function e(h) {
                this.c = {};
                this.a = b();
                this.size = 0;
                if (h) {
                    h = y(h);
                    for (var k; !(k = h.next()).done; )
                        k = k.value,
                        this.set(k[0], k[1])
                }
            }
            if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                    return !1;
                try {
                    var h = Object.seal({
                        x: 4
                    })
                      , k = new a(y([[h, "s"]]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                        x: 4
                    }) || k.set({
                        x: 4
                    }, "t") != k || 2 != k.size)
                        return !1;
                    var l = k.entries()
                      , m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1])
                        return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }())
                return a;
            var f = new q.WeakMap;
            e.prototype.set = function(h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.c[l.id] = []);
                l.l ? l.l.value = k : (l.l = {
                    next: this.a,
                    F: this.a.F,
                    head: this.a,
                    key: h,
                    value: k
                },
                l.list.push(l.l),
                this.a.F.next = l.l,
                this.a.F = l.l,
                this.size++);
                return this
            }
            ;
            e.prototype.delete = function(h) {
                h = d(this, h);
                return h.l && h.list ? (h.list.splice(h.index, 1),
                h.list.length || delete this.c[h.id],
                h.l.F.next = h.l.next,
                h.l.next.F = h.l.F,
                h.l.head = null,
                this.size--,
                !0) : !1
            }
            ;
            e.prototype.clear = function() {
                this.c = {};
                this.a = this.a.F = b();
                this.size = 0
            }
            ;
            e.prototype.has = function(h) {
                return !!d(this, h).l
            }
            ;
            e.prototype.get = function(h) {
                return (h = d(this, h).l) && h.value
            }
            ;
            e.prototype.entries = function() {
                return c(this, function(h) {
                    return [h.key, h.value]
                })
            }
            ;
            e.prototype.keys = function() {
                return c(this, function(h) {
                    return h.key
                })
            }
            ;
            e.prototype.values = function() {
                return c(this, function(h) {
                    return h.value
                })
            }
            ;
            e.prototype.forEach = function(h, k) {
                for (var l = this.entries(), m; !(m = l.next()).done; )
                    m = m.value,
                    h.call(k, m[1], m[0], this)
            }
            ;
            e.prototype[t(q.Symbol, "iterator")] = e.prototype.entries;
            var g = 0;
            return e
        }, "es6");
        x("Set", function(a) {
            function b(c) {
                this.a = new q.Map;
                if (c) {
                    c = y(c);
                    for (var d; !(d = c.next()).done; )
                        this.add(d.value)
                }
                this.size = this.a.size
            }
            if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                    return !1;
                try {
                    var c = Object.seal({
                        x: 4
                    })
                      , d = new a(y([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size)
                        return !1;
                    var e = d.entries()
                      , f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c)
                        return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }())
                return a;
            b.prototype.add = function(c) {
                c = 0 === c ? 0 : c;
                this.a.set(c, c);
                this.size = this.a.size;
                return this
            }
            ;
            b.prototype.delete = function(c) {
                c = this.a.delete(c);
                this.size = this.a.size;
                return c
            }
            ;
            b.prototype.clear = function() {
                this.a.clear();
                this.size = 0
            }
            ;
            b.prototype.has = function(c) {
                return this.a.has(c)
            }
            ;
            b.prototype.entries = function() {
                return this.a.entries()
            }
            ;
            b.prototype.values = function() {
                return t(this.a, "values").call(this.a)
            }
            ;
            b.prototype.keys = t(b.prototype, "values");
            b.prototype[t(q.Symbol, "iterator")] = t(b.prototype, "values");
            b.prototype.forEach = function(c, d) {
                var e = this;
                this.a.forEach(function(f) {
                    return c.call(d, f, f, e)
                })
            }
            ;
            return b
        }, "es6");
        function ua(a, b) {
            a instanceof String && (a += "");
            var c = 0
              , d = !1
              , e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
            e[t(q.Symbol, "iterator")] = function() {
                return e
            }
            ;
            return e
        }
        x("Array.prototype.keys", function(a) {
            return a ? a : function() {
                return ua(this, function(b) {
                    return b
                })
            }
        }, "es6");
        x("Array.prototype.values", function(a) {
            return a ? a : function() {
                return ua(this, function(b, c) {
                    return c
                })
            }
        }, "es8");
        x("Array.prototype.findIndex", function(a) {
            return a ? a : function(b, c) {
                return ra(this, b, c).ua
            }
        }, "es6");
        var A = this || self;
        function va(a) {
            if (a && a != A)
                return xa(a.document);
            null === ya && (ya = xa(A.document));
            return ya
        }
        var za = /^[\w+/_-]+[=]{0,2}$/
          , ya = null;
        function xa(a) {
            return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && za.test(a) ? a : ""
        }
        function Aa(a) {
            a = a.split(".");
            for (var b = A, c = 0; c < a.length; c++)
                if (b = b[a[c]],
                null == b)
                    return null;
            return b
        }
        function Ba() {}
        function Ca(a) {
            a.la = void 0;
            a.i = function() {
                return a.la ? a.la : a.la = new a
            }
        }
        function Da(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }
        function Ea(a) {
            return Object.prototype.hasOwnProperty.call(a, Fa) && a[Fa] || (a[Fa] = ++Ga)
        }
        var Fa = "closure_uid_" + (1E9 * Math.random() >>> 0)
          , Ga = 0;
        function Ha(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
        function Ia(a, b, c) {
            if (!a)
                throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
        function Ja(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ja = Ha : Ja = Ia;
            return Ja.apply(null, arguments)
        }
        function Ka(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        }
        function B(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ab = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.cb = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                    g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        }
        function La(a) {
            return a
        }
        ;var Ma = (new Date).getTime();
        function Na(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                e in d && b.call(void 0, d[e], e, a)
        }
        function Oa(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        }
        function Pa(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
                f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        }
        function Qa(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a))
                    return !0;
            return !1
        }
        function Ra(a, b) {
            a: {
                for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        }
        function Sa(a, b) {
            a: {
                for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                    if (d in c && b.call(void 0, c[d], d, a)) {
                        b = d;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        }
        function Ta(a, b) {
            a: if ("string" === typeof a)
                a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }
            return 0 <= a
        }
        ;function Ua(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        }
        function Va(a) {
            var b = !1, c;
            return function() {
                b || (c = a(),
                b = !0);
                return c
            }
        }
        function Wa(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        }
        ;function Xa(a, b) {
            var c = {}, d;
            for (d in a)
                b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        }
        function Ya(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a))
                    return !0;
            return !1
        }
        function Za(a, b) {
            return null !== a && b in a
        }
        function $a(a) {
            var b = {}, c;
            for (c in a)
                b[c] = a[c];
            return b
        }
        ;var ab;
        function bb() {
            if (void 0 === ab) {
                var a = null
                  , b = A.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: La,
                            createScript: La,
                            createScriptURL: La
                        })
                    } catch (c) {
                        A.console && A.console.error(c.message)
                    }
                    ab = a
                } else
                    ab = a
            }
            return ab
        }
        ;function cb(a, b) {
            this.c = a === db && b || "";
            this.a = eb
        }
        function fb(a) {
            return a instanceof cb && a.constructor === cb && a.a === eb ? a.c : "type_error:Const"
        }
        var eb = {}
          , db = {};
        var gb = {};
        function hb(a, b) {
            this.a = b === gb ? a : ""
        }
        function ib(a, b) {
            for (var c = [], d = 1; d < arguments.length; d++)
                c.push(JSON.stringify(arguments[d]).replace(/</g, "\\x3c"));
            c = "(" + fb(a) + ")(" + c.join(", ") + ");";
            c = (d = bb()) ? d.createScript(c) : c;
            return new hb(c,gb)
        }
        function jb(a) {
            return a instanceof hb && a.constructor === hb ? a.a : "type_error:SafeScript"
        }
        ;function kb(a, b) {
            this.a = b === lb ? a : ""
        }
        function mb(a, b, c) {
            a = nb.exec(ob(a).toString());
            var d = a[3] || "";
            return pb(a[1] + qb("?", a[2] || "", b) + qb("#", d, c))
        }
        function ob(a) {
            return a instanceof kb && a.constructor === kb ? a.a : "type_error:TrustedResourceUrl"
        }
        function rb() {
            var a = {}
              , b = fb(new cb(db,"http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/gen_204"));
            if (!sb.test(b))
                throw Error("Invalid TrustedResourceUrl format: " + b);
            var c = b.replace(tb, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(a, e))
                    throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
                d = a[e];
                return d instanceof cb ? fb(d) : encodeURIComponent(String(d))
            });
            return pb(c)
        }
        var tb = /%{(\w+)}/g
          , sb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
          , nb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
          , lb = {};
        function pb(a) {
            var b = bb();
            a = b ? b.createScriptURL(a) : a;
            return new kb(a,lb)
        }
        function qb(a, b, c) {
            if (null == c)
                return b;
            if ("string" === typeof c)
                return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a),
                        b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        }
        ;function ub(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        }
        var vb = /&/g
          , wb = /</g
          , xb = />/g
          , yb = /"/g
          , zb = /'/g
          , Ab = /\x00/g;
        function Bb(a, b) {
            var c = 0;
            a = ub(String(a)).split(".");
            b = ub(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || ""
                  , g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length)
                        break;
                    c = Cb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Cb(0 == f[2].length, 0 == g[2].length) || Cb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        }
        function Cb(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        }
        ;var Db;
        a: {
            var Eb = A.navigator;
            if (Eb) {
                var Fb = Eb.userAgent;
                if (Fb) {
                    Db = Fb;
                    break a
                }
            }
            Db = ""
        }
        function C(a) {
            return -1 != Db.indexOf(a)
        }
        function Gb(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
                c.push([d[1], d[2], d[3] || void 0]);
            return c
        }
        ;function Hb() {
            return (C("Chrome") || C("CriOS")) && !C("Edge")
        }
        function Ib() {
            function a(e) {
                e = Ra(e, d);
                return c[e] || ""
            }
            var b = Db;
            if (C("Trident") || C("MSIE"))
                return Jb(b);
            b = Gb(b);
            var c = {};
            Na(b, function(e) {
                c[e[0]] = e[1]
            });
            var d = Ka(Za, c);
            return C("Opera") ? a(["Version", "Opera"]) : C("Edge") ? a(["Edge"]) : C("Edg/") ? a(["Edg"]) : Hb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
        }
        function Jb(a) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1])
                return b[1];
            b = "";
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
                if (a = /Trident\/(\d.\d)/.exec(a),
                "7.0" == c[1])
                    if (a && a[1])
                        switch (a[1]) {
                        case "4.0":
                            b = "8.0";
                            break;
                        case "5.0":
                            b = "9.0";
                            break;
                        case "6.0":
                            b = "10.0";
                            break;
                        case "7.0":
                            b = "11.0"
                        }
                    else
                        b = "7.0";
                else
                    b = c[1];
            return b
        }
        ;function Kb(a, b, c) {
            this.a = c === Lb ? a : ""
        }
        function Mb(a) {
            return a instanceof Kb && a.constructor === Kb ? a.a : "type_error:SafeHtml"
        }
        var Lb = {}
          , Nb = new Kb(A.trustedTypes && A.trustedTypes.emptyHTML || "",0,Lb);
        var Ob = Va(function() {
            var a = document.createElement("div")
              , b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = Mb(Nb);
            return !b.parentElement
        });
        function Pb(a, b) {
            if (Ob())
                for (; a.lastChild; )
                    a.removeChild(a.lastChild);
            a.innerHTML = Mb(b)
        }
        ;var Qb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        }
          , Rb = {
            "'": "\\'"
        };
        function Sb(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        }
        ;function Tb() {
            return C("iPhone") && !C("iPod") && !C("iPad")
        }
        ;function Ub(a) {
            Ub[" "](a);
            return a
        }
        Ub[" "] = Ba;
        var Vb = Tb() || C("iPod")
          , Wb = C("Safari") && !(Hb() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android")) && !(Tb() || C("iPad") || C("iPod"));
        var Xb = {}
          , Yb = null;
        function D() {}
        var Zb = "function" == typeof Uint8Array;
        function E(a, b, c, d) {
            a.c = null;
            b || (b = []);
            a.m = void 0;
            a.g = -1;
            a.a = b;
            a: {
                if (b = a.a.length) {
                    --b;
                    var e = a.a[b];
                    if (!(null === e || "object" != typeof e || Array.isArray(e) || Zb && e instanceof Uint8Array)) {
                        a.h = b - a.g;
                        a.f = e;
                        break a
                    }
                }
                a.h = Number.MAX_VALUE
            }
            a.u = {};
            if (c)
                for (b = 0; b < c.length; b++)
                    e = c[b],
                    e < a.h ? (e += a.g,
                    a.a[e] = a.a[e] || $b) : (ac(a),
                    a.f[e] = a.f[e] || $b);
            if (d && d.length)
                for (b = 0; b < d.length; b++)
                    bc(a, d[b])
        }
        var $b = [];
        function ac(a) {
            var b = a.h + a.g;
            a.a[b] || (a.f = a.a[b] = {})
        }
        function G(a, b) {
            if (b < a.h) {
                b += a.g;
                var c = a.a[b];
                return c === $b ? a.a[b] = [] : c
            }
            if (a.f)
                return c = a.f[b],
                c === $b ? a.f[b] = [] : c
        }
        function cc(a, b) {
            a = G(a, b);
            return null == a ? a : +a
        }
        function dc(a, b) {
            a = G(a, b);
            return null == a ? a : !!a
        }
        function H(a, b, c) {
            a = G(a, b);
            return null == a ? c : a
        }
        function ec(a, b) {
            a = dc(a, b);
            return null == a ? !1 : a
        }
        function fc(a, b) {
            a = cc(a, b);
            return null == a ? 0 : a
        }
        function gc(a, b, c) {
            b < a.h ? a.a[b + a.g] = c : (ac(a),
            a.f[b] = c);
            return a
        }
        function ic(a, b, c, d) {
            c !== d ? gc(a, b, c) : b < a.h ? a.a[b + a.g] = null : (ac(a),
            delete a.f[b]);
            return a
        }
        function bc(a, b) {
            for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e]
                  , g = G(a, f);
                null != g && (c = f,
                d = g,
                gc(a, f, void 0))
            }
            return c ? (gc(a, c, d),
            c) : 0
        }
        function I(a, b, c) {
            a.c || (a.c = {});
            if (!a.c[c]) {
                var d = G(a, c);
                d && (a.c[c] = new b(d))
            }
            return a.c[c]
        }
        function J(a, b, c) {
            a.c || (a.c = {});
            if (!a.c[c]) {
                for (var d = G(a, c), e = [], f = 0; f < d.length; f++)
                    e[f] = new b(d[f]);
                a.c[c] = e
            }
            b = a.c[c];
            b == $b && (b = a.c[c] = []);
            return b
        }
        D.prototype.j = Zb ? function() {
            var a = Uint8Array.prototype.toJSON;
            Uint8Array.prototype.toJSON = function() {
                var b;
                void 0 === b && (b = 0);
                if (!Yb) {
                    Yb = {};
                    for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                        var f = c.concat(d[e].split(""));
                        Xb[e] = f;
                        for (var g = 0; g < f.length; g++) {
                            var h = f[g];
                            void 0 === Yb[h] && (Yb[h] = g)
                        }
                    }
                }
                b = Xb[b];
                c = [];
                for (d = 0; d < this.length; d += 3) {
                    var k = this[d]
                      , l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                    h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                    g = k >> 2;
                    k = (k & 3) << 4 | l >> 4;
                    l = (l & 15) << 2 | h >> 6;
                    h &= 63;
                    f || (h = 64,
                    e || (l = 64));
                    c.push(b[g], b[k], b[l] || "", b[h] || "")
                }
                return c.join("")
            }
            ;
            try {
                return JSON.stringify(this.a && this.a, jc)
            } finally {
                Uint8Array.prototype.toJSON = a
            }
        }
        : function() {
            return JSON.stringify(this.a && this.a, jc)
        }
        ;
        function jc(a, b) {
            return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
        }
        ;function kc(a) {
            E(this, a, lc, null)
        }
        B(kc, D);
        function mc(a) {
            E(this, a, null, null)
        }
        B(mc, D);
        var lc = [2, 3];
        function K(a) {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications
        }
        function nc(a, b, c) {
            a = K(a);
            if (oc(a.ad_whitelist || [], b, c))
                return null;
            c = a.space_collapsing || "none";
            return (b = oc(a.ad_blacklist || [], b)) ? {
                ha: !0,
                Ga: b.space_collapsing || c
            } : a.remove_ads_by_default ? {
                ha: !0,
                Ga: c,
                ia: a.ablation_viewport_offset
            } : null
        }
        function pc(a) {
            a = K(a);
            a.eids || (a.eids = []);
            return a.eids
        }
        function qc(a, b) {
            a = K(a);
            a.tag_partners = a.tag_partners || [];
            a.tag_partners.push(b)
        }
        function rc(a, b) {
            a = K(a);
            a.remove_ads_by_default = !0;
            a.space_collapsing = "slot";
            a.ablation_viewport_offset = b
        }
        function sc(a) {
            K(L).allow_second_reactive_tag = a
        }
        function oc(a, b, c) {
            for (var d = 0; d < a.length; ++d)
                if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)
                    return a[d];
            return null
        }
        ;var M = {}
          , tc = (M.google_ad_channel = !0,
        M.google_ad_client = !0,
        M.google_ad_host = !0,
        M.google_ad_host_channel = !0,
        M.google_adtest = !0,
        M.google_tag_for_child_directed_treatment = !0,
        M.google_tag_for_under_age_of_consent = !0,
        M.google_tag_partner = !0,
        M.google_restrict_data_processing = !0,
        M.google_page_url = !0,
        M.google_debug_params = !0,
        M.google_adbreak_test = !0,
        M.google_ad_frequency_hint = !0,
        M);
        var uc = {};
        function vc(a) {
            if (a !== uc)
                throw Error("Bad secret");
        }
        ;var wc = {
            Oa: function() {
                if ("undefined" !== typeof window)
                    return window.trustedTypes
            }
        };
        function xc() {
            var a;
            return null !== (a = wc.Oa()) && void 0 !== a ? a : null
        }
        var yc;
        function zc() {
            var a, b;
            if (void 0 === yc)
                try {
                    yc = null !== (b = null === (a = xc()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                        createHTML: function(c) {
                            return c
                        },
                        createScript: function(c) {
                            return c
                        },
                        createScriptURL: function(c) {
                            return c
                        }
                    })) && void 0 !== b ? b : null
                } catch (c) {
                    yc = null,
                    console.log(c)
                }
            return yc
        }
        ;function Ac() {}
        function Bc(a, b) {
            vc(b);
            this.a = a
        }
        z(Bc, Ac);
        Bc.prototype.toString = function() {
            return this.a.toString()
        }
        ;
        function Cc(a) {
            var b, c;
            a = null !== (c = null === (b = zc()) || void 0 === b ? void 0 : b.createScriptURL(a)) && void 0 !== c ? c : a;
            return new Bc(a,uc)
        }
        ;function Dc() {}
        function Ec(a, b) {
            vc(b);
            this.a = a
        }
        z(Ec, Dc);
        Ec.prototype.toString = function() {
            return this.a
        }
        ;
        function Fc(a) {
            if (!(a instanceof Bc))
                throw Error("wrong type");
            return a.a
        }
        ;function Gc(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d)
                c[d - 1] = arguments[d];
            if (!Array.isArray(a) || !Array.isArray(a.raw))
                throw new TypeError("trustedResourceUrl is a template literal tag function that only accepts template literals with or without expressions. For example, trustedResourceUrl`foo`; or trustedResourceUrl`foo${bar}`");
            if (0 === c.length)
                return Cc(a[0]);
            d = a[0].toLowerCase();
            if (t(d, "startsWith").call(d, "data:"))
                throw Error("Data URLs cannot have expressions in the template literal input.");
            if (t(d, "startsWith").call(d, "https://") || t(d, "startsWith").call(d, "//")) {
                var e = d.indexOf("//") + 2;
                var f = d.indexOf("/", e);
                if (f <= e)
                    throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
                if (!/^[0-9a-z.:-]+$/i.test(d.substring(e, f)))
                    throw Error("The origin contains unsupported characters.");
                e = !0
            } else
                e = !1;
            if (e = !e) {
                if (t(d, "startsWith").call(d, "/"))
                    if ("/" === d || 1 < d.length && "/" !== d[1] && "\\" !== d[1])
                        e = !0;
                    else
                        throw Error("The path start in the url is invalid.");
                else
                    e = !1;
                e = !e
            }
            if (e) {
                if (t(d, "startsWith").call(d, "about:blank")) {
                    if ("about:blank" !== d && !t(d, "startsWith").call(d, "about:blank#"))
                        throw Error("The about url is invalid.");
                    d = !0
                } else
                    d = !1;
                e = !d
            }
            if (e)
                throw Error("Trying to interpolate expressions in an unsupported url format.");
            d = [a[0]];
            for (e = 0; e < c.length; e++)
                d.push(encodeURIComponent(c[e])),
                d.push(a[e + 1]);
            return Cc(d.join(""))
        }
        ;var Hc = ia(["http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/js/managed/adsense/", "/show_ads_impl", ".js"])
          , Ic = ia(["http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"])
          , Jc = ia(["http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/js/managed/adsense/", "/slotcar_library", ".js"])
          , Kc = ia(["http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"])
          , Lc = ia(["http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/js/managed/adsense/", "/show_ads_impl_exp", ".js"])
          , Mc = ia(["http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_exp", ".js"])
          , Nc = ia(["http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/js/managed/adsense/", "/show_ads_impl_with_ama", ".js"])
          , Oc = ia(["http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]);
        var Pc = document
          , L = window;
        var Qc = {
            "120x90": !0,
            "160x90": !0,
            "180x90": !0,
            "200x90": !0,
            "468x15": !0,
            "728x15": !0
        };
        function Rc(a, b) {
            if (15 == b) {
                if (728 <= a)
                    return 728;
                if (468 <= a)
                    return 468
            } else if (90 == b) {
                if (200 <= a)
                    return 200;
                if (180 <= a)
                    return 180;
                if (160 <= a)
                    return 160;
                if (120 <= a)
                    return 120
            }
            return null
        }
        ;function Sc(a, b) {
            var c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        }
        function Tc(a) {
            return !!(a.error && a.meta && a.id)
        }
        ;function Uc(a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1)
        }
        function Vc(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
        ;function Wc(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }
        function Xc(a) {
            this.a = a || A.document || document
        }
        Xc.prototype.contains = function(a, b) {
            if (!a || !b)
                return !1;
            if (a.contains && 1 == b.nodeType)
                return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition)
                return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b; )
                b = b.parentNode;
            return b == a
        }
        ;
        function Yc() {
            return !Zc() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
        }
        function Zc() {
            return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
        }
        ;var bd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        function cd(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href)
                    a: {
                        try {
                            Ub(a.foo);
                            b = !0;
                            break a
                        } catch (c) {}
                        b = !1
                    }
                return b
            } catch (c) {
                return !1
            }
        }
        function dd(a) {
            for (var b = A, c = 0; b && 40 > c++ && (!cd(b) || !a(b)); )
                b = ed(b)
        }
        function fd() {
            var a = A;
            dd(function(b) {
                a = b;
                return !1
            });
            return a
        }
        function ed(a) {
            try {
                var b = a.parent;
                if (b && b != a)
                    return b
            } catch (c) {}
            return null
        }
        function gd(a, b, c) {
            var d = a.createElement("script");
            (void 0 === c ? 0 : c) && d.setAttribute("crossorigin", "anonymous");
            d.src = ob(b);
            (b = va(d.ownerDocument && d.ownerDocument.defaultView)) && d.setAttribute("nonce", b);
            return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(d, a),
            d) : null
        }
        function hd(a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
        }
        function id(a, b) {
            if (!jd() && !kd()) {
                var c = Math.random();
                if (c < b)
                    return c = ld(A),
                    a[Math.floor(c * a.length)]
            }
            return null
        }
        function ld(a) {
            if (!a.crypto)
                return Math.random();
            try {
                var b = new Uint32Array(1);
                a.crypto.getRandomValues(b);
                return b[0] / 65536 / 65536
            } catch (c) {
                return Math.random()
            }
        }
        function md(a, b) {
            if (a)
                for (var c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        }
        function nd(a) {
            var b = a.length;
            if (0 == b)
                return 0;
            for (var c = 305419896, d = 0; d < b; d++)
                c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        }
        var kd = Va(function() {
            return Qa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], od) || 1E-4 > Math.random()
        });
        function pd(a, b) {
            var c = -1;
            try {
                a && (c = parseInt(a.getItem(b), 10))
            } catch (d) {
                return null
            }
            return 0 <= c && 1E3 > c ? c : null
        }
        function qd(a, b, c) {
            a = kd() ? null : Math.floor(1E3 * ld(a));
            var d;
            if (d = null != a && b)
                a: {
                    var e = String(a);
                    try {
                        if (b) {
                            b.setItem(c, e);
                            d = e;
                            break a
                        }
                    } catch (f) {}
                    d = null
                }
            return d ? a : null
        }
        var jd = Va(function() {
            return od("MSIE")
        });
        function od(a) {
            return -1 != Db.indexOf(a)
        }
        var rd = /^([0-9.]+)px$/
          , sd = /^(-?[0-9.]{1,30})$/;
        function td(a) {
            return sd.test(a) && (a = Number(a),
            !isNaN(a)) ? a : null
        }
        function ud(a, b) {
            return b ? !/^false$/.test(a) : /^true$/.test(a)
        }
        function N(a) {
            return (a = rd.exec(a)) ? +a[1] : null
        }
        function vd(a, b) {
            for (var c = 0; 50 > c; ++c) {
                try {
                    var d = !(!a.frames || !a.frames[b])
                } catch (e) {
                    d = !1
                }
                if (d)
                    return a;
                if (!(a = ed(a)))
                    break
            }
            return null
        }
        var wd = Va(function() {
            return Yc() ? 2 : Zc() ? 1 : 0
        });
        function xd(a) {
            var b = {
                display: "none"
            };
            a.style.setProperty ? md(b, function(c, d) {
                a.style.setProperty(d, c, "important")
            }) : a.style.cssText = yd(zd(Ad(a.style.cssText), Bd(b, function(c) {
                return c + " !important"
            })))
        }
        var zd = t(Object, "assign") || function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d)
                        Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        }
        ;
        function Bd(a, b) {
            var c = {}, d;
            for (d in a)
                Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c
        }
        function yd(a) {
            var b = [];
            md(a, function(c, d) {
                null != c && "" !== c && b.push(d + ":" + c)
            });
            return b.length ? b.join(";") + ";" : ""
        }
        function Ad(a) {
            var b = {};
            if (a) {
                var c = /\s*:\s*/;
                Na((a || "").split(/\s*;\s*/), function(d) {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        }
        var Cd = [];
        function Dd() {
            var a = Cd;
            Cd = [];
            a = y(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                try {
                    b()
                } catch (c) {}
            }
        }
        function Ed(a) {
            "complete" === Pc.readyState || "interactive" === Pc.readyState ? (Cd.push(a),
            1 == Cd.length && (q.Promise ? q.Promise.resolve().then(Dd) : window.setImmediate ? setImmediate(Dd) : setTimeout(Dd, 0))) : Pc.addEventListener("DOMContentLoaded", a)
        }
        ;function Fd(a, b) {
            a = parseInt(a, 10);
            return isNaN(a) ? b : a
        }
        ;function Gd() {
            return "r20201104"
        }
        var Hd = ud("false", !1)
          , Id = ud("false", !1)
          , Jd = ud("false", !0);
        function O() {
            this.h = this.h;
            this.u = this.u
        }
        O.prototype.h = !1;
        O.prototype.a = function() {
            if (this.u)
                for (; this.u.length; )
                    this.u.shift()()
        }
        ;
        function Kd(a) {
            a = void 0 === a ? A : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b)
                try {
                    b = a.parent.context || a.parent.AMP_CONTEXT_DATA
                } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl)
                    return b
            } catch (c) {}
            return null
        }
        function Ld(a) {
            return (a = a || Kd()) ? cd(a.master) ? a.master : null : null
        }
        ;function Md(a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function(f) {
                    c && c(f);
                    Vc(d, "load", e);
                    Vc(d, "error", e)
                };
                Uc(d, "load", e);
                Uc(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        }
        function Nd(a, b) {
            var c = "http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            md(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Od(c)
        }
        function Od(a) {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Md(b, a, null)
        }
        ;new Ec("about:blank",uc);
        new Ec("about:invalid#zTSz",uc);
        function Pd(a) {
            Qd();
            var b = bb();
            a = b ? b.createHTML(a) : a;
            return new Kb(a,null,Lb)
        }
        function Rd(a) {
            Qd();
            return pb(a)
        }
        var Qd = Ba;
        function Sd(a, b) {
            if (a)
                for (var c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        }
        function Td(a) {
            return !(!a || !a.call) && "function" === typeof a
        }
        function Ud(a) {
            var b = void 0 === b ? 1 : b;
            a = Ld(Kd(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + b
        }
        function Vd(a) {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        }
        function Wd(a) {
            a = Ld(Kd(a)) || a;
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        }
        var Xd = !!window.google_async_iframe_id
          , Yd = Xd && window.parent || window;
        function Zd() {
            if (Xd && !cd(Yd)) {
                var a = "." + Pc.domain;
                try {
                    for (; 2 < a.split(".").length && !cd(Yd); )
                        Pc.domain = a = a.substr(a.indexOf(".") + 1),
                        Yd = window.parent
                } catch (b) {}
                cd(Yd) || (Yd = window)
            }
            return Yd
        }
        var $d = /(^| )adsbygoogle($| )/;
        function ae(a) {
            return Hd && a.google_top_window || a.top
        }
        function be(a) {
            a = ae(a);
            return cd(a) ? a : null
        }
        ;function ce(a, b) {
            if (!a)
                return !1;
            a = a.hash;
            if (!a || !a.indexOf)
                return !1;
            if (-1 != a.indexOf(b))
                return !0;
            b = de(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        }
        function de(a) {
            var b = "";
            Sd(a.split("_"), function(c) {
                b += c.substr(0, 2)
            });
            return b
        }
        ;var ee = Fd("2012", 2012);
        function fe(a, b) {
            return "relative" === a ? b : ["https://", a, b].join("")
        }
        ;var ge = null;
        function he() {
            if (!Hd)
                return !1;
            if (null != ge)
                return ge;
            ge = !1;
            try {
                var a = be(A);
                a && -1 !== a.location.hash.indexOf("google_logging") && (ge = !0);
                A.localStorage.getItem("google_logging") && (ge = !0)
            } catch (b) {}
            return ge
        }
        function ie(a, b) {
            b = void 0 === b ? [] : b;
            var c = !1;
            A.google_logging_queue || (c = !0,
            A.google_logging_queue = []);
            A.google_logging_queue.push([a, b]);
            c && he() && (a = fe("pagead2.googlesyndication.com", "/pagead/js/logging_library.js"),
            2012 < ee && (b = (b = a.match(/(__[a-z0-9_]+)\.js(?:\?|$)/)) ? b[1] : "",
            a = a.replace(new RegExp(String(b + ".js").replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"),"g"), ("_fy" + ee + b + ".js").replace(/\$/g, "$$$$"))),
            gd(A.document, Rd(a)))
        }
        ;function je(a) {
            if (!a)
                return "";
            (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        }
        ;var ke = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
        function le(a, b) {
            this.a = a;
            this.c = b
        }
        function me(a, b, c) {
            this.url = a;
            this.a = b;
            this.va = !!c;
            this.depth = null
        }
        ;function ne() {
            this.f = "&";
            this.c = {};
            this.g = 0;
            this.a = []
        }
        function oe(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        }
        function pe(a, b, c, d, e) {
            var f = [];
            md(a, function(g, h) {
                (g = qe(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        }
        function qe(a, b, c, d, e) {
            if (null == a)
                return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0,
                d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++)
                        f.push(qe(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a)
                return e = e || 0,
                2 > e ? encodeURIComponent(pe(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        }
        function re(a, b, c) {
            b = b + "//web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com" + c;
            var d = se(a) - c.length;
            if (0 > d)
                return "";
            a.a.sort(function(m, p) {
                return m - p
            });
            c = null;
            for (var e = "", f = 0; f < a.a.length; f++)
                for (var g = a.a[f], h = a.c[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var l = pe(h[k], a.f, ",$");
                    if (l) {
                        l = e + l;
                        if (d >= l.length) {
                            d -= l.length;
                            b += l;
                            e = a.f;
                            break
                        }
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c && (a = e + "trn=" + c);
            return b + a
        }
        function se(a) {
            var b = 1, c;
            for (c in a.c)
                b = c.length > b ? c.length : b;
            return 3997 - b - a.f.length - 1
        }
        ;function te(a, b, c, d, e, f) {
            if ((d ? a.a : Math.random()) < (e || .01))
                try {
                    if (c instanceof ne)
                        var g = c;
                    else
                        g = new ne,
                        md(c, function(k, l) {
                            var m = g
                              , p = m.g++;
                            k = oe(l, k);
                            m.a.push(p);
                            m.c[p] = k
                        });
                    var h = re(g, a.c, "/pagead/gen_204?id=" + b + "&");
                    h && ("undefined" !== typeof f ? Md(A, h, void 0 === f ? null : f) : Md(A, h, null))
                } catch (k) {}
        }
        ;var ue = null;
        function ve() {
            if (null === ue) {
                ue = "";
                try {
                    var a = "";
                    try {
                        a = A.top.location.hash
                    } catch (c) {
                        a = A.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        ue = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return ue
        }
        ;function we() {
            var a = A.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        }
        function xe() {
            var a = void 0 === a ? A : a;
            return (a = a.performance) && a.now ? a.now() : null
        }
        ;function ye(a, b) {
            var c = xe() || we();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
        ;var ze = A.performance
          , Ae = !!(ze && ze.mark && ze.measure && ze.clearMarks)
          , Be = Va(function() {
            var a;
            if (a = Ae)
                a = ve(),
                a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });
        function Ce() {
            var a = De;
            this.events = [];
            this.c = a || A;
            var b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
            this.events = a.google_js_reporting_queue,
            b = a.google_measure_js_timing);
            this.a = Be() || (null != b ? b : 1 > Math.random())
        }
        function Ee(a) {
            a && ze && Be() && (ze.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
            ze.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
        }
        Ce.prototype.start = function(a, b) {
            if (!this.a)
                return null;
            a = new ye(a,b);
            b = "goog_" + a.label + "_" + a.uniqueId + "_start";
            ze && Be() && ze.mark(b);
            return a
        }
        ;
        function Fe() {
            var a = Ge;
            this.j = He;
            this.f = !0;
            this.c = null;
            this.h = this.H;
            this.a = void 0 === a ? null : a;
            this.g = !1
        }
        n = Fe.prototype;
        n.Da = function(a) {
            this.h = a
        }
        ;
        n.ma = function(a) {
            this.c = a
        }
        ;
        n.Ea = function(a) {
            this.f = a
        }
        ;
        n.Fa = function(a) {
            this.g = a
        }
        ;
        n.fa = function(a, b, c) {
            try {
                if (this.a && this.a.a) {
                    var d = this.a.start(a.toString(), 3);
                    var e = b();
                    var f = this.a;
                    b = d;
                    if (f.a && "number" === typeof b.value) {
                        b.duration = (xe() || we()) - b.value;
                        var g = "goog_" + b.label + "_" + b.uniqueId + "_end";
                        ze && Be() && ze.mark(g);
                        !f.a || 2048 < f.events.length || f.events.push(b)
                    }
                } else
                    e = b()
            } catch (h) {
                f = this.f;
                try {
                    Ee(d),
                    f = this.h(a, new Sc(h,{
                        message: Ie(h)
                    }), void 0, c)
                } catch (k) {
                    this.H(217, k)
                }
                if (!f)
                    throw h;
            }
            return e
        }
        ;
        n.ya = function(a, b, c, d) {
            var e = this;
            return function(f) {
                for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h] = arguments[h];
                return e.fa(a, function() {
                    return b.apply(c, g)
                }, d)
            }
        }
        ;
        n.H = function(a, b, c, d, e) {
            e = e || "jserror";
            try {
                var f = new ne;
                f.a.push(1);
                f.c[1] = oe("context", a);
                Tc(b) || (b = new Sc(b,{
                    message: Ie(b)
                }));
                if (b.msg) {
                    var g = b.msg.substring(0, 512);
                    f.a.push(2);
                    f.c[2] = oe("msg", g)
                }
                var h = b.meta || {};
                if (this.c)
                    try {
                        this.c(h)
                    } catch (hc) {}
                if (d)
                    try {
                        d(h)
                    } catch (hc) {}
                b = [h];
                f.a.push(3);
                f.c[3] = b;
                d = A;
                b = [];
                g = null;
                do {
                    var k = d;
                    if (cd(k)) {
                        var l = k.location.href;
                        g = k.document && k.document.referrer || null
                    } else
                        l = g,
                        g = null;
                    b.push(new me(l || "",k));
                    try {
                        d = k.parent
                    } catch (hc) {
                        d = null
                    }
                } while (d && k != d);
                l = 0;
                for (var m = b.length - 1; l <= m; ++l)
                    b[l].depth = m - l;
                k = A;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                    for (m = 1; m < b.length; ++m) {
                        var p = b[m];
                        p.url || (p.url = k.location.ancestorOrigins[m - 1] || "",
                        p.va = !0)
                    }
                var r = new me(A.location.href,A,!1);
                k = null;
                var u = b.length - 1;
                for (p = u; 0 <= p; --p) {
                    var w = b[p];
                    !k && ke.test(w.url) && (k = w);
                    if (w.url && !w.va) {
                        r = w;
                        break
                    }
                }
                w = null;
                var v = b.length && b[u].url;
                0 != r.depth && v && (w = b[u]);
                var F = new le(r,w);
                if (F.c) {
                    var wa = F.c.url || "";
                    f.a.push(4);
                    f.c[4] = oe("top", wa)
                }
                var $c = {
                    url: F.a.url || ""
                };
                if (F.a.url) {
                    var ad = F.a.url.match(bd)
                      , tf = ad[1]
                      , uf = ad[3]
                      , vf = ad[4];
                    r = "";
                    tf && (r += tf + ":");
                    uf && (r += "//",
                    r += uf,
                    vf && (r += ":" + vf));
                    var wf = r
                } else
                    wf = "";
                $c = [$c, {
                    url: wf
                }];
                f.a.push(5);
                f.c[5] = $c;
                te(this.j, e, f, this.g, c)
            } catch (hc) {
                try {
                    te(this.j, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ie(hc),
                        url: F && F.a.url
                    }, this.g, c)
                } catch (im) {}
            }
            return this.f
        }
        ;
        function Ie(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                try {
                    -1 == a.indexOf(b) && (a = b + "\n" + a);
                    for (var c; a != c; )
                        c = a,
                        a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (d) {}
            }
            return b
        }
        ;function P(a) {
            a = void 0 === a ? "" : a;
            var b = Error.call(this);
            this.message = b.message;
            "stack"in b && (this.stack = b.stack);
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, P) : this.stack = Error().stack || ""
        }
        z(P, Error);
        function Je() {
            this.c = !1;
            this.a = null;
            this.g = !1;
            this.h = Math.random();
            this.f = this.H
        }
        n = Je.prototype;
        n.ma = function(a) {
            this.a = a
        }
        ;
        n.Ea = function(a) {
            this.c = a
        }
        ;
        n.Fa = function(a) {
            this.g = a
        }
        ;
        n.Da = function(a) {
            this.f = a
        }
        ;
        n.H = function(a, b, c, d, e) {
            if ((this.g ? this.h : Math.random()) > (void 0 === c ? .01 : c))
                return this.c;
            Tc(b) || (b = new Sc(b,{
                context: a,
                id: void 0 === e ? "jserror" : e
            }));
            if (d || this.a)
                b.meta = {},
                this.a && this.a(b.meta),
                d && d(b.meta);
            A.google_js_errors = A.google_js_errors || [];
            A.google_js_errors.push(b);
            A.error_rep_loaded || (gd(A.document, Rd(A.location.protocol + "//web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/js/err_rep.js")),
            A.error_rep_loaded = !0);
            return this.c
        }
        ;
        n.fa = function(a, b, c) {
            try {
                var d = b()
            } catch (e) {
                if (!this.f(a, e, .01, c, "jserror"))
                    throw e;
            }
            return d
        }
        ;
        n.ya = function(a, b, c, d) {
            var e = this;
            return function(f) {
                for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h] = arguments[h];
                return e.fa(a, function() {
                    return b.apply(c, g)
                }, d)
            }
        }
        ;
        var He, Ke, De = Zd(), Ge = new Ce;
        function Le(a) {
            null != a && (De.google_measure_js_timing = a);
            De.google_measure_js_timing || (a = Ge,
            a.a = !1,
            a.events != a.c.google_js_reporting_queue && (Be() && Na(a.events, Ee),
            a.events.length = 0))
        }
        function Me(a) {
            var b = L.jerExpIds;
            if (Array.isArray(b) && 0 !== b.length) {
                var c = a.eid;
                if (c) {
                    b = [].concat(ja(c.split(",")), ja(b));
                    c = {};
                    for (var d = 0, e = 0; e < b.length; ) {
                        var f = b[e++];
                        var g = f;
                        g = Da(g) ? "o" + Ea(g) : (typeof g).charAt(0) + g;
                        Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0,
                        b[d++] = f)
                    }
                    b.length = d;
                    a.eid = b.join(",")
                } else
                    a.eid = b.join(",")
            }
        }
        function Ne(a) {
            var b = L.jerUserAgent;
            b && (a.useragent = b)
        }
        He = new function() {
            var a = void 0 === a ? L : a;
            this.c = "http:" === a.location.protocol ? "http:" : "https:";
            this.a = Math.random()
        }
        ;
        "number" !== typeof De.google_srt && (De.google_srt = Math.random());
        var Oe = He
          , Pe = De.google_srt;
        0 <= Pe && 1 >= Pe && (Oe.a = Pe);
        Ke = new Fe;
        Ke.ma(function(a) {
            Me(a);
            Ne(a)
        });
        Ke.Fa(!0);
        "complete" == De.document.readyState ? Le() : Ge.a && Uc(De, "load", function() {
            Le()
        });
        function Qe() {
            var a = [Re, Se];
            Ke.ma(function(b) {
                Na(a, function(c) {
                    c(b)
                });
                Me(b);
                Ne(b)
            })
        }
        function Te(a, b, c) {
            return Ke.fa(a, b, c)
        }
        function Ue(a, b) {
            return Ke.ya(a, b, void 0, void 0)
        }
        function Ve(a, b, c) {
            te(He, a, b, !0, c, void 0)
        }
        function We(a, b, c, d) {
            var e;
            Tc(b) ? e = b.msg || Ie(b.error) : e = Ie(b);
            return 0 == e.indexOf("TagError") ? (c = b instanceof Sc ? b.error : b,
            c.pbr || (c.pbr = !0,
            Ke.H(a, b, .1, d, "puberror")),
            !1) : Ke.H(a, b, c, d)
        }
        ;function Xe(a) {
            var b = window;
            var c = void 0 === c ? null : c;
            Uc(b, "message", function(d) {
                try {
                    var e = JSON.parse(d.data)
                } catch (f) {
                    return
                }
                !e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
            })
        }
        ;var Ye = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        };
        function Ze() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.improveCollisionDetection = 1;
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new $e
        }
        function af(a) {
            a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new $e) : a.google_reactive_ads_global_state = new Ze;
            return a.google_reactive_ads_global_state
        }
        function $e() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
        ;function bf(a) {
            a = a.document;
            var b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        }
        function Q(a) {
            return bf(a).clientWidth
        }
        ;function cf(a, b, c) {
            return df(a, void 0 === c ? "" : c, function(d) {
                return Qa(J(d, mc, 2), function(e) {
                    return G(e, 1) === b
                })
            })
        }
        function ef(a, b, c) {
            c = void 0 === c ? "" : c;
            var d = be(a) || a;
            return ff(d, b) ? !0 : df(a, c, function(e) {
                return Qa(G(e, 3), function(f) {
                    return f === b
                })
            })
        }
        function gf(a) {
            return df(A, void 0 === a ? "" : a, function() {
                return !0
            })
        }
        function ff(a, b) {
            a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
            return !!a && Ta(a.split(","), b.toString())
        }
        function df(a, b, c) {
            a = be(a) || a;
            var d = hf(a);
            b && (b = je(String(b)));
            return Ya(d, function(e, f) {
                return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
            })
        }
        function hf(a) {
            a = jf(a);
            var b = {};
            Sd(a, function(c, d) {
                try {
                    var e = new kc(c);
                    b[d] = e
                } catch (f) {}
            });
            return b
        }
        function jf(a) {
            try {
                var b = a.localStorage.getItem("google_adsense_settings");
                if (!b)
                    return {};
                var c = JSON.parse(b);
                return c !== Object(c) ? {} : Xa(c, function(d, e) {
                    return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
                })
            } catch (d) {
                return {}
            }
        }
        ;var kf = Ub("")
          , lf = /^\d+$/.test(kf) ? kf : "";
        function mf(a) {
            E(this, a, nf, of)
        }
        B(mf, D);
        var nf = [2, 8]
          , of = [[3, 4, 5], [6, 7]];
        function pf(a) {
            return null != a ? !a : a
        }
        function qf(a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d].call();
                if (e == b)
                    return e;
                null == e && (c = !0)
            }
            if (!c)
                return !b
        }
        function rf(a, b) {
            var c = J(a, mf, 2);
            if (!c.length)
                return sf(a, b);
            a = H(a, 1, 0);
            if (1 == a)
                return pf(rf(c[0], b));
            c = Pa(c, function(d) {
                return function() {
                    return rf(d, b)
                }
            });
            switch (a) {
            case 2:
                return qf(c, !1);
            case 3:
                return qf(c, !0)
            }
        }
        function sf(a, b) {
            var c = bc(a, of[0]);
            a: {
                switch (c) {
                case 3:
                    var d = H(a, 3, 0);
                    break a;
                case 4:
                    d = H(a, 4, 0);
                    break a;
                case 5:
                    d = H(a, 5, 0);
                    break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b.apply(null, G(a, 8))
                } catch (f) {
                    return
                }
                b = H(a, 1, 0);
                if (4 == b)
                    return !!e;
                d = null != e;
                if (5 == b)
                    return d;
                if (12 == b)
                    a = H(a, 7, "");
                else
                    a: {
                        switch (c) {
                        case 4:
                            a = fc(a, 6);
                            break a;
                        case 5:
                            a = H(a, 7, "");
                            break a
                        }
                        a = void 0
                    }
                if (null != a) {
                    if (6 == b)
                        return e === a;
                    if (9 == b)
                        return 0 == Bb(e, a);
                    if (d)
                        switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return (new RegExp(a)).test(e);
                        case 10:
                            return -1 == Bb(e, a);
                        case 11:
                            return 1 == Bb(e, a)
                        }
                }
            }
        }
        function xf(a, b) {
            return !a || !(!b || !rf(a, b))
        }
        ;function yf() {
            var a = {};
            this[3] = (a[23] = function(b) {
                return cf(L, parseInt(b, 10))
            }
            ,
            a[24] = function(b) {
                return ef(L, parseInt(b, 10))
            }
            ,
            a);
            a = {};
            this[4] = (a[7] = function(b) {
                try {
                    var c = window.localStorage
                } catch (f) {
                    c = null
                }
                var d = b;
                b = window;
                d = void 0 === d ? 0 : d;
                d = 0 != d ? "google_experiment_mod" + d : "google_experiment_mod";
                var e = pd(c, d);
                return null === e ? qd(b, c, d) : e
            }
            ,
            a);
            a = {};
            this[5] = (a[6] = function() {
                return lf
            }
            ,
            a)
        }
        Ca(yf);
        function zf(a) {
            E(this, a, Af, null)
        }
        B(zf, D);
        var Af = [4];
        function Bf(a) {
            E(this, a, Cf, Df)
        }
        B(Bf, D);
        function Ef(a) {
            E(this, a, null, null)
        }
        B(Ef, D);
        var Cf = [5]
          , Df = [[1, 2, 3, 6, 7]];
        function Ff() {
            var a = {};
            this.a = (a[3] = {},
            a[4] = {},
            a[5] = {},
            a)
        }
        Ca(Ff);
        var Gf = ud("false", !1);
        function Hf(a, b) {
            switch (b) {
            case 1:
                return H(a, 1, 0);
            case 2:
                return H(a, 2, 0);
            case 3:
                return H(a, 3, 0);
            case 6:
                return H(a, 6, 0);
            default:
                return null
            }
        }
        function If(a, b) {
            if (!a)
                return null;
            switch (b) {
            case 1:
                return ec(a, 1);
            case 7:
                return H(a, 3, "");
            case 2:
                return fc(a, 2);
            case 3:
                return H(a, 3, "");
            case 6:
                return G(a, 4);
            default:
                return null
            }
        }
        var Jf = Va(function() {
            if (!Gf)
                return {};
            try {
                var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
                if (a)
                    return JSON.parse(a)
            } catch (b) {}
            return {}
        });
        function Kf(a, b, c, d) {
            d = void 0 === d ? 0 : d;
            var e = Jf();
            if (e[a] && null != e[a][b])
                return e[a][b];
            b = Lf(d)[a][b];
            if (!b)
                return c;
            b = new Bf(b);
            b = Mf(b);
            a = If(b, a);
            return null != a ? a : c
        }
        function Mf(a) {
            var b = Ff.i().a;
            if (b) {
                var c = Sa(J(a, Ef, 5), function(d) {
                    return xf(I(d, mf, 1), b)
                });
                if (c)
                    return I(c, zf, 2)
            }
            return I(a, zf, 4)
        }
        function Nf() {
            this.a = {};
            this.c = []
        }
        Ca(Nf);
        function Of(a, b, c) {
            return !!Kf(1, a, void 0 === b ? !1 : b, c)
        }
        function Pf(a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(Kf(2, a, b, c));
            return isNaN(a) ? b : a
        }
        function Qf(a, b, c) {
            return Kf(3, a, void 0 === b ? "" : b, c)
        }
        function Rf(a, b, c) {
            b = void 0 === b ? [] : b;
            return Kf(6, a, b, c)
        }
        function Lf(a) {
            var b = {};
            return Nf.i().a[a] || (Nf.i().a[a] = (b[1] = {},
            b[2] = {},
            b[3] = {},
            b[6] = {},
            b))
        }
        function Sf(a, b) {
            var c = Lf(b);
            md(a, function(d, e) {
                return md(d, function(f, g) {
                    return c[e][g] = f
                })
            })
        }
        function Tf(a, b) {
            var c = Lf(b);
            Na(a, function(d) {
                var e = bc(d, Df[0])
                  , f = Hf(d, e);
                f && (c[e][f] = d.a)
            })
        }
        function Uf(a, b) {
            var c = Lf(b);
            Na(a, function(d) {
                var e = new Bf(d)
                  , f = bc(e, Df[0]);
                (e = Hf(e, f)) && (c[f][e] || (c[f][e] = d))
            })
        }
        function Vf() {
            return Pa(t(Object, "keys").call(Object, Nf.i().a), function(a) {
                return Number(a)
            })
        }
        function Wf(a) {
            Ta(Nf.i().c, a) || Sf(Lf(4), a)
        }
        ;function R(a) {
            this.methodName = a
        }
        var Xf = new R(1)
          , Yf = new R(15)
          , Zf = new R(2)
          , $f = new R(3)
          , ag = new R(4)
          , bg = new R(5)
          , cg = new R(6)
          , dg = new R(7)
          , eg = new R(8)
          , fg = new R(9)
          , gg = new R(10)
          , hg = new R(11)
          , ig = new R(12)
          , jg = new R(13)
          , kg = new R(14);
        function S(a, b, c) {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        }
        function lg(a, b, c) {
            return b[a.methodName] || c || function() {}
        }
        function mg(a) {
            S(bg, Of, a);
            S(cg, Pf, a);
            S(dg, Qf, a);
            S(eg, Rf, a);
            S(jg, Uf, a);
            S(Yf, Wf, a)
        }
        function ng(a) {
            S(ag, function(b) {
                Ff.i().a = b
            }, a);
            S(fg, function(b, c) {
                var d = Ff.i();
                d.a[3][b] || (d.a[3][b] = c)
            }, a);
            S(gg, function(b, c) {
                var d = Ff.i();
                d.a[4][b] || (d.a[4][b] = c)
            }, a);
            S(hg, function(b, c) {
                var d = Ff.i();
                d.a[5][b] || (d.a[5][b] = c)
            }, a);
            S(kg, function(b) {
                for (var c = Ff.i(), d = y([3, 4, 5]), e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    e = void 0;
                    var g = c.a[f];
                    f = b[f];
                    for (e in f)
                        g[e] = f[e]
                }
            }, a)
        }
        function og(a) {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        }
        ;function pg(a) {
            a = void 0 === a ? A : a;
            return a.ggeac || (a.ggeac = {})
        }
        ;function qg() {
            this.c = function() {}
            ;
            this.a = function() {
                return []
            }
        }
        function rg(a, b, c) {
            a.c = function(d) {
                lg(Zf, b, function() {
                    return []
                })(d, c)
            }
            ;
            a.a = function() {
                return lg($f, b, function() {
                    return []
                })(c)
            }
        }
        Ca(qg);
        function sg(a, b) {
            try {
                a: {
                    var c = a.split(".");
                    a = A;
                    for (var d = 0, e; d < c.length; d++)
                        if (e = a,
                        a = a[c[d]],
                        null == a) {
                            var f = null;
                            break a
                        }
                    f = "function" === typeof a ? e[c[d - 1]]() : a
                }
                if (typeof f === b)
                    return f
            } catch (g) {}
        }
        function tg() {
            var a = {};
            this[3] = (a[8] = function(b) {
                try {
                    return null != Aa(b)
                } catch (c) {}
            }
            ,
            a[9] = function(b) {
                try {
                    var c = Aa(b)
                } catch (d) {
                    return
                }
                if (b = "function" === typeof c)
                    c = c && c.toString && c.toString(),
                    b = "string" === typeof c && -1 != c.indexOf("[native code]");
                return b
            }
            ,
            a[10] = function() {
                return window == window.top
            }
            ,
            a[6] = function(b) {
                return Ta(qg.i().a(), parseInt(b, 10))
            }
            ,
            a[27] = function(b) {
                b = sg(b, "boolean");
                return void 0 !== b ? b : void 0
            }
            ,
            a);
            a = {};
            this[4] = (a[3] = function() {
                return wd()
            }
            ,
            a[6] = function(b) {
                b = sg(b, "number");
                return void 0 !== b ? b : void 0
            }
            ,
            a);
            a = {};
            this[5] = (a[2] = function() {
                return window.location.href
            }
            ,
            a[3] = function() {
                try {
                    return window.top.location.hash
                } catch (b) {
                    return ""
                }
            }
            ,
            a[4] = function(b) {
                b = sg(b, "string");
                return void 0 !== b ? b : void 0
            }
            ,
            a)
        }
        Ca(tg);
        function ug(a) {
            E(this, a, vg, null)
        }
        B(ug, D);
        var vg = [2];
        ug.prototype.getId = function() {
            return H(this, 1, 0)
        }
        ;
        ug.prototype.ca = function() {
            return H(this, 7, 0)
        }
        ;
        function wg(a) {
            E(this, a, xg, null)
        }
        B(wg, D);
        var xg = [2];
        wg.prototype.ca = function() {
            return H(this, 5, 0)
        }
        ;
        function yg(a) {
            E(this, a, zg, null)
        }
        B(yg, D);
        function Ag(a) {
            E(this, a, Bg, null)
        }
        B(Ag, D);
        var zg = [1, 4, 2, 3]
          , Bg = [2];
        Ag.prototype.ca = function() {
            return H(this, 1, 0)
        }
        ;
        var Cg = [12, 13];
        function Dg() {}
        Dg.prototype.init = function(a, b, c) {
            var d = this;
            c = void 0 === c ? {} : c;
            var e = void 0 === c.ta ? !1 : c.ta
              , f = void 0 === c.Sa ? {} : c.Sa;
            c = void 0 === c.Va ? [] : c.Va;
            this.f = a;
            this.h = {};
            this.j = e;
            this.g = f;
            a = {};
            this.a = (a[b] = [],
            a[4] = [],
            a);
            this.c = {};
            (b = ve()) && Na(b.split(",") || [], function(g) {
                (g = parseInt(g, 10)) && (d.c[g] = !0)
            });
            Na(c, function(g) {
                d.c[g] = !0
            });
            return this
        }
        ;
        function Eg(a, b, c) {
            if (a.h[b])
                return .001 >= Math.random() && Nd({
                    b: c,
                    dp: b
                }, "tagging_dupdiv"),
                !0;
            a.h[b] = !0;
            return !1
        }
        function Fg(a, b, c) {
            var d = []
              , e = Gg(a.f, b);
            if (9 !== b && Eg(a, b, c) || !e.length)
                return d;
            var f = Ta(Cg, b);
            Na(e, function(g) {
                if (g = Hg(a, g, c)) {
                    var h = g.getId();
                    d.push(h);
                    Ig(a, h, f ? 4 : c);
                    var k = J(g, Bf, 2);
                    k && (f ? Na(Vf(), function(l) {
                        return Tf(k, l)
                    }) : Tf(k, c))
                }
            });
            return d
        }
        function Ig(a, b, c) {
            a.a[c] || (a.a[c] = []);
            a = a.a[c];
            Ta(a, b) ? Nd({
                eids: JSON.stringify(a),
                dup: b
            }, "gpt_dupeid") : a.push(b)
        }
        function Jg(a, b) {
            a.f.push.apply(a.f, ja(Oa(Pa(b, function(c) {
                return new Ag(c)
            }), function(c) {
                return !Ta(Cg, c.ca())
            })))
        }
        function Hg(a, b, c) {
            var d = Ff.i().a;
            if (!xf(I(b, mf, 3), d))
                return null;
            var e = J(b, ug, 2)
              , f = e.length * H(b, 1, 0)
              , g = H(b, 6, 0);
            if (g) {
                f = d[4];
                switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
                }
                f = null;
                if (h)
                    try {
                        f = h(g)
                    } catch (k) {}
                null === f && (f = Math.floor(1E3 * ld(window)));
                b = Kg(b, f);
                return !b || d && !xf(I(b, mf, 3), d) ? null : Lg(a, [b], 1)
            }
            g = d ? Oa(e, function(k) {
                return xf(I(k, mf, 3), d)
            }) : e;
            return g.length ? (b = H(b, 4, 0)) ? Mg(a, b, f, g) : Lg(a, g, f / 1E3) : null
        }
        function Mg(a, b, c, d) {
            var e = null != a.g[b] ? a.g[b] : 1E3;
            if (0 >= e)
                return null;
            d = Lg(a, d, c / e);
            a.g[b] = d ? 0 : e - c;
            return d
        }
        function Lg(a, b, c) {
            var d = a.c
              , e = Ra(b, function(f) {
                return !!d[f.getId()]
            });
            return e ? e : a.j ? null : id(b, c)
        }
        function Ng(a, b) {
            S(Xf, function(c) {
                a.c[c] = !0
            }, b);
            S(Zf, function(c, d) {
                return Fg(a, c, d)
            }, b);
            S($f, function(c) {
                return (a.a[c] || []).concat(a.a[4])
            }, b);
            S(ig, function(c) {
                return Jg(a, c)
            }, b)
        }
        Ca(Dg);
        function Gg(a, b) {
            return (a = Ra(a, function(c) {
                return c.ca() == b
            })) && J(a, wg, 2) || []
        }
        function Kg(a, b) {
            var c = J(a, ug, 2)
              , d = c.length
              , e = H(a, 1, 0);
            a = H(a, 8, 0);
            var f = (b - a) % d;
            return b < a || b - a - f >= d * e - 1 ? null : c[f]
        }
        ;function Og() {
            this.c = function(a, b) {
                return void 0 === b ? !1 : b
            }
            ;
            this.f = function(a, b) {
                return void 0 === b ? 0 : b
            }
            ;
            this.g = function(a, b) {
                return void 0 === b ? "" : b
            }
            ;
            this.a = function() {}
        }
        function Pg(a, b, c) {
            a.c = function(d, e) {
                return lg(bg, b)(d, e, c)
            }
            ;
            a.f = function(d, e) {
                return lg(cg, b)(d, e, c)
            }
            ;
            a.g = function(d, e) {
                return lg(dg, b)(d, e, c)
            }
            ;
            a.a = function() {
                lg(Yf, b)(c)
            }
        }
        Ca(Og);
        function T(a) {
            var b = void 0 === b ? !1 : b;
            return Og.i().c(a, b)
        }
        function Qg(a) {
            var b = void 0 === b ? 0 : b;
            return Og.i().f(a, b)
        }
        function Rg() {
            var a = void 0 === a ? "" : a;
            return Og.i().g(14, a)
        }
        ;function Sg() {
            this.a = function() {}
        }
        Ca(Sg);
        function Tg(a) {
            Sg.i().a(a)
        }
        ;function Ug(a, b, c, d) {
            var e = 1;
            d = void 0 === d ? pg() : d;
            e = void 0 === e ? 0 : e;
            d.hasOwnProperty("init-done") ? (lg(ig, d)(Pa(J(a, Ag, 2), function(f) {
                return f.a
            })),
            lg(jg, d)(Pa(J(a, Bf, 1), function(f) {
                return f.a
            }), e),
            b && lg(kg, d)(b),
            Vg(d, e)) : (Ng(Dg.i().init(J(a, Ag, 2), e, c), d),
            mg(d),
            ng(d),
            og(d),
            Vg(d, e),
            Tf(J(a, Bf, 1), e),
            Gf = Gf || !(!c || !c.Qa),
            Tg(tg.i()),
            b && Tg(b))
        }
        function Vg(a, b) {
            a = void 0 === a ? pg() : a;
            b = void 0 === b ? 0 : b;
            var c = a
              , d = b;
            d = void 0 === d ? 0 : d;
            rg(qg.i(), c, d);
            c = a;
            b = void 0 === b ? 0 : b;
            Pg(Og.i(), c, b);
            Sg.i().a = lg(kg, a);
            Og.i().a()
        }
        ;function Wg(a) {
            var b = K(a);
            if (b.plle)
                Vg(pg(a), 1);
            else {
                b.plle = !0;
                try {
                    var c = a.localStorage
                } catch (e) {
                    c = null
                }
                b = c;
                null == pd(b, "goog_pem_mod") && qd(a, b, "goog_pem_mod");
                b = [null, null];
                try {
                    var d = JSON.parse("[[[null,62,null,[null,0.001]],[null,1010,null,[null,1]],[1011,null,null,[1]],[null,1017,null,[null,500]],[225,null,null,[1]],[1902,null,null,[1]],[1020,null,null,[1]],[1012,null,null,[1]],[1016,null,null,[1]],[358,null,null,[1]],[209,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[210,null,null,[1]],[211,null,null,[1]],[338,null,null,[1]],[312,null,null,[1]],[1007,null,null,[1]],[207,null,null,[1]],[370,null,null,[1]],[null,63,null,[null,30]],[null,60,null,[]],[1023,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,58,null,[null,120]],[null,64,null,[null,300]],[215,null,null,[1]],[1910,null,null,[1]],[1909,null,null,[1]],[1908,null,null,[1]],[363,null,null,[1]],[230,null,null,[1]],[191,null,null,[1]],[1001,null,null,[1]],[1024,null,null,[1]],[null,null,null,[null,null,null,[\"facebook[.]com\",\"whatsapp[.]com\",\"youtube[.]com\",\"google[.]com\",\"\\\\\/ads?\\\\\/\"]],null,9],[371,null,null,[1]]],[[10,[[1,[[21066649,null,[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066650,[[null,null,14,[null,null,\"exp=21066650\"]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066651,[[null,null,14,[null,null,\"exp=21066651\"]],[null,1008,null,[null,1]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066652,[[356,null,null,[1]],[null,null,14,[null,null,\"exp=21066652\"]],[null,1008,null,[null,1]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066653,[[357,null,null,[1]],[null,1008,null,[null,1]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]]],null,null,null,47,null,5],[1,[[21066699,null,[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066700,[[1006,null,null,[1]],[375,null,null,[1]],[1028,null,null,[1]],[null,1008,null,[null,2]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]]],null,null,null,47,25,400],[1,[[21066792,null,[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066793,null,[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]]],null,null,null,47,25,400],[1,[[21067343],[21067344,[[381,null,null,[1]]]]]],[20,[[20207459],[20207460]],null,null,null,51],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[50,[[44726948],[44726949,[[1007,null,null,[1]]]]]],[1,[[44731609],[44731610]]],[10,[[21067213],[21067214]]],[1,[[21067419,[[190,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067420,[[265,null,null,[1]],[260,null,null,[1]],[190,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[1,[[21067422,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067423,[[233,null,null,[1]],[232,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[1,[[21067424,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067425,[[1002,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[30,[[21066922],[21066923,[[325,null,null,[1]]]]],null,23],[50,[[21067166],[21067584,[[1020,null,null,[1]]]]]],[1000,[[21067204,[[null,null,14,[null,null,\"exp=21067204\"]]],[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]]],[21067205,[[null,null,14,[null,null,\"exp=21067205\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]],[50,[[21067466],[21067467,[[312,null,null,[]]]]],null,21],[100,[[21067468],[21067469,[[312,null,null,[]]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]],21],[10,[[21067492]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[50,[[21067981],[21067982,[[1022,null,null,[1]]]]]],[100,[[21068083],[21068084,[[1025,null,null,[1]]]]]],[10,[[21068108],[21068109,[[1026,null,null,[1]]]]]],[50,[[21068433,null,[1,[[3,[[12,null,null,null,2,null,\"soccernews\\\\.nl\"],[12,null,null,null,2,null,\"bolha\\\\.com\"],[12,null,null,null,2,null,\"multitran\\\\.com\"],[12,null,null,null,2,null,\"thefreedictionary\\\\.com\"]]]]]],[21068434,[[null,1017,null,[null,-1]]],[1,[[3,[[12,null,null,null,2,null,\"soccernews\\\\.nl\"],[12,null,null,null,2,null,\"bolha\\\\.com\"],[12,null,null,null,2,null,\"multitran\\\\.com\"],[12,null,null,null,2,null,\"thefreedictionary\\\\.com\"]]]]]]]],[1000,[[21068462,null,[12,null,null,null,4,null,\"Chrome\/8[4-6]\",[\"navigator.userAgent\"]]],[21068463,[[1912,null,null,[]]],[12,null,null,null,4,null,\"Chrome\/8[4-6]\",[\"navigator.userAgent\"]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[null,[[21068470],[21068471,[[1029,null,null,[1]]]],[21068472,[[1029,null,null,[1]],[1030,null,null,[1]]]]]],[1,[[21068481],[21068482,[[365,null,null,[1]]]]]]]],[11,[[10,[[21067493]]],[1000,[[21067604,null,[2,[[4,null,6,null,null,null,null,[\"21067468\"]],[12,null,null,null,4,null,\"Chrome\/84\",[\"navigator.userAgent\"]]]]],[21067605,null,[2,[[4,null,6,null,null,null,null,[\"21067469\"]],[12,null,null,null,4,null,\"Chrome\/84\",[\"navigator.userAgent\"]]]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[21067606,null,[2,[[4,null,6,null,null,null,null,[\"21067468\"]],[12,null,null,null,4,null,\"Chrome\/8[5-9]\",[\"navigator.userAgent\"]]]]],[21067607,null,[2,[[4,null,6,null,null,null,null,[\"21067469\"]],[12,null,null,null,4,null,\"Chrome\/8[5-9]\",[\"navigator.userAgent\"]]]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[21067608,null,[2,[[4,null,6,null,null,null,null,[\"21067468\"]],[1,[[12,null,null,null,4,null,\"Chrome\/8[4-9]\",[\"navigator.userAgent\"]]]]]]],[21067609,null,[2,[[4,null,6,null,null,null,null,[\"21067469\"]],[1,[[12,null,null,null,4,null,\"Chrome\/8[4-9]\",[\"navigator.userAgent\"]]]]]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]]]],[13,[[1000,[[21066819,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]]]],[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[500,[[21066614],[21066615,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"21066613\"]]],[1000,[[21066970,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]]]],[21066971,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]],[21066972,null,[2,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]],[1,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]]]]]]]]],[1000,[[21066973,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]],[21066974,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"21066613\"]]]]],[1,[[21067386,null,[6,null,null,3,null,0]]]],[1,[[21067387,null,[6,null,null,3,null,1]]]],[1,[[21067388,null,[6,null,null,3,null,2]]]],[10,[[21067495]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[1,[[21065784]]],[1,[[21065785,null,[4,null,8,null,null,null,null,[\"navigator.connection.saveData\"]]]]],[1,[[21065786,null,[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]],[1,[[21065787,null,[1,[[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]]]],[1,[[21065798,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]]]],[1,[[21065799,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[1,[[4,null,8,null,null,null,null,[\"localStorage\"]]]]]]]]],[1,[[21066438,null,[1,[[5,null,8,null,null,null,null,[\"localStorage\"]]]]]]],[10,[[21066612],[21066613,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[21066705],[21066706,[[382,null,null,[1]]]]]],[10,[[21067494]]],[1,[[42530789],[42530790,[[900,null,null,[1]]]]]],[50,[[44729242],[44730556],[44730557,[[null,1904,null,[null,3]]]]],null,28]]]]]")
                } catch (e) {
                    d = b
                }
                ie(13, [d]);
                Ug(new yg(d), yf.i(), {
                    ta: Hd && !!a.google_disable_experiments,
                    Qa: Hd
                }, pg(a));
                qg.i().c(12);
                qg.i().c(10);
                d = pc(a);
                ub("") && d.push("");
                a = be(a) || a;
                ce(a.location, "google_mc_lab") && d.push("242104166")
            }
        }
        function Se(a) {
            var b = qg.i().a();
            var c = pc(A);
            (b = b.concat(c).join(",")) && (a.eid = 50 < b.length ? b.substring(0, 50) + "T" : b)
        }
        ;function Xg() {
            var a = /[a-zA-Z0-9._~-]/
              , b = /%[89a-zA-Z]./;
            return A.location.pathname.replace(/(%[a-zA-Z0-9]{2})/g, function(c) {
                if (!c.match(b)) {
                    var d = decodeURIComponent(c);
                    if (d.match(a))
                        return d
                }
                return c.toUpperCase()
            })
        }
        function Yg() {
            for (var a = Xg(), b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
                var e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        }
        ;function U(a) {
            E(this, a, Zg, null)
        }
        B(U, D);
        var Zg = [4];
        U.prototype.getId = function() {
            return G(this, 3)
        }
        ;
        function $g(a) {
            E(this, a, null, null)
        }
        B($g, D);
        function ah(a) {
            E(this, a, null, bh)
        }
        B(ah, D);
        function ch(a) {
            E(this, a, null, null)
        }
        B(ch, D);
        function dh(a) {
            E(this, a, null, null)
        }
        B(dh, D);
        function eh(a) {
            E(this, a, null, null)
        }
        B(eh, D);
        var bh = [[1, 2, 3]];
        function fh(a) {
            E(this, a, null, null)
        }
        B(fh, D);
        function gh(a) {
            E(this, a, null, null)
        }
        B(gh, D);
        function hh(a) {
            E(this, a, ih, null)
        }
        B(hh, D);
        var ih = [6, 7, 9, 10, 11];
        function jh(a) {
            E(this, a, kh, null)
        }
        B(jh, D);
        function lh(a) {
            E(this, a, null, null)
        }
        B(lh, D);
        function mh(a) {
            E(this, a, nh, null)
        }
        B(mh, D);
        function oh(a) {
            E(this, a, null, null)
        }
        B(oh, D);
        function ph(a) {
            E(this, a, null, null)
        }
        B(ph, D);
        function qh(a) {
            E(this, a, null, null)
        }
        B(qh, D);
        function rh(a) {
            E(this, a, null, null)
        }
        B(rh, D);
        var kh = [1, 2, 5, 7]
          , nh = [2, 5, 6, 11];
        function sh(a) {
            var b = Yg().replace(/(^\/)|(\/$)/g, "")
              , c = nd(b)
              , d = th(b);
            return t(a, "find").call(a, function(e) {
                var f = null != G(e, 7) ? G(I(e, oh, 7), 1) : G(e, 1);
                e = null != G(e, 7) ? G(I(e, oh, 7), 2) : 2;
                if ("number" !== typeof f)
                    return !1;
                switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
                }
                return !1
            }) || null
        }
        function th(a) {
            for (var b = {}; ; ) {
                b[nd(a)] = !0;
                if (!a)
                    return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        }
        ;function uh(a) {
            var b = void 0 === a.anchor ? void 0 : a.anchor
              , c = void 0 === a.Pa ? void 0 : a.Pa
              , d = void 0 === a.Aa ? void 0 : a.Aa;
            this.a = void 0 === a.La ? void 0 : a.La;
            this.g = b;
            this.f = d;
            this.c = c
        }
        ;function vh(a) {
            var b = []
              , c = a.g;
            null != c && b.push({
                R: "a",
                Z: nd(c)
            });
            null != a.a && b.push({
                R: "as",
                Z: a.a
            });
            null != a.c && b.push({
                R: "i",
                Z: String(a.c)
            });
            null != a.f && b.push({
                R: "rp",
                Z: String(a.f)
            });
            b.sort(function(d, e) {
                return d.R.localeCompare(e.R)
            });
            b.unshift({
                R: "t",
                Z: "aa"
            });
            return b
        }
        ;function wh(a, b) {
            this.ra = a;
            this.za = b
        }
        function xh(a) {
            var b = [].slice.call(arguments).filter(Ua(function(e) {
                return null === e
            }));
            if (!b.length)
                return null;
            var c = []
              , d = {};
            b.forEach(function(e) {
                c = c.concat(e.ra || []);
                d = t(Object, "assign").call(Object, d, e.za)
            });
            return new wh(c,d)
        }
        function yh(a) {
            switch (a) {
            case 1:
                return new wh(null,{
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new wh(null,{
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new wh(null,{
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new wh(null,{
                    google_ad_semantic_area: "s"
                });
            default:
                return null
            }
        }
        ;var zh = new wh(["google-auto-placed"],{
            google_tag_origin: "qs"
        });
        var Ah = {}
          , Bh = (Ah.google_ad_channel = !0,
        Ah.google_ad_host = !0,
        Ah);
        function Ch(a, b) {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Ve("ama", b, .01)
        }
        function Dh(a) {
            var b = {};
            md(Bh, function(c, d) {
                d in a && (b[d] = a[d])
            });
            return b
        }
        ;function Eh(a) {
            if (T(316))
                var b = null;
            else
                try {
                    b = a.localStorage.getItem("google_ama_config")
                } catch (d) {
                    b = null
                }
            try {
                var c = b ? new jh(b ? JSON.parse(b) : null) : null
            } catch (d) {
                c = null
            }
            (a = c) ? (b = I(a, lh, 3),
            a = !b || G(b, 1) <= Date.now() ? null : a) : a = null;
            return a
        }
        ;function Fh(a, b, c) {
            this.a = a;
            this.c = b;
            this.f = c
        }
        function Gh(a, b) {
            return {
                top: a.c - b,
                right: a.a + a.f + 1,
                bottom: a.c + b,
                left: a.a - 1
            }
        }
        ;function Hh(a) {
            this.a = {};
            this.c = {};
            if (a)
                for (var b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        Hh.prototype.add = function(a) {
            this.a[a] = !0;
            this.c[a] = a
        }
        ;
        Hh.prototype.contains = function(a) {
            return !!this.a[a]
        }
        ;
        function Ih(a) {
            E(this, a, null, null)
        }
        B(Ih, D);
        function Jh(a) {
            E(this, a, null, null)
        }
        B(Jh, D);
        function Kh(a) {
            E(this, a, null, null)
        }
        B(Kh, D);
        function Lh(a) {
            E(this, a, Mh, null)
        }
        B(Lh, D);
        var Mh = [5];
        function Nh(a) {
            try {
                var b = a.localStorage.getItem("google_ama_settings");
                return b ? new Lh(b ? JSON.parse(b) : null) : null
            } catch (c) {
                return null
            }
        }
        ;function Oh(a, b) {
            this.a = a;
            this.c = b
        }
        function Ph(a) {
            return null != a.a ? a.a.value : null
        }
        function Qh(a) {
            if (null != a.a) {
                a = a.a.value;
                if (null == a)
                    a = null;
                else {
                    var b = vh(a);
                    a = [];
                    b = y(b);
                    for (var c = b.next(); !c.done; c = b.next())
                        c = c.value,
                        a.push(c.R + "." + c.Z);
                    a = new wh(null,{
                        google_placement_id: a.join("~")
                    })
                }
                return a instanceof Oh ? a : new Oh({
                    value: a
                },null)
            }
            return a
        }
        function Rh(a, b) {
            null != a.a || b(a.c);
            return a
        }
        ;function Sh() {
            this.a = {};
            this.c = {}
        }
        Sh.prototype.set = function(a, b) {
            this.a[a] = b;
            this.c[a] = a
        }
        ;
        Sh.prototype.get = function(a, b) {
            return void 0 !== this.a[a] ? this.a[a] : b
        }
        ;
        var Th = {
            rectangle: 1,
            horizontal: 2,
            vertical: 4
        };
        function Uh(a, b) {
            for (var c = ["width", "height"], d = 0; d < c.length; d++) {
                var e = "google_ad_" + c[d];
                if (!b.hasOwnProperty(e)) {
                    var f = N(a[c[d]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (b[e] = f)
                }
            }
        }
        function Vh(a, b) {
            return !((sd.test(b.google_ad_width) || rd.test(a.style.width)) && (sd.test(b.google_ad_height) || rd.test(a.style.height)))
        }
        function Wh(a, b) {
            return (a = Xh(a, b)) ? a.y : 0
        }
        function Xh(a, b) {
            try {
                var c = b.document.documentElement.getBoundingClientRect()
                  , d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (e) {
                return null
            }
        }
        function Yh(a, b) {
            do {
                var c = hd(a, b);
                if (c && "fixed" == c.position)
                    return !1
            } while (a = a.parentElement);
            return !0
        }
        function Zh(a) {
            var b = 0, c;
            for (c in Th)
                -1 != a.indexOf(c) && (b |= Th[c]);
            return b
        }
        function $h(a, b, c, d, e) {
            if (ae(a) != a)
                return be(a) ? 3 : 16;
            if (!(488 > Q(a)))
                return 4;
            if (!(a.innerHeight >= a.innerWidth))
                return 5;
            var f = Q(a);
            if (!f || (f - c) / f > d)
                a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive)
                    a: {
                        c = Q(a);
                        for (b = b.parentElement; b; b = b.parentElement)
                            if ((d = hd(b, a)) && (e = N(d.width)) && !(e >= c) && "visible" != d.overflow) {
                                c = !0;
                                break a
                            }
                        c = !1
                    }
                a = c ? 7 : !0
            }
            return a
        }
        function ai(a, b, c, d) {
            var e = $h(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || Yh(c, b) ? bi(b) ? a = !0 : (b = Q(b),
            a = b - a,
            a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        }
        function ci(a, b, c) {
            a = a.style;
            "rtl" == b ? T(251) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : T(251) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
        }
        function di(a, b) {
            if (3 == b.nodeType)
                return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName))
                    return !1;
                try {
                    var c = hd(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        }
        function ei(a, b) {
            for (var c = 0; 100 > c && b.parentElement; ++c) {
                for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                    var f = d[e];
                    if (f != b && di(a, f))
                        return
                }
                b = b.parentElement;
                b.style.width = "100%";
                b.style.height = "auto"
            }
        }
        function fi(a, b, c) {
            a = Xh(b, a);
            return "rtl" == c ? -a.x : a.x
        }
        function gi(a, b) {
            var c;
            c = (c = b.parentElement) ? (c = hd(c, a)) ? c.direction : "" : "";
            if (c) {
                b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
                b.style.borderSpacing = b.style.padding = "0";
                ci(b, c, "0px");
                b.style.width = Q(a) + "px";
                if (0 !== fi(a, b, c)) {
                    ci(b, c, "0px");
                    var d = fi(a, b, c);
                    ci(b, c, -1 * d + "px");
                    a = fi(a, b, c);
                    0 !== a && a !== d && ci(b, c, d / (a - d) * d + "px")
                }
                b.style.zIndex = 30
            }
        }
        function bi(a) {
            return T(233) || a.location && "#bffwroe2etoq" == a.location.hash
        }
        ;function V(a, b) {
            this.c = a;
            this.a = b
        }
        n = V.prototype;
        n.minWidth = function() {
            return this.c
        }
        ;
        n.height = function() {
            return this.a
        }
        ;
        n.X = function(a) {
            return 300 < a && 300 < this.a ? this.c : Math.min(1200, Math.round(a))
        }
        ;
        n.ka = function(a) {
            return this.X(a) + "x" + this.height()
        }
        ;
        n.aa = function() {}
        ;
        function hi(a, b, c, d) {
            d = void 0 === d ? function(f) {
                return f
            }
            : d;
            var e;
            return a.style && a.style[c] && d(a.style[c]) || (e = hd(a, b)) && e[c] && d(e[c]) || null
        }
        function ii(a) {
            return function(b) {
                return b.minWidth() <= a
            }
        }
        function ji(a, b, c, d) {
            var e = a && ki(c, b)
              , f = li(b, d);
            return function(g) {
                return !(e && g.height() >= f)
            }
        }
        function mi(a) {
            return function(b) {
                return b.height() <= a
            }
        }
        function ki(a, b) {
            return Wh(a, b) < bf(b).clientHeight - 100
        }
        function ni(a, b) {
            a = Wh(a, b);
            b = bf(b).clientHeight;
            return 0 == b ? null : a / b
        }
        function oi(a, b) {
            var c = hi(b, a, "height", N);
            if (c)
                return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = hi(b, a, "height", N);
            b.style.height = d;
            if (c)
                return c;
            c = Infinity;
            do
                (d = b.style && N(b.style.height)) && (c = Math.min(c, d)),
                (d = hi(b, a, "maxHeight", N)) && (c = Math.min(c, d));
            while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        }
        function li(a, b) {
            var c = 0 == Vd(a);
            return b && c ? Math.max(250, 2 * bf(a).clientHeight / 3) : 250
        }
        ;function pi(a, b) {
            for (var c = [], d = a.length, e = 0; e < d; e++)
                c.push(a[e]);
            c.forEach(b, void 0)
        }
        ;function qi(a) {
            if (1 != a.nodeType)
                var b = !1;
            else if (b = "INS" == a.tagName)
                a: {
                    b = ["adsbygoogle-placeholder"];
                    a = a.className ? a.className.split(/\s+/) : [];
                    for (var c = {}, d = 0; d < a.length; ++d)
                        c[a[d]] = !0;
                    for (d = 0; d < b.length; ++d)
                        if (!c[b[d]]) {
                            b = !1;
                            break a
                        }
                    b = !0
                }
            return b
        }
        ;function ri(a, b, c) {
            switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType; )
                            d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
            }
            qi(b) && (b.setAttribute("data-init-display", b.style.display),
            b.style.display = "block")
        }
        ;function si(a, b, c) {
            function d(f) {
                f = ti(f);
                return null == f ? !1 : c > f
            }
            function e(f) {
                f = ti(f);
                return null == f ? !1 : c < f
            }
            switch (b) {
            case 0:
                return {
                    init: ui(a.previousSibling, e),
                    da: function(f) {
                        return ui(f.previousSibling, e)
                    },
                    ea: 0
                };
            case 2:
                return {
                    init: ui(a.lastChild, e),
                    da: function(f) {
                        return ui(f.previousSibling, e)
                    },
                    ea: 0
                };
            case 3:
                return {
                    init: ui(a.nextSibling, d),
                    da: function(f) {
                        return ui(f.nextSibling, d)
                    },
                    ea: 3
                };
            case 1:
                return {
                    init: ui(a.firstChild, d),
                    da: function(f) {
                        return ui(f.nextSibling, d)
                    },
                    ea: 3
                }
            }
            throw Error("Un-handled RelativePosition: " + b);
        }
        function ti(a) {
            return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
        }
        function ui(a, b) {
            return a && b(a) ? a : null
        }
        ;function vi(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c]
                  , e = Sb(d.eb);
                a[e] = d.value
            }
        }
        ;function wi(a, b, c, d) {
            this.g = a;
            this.c = b;
            this.f = c;
            this.a = d
        }
        function xi(a, b) {
            var c = [];
            try {
                c = b.querySelectorAll(a.g)
            } catch (g) {}
            if (!c.length)
                return [];
            b = c;
            c = b.length;
            if (0 < c) {
                for (var d = Array(c), e = 0; e < c; e++)
                    d[e] = b[e];
                b = d
            } else
                b = [];
            b = yi(a, b);
            "number" === typeof a.c && (c = a.c,
            0 > c && (c += b.length),
            b = 0 <= c && c < b.length ? [b[c]] : []);
            if ("number" === typeof a.f) {
                c = [];
                for (d = 0; d < b.length; d++) {
                    e = zi(b[d]);
                    var f = a.f;
                    0 > f && (f += e.length);
                    0 <= f && f < e.length && c.push(e[f])
                }
                b = c
            }
            return b
        }
        wi.prototype.toString = function() {
            return JSON.stringify({
                nativeQuery: this.g,
                occurrenceIndex: this.c,
                paragraphIndex: this.f,
                ignoreMode: this.a
            })
        }
        ;
        function yi(a, b) {
            if (null == a.a)
                return b;
            switch (a.a) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.a);
            }
        }
        function zi(a) {
            var b = [];
            pi(a.getElementsByTagName("p"), function(c) {
                100 <= Ai(c) && b.push(c)
            });
            return b
        }
        function Ai(a) {
            if (3 == a.nodeType)
                return a.length;
            if (1 != a.nodeType || "SCRIPT" == a.tagName)
                return 0;
            var b = 0;
            pi(a.childNodes, function(c) {
                b += Ai(c)
            });
            return b
        }
        function Bi(a) {
            return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
        }
        ;function Ci(a) {
            if (!a)
                return null;
            var b = G(a, 7);
            if (G(a, 1) || a.getId() || 0 < G(a, 4).length) {
                var c = a.getId()
                  , d = G(a, 1)
                  , e = G(a, 4);
                b = G(a, 2);
                var f = G(a, 5);
                a = Di(G(a, 6));
                var g = "";
                d && (g += d);
                c && (g += "#" + Bi(c));
                if (e)
                    for (c = 0; c < e.length; c++)
                        g += "." + Bi(e[c]);
                b = (e = g) ? new wi(e,b,f,a) : null
            } else
                b = b ? new wi(b,G(a, 2),G(a, 5),Di(G(a, 6))) : null;
            return b
        }
        var Ei = {
            1: 1,
            2: 2,
            3: 3,
            0: 0
        };
        function Di(a) {
            return null == a ? a : Ei[a]
        }
        var Fi = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        };
        function Gi(a) {
            switch (G(a, 8)) {
            case 1:
            case 2:
                if (null == a || null == I(a, U, 1))
                    var b = null;
                else
                    b = G(I(a, U, 1), 7),
                    null == b ? b = null : (a = G(a, 2),
                    b = null == a ? null : new uh({
                        anchor: b,
                        Aa: a
                    }));
                return null != b ? new Oh({
                    value: b
                },null) : new Oh(null,Error("Missing dimension when creating placement id"));
            case 3:
                return new Oh(null,Error("Missing dimension when creating placement id"));
            default:
                return new Oh(null,Error("Invalid type: " + G(a, 8)))
            }
        }
        ;function Hi() {}
        ;function Ii(a, b, c) {
            var d = Gh(c, b + 1);
            return !Qa(a, function(e) {
                return e.left < d.right && d.left < e.right && e.top < d.bottom && d.top < e.bottom
            })
        }
        ;function Ji() {
            this.a = new Sh
        }
        Ji.prototype.set = function(a, b) {
            var c = this.a.get(a);
            c || (c = new Hh,
            this.a.set(a, c));
            c.add(b)
        }
        ;
        function Ki(a, b) {
            function c() {
                d.push({
                    anchor: e.anchor,
                    position: e.position
                });
                return e.anchor == b.anchor && e.position == b.position
            }
            for (var d = [], e = a; e; ) {
                switch (e.position) {
                case 1:
                    if (c())
                        return d;
                    e.position = 2;
                case 2:
                    if (c())
                        return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else
                        e.position = 3;
                case 3:
                    if (c())
                        return d;
                    e.position = 4;
                case 4:
                    if (c())
                        return d
                }
                for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body; ) {
                    e = {
                        anchor: e.anchor.parentNode,
                        position: 3
                    };
                    if (c())
                        return d;
                    e.position = 4;
                    if (c())
                        return d
                }
                e && e.anchor.nextSibling ? e = {
                    anchor: e.anchor.nextSibling,
                    position: 1
                } : e = null
            }
            return d
        }
        ;function Li(a, b) {
            this.c = a;
            this.a = b
        }
        function Mi(a, b) {
            var c = new Ji
              , d = new Hh;
            b.forEach(function(e) {
                if (I(e, ch, 1)) {
                    e = I(e, ch, 1);
                    if (I(e, $g, 1) && I(I(e, $g, 1), U, 1) && I(e, $g, 2) && I(I(e, $g, 2), U, 1)) {
                        var f = Ni(a, I(I(e, $g, 1), U, 1))
                          , g = Ni(a, I(I(e, $g, 2), U, 1));
                        if (f && g)
                            for (f = y(Ki({
                                anchor: f,
                                position: G(I(e, $g, 1), 2)
                            }, {
                                anchor: g,
                                position: G(I(e, $g, 2), 2)
                            })),
                            g = f.next(); !g.done; g = f.next())
                                g = g.value,
                                c.set(Ea(g.anchor), g.position)
                    }
                    I(e, $g, 3) && I(I(e, $g, 3), U, 1) && (f = Ni(a, I(I(e, $g, 3), U, 1))) && c.set(Ea(f), G(I(e, $g, 3), 2))
                } else
                    I(e, dh, 2) ? Oi(a, I(e, dh, 2), c) : I(e, eh, 3) && Pi(a, I(e, eh, 3), d)
            });
            return new Li(c,d)
        }
        function Oi(a, b, c) {
            I(b, U, 1) && (a = Qi(a, I(b, U, 1))) && a.forEach(function(d) {
                d = Ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        }
        function Pi(a, b, c) {
            I(b, U, 1) && (a = Qi(a, I(b, U, 1))) && a.forEach(function(d) {
                c.add(Ea(d))
            })
        }
        function Ni(a, b) {
            return (a = Qi(a, b)) && 0 < a.length ? a[0] : null
        }
        function Qi(a, b) {
            return (b = Ci(b)) ? xi(b, a) : null
        }
        ;function Ri(a, b) {
            if (!a)
                return !1;
            a = hd(a, b);
            if (!a)
                return !1;
            a = a.cssFloat || a.styleFloat;
            return "left" == a || "right" == a
        }
        function Si(a) {
            for (a = a.previousSibling; a && 1 != a.nodeType; )
                a = a.previousSibling;
            return a ? a : null
        }
        function Ti(a) {
            return !!a.nextSibling || !!a.parentNode && Ti(a.parentNode)
        }
        ;function Ui(a, b) {
            return a && null != G(a, 4) && b[G(I(a, gh, 4), 2)] ? !1 : !0
        }
        function Vi(a) {
            var b = {};
            a && G(a, 6).forEach(function(c) {
                b[c] = !0
            });
            return b
        }
        function Wi(a, b, c, d) {
            this.a = A;
            this.m = a;
            this.c = b;
            this.j = d || null;
            this.u = (this.h = c) ? Mi(A.document, J(c, ah, 5)) : Mi(A.document, []);
            this.f = 0;
            this.g = !1
        }
        function Xi(a) {
            return new Hi(Yi(a).numAutoAdsPlaced || 0,J(a.c, hh, 1).length)
        }
        function Zi(a, b) {
            if (a.g)
                return !0;
            a.g = !0;
            var c = J(a.c, hh, 1);
            a.f = 0;
            var d = Vi(a.h);
            var e = (e = a.h) ? Ta(G(e, 11), 1) : !1;
            var f;
            if (f = !e && I(a.c, rh, 15) && ec(I(a.c, rh, 15), 12))
                a: {
                    f = Nh(a.a);
                    f = null !== f ? J(f, Kh, 5) : null;
                    var g = Nh(a.a);
                    var h = null != g ? I(g, Ih, 6) || null : null;
                    if (null == f)
                        f = !1;
                    else {
                        g = 4;
                        var k = 0;
                        h && (g = G(h, 1) || g,
                        k = G(h, 3) || k);
                        h = new Hh([2, 1, 0]);
                        I(a.c, rh, 15) && ec(I(a.c, rh, 15), 15) && h.add(4);
                        for (var l = [], m = 0; m < f.length; m++) {
                            var p = Yi(a).numAutoAdsPlaced || 0;
                            var r = Nh(a.a);
                            r = null !== r && null != G(r, 8) ? G(r, 8) : 0;
                            if (p + r >= g) {
                                f = !0;
                                break a
                            }
                            p = G(f[m], 1);
                            if (null == p)
                                break;
                            r = c[p];
                            var u = I(f[m], Jh, 2);
                            null != u && null != cc(u, 1) && null != cc(u, 2) && null != cc(u, 3) && (u = new Fh(cc(u, 1),cc(u, 2),cc(u, 3)),
                            Ii(l, k, u) && (p = $i(a, r, p, b, d, h),
                            null != p && null != p.W && (p = p.W.getBoundingClientRect(),
                            l.push(p))))
                        }
                        f = 0 < (Yi(a).numAutoAdsPlaced || 0)
                    }
                }
            if (f)
                return !0;
            f = Nh(a.a);
            if (null !== f && ec(f, 2))
                return Yi(a).eatf = !0,
                ie(7, [!0, 0, !1]),
                !0;
            f = new Hh([2]);
            !e && I(a.c, rh, 15) && ec(I(a.c, rh, 15), 15) && f.add(4);
            for (e = 0; e < c.length; e++)
                if ($i(a, c[e], e, b, d, f))
                    return !0;
            ie(7, [!1, a.f, !1]);
            return !1
        }
        function $i(a, b, c, d, e, f) {
            if (!I(b, gh, 4) || !f.contains(G(I(b, gh, 4), 1)) || 1 !== G(b, 8) || !Ui(b, e))
                return null;
            a.f++;
            if (b = aj(a, b, d, e))
                d = Yi(a),
                d.numAutoAdsPlaced || (d.numAutoAdsPlaced = 0),
                null == d.placed && (d.placed = []),
                d.numAutoAdsPlaced++,
                d.placed.push({
                    index: c,
                    element: b.W
                }),
                ie(7, [!1, a.f, !0]);
            return b
        }
        function aj(a, b, c, d) {
            if (!Ui(b, d) || 1 != G(b, 8))
                return null;
            d = I(b, U, 1);
            if (!d)
                return null;
            d = Ci(d);
            if (!d)
                return null;
            d = xi(d, a.a.document);
            if (0 == d.length)
                return null;
            d = d[0];
            var e = G(b, 2);
            e = Fi[e];
            e = void 0 === e ? null : e;
            var f;
            if (!(f = null == e)) {
                a: {
                    f = a.a;
                    switch (e) {
                    case 0:
                        f = Ri(Si(d), f);
                        break a;
                    case 3:
                        f = Ri(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Ri(g ? 1 == g.nodeType ? g : Si(g) : null, f);
                        break a
                    }
                    f = !1
                }
                if (c = !f && !(!c && 2 == e && !Ti(d)))
                    c = 1 == e || 2 == e ? d : d.parentNode,
                    c = !(c && !qi(c) && 0 >= c.offsetWidth);
                f = !c
            }
            if (!(c = f)) {
                c = a.u;
                f = G(b, 2);
                g = Ea(d);
                g = c.c.a.get(g);
                if (!(g = g ? g.contains(f) : !1))
                    a: {
                        if (c.a.contains(Ea(d)))
                            switch (f) {
                            case 2:
                            case 3:
                                g = !0;
                                break a;
                            default:
                                g = !1;
                                break a
                            }
                        for (f = d.parentElement; f; ) {
                            if (c.a.contains(Ea(f))) {
                                g = !0;
                                break a
                            }
                            f = f.parentElement
                        }
                        g = !1
                    }
                c = g
            }
            if (c)
                return null;
            c = I(b, fh, 3);
            f = {};
            c && (f.Ha = G(c, 1),
            f.qa = G(c, 2),
            f.clearBoth = !!dc(c, 3));
            c = I(b, gh, 4) && G(I(b, gh, 4), 2) ? G(I(b, gh, 4), 2) : null;
            c = yh(c);
            g = null == G(b, 12) ? null : G(b, 12);
            g = null == g ? null : new wh(null,{
                google_ml_rank: g
            });
            b = T(1012) ? bj(a, b) : null;
            b = xh(a.j, c, g, b);
            c = a.a;
            a = a.m;
            var h = c.document
              , k = f.clearBoth || !1;
            g = Wc((new Xc(h)).a, "DIV");
            var l = g.style;
            l.width = "100%";
            l.height = "auto";
            l.clear = k ? "both" : "none";
            k = g.style;
            k.textAlign = "center";
            f.Ta && vi(k, f.Ta);
            h = Wc((new Xc(h)).a, "INS");
            k = h.style;
            k.display = "block";
            k.margin = "auto";
            k.backgroundColor = "transparent";
            f.Ha && (k.marginTop = f.Ha);
            f.qa && (k.marginBottom = f.qa);
            f.Ka && vi(k, f.Ka);
            g.appendChild(h);
            f = {
                ja: g,
                W: h
            };
            f.W.setAttribute("data-ad-format", "auto");
            g = [];
            if (h = b && b.ra)
                f.ja.className = h.join(" ");
            h = f.W;
            h.className = "adsbygoogle";
            h.setAttribute("data-ad-client", a);
            g.length && h.setAttribute("data-ad-channel", g.join("+"));
            a: {
                try {
                    var m = f.ja;
                    var p = void 0 === p ? 0 : p;
                    if (T(313)) {
                        p = void 0 === p ? 0 : p;
                        var r = si(d, e, p);
                        if (r.init) {
                            var u = r.init;
                            for (d = u; d = r.da(d); )
                                u = d;
                            var w = {
                                anchor: u,
                                position: r.ea
                            }
                        } else
                            w = {
                                anchor: d,
                                position: e
                            };
                        m["google-ama-order-assurance"] = p;
                        ri(m, w.anchor, w.position)
                    } else
                        ri(m, d, e);
                    b: {
                        var v = f.W;
                        v.setAttribute("data-adsbygoogle-status", "reserved");
                        v.className += " adsbygoogle-noablate";
                        m = {
                            element: v
                        };
                        var F = b && b.za;
                        if (v.hasAttribute("data-pub-vars")) {
                            try {
                                F = JSON.parse(v.getAttribute("data-pub-vars"))
                            } catch (wa) {
                                break b
                            }
                            v.removeAttribute("data-pub-vars")
                        }
                        F && (m.params = F);
                        (c.adsbygoogle = c.adsbygoogle || []).push(m)
                    }
                } catch (wa) {
                    (v = f.ja) && v.parentNode && (F = v.parentNode,
                    F.removeChild(v),
                    qi(F) && (F.style.display = F.getAttribute("data-init-display") || "none"));
                    v = !1;
                    break a
                }
                v = !0
            }
            return v ? f : null
        }
        function Yi(a) {
            return a.a.google_ama_state = a.a.google_ama_state || {}
        }
        function bj(a, b) {
            return Ph(Rh(Qh(Gi(b)), function(c) {
                Yi(a).exception = c
            }))
        }
        ;function cj() {
            this.c = new dj(this);
            this.a = 0
        }
        cj.prototype.resolve = function(a) {
            ej(this);
            this.a = 1;
            this.g = a;
            fj(this.c)
        }
        ;
        cj.prototype.reject = function(a) {
            ej(this);
            this.a = 2;
            this.f = a;
            fj(this.c)
        }
        ;
        function ej(a) {
            if (0 != a.a)
                throw Error("Already resolved/rejected.");
        }
        function dj(a) {
            this.a = a
        }
        dj.prototype.then = function(a, b) {
            if (this.c)
                throw Error("Then functions already set.");
            this.c = a;
            this.f = b;
            fj(this)
        }
        ;
        function fj(a) {
            switch (a.a.a) {
            case 0:
                break;
            case 1:
                a.c && a.c(a.a.g);
                break;
            case 2:
                a.f && a.f(a.a.f);
                break;
            default:
                throw Error("Unhandled deferred state.");
            }
        }
        ;function gj(a, b) {
            this.exception = b
        }
        function hj(a, b) {
            this.f = A;
            this.a = a;
            this.c = b
        }
        hj.prototype.start = function() {
            this.g()
        }
        ;
        hj.prototype.g = function() {
            try {
                switch (this.f.document.readyState) {
                case "complete":
                case "interactive":
                    Zi(this.a, !0);
                    ij(this);
                    break;
                default:
                    Zi(this.a, !1) ? ij(this) : this.f.setTimeout(Ja(this.g, this), 100)
                }
            } catch (a) {
                ij(this, a)
            }
        }
        ;
        function ij(a, b) {
            try {
                a.c.resolve(new gj(Xi(a.a),b))
            } catch (c) {
                a.c.reject(c)
            }
        }
        ;function jj(a) {
            Ch(a, {
                atf: 1
            })
        }
        function kj(a, b) {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            Ch(a, {
                atf: 0
            })
        }
        ;function lj() {
            this.debugCard = null;
            this.debugCardRequested = !1
        }
        ;function mj() {
            var a = this;
            this.promise = new q.Promise(function(b, c) {
                a.resolve = b;
                a.reject = c
            }
            )
        }
        ;function nj() {
            var a = new mj;
            this.promise = a.promise;
            this.resolve = a.resolve
        }
        function oj(a) {
            A.google_llp || (A.google_llp = {});
            var b = A.google_llp;
            b[7] || (b[7] = new nj,
            a && a());
            return b[7]
        }
        function pj(a) {
            return oj(function() {
                gd(A.document, a)
            }).promise
        }
        ;function qj(a) {
            var b = {}
              , c = {};
            return c.enable_page_level_ads = (b.pltais = !0,
            b),
            c.google_ad_client = a,
            c
        }
        ;function rj(a) {
            var b = ef(A, 12, a.google_ad_client);
            a = "google_ad_host"in a;
            var c = .5 < Math.random()
              , d = ce(A.location, "google_ads_preview");
            return b && !a && c || d
        }
        function sj(a) {
            if (A.google_apltlad || ae(A) != A || !a.google_ad_client)
                return null;
            var b = rj(a);
            A.google_apltlad = !0;
            var c = qj(a.google_ad_client)
              , d = c.enable_page_level_ads;
            md(a, function(e, f) {
                tc[f] && "google_ad_client" != f && (d[f] = e)
            });
            if (b)
                d.google_ad_channel = "AutoInsertAutoAdCode";
            else if (d.google_pgb_reactive = 7,
            "google_ad_section"in a || "google_ad_region"in a)
                d.google_ad_section = a.google_ad_section || a.google_ad_region;
            return c
        }
        function tj(a) {
            return Da(a.enable_page_level_ads) && 7 == a.enable_page_level_ads.google_pgb_reactive
        }
        ;function Re(a) {
            a.shv = Gd()
        }
        Ke.Ea(!Hd);
        function uj(a, b) {
            return Wh(b, a) + hi(b, a, "height", N)
        }
        ;function vj(a) {
            E(this, a, null, null)
        }
        B(vj, D);
        function wj(a) {
            var b = this;
            this.a = a;
            a.google_iframe_oncopy || (a.google_iframe_oncopy = {
                handlers: {},
                upd: function(c, d) {
                    var e = xj("rx", c)
                      , f = Number;
                    a: {
                        if (c && (c = c.match("dt=([^&]+)")) && 2 == c.length) {
                            c = c[1];
                            break a
                        }
                        c = ""
                    }
                    f = f(c);
                    f = (new Date).getTime() - f;
                    e = e.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
                    b.set(d, e);
                    return e
                }
            });
            this.c = a.google_iframe_oncopy
        }
        wj.prototype.set = function(a, b) {
            var c = this;
            this.c.handlers[a] = b;
            this.a.addEventListener && this.a.addEventListener("load", function() {
                var d = c.a.document.getElementById(a);
                try {
                    var e = d.contentWindow.document;
                    if (d.onload && e && (!e.body || !e.body.firstChild))
                        d.onload()
                } catch (f) {}
            }, !1)
        }
        ;
        function xj(a, b) {
            var c = new RegExp("\\b" + a + "=(\\d+)")
              , d = c.exec(b);
            d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
            return b
        }
        var yj, zj = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
        var W = zj;
        /[\x00&<>"']/.test(W) && (-1 != W.indexOf("&") && (W = W.replace(vb, "&amp;")),
        -1 != W.indexOf("<") && (W = W.replace(wb, "&lt;")),
        -1 != W.indexOf(">") && (W = W.replace(xb, "&gt;")),
        -1 != W.indexOf('"') && (W = W.replace(yb, "&quot;")),
        -1 != W.indexOf("'") && (W = W.replace(zb, "&#39;")),
        -1 != W.indexOf("\x00") && (W = W.replace(Ab, "&#0;")));
        zj = W;
        yj = zj;
        var Aj = null;
        function X(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            V.call(this, a, b);
            this.$ = c;
            this.Ra = d
        }
        z(X, V);
        X.prototype.ga = function() {
            return this.$
        }
        ;
        X.prototype.aa = function(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px",
            b.rpe = !0)
        }
        ;
        function Bj(a) {
            return function(b) {
                return !!(b.$ & a)
            }
        }
        ;var Cj = Ub("script");
        function Dj(a, b, c, d, e, f, g, h, k, l, m, p, r, u) {
            this.B = a;
            this.a = b;
            this.$ = void 0 === c ? null : c;
            this.f = void 0 === d ? null : d;
            this.M = void 0 === e ? null : e;
            this.c = void 0 === f ? null : f;
            this.g = void 0 === g ? null : g;
            this.u = void 0 === h ? !1 : h;
            this.m = void 0 === k ? !1 : k;
            this.J = void 0 === l ? null : l;
            this.K = void 0 === m ? null : m;
            this.h = void 0 === p ? null : p;
            this.j = void 0 === r ? null : r;
            this.L = void 0 === u ? null : u;
            this.Y = this.G = this.I = null
        }
        function Ej(a, b, c) {
            null != a.$ && (c.google_responsive_formats = a.$);
            null != a.M && (c.google_safe_for_responsive_override = a.M);
            null != a.c && (!0 === a.c ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1,
            c.gfwrnwer = a.c));
            null != a.g && !0 !== a.g && (c.gfwrnher = a.g);
            a.u && (c.google_bfa = a.u);
            a.m && (c.ebfa = a.m);
            var d = a.j || c.google_ad_width;
            null != d && (c.google_resizing_width = d);
            d = a.h || c.google_ad_height;
            null != d && (c.google_resizing_height = d);
            d = a.a.X(b);
            var e = a.a.height();
            c.google_ad_resize || (c.google_ad_width = d,
            c.google_ad_height = e,
            c.google_ad_format = a.a.ka(b),
            c.google_responsive_auto_format = a.B,
            null != a.f && (c.armr = a.f),
            c.google_ad_resizable = !0,
            c.google_override_format = 1,
            c.google_loader_features_used = 128,
            !0 === a.c && (c.gfwrnh = a.a.height() + "px"));
            null != a.J && (c.gfwroml = a.J);
            null != a.K && (c.gfwromr = a.K);
            null != a.h && (c.gfwroh = a.h);
            null != a.j && (c.gfwrow = a.j);
            null != a.L && (c.gfwroz = a.L);
            null != a.I && (c.gml = a.I);
            null != a.G && (c.gmr = a.G);
            null != a.Y && (c.gzi = a.Y);
            b = Zd();
            b = be(b) || b;
            ce(b.location, "google_responsive_slot_debug") && (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.c || !0 !== a.g ? "#ffa500" : "#0f0" : "#f00") + " !important;");
            ce(b.location, "google_responsive_dummy_ad") && (Ta([1, 2, 3, 4, 5, 6, 7, 8], a.B) || 1 === a.f) && 2 !== a.f && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }),
            c.dash = "<" + Cj + ">window.top.postMessage('" + a + "', '*');\n          </" + Cj + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
        }
        ;/* 
 
 Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
 
 Licensed under the Apache License, Version 2.0 (the "License"); 
 you may not use this file except in compliance with the License. 
 You may obtain a copy of the License at 
 
      http://www.apache.org/licenses/LICENSE-2.0 
 
 Unless required by applicable law or agreed to in writing, software 
 distributed under the License is distributed on an "AS-IS" BASIS, 
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 See the License for the specific language governing permissions and 
 limitations under the License. 
*/
        var Fj = {}
          , Gj = (Fj.image_stacked = 1 / 1.91,
        Fj.image_sidebyside = 1 / 3.82,
        Fj.mobile_banner_image_sidebyside = 1 / 3.82,
        Fj.pub_control_image_stacked = 1 / 1.91,
        Fj.pub_control_image_sidebyside = 1 / 3.82,
        Fj.pub_control_image_card_stacked = 1 / 1.91,
        Fj.pub_control_image_card_sidebyside = 1 / 3.74,
        Fj.pub_control_text = 0,
        Fj.pub_control_text_card = 0,
        Fj)
          , Hj = {}
          , Ij = (Hj.image_stacked = 80,
        Hj.image_sidebyside = 0,
        Hj.mobile_banner_image_sidebyside = 0,
        Hj.pub_control_image_stacked = 80,
        Hj.pub_control_image_sidebyside = 0,
        Hj.pub_control_image_card_stacked = 85,
        Hj.pub_control_image_card_sidebyside = 0,
        Hj.pub_control_text = 80,
        Hj.pub_control_text_card = 80,
        Hj)
          , Jj = {}
          , Kj = (Jj.pub_control_image_stacked = 100,
        Jj.pub_control_image_sidebyside = 200,
        Jj.pub_control_image_card_stacked = 150,
        Jj.pub_control_image_card_sidebyside = 250,
        Jj.pub_control_text = 100,
        Jj.pub_control_text_card = 150,
        Jj);
        function Lj(a) {
            var b = 0;
            a.D && b++;
            a.v && b++;
            a.A && b++;
            if (3 > b)
                return {
                    C: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
                };
            b = a.D.split(",");
            var c = a.A.split(",");
            a = a.v.split(",");
            if (b.length !== c.length || b.length !== a.length)
                return {
                    C: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
                };
            if (2 < b.length)
                return {
                    C: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
                };
            for (var d = [], e = [], f = 0; f < b.length; f++) {
                var g = Number(c[f]);
                if (isNaN(g) || 0 === g)
                    return {
                        C: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
                    };
                d.push(g);
                g = Number(a[f]);
                if (isNaN(g) || 0 === g)
                    return {
                        C: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
                    };
                e.push(g)
            }
            return {
                A: d,
                v: e,
                xa: b
            }
        }
        function Mj(a) {
            return 1200 <= a ? {
                width: 1200,
                height: 600
            } : 850 <= a ? {
                width: a,
                height: Math.floor(.5 * a)
            } : 550 <= a ? {
                width: a,
                height: Math.floor(.6 * a)
            } : 468 <= a ? {
                width: a,
                height: Math.floor(.7 * a)
            } : {
                width: a,
                height: Math.floor(3.44 * a)
            }
        }
        ;var Nj = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
        function Oj(a, b) {
            V.call(this, a, b)
        }
        z(Oj, V);
        Oj.prototype.X = function(a) {
            return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
        }
        ;
        function Pj(a, b) {
            Qj(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type)
                return new Dj(9,new Oj(a,Math.floor(a * b.google_phwr)));
            var c = Yc();
            468 > a ? c ? (c = a - 8 - 8,
            c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Gj.mobile_banner_image_sidebyside + Ij.mobile_banner_image_sidebyside) + 96),
            a = {
                V: a,
                T: c,
                v: 1,
                A: 12,
                D: "mobile_banner_image_sidebyside"
            }) : (a = Mj(a),
            a = {
                V: a.width,
                T: a.height,
                v: 1,
                A: 13,
                D: "image_sidebyside"
            }) : (a = Mj(a),
            a = {
                V: a.width,
                T: a.height,
                v: 4,
                A: 2,
                D: "image_stacked"
            });
            Rj(b, a);
            return new Dj(9,new Oj(a.V,a.T))
        }
        function Sj(a, b) {
            Qj(a, b);
            var c = Lj({
                A: b.google_content_recommendation_rows_num,
                v: b.google_content_recommendation_columns_num,
                D: b.google_content_recommendation_ui_type
            });
            if (c.C)
                a = {
                    V: 0,
                    T: 0,
                    v: 0,
                    A: 0,
                    D: "image_stacked",
                    C: c.C
                };
            else {
                var d = 2 === c.xa.length && 468 <= a ? 1 : 0;
                var e = c.xa[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = Kj[e];
                for (var g = c.v[d]; a / g < f && 1 < g; )
                    g--;
                f = g;
                c = c.A[d];
                d = Math.floor(((a - 8 * f - 8) / f * Gj[e] + Ij[e]) * c + 8 * c + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    na: "Calculated slot width is too large: " + a
                } : 1500 < d ? {
                    width: 0,
                    height: 0,
                    na: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
                a = a.na ? {
                    V: 0,
                    T: 0,
                    v: 0,
                    A: 0,
                    D: e,
                    C: a.na
                } : {
                    V: a.width,
                    T: a.height,
                    v: f,
                    A: c,
                    D: e
                }
            }
            if (a.C)
                throw new P(a.C);
            Rj(b, a);
            return new Dj(9,new Oj(a.V,a.T))
        }
        function Qj(a, b) {
            if (0 >= a)
                throw new P("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
        }
        function Rj(a, b) {
            a.google_content_recommendation_ui_type = b.D;
            a.google_content_recommendation_columns_num = b.v;
            a.google_content_recommendation_rows_num = b.A
        }
        ;function Tj(a, b) {
            V.call(this, a, b)
        }
        z(Tj, V);
        Tj.prototype.X = function() {
            return this.minWidth()
        }
        ;
        Tj.prototype.aa = function(a, b, c) {
            gi(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px",
            b.rpe = !0)
        }
        ;
        var Uj = {
            "image-top": function(a) {
                return 600 >= a ? 284 + .414 * (a - 250) : 429
            },
            "image-middle": function(a) {
                return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
            },
            "image-side": function(a) {
                return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
            },
            "text-only": function(a) {
                return 500 >= a ? 187 - .228 * (a - 250) : 130
            },
            "in-article": function(a) {
                return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
            }
        };
        function Vj(a, b) {
            V.call(this, a, b)
        }
        z(Vj, V);
        Vj.prototype.X = function() {
            return Math.min(1200, this.minWidth())
        }
        ;
        function Wj(a, b, c, d, e) {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f && "false" != e.google_full_width_responsive) {
                var g = $h(b, c, a, .2, e);
                if (!0 !== g)
                    e.gfwrnwer = g;
                else if (g = Q(b))
                    e.google_full_width_responsive_allowed = !0,
                    c.parentElement && (ei(b, c),
                    gi(b, c),
                    a = g)
            }
            if (250 > a)
                throw new P("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f)
                    throw new P("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new Dj(11,new V(a,f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                b = Math.pow(10, 3);
                if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                    e = [];
                    for (g = 0; g < d; g++)
                        e.push(parseInt(c[g], 36) / b);
                    b = e
                } else
                    b = null;
                if (!b)
                    throw new P("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++)
                    c += b[g] * d,
                    d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f))
                    throw new P("Invalid height: height=" + f);
                if (50 > f)
                    throw new P("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f)
                    throw new P("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new Dj(11,new V(a,f))
            }
            d = Uj[f];
            if (!d)
                throw new P("Invalid data-ad-layout value: " + f);
            c = ki(c, b);
            b = Q(b);
            b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new Dj(11,"in-article" == f ? new Vj(a,b) : new V(a,b))
        }
        ;function Xj(a) {
            return function(b) {
                for (var c = a.length - 1; 0 <= c; --c)
                    if (!a[c](b))
                        return !1;
                return !0
            }
        }
        function Yj(a, b, c) {
            for (var d = a.length, e = null, f = 0; f < d; ++f) {
                var g = a[f];
                if (b(g)) {
                    if (!c || c(g))
                        return g;
                    null === e && (e = g)
                }
            }
            return e
        }
        ;var Y = [new X(970,90,2), new X(728,90,2), new X(468,60,2), new X(336,280,1), new X(320,100,2), new X(320,50,2), new X(300,600,4), new X(300,250,1), new X(250,250,1), new X(234,60,2), new X(200,200,1), new X(180,150,1), new X(160,600,4), new X(125,125,1), new X(120,600,4), new X(120,240,4), new X(120,120,1,!0)]
          , Zj = [Y[6], Y[12], Y[3], Y[0], Y[7], Y[14], Y[1], Y[8], Y[10], Y[4], Y[15], Y[2], Y[11], Y[5], Y[13], Y[9], Y[16]];
        function ak(a, b, c, d, e) {
            "false" == e.google_full_width_responsive ? c = {
                o: a,
                s: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || bk(b) || e.google_ad_resize ? (488 > Q(c) && (bi(c) || T(1002)) && ei(c, d),
            b = ai(a, c, d, e),
            c = !0 !== b ? {
                o: a,
                s: b
            } : {
                o: Q(c) || a,
                s: !0
            }) : c = {
                o: a,
                s: 2
            };
            b = c.s;
            return !0 !== b ? {
                o: a,
                s: b
            } : d.parentElement ? {
                o: c.o,
                s: b
            } : {
                o: a,
                s: b
            }
        }
        function ck(a, b, c, d, e) {
            var f = Te(247, function() {
                return ak(a, b, c, d, e)
            })
              , g = f.o;
            f = f.s;
            var h = !0 === f
              , k = N(d.style.width)
              , l = N(d.style.height)
              , m = dk(g, b, c, d, e, h);
            g = m.U;
            h = m.P;
            var p = m.N
              , r = m.O
              , u = m.ga;
            m = m.wa;
            var w = ek(b, u), v, F = (v = hi(d, c, "marginLeft", N)) ? v + "px" : "", wa = (v = hi(d, c, "marginRight", N)) ? v + "px" : "";
            v = hi(d, c, "zIndex") || "";
            return new Dj(w,g,u,null,m,f,h,p,r,F,wa,l,k,v)
        }
        function bk(a) {
            return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
        }
        function dk(a, b, c, d, e, f) {
            b = "auto" == b ? .25 >= a / Math.min(1200, Q(c)) ? 4 : 3 : Zh(b);
            var g = !1
              , h = !1;
            if (488 > Q(c)) {
                var k = Yh(d, c);
                var l = ki(d, c);
                g = !l && k;
                h = l && k
            }
            l = 488 > Q(c);
            var m = [ii(a), Bj(b)];
            bi(c) || m.push(ji(l, c, d, h));
            null != e.google_max_responsive_height && m.push(mi(e.google_max_responsive_height));
            var p = [function(u) {
                return !u.Ra
            }
            ];
            !g && !h || bi(c) || (g = oi(c, d),
            p.push(mi(g)));
            var r = l && !f && 3 === b && fk(c) ? new X(a,Math.floor(a / 1.2),1) : Yj(Zj.slice(0), Xj(m), Xj(p));
            if (!r)
                throw new P("No slot size for availableWidth=" + a);
            p = Te(248, function() {
                var u;
                a: if (f) {
                    if (e.gfwrnh && (u = N(e.gfwrnh))) {
                        u = {
                            U: new Tj(a,u),
                            P: !0,
                            N: !1,
                            O: !1
                        };
                        break a
                    }
                    u = !1;
                    var w = bf(c).clientHeight
                      , v = Wh(d, c)
                      , F = c.google_lpabyc
                      , wa = ni(d, c);
                    wa && 2 < wa && !c.google_bfabyc && (!F || v - F > w) && (w = .9 * bf(c).clientHeight,
                    v = Math.min(w, gk(c, d, e)),
                    w && v == w && (v = c.google_pbfabyc,
                    u = !v,
                    v || (c.google_pbfabyc = Wh(d, c) + w)));
                    w = a / 1.2;
                    if (bi(c))
                        v = w;
                    else if (v = Math.min(w, gk(c, d, e)),
                    v < .5 * w || 100 > v)
                        v = w;
                    T(282) && !ki(d, c) && (v = Math.max(v, .5 * bf(c).clientHeight));
                    u = {
                        U: new Tj(a,Math.floor(v)),
                        P: v < w ? 102 : !0,
                        N: !1,
                        O: u
                    }
                } else
                    u = {
                        U: r,
                        P: 100,
                        N: !1,
                        O: !1
                    };
                return u
            });
            g = p.U;
            l = p.P;
            m = p.N;
            p = p.O;
            return "in-article" === e.google_ad_layout && hk(c) ? {
                U: ik(a, c, d, g, e),
                P: !1,
                N: !1,
                O: !1,
                ga: b,
                wa: k
            } : {
                U: g,
                P: l,
                N: m,
                O: p,
                ga: b,
                wa: k
            }
        }
        function gk(a, b, c) {
            if (c.google_resizing_allowed || "true" == c.google_full_width_responsive)
                a = Infinity;
            else {
                c = Infinity;
                do {
                    var d = hi(b, a, "height", N);
                    d && (c = Math.min(c, d));
                    (d = hi(b, a, "maxHeight", N)) && (c = Math.min(c, d))
                } while ((b = b.parentElement) && "HTML" != b.tagName);
                a = c
            }
            return a
        }
        function ek(a, b) {
            if ("auto" == a)
                return 1;
            switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
            }
            throw Error("bad mask");
        }
        function ik(a, b, c, d, e) {
            var f = e.google_ad_height || hi(c, b, "height", N);
            b = Wj(a, b, c, f, e).a;
            return b.minWidth() * b.height() > a * d.height() ? new X(b.minWidth(),b.height(),1) : d
        }
        function hk(a) {
            return T(227) || a.location && "#hffwroe2etoq" == a.location.hash
        }
        function fk(a) {
            return T(232) || a.location && "#affwroe2etoq" == a.location.hash
        }
        ;function jk(a, b) {
            V.call(this, a, b)
        }
        z(jk, V);
        jk.prototype.X = function() {
            return this.minWidth()
        }
        ;
        jk.prototype.ka = function(a) {
            return V.prototype.ka.call(this, a) + "_0ads_al"
        }
        ;
        var kk = [new jk(728,15), new jk(468,15), new jk(200,90), new jk(180,90), new jk(160,90), new jk(120,90)];
        function lk(a, b, c) {
            var d = 250
              , e = 90;
            d = void 0 === d ? 130 : d;
            e = void 0 === e ? 30 : e;
            var f = Yj(kk, ii(a));
            if (!f)
                throw new P("No link unit size for width=" + a + "px");
            a = Math.min(a, 1200);
            f = f.height();
            b = Math.max(f, b);
            d = (new Dj(10,new jk(a,Math.min(b, 15 == f ? e : d)))).a;
            b = d.minWidth();
            d = d.height();
            15 <= c && (d = c);
            return new Dj(10,new jk(b,d))
        }
        function mk(a, b, c, d) {
            if ("false" == d.google_full_width_responsive)
                return d.google_full_width_responsive_allowed = !1,
                d.gfwrnwer = 1,
                a;
            var e = ai(a, b, c, d);
            if (!0 !== e)
                return d.google_full_width_responsive_allowed = !1,
                d.gfwrnwer = e,
                a;
            e = Q(b);
            if (!e)
                return a;
            d.google_full_width_responsive_allowed = !0;
            gi(b, c);
            return e
        }
        ;function nk(a, b, c, d, e) {
            var f;
            (f = Q(b)) ? 488 > Q(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0,
            gi(b, c),
            f = {
                o: f,
                s: !0
            }) : f = {
                o: a,
                s: 5
            } : f = {
                o: a,
                s: 4
            } : f = {
                o: a,
                s: 10
            };
            var g = f;
            f = g.o;
            g = g.s;
            if (!0 !== g || a == f)
                return new Dj(12,new V(a,d),null,null,!0,g,100);
            a = dk(f, "auto", b, c, e, !0);
            return new Dj(1,a.U,a.ga,2,!0,g,a.P,a.N,a.O)
        }
        ;function ok(a, b) {
            var c = b.google_ad_format;
            if ("autorelaxed" == c) {
                a: {
                    if ("pedestal" != b.google_content_recommendation_ui_type)
                        for (a = y(Nj),
                        c = a.next(); !c.done; c = a.next())
                            if (null != b[c.value]) {
                                b = !0;
                                break a
                            }
                    b = !1
                }
                return b ? 9 : 5
            }
            if (bk(c))
                return 1;
            if ("link" == c)
                return 4;
            if ("fluid" == c) {
                if (c = "in-article" === b.google_ad_layout)
                    c = T(208) || T(227) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
                return c ? (pk(b),
                1) : 8
            }
            if (27 === b.google_reactive_ad_format)
                return pk(b),
                1
        }
        function qk(a, b, c, d, e) {
            e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && hi(b, d, "width", N) || c.google_ad_width || 0;
            (T(310) || d.location && "#ooimne2e" == d.location.hash) && 4 === a && (c.google_ad_format = "auto",
            a = 1);
            var f = (f = rk(a, e, b, c, d)) ? f : ck(e, c.google_ad_format, d, b, c);
            f.a.aa(d, c, b);
            Ej(f, e, c);
            1 != a && (a = f.a.height(),
            b.style.height = a + "px")
        }
        function rk(a, b, c, d, e) {
            var f = d.google_ad_height || hi(c, e, "height", N);
            switch (a) {
            case 5:
                return a = Te(247, function() {
                    return ak(b, d.google_ad_format, e, c, d)
                }),
                f = a.o,
                a = a.s,
                !0 === a && b != f && gi(e, c),
                !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
                d.gfwrnwer = a),
                Pj(f, d);
            case 9:
                return Sj(b, d);
            case 4:
                return a = mk(b, e, c, d),
                lk(a, oi(e, c), f);
            case 8:
                return Wj(b, e, c, f, d);
            case 10:
                return nk(b, e, c, f, d)
            }
        }
        function pk(a) {
            a.google_ad_format = "auto";
            a.armr = 3
        }
        ;var sk = null;
        function tk() {
            if (!sk) {
                for (var a = A, b = a, c = 0; a && a != a.parent; )
                    if (a = a.parent,
                    c++,
                    cd(a))
                        b = a;
                    else
                        break;
                sk = b
            }
            return sk
        }
        ;function Z(a) {
            this.g = [];
            this.c = a || window;
            this.a = 0;
            this.f = null;
            this.h = 0
        }
        var uk;
        n = Z.prototype;
        n.Ma = function(a, b) {
            0 != this.a || 0 != this.g.length || b && b != window ? this.sa(a, b) : (this.a = 2,
            this.Ca(new vk(a,window)))
        }
        ;
        n.sa = function(a, b) {
            this.g.push(new vk(a,b || this.c));
            wk(this)
        }
        ;
        n.Ua = function(a) {
            this.a = 1;
            if (a) {
                var b = Ue(188, Ja(this.Ba, this, !0));
                this.f = this.c.setTimeout(b, a)
            }
        }
        ;
        n.Ba = function(a) {
            a && ++this.h;
            1 == this.a && (null != this.f && (this.c.clearTimeout(this.f),
            this.f = null),
            this.a = 0);
            wk(this)
        }
        ;
        n.$a = function() {
            return !(!window || !Array)
        }
        ;
        n.Na = function() {
            return this.h
        }
        ;
        function wk(a) {
            var b = Ue(189, Ja(a.bb, a));
            a.c.setTimeout(b, 0)
        }
        n.bb = function() {
            if (0 == this.a && this.g.length) {
                var a = this.g.shift();
                this.a = 2;
                var b = Ue(190, Ja(this.Ca, this, a));
                a.a.setTimeout(b, 0);
                wk(this)
            }
        }
        ;
        n.Ca = function(a) {
            this.a = 0;
            a.c()
        }
        ;
        function xk(a) {
            try {
                return a.sz()
            } catch (b) {
                return !1
            }
        }
        function yk(a) {
            return !!a && ("object" === typeof a || "function" === typeof a) && xk(a) && Td(a.nq) && Td(a.nqa) && Td(a.al) && Td(a.rl)
        }
        function zk() {
            if (uk && xk(uk))
                return uk;
            var a = tk()
              , b = a.google_jobrunner;
            return yk(b) ? uk = b : a.google_jobrunner = uk = new Z(a)
        }
        function Ak(a, b) {
            zk().nq(a, b)
        }
        function Bk(a, b) {
            zk().nqa(a, b)
        }
        Z.prototype.nq = Z.prototype.Ma;
        Z.prototype.nqa = Z.prototype.sa;
        Z.prototype.al = Z.prototype.Ua;
        Z.prototype.rl = Z.prototype.Ba;
        Z.prototype.sz = Z.prototype.$a;
        Z.prototype.tc = Z.prototype.Na;
        function vk(a, b) {
            this.c = a;
            this.a = b
        }
        ;function Ck(a, b) {
            var c = be(b);
            if (c) {
                c = Q(c);
                var d = hd(a, b) || {}
                  , e = d.direction;
                if ("0px" === d.width && "none" != d.cssFloat)
                    return -1;
                if ("ltr" === e && c)
                    return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
                if ("rtl" === e && c)
                    return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right,
                    Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
            }
            return -1
        }
        ;var Dk = {}
          , Ek = (Dk.google_ad_modifications = !0,
        Dk.google_analytics_domain_name = !0,
        Dk.google_analytics_uacct = !0,
        Dk.google_pause_ad_requests = !0,
        Dk.google_trust_token_operation_status = !0,
        Dk.google_user_agent_client_hint = !0,
        Dk);
        function Fk(a, b, c) {
            var d = window;
            return function() {
                var e = xe()
                  , f = 3;
                try {
                    var g = b.apply(this, arguments)
                } catch (h) {
                    f = 13;
                    if (c)
                        return c(a, h),
                        g;
                    throw h;
                } finally {
                    d.google_measure_js_timing && e && (e = {
                        label: a.toString(),
                        value: e,
                        duration: (xe() || 0) - e,
                        type: f
                    },
                    f = d.google_js_reporting_queue = d.google_js_reporting_queue || [],
                    2048 > f.length && f.push(e))
                }
                return g
            }
        }
        function Gk(a, b) {
            return Fk(a, b, function(c, d) {
                (new Je).H(c, d)
            })
        }
        ;function Hk(a, b) {
            return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
        }
        var Ik = new q.Set;
        function Jk(a) {
            a = a.id;
            return null != a && (Ik.has(a) || t(a, "startsWith").call(a, "google_ads_iframe_") || t(a, "startsWith").call(a, "aswift"))
        }
        function Kk(a, b) {
            b = void 0 === b ? 4 : b;
            if (!a)
                return !1;
            if (Jk(a))
                return !0;
            if (0 >= b)
                return !1;
            a = y(a.childNodes);
            for (var c = a.next(); !c.done; c = a.next())
                if (Kk(c.value, b - 1))
                    return !0;
            return !1
        }
        function Lk() {
            O.call(this);
            this.K = this.M = this.Y = this.c = this.B = this.m = this.g = 0;
            this.L = !1;
            this.I = this.j = this.f = 0;
            var a = document.querySelector("[data-google-query-id]");
            this.pa = a ? a.getAttribute("data-google-query-id") : null;
            this.G = null;
            this.oa = !1;
            this.J = function() {}
        }
        z(Lk, O);
        function Mk() {
            var a = new Lk;
            if (T(203) && !window.google_plmetrics && window.PerformanceObserver) {
                window.google_plmetrics = !0;
                for (var b = y(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next())
                    c = c.value,
                    Nk(a).observe({
                        type: c,
                        buffered: !T(240)
                    });
                Ok(a)
            }
        }
        function Nk(a) {
            a.G || (a.G = new PerformanceObserver(Gk(640, function(b) {
                var c = !1;
                b = y(b.getEntries());
                for (var d = b.next(); !d.done; d = b.next())
                    switch (d = d.value,
                    d.entryType) {
                    case "layout-shift":
                        if (!c) {
                            try {
                                if ("undefined" !== typeof googletag && googletag.pubads) {
                                    var e = googletag.pubads();
                                    Ik.clear();
                                    for (var f = y(e.getSlots()), g = f.next(); !g.done; g = f.next())
                                        Ik.add(g.value.getSlotId().getDomId())
                                }
                            } catch (m) {}
                            c = !0
                        }
                        var h = a;
                        if (!d.hadRecentInput && (!T(241) || .01 < d.value)) {
                            h.g += Number(d.value);
                            Number(d.value) > h.m && (h.m = Number(d.value));
                            h.B += 1;
                            a: {
                                if (d.sources) {
                                    var k = y(d.sources);
                                    for (var l = k.next(); !l.done; l = k.next())
                                        if (Kk(l.value.node)) {
                                            k = !0;
                                            break a
                                        }
                                }
                                k = !1
                            }
                            k && (h.c += d.value,
                            h.Y++)
                        }
                        break;
                    case "largest-contentful-paint":
                        a.M = Math.floor(d.renderTime || d.loadTime);
                        break;
                    case "first-input":
                        a.K = Number((d.processingStart - d.startTime).toFixed(3));
                        a.L = !0;
                        break;
                    case "longtask":
                        a.f += d.duration,
                        d.duration > a.j && (a.j = d.duration),
                        a.I += 1
                    }
            })));
            return a.G
        }
        function Ok(a) {
            var b = Gk(641, function() {
                var f = document;
                2 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Pk(a)
            })
              , c = Gk(641, function() {
                return void Pk(a)
            });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("unload", c);
            var d = Qg(1905), e;
            0 < d && (e = setTimeout(c, 1E3 * d));
            a.J = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("unload", c);
                Nk(a).disconnect();
                e && clearTimeout(e)
            }
        }
        Lk.prototype.a = function() {
            O.prototype.a.call(this);
            this.J()
        }
        ;
        function Pk(a) {
            if (!a.oa) {
                a.oa = !0;
                Nk(a).takeRecords();
                var b = "http://web.archive.org/web/20201107231520/https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += "&cls=" + a.g.toFixed(3),
                b += "&mls=" + a.m.toFixed(3),
                b += Hk("nls", a.B),
                window.LayoutShiftAttribution && (b += "&cas=" + a.c.toFixed(3),
                b += Hk("nas", a.Y)));
                window.LargestContentfulPaint && (b += Hk("lcp", a.M));
                window.PerformanceEventTiming && a.L && (b += Hk("fid", a.K));
                window.PerformanceLongTaskTiming && (b += Hk("cbt", a.f),
                b += Hk("mbt", a.j),
                b += Hk("nlt", a.I));
                for (var c = 0, d = y(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next())
                    Jk(e.value) && c++;
                b += Hk("nif", c);
                b += Hk("ifi", Vd(window));
                c = qg.i().a();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (A === A.top ? 1 : 0);
                if (a.pa)
                    c = "&qqid=" + encodeURIComponent(a.pa);
                else {
                    if ("number" !== typeof A.goog_pvsid)
                        try {
                            Object.defineProperty(A, "goog_pvsid", {
                                value: Math.floor(Math.random() * Math.pow(2, 52)),
                                configurable: !1
                            })
                        } catch (f) {}
                    c = Hk("pvsid", Number(A.goog_pvsid) || -1)
                }
                window.fetch(b + c, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.h || (a.h = !0,
                a.a())
            }
        }
        ;var Qk = {
            issuerOrigin: "http://web.archive.org/web/20201107231520/https://adservice.google.com",
            issuancePath: "/tt/i",
            redemptionPath: "/tt/r",
            shouldRedeemToken: function() {
                return !0
            },
            shouldRequestToken: function() {
                return !1
            }
        }
          , Rk = [Qk, {
            issuerOrigin: "http://web.archive.org/web/20201107231520/https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r",
            shouldRedeemToken: function() {
                return !1
            },
            shouldRequestToken: function() {
                return !1
            }
        }];
        function Sk(a) {
            O.call(this);
            this.g = Rk;
            this.f = a;
            this.c = Tk(this)
        }
        z(Sk, O);
        function Tk(a) {
            var b = a.g.map(function(c) {
                return {
                    issuerOrigin: c.issuerOrigin,
                    state: document.hasTrustToken ? 1 : 0
                }
            });
            a.f(b);
            return b
        }
        function Uk(a, b, c) {
            var d = t(a.c, "findIndex").call(a.c, function(e) {
                return e.issuerOrigin === b
            });
            0 <= d && (a.c[d].state = c,
            a.f(a.c))
        }
        function Vk(a, b) {
            var c = b.issuerOrigin + b.redemptionPath
              , d = {
                keepalive: !0,
                redirect: "follow",
                method: "get",
                trustToken: {
                    type: "srr-token-redemption",
                    issuer: b.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
            if (T(1913))
                try {
                    window.fetch(c, d)
                } catch (e) {}
            else
                window.fetch(c, d).then(function(e) {
                    if (!e.ok)
                        throw Error(e.status + ": Network response was not ok!");
                    Uk(a, b.issuerOrigin, 6)
                }).catch(function(e) {
                    e && "NoModificationAllowedError" === e.name ? Uk(a, b.issuerOrigin, 6) : Uk(a, b.issuerOrigin, 5)
                });
            Uk(a, b.issuerOrigin, 2)
        }
        function Wk(a, b, c) {
            window.fetch(b.issuerOrigin + b.issuancePath, {
                trustToken: {
                    type: "token-request"
                }
            }).then(function(d) {
                if (!d.ok)
                    throw Error(d.status + ": Network response was not ok!");
                Uk(a, b.issuerOrigin, 10);
                c && Vk(a, b)
            }).catch(function() {
                Uk(a, b.issuerOrigin, 9)
            });
            Uk(a, b.issuerOrigin, 8)
        }
        function Xk(a) {
            document.hasTrustToken && (T(1915) ? a.g.forEach(function(b) {
                var c = b.shouldRedeemToken()
                  , d = b.shouldRequestToken();
                c || d ? document.hasTrustToken(b.issuerOrigin).then(function(e) {
                    e ? c && Vk(a, b) : b.shouldRequestToken ? Wk(a, b, c) : Uk(a, b.issuerOrigin, 3)
                }) : Uk(a, b.issuerOrigin, 7)
            }) : document.hasTrustToken(Qk.issuerOrigin).then(function(b) {
                b ? Vk(a, Qk) : Uk(a, Qk.issuerOrigin, 3)
            }))
        }
        ;function Yk(a) {
            E(this, a, Zk, null)
        }
        B(Yk, D);
        var Zk = [6];
        var $k = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
        function al() {
            var a = L;
            return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues($k).then(function(b) {
                var c = new Yk;
                c = gc(c, 1, b.platform);
                c = gc(c, 2, b.platformVersion);
                c = gc(c, 3, b.architecture);
                c = gc(c, 4, b.model);
                return gc(c, 5, b.uaFullVersion)
            }) : null
        }
        ;function bl(a) {
            a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null,
            a.google_sl_win = null,
            a.google_sa_impl = null)
        }
        function cl(a, b) {
            var c = L;
            b = void 0 === b ? "" : b;
            bl(c);
            c.google_sa_queue || (c.google_sa_queue = [],
            c.google_sl_win = c,
            c.google_process_slots = function() {
                return dl(c)
            }
            ,
            a = el(c, b, a),
            gd(c.document, a, T(356)).id = "google_shimpl")
        }
        var dl = Ue(215, function(a) {
            var b = a.google_sa_queue
              , c = b.shift();
            a.google_sa_impl || Ve("shimpl", {
                t: "no_fn"
            });
            "function" === typeof c && Te(216, c);
            b.length && a.setTimeout(function() {
                return dl(a)
            }, 0)
        });
        function fl(a, b, c) {
            a.google_sa_queue = a.google_sa_queue || [];
            a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
        }
        function el(a, b, c) {
            a: switch (Qg(1008)) {
            case 1:
                var d = pb(Fc(c.Xa).toString());
                break a;
            case 2:
                d = pb(Fc(c.Wa).toString());
                break a;
            default:
                d = null
            }
            c = !d || T(1006) && !Jd ? pb(Fc(c.Ya).toString()) : d;
            a = gl(a, b);
            return mb(c, a)
        }
        function gl(a, b) {
            if (Rg())
                return {
                    bust: Rg()
                };
            if (T(357))
                return {
                    bust: a.location.host
                };
            if (Jd && T(375)) {
                b || (b = a.google_ad_client ? a.google_ad_client : (b = a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]')) ? b.getAttribute("data-ad-client") : (b = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? b.getAttribute("data-ad-client") : "");
                if (b) {
                    var c = {};
                    return c.client = b,
                    c.plah = a.location.host,
                    c.amaexp = 1,
                    c
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            return {}
        }
        function hl(a, b, c, d) {
            return function() {
                var e = !1;
                d && zk().al(3E4);
                try {
                    if (cd(a.document.getElementById(b).contentWindow)) {
                        var f = a.document.getElementById(b).contentWindow
                          , g = f.document;
                        g.body && g.body.firstChild || (/Firefox/.test(navigator.userAgent) ? g.open("text/html", "replace") : g.open(),
                        f.google_async_iframe_close = !0,
                        g.write(c))
                    } else {
                        var h = a.document.getElementById(b).contentWindow;
                        f = c;
                        f = String(f);
                        g = ['"'];
                        for (var k = 0; k < f.length; k++) {
                            var l = f.charAt(k), m = l.charCodeAt(0), p = k + 1, r;
                            if (!(r = Qb[l])) {
                                if (31 < m && 127 > m)
                                    var u = l;
                                else {
                                    var w = void 0
                                      , v = l;
                                    if (v in Rb)
                                        u = Rb[v];
                                    else if (v in Qb)
                                        u = Rb[v] = Qb[v];
                                    else {
                                        var F = v.charCodeAt(0);
                                        if (31 < F && 127 > F)
                                            w = v;
                                        else {
                                            if (256 > F) {
                                                if (w = "\\x",
                                                16 > F || 256 < F)
                                                    w += "0"
                                            } else
                                                w = "\\u",
                                                4096 > F && (w += "0");
                                            w += F.toString(16).toUpperCase()
                                        }
                                        u = Rb[v] = w
                                    }
                                }
                                r = u
                            }
                            g[p] = r
                        }
                        g.push('"');
                        h.location.replace("javascript:" + g.join(""))
                    }
                    e = !0
                } catch (wa) {
                    h = tk().google_jobrunner,
                    yk(h) && h.rl()
                }
                e && (e = xj("google_async_rrc", c),
                (new wj(a)).set(b, hl(a, b, e, !1)))
            }
        }
        function il(a) {
            if (!Aj)
                a: {
                    for (var b = [A.top], c = [], d = 0, e; e = b[d++]; ) {
                        c.push(e);
                        try {
                            if (e.frames)
                                for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g)
                                    b.push(e.frames[g])
                        } catch (k) {}
                    }
                    for (b = 0; b < c.length; b++)
                        try {
                            var h = c[b].frames.google_esf;
                            if (h) {
                                Aj = h;
                                break a
                            }
                        } catch (k) {}
                    Aj = null
                }
            if (!Aj) {
                if (/[^a-z0-9-]/.test(a))
                    return null;
                c = Wc(document, "IFRAME");
                c.id = "google_esf";
                c.name = "google_esf";
                c.src = fe("googleads.g.doubleclick.net", ["/pagead/html/", Gd(), "/r20190131/zrt_lookup.html#"].join(""));
                c.style.display = "none";
                c.setAttribute("data-ad-client", je(a));
                return c
            }
            return null
        }
        function jl(a, b, c) {
            kl(a, b, c, function(d, e, f) {
                d = d.document;
                for (var g = e.id, h = 0; !g || d.getElementById(g + "_anchor"); )
                    g = "aswift_" + h++;
                e.id = g;
                e.name = g;
                g = Number(f.google_ad_width || 0);
                h = Number(f.google_ad_height || 0);
                var k = f.ds || "";
                k && (k += t(k, "endsWith").call(k, ";") ? "" : ";");
                var l = ""
                  , m = "";
                if (!f.google_enable_single_iframe) {
                    l = ["<iframe"];
                    for (p in e)
                        e.hasOwnProperty(p) && ("onload" === p && T(381) ? (m = e.id,
                        m = "<script nonce='" + va() + "'>" + jb(ib(new cb(db,"function(iframeId, globalVarName){document.getElementById(iframeId).addEventListener('load', function() {var i=this.id,s=window[globalVarName],H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}});}"), m, "google_iframe_oncopy")).toString() + "\x3c/script>") : l.push(p + "=" + e[p]));
                    l.push('style="left:0;position:absolute;top:0;border:0px;width:' + (g + "px;height:" + (h + 'px;"')));
                    l.push("></iframe>");
                    l = l.join(" ")
                }
                var p = e.id;
                var r = "";
                r = void 0 === r ? "" : r;
                g = "border:none;height:" + h + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (g + "px;background-color:transparent;");
                p = ['<ins id="' + (p + '_expand"'), ' style="display:inline-table;' + g + (void 0 === k ? "" : k) + '"', r ? ' data-ad-slot="' + r + '">' : ">", '<ins id="' + (p + '_anchor" style="display:block;') + g + '">', l, "</ins></ins>"].join("") + m;
                16 == f.google_reactive_ad_format ? (f = d.createElement("div"),
                d = Pd(p),
                Pb(f, d),
                c.appendChild(f.firstChild)) : (f = Pd(p),
                Pb(c, f));
                return e.id
            })
        }
        function ll(a) {
            a = ib(new cb(db,"function(showAdsImplFn,slotVarsMap,iframeId){window.parent[showAdsImplFn]({iframeWin: window,pubWin: window.parent,vars: window.parent[slotVarsMap][iframeId]});}"), "google_sa_impl", "google_sv_map", a);
            return "<script nonce='" + va() + "'>" + jb(a).toString() + "\x3c/script>"
        }
        function kl(a, b, c, d) {
            var e = b.google_ad_width
              , f = b.google_ad_height;
            if (!Vb && !Wb || T(325))
                b.google_enable_single_iframe = !0;
            var g = {};
            null != e && (g.width = e && '"' + e + '"');
            null != f && (g.height = f && '"' + f + '"');
            g.frameborder = '"0"';
            g.marginwidth = '"0"';
            g.marginheight = '"0"';
            g.vspace = '"0"';
            g.hspace = '"0"';
            g.allowtransparency = '"true"';
            g.scrolling = '"no"';
            g.allowfullscreen = '"true"';
            g.onload = '"' + yj + '"';
            d = d(a, g, b);
            ml(a, c, b);
            (c = il(b.google_ad_client)) && a.document.documentElement.appendChild(c);
            c = Ma;
            e = (new Date).getTime();
            b.google_lrv = Gd();
            b.google_async_iframe_id = d;
            b.google_unique_id = Wd(a);
            b.google_start_time = c;
            b.google_bpp = e > c ? e - c : 1;
            b.google_async_rrc = 0;
            a.google_sv_map = a.google_sv_map || {};
            a.google_sv_map[d] = b;
            if (b.google_enable_single_iframe) {
                var h = {
                    pubWin: a,
                    iframeWin: null,
                    vars: b
                };
                fl(a, function() {
                    a.google_sa_impl(h)
                }, a.document.getElementById(d + "_anchor") ? Ak : Bk)
            } else
                b = ["<!doctype html><html><body>", "<script nonce='" + va() + "'>", jb(ib(new cb(db,"function(singleLoadWindow,iframeStartTime,asyncIframeId,iframeId){window[singleLoadWindow]=window.parent;window[iframeStartTime]=new Date().getTime();window[asyncIframeId]=iframeId;}"), "google_sl_win", "google_iframe_start_time", "google_async_iframe_id", d)).toString(), "\x3c/script>", ll(d), "</body></html>"].join(""),
                fl(a, hl(a, d, b, !0), a.document.getElementById(d) ? Ak : Bk)
        }
        function ml(a, b, c) {
            var d = c.google_ad_output
              , e = c.google_ad_format
              , f = c.google_ad_width || 0
              , g = c.google_ad_height || 0;
            e || "html" != d && null != d || (e = f + "x" + g);
            d = !c.google_ad_slot || c.google_override_format || !Qc[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
            e && d ? e = e.toLowerCase() : e = "";
            c.google_ad_format = e;
            if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
                e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height];
                d = [];
                f = 0;
                for (g = b; g && 25 > f; g = g.parentNode,
                ++f)
                    9 === g.nodeType ? d.push("") : d.push(g.id);
                (d = d.join()) && e.push(d);
                c.google_ad_unit_key = nd(e.join(":")).toString();
                var h = void 0 === h ? !1 : h;
                e = [];
                for (d = 0; b && 25 > d; ++d) {
                    f = "";
                    void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                    a: {
                        if (b && b.nodeName && b.parentElement) {
                            g = b.nodeName.toString().toLowerCase();
                            for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                                var p = k[m];
                                if (p.nodeName && p.nodeName.toString().toLowerCase() === g) {
                                    if (b === p) {
                                        g = "." + l;
                                        break a
                                    }
                                    ++l
                                }
                            }
                        }
                        g = ""
                    }
                    e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                    b = b.parentElement
                }
                h = e.join() + ":";
                b = [];
                if (a)
                    try {
                        var r = a.parent;
                        for (e = 0; r && r !== a && 25 > e; ++e) {
                            var u = r.frames;
                            for (d = 0; d < u.length; ++d)
                                if (a === u[d]) {
                                    b.push(d);
                                    break
                                }
                            a = r;
                            r = a.parent
                        }
                    } catch (w) {}
                c.google_ad_dom_fingerprint = nd(h + b.join()).toString()
            }
        }
        ;function nl(a, b) {
            a = a.attributes;
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                if (/data-/.test(e.name)) {
                    var f = ub(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                    if (!b.hasOwnProperty(f)) {
                        e = e.value;
                        var g = {};
                        g = (g.google_reactive_ad_format = Fd,
                        g.google_allow_expandable_ads = ud,
                        g);
                        e = g.hasOwnProperty(f) ? g[f](e, null) : e;
                        null !== e && (b[f] = e)
                    }
                }
            }
        }
        function ol(a) {
            if (a = Kd(a))
                switch (a.data && a.data.autoFormat) {
                case "rspv":
                    return 13;
                case "mcrspv":
                    return 15;
                default:
                    return 14
                }
            else
                return 12
        }
        function pl(a, b, c) {
            nl(a, b);
            if (c.document && c.document.body && !ok(c, b) && !b.google_reactive_ad_format) {
                var d = parseInt(a.style.width, 10)
                  , e = Ck(a, c);
                if (0 < e && d > e) {
                    var f = parseInt(a.style.height, 10);
                    d = !!Qc[d + "x" + f];
                    var g = e;
                    if (d) {
                        var h = Rc(e, f);
                        if (h)
                            g = h,
                            b.google_ad_format = h + "x" + f + "_0ads_al";
                        else
                            throw new P("No slot size for availableWidth=" + e);
                    }
                    b.google_ad_resize = !0;
                    b.google_ad_width = g;
                    d || (b.google_ad_format = null,
                    b.google_override_format = !0);
                    e = g;
                    a.style.width = e + "px";
                    f = ck(e, "auto", c, a, b);
                    g = e;
                    f.a.aa(c, b, a);
                    Ej(f, g, b);
                    f = f.a;
                    b.google_responsive_formats = null;
                    f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(),
                    a.style.width = f.minWidth() + "px")
                }
            }
            d = a.offsetWidth || hi(a, c, "width", N) || b.google_ad_width || 0;
            e = Ka(ck, d, "auto", c, a, b, !1, !0);
            f = be(c) || c;
            g = b.google_ad_client;
            f = f.location && "#ftptohbh" === f.location.hash ? 2 : ce(f.location, "google_responsive_slot_debug") || ce(f.location, "google_responsive_slot_preview") || T(217) ? 1 : T(218) ? 2 : cf(f, 1, g) ? 1 : 0;
            if (g = 0 !== f)
                b: if (!(488 > Q(c) || T(216)) || b.google_reactive_ad_format || ok(c, b) || Vh(a, b))
                    g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h = hd(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!Ta(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    if (!T(216) && (g = $h(c, a, d, .3, b),
                    !0 !== g)) {
                        b.gfwrnwer = g;
                        g = !1;
                        break b
                    }
                    g = ae(c) == c ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0,
            b.ovlp = !0,
            2 === f ? (f = {},
            Ej(e(), d, f),
            b.google_resizing_width = f.google_ad_width,
            b.google_resizing_height = f.google_ad_height,
            f.ds && (b.ds = f.ds),
            b.iaaso = !1) : (b.google_ad_format = "auto",
            b.iaaso = !0,
            b.armr = 1),
            d = !0) : d = !1;
            if (e = ok(c, b))
                qk(e, a, b, c, d);
            else {
                if (Vh(a, b)) {
                    if (d = hd(a, c))
                        a.style.width = d.width,
                        a.style.height = d.height,
                        Uh(d, b);
                    b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                    b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                    b.google_loader_features_used = 256;
                    b.google_responsive_auto_format = ol(c)
                } else
                    Uh(a.style, b);
                c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? qk(10, a, b, c, !1) : .01 > Math.random() && 12 == b.google_responsive_auto_format && (a = ai(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b),
                !0 !== a ? (b.efwr = !1,
                b.gfwrnwer = a) : b.efwr = !0)
            }
        }
        ;function ql() {
            this.S = {}
        }
        function rl() {
            if (sl)
                return sl;
            var a = Ld() || Zd()
              , b = a.google_persistent_state_async;
            return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? sl = b : a.google_persistent_state_async = sl = new ql
        }
        function tl(a) {
            return ul[a] || "google_ps_" + a
        }
        function vl(a) {
            var b = tl(24);
            a = a.S;
            var c = a[b];
            if (void 0 === c)
                a[b] = void 0;
            else
                return c
        }
        var sl = null
          , wl = {}
          , ul = (wl[8] = "google_prev_ad_formats_by_region",
        wl[9] = "google_prev_ad_slotnames_by_region",
        wl);
        function xl(a) {
            O.call(this);
            this.f = a;
            this.c = null;
            this.j = {};
            this.g = null
        }
        z(xl, O);
        xl.prototype.a = function() {
            this.j = {};
            this.g && (Vc(this.f, "message", this.g),
            delete this.g);
            delete this.j;
            delete this.f;
            delete this.c;
            O.prototype.a.call(this)
        }
        ;
        function yl(a) {
            O.call(this);
            this.f = a;
            this.c = null;
            this.c || (this.f.googlefc ? this.c = this.f : this.c = vd(this.f, "googlefcPresent"))
        }
        z(yl, O);
        var zl = {};
        function Al(a) {
            if (void 0 == zl.tteai ? 0 : zl.tteai) {
                if (void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies || void 0 !== a.listenerId && "number" !== typeof a.listenerId || void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent)
                    return 2
            } else if (void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0),
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0),
            void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId)
                return 2;
            return a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        }
        function Bl(a, b) {
            b = void 0 === b ? 500 : b;
            O.call(this);
            this.f = a;
            this.c = null;
            this.j = {};
            this.B = 0;
            this.m = b;
            this.g = null
        }
        z(Bl, O);
        Bl.prototype.a = function() {
            this.j = {};
            this.g && (Vc(this.f, "message", this.g),
            delete this.g);
            delete this.j;
            delete this.f;
            delete this.c;
            O.prototype.a.call(this)
        }
        ;
        function Cl(a) {
            return "function" === typeof a.f.__tcfapi || null != Dl(a)
        }
        Bl.prototype.addEventListener = function(a) {
            function b(f, g) {
                clearTimeout(e);
                f ? (c = f,
                c.internalErrorState = Al(c),
                g && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
                g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
                c.internalErrorState = 3);
                a(c)
            }
            var c = {}
              , d = Wa(function() {
                return a(c)
            })
              , e = 0;
            -1 !== this.m && (e = setTimeout(function() {
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, this.m));
            try {
                El(this, "addEventListener", b)
            } catch (f) {
                c.tcString = "tcunavailable",
                c.internalErrorState = 3,
                e && (clearTimeout(e),
                e = 0),
                d()
            }
        }
        ;
        Bl.prototype.removeEventListener = function(a) {
            a && a.listenerId && El(this, "removeEventListener", null, a.listenerId)
        }
        ;
        function El(a, b, c, d) {
            c || (c = function() {}
            );
            if ("function" === typeof a.f.__tcfapi)
                a = a.f.__tcfapi,
                a(b, 2, c, d);
            else if (Dl(a)) {
                Fl(a);
                var e = ++a.B;
                a.j[e] = c;
                a.c && (c = {},
                a.c.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                },
                c), "*"))
            } else
                c({}, !1)
        }
        function Dl(a) {
            if (a.c)
                return a.c;
            a.c = vd(a.f, "__tcfapiLocator");
            return a.c
        }
        function Fl(a) {
            a.g || (a.g = function(b) {
                try {
                    var c;
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__tcfapiReturn;
                    a.j[d.callId](d.returnValue, d.success)
                } catch (e) {}
            }
            ,
            Uc(a.f, "message", a.g))
        }
        ;var Gl = null;
        function Hl(a) {
            return $d.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
        }
        function Il(a, b) {
            a.setAttribute("data-adsbygoogle-status", "done");
            Jl(a, b)
        }
        function Kl() {
            if (!(.01 < Math.random())) {
                var a = .5 < Math.random()
                  , b = mb(rb(), {
                    id: "rmvasftr",
                    type: a
                }, void 0)
                  , c = Wc(document, "IFRAME");
                c.style.display = "none";
                c.src = ob(b).toString();
                if (a) {
                    var d = Wc(document, "IFRAME");
                    d.addEventListener("load", function() {
                        d.contentWindow.document.documentElement.appendChild(c)
                    });
                    d.style.display = "none";
                    document.documentElement.appendChild(d)
                } else
                    document.documentElement.appendChild(c)
            }
        }
        function Jl(a, b) {
            var c = window
              , d = Zd();
            d.google_spfd || (d.google_spfd = pl);
            (d = b.google_reactive_ads_config) || pl(a, b, c);
            if (!Ll(a, b, c)) {
                d || (c.google_lpabyc = uj(c, a));
                if (d) {
                    var e = d.page_level_pubvars || {};
                    if (K(L).page_contains_reactive_tag && !K(L).allow_second_reactive_tag) {
                        if (e.pltais) {
                            sc(!1);
                            return
                        }
                        throw new P("Only one 'enable_page_level_ads' allowed per page.");
                    }
                    K(L).page_contains_reactive_tag = !0;
                    sc(7 === e.google_pgb_reactive)
                }
                d && !T(1022) || Ud(c);
                Sd(Ek, function(f, g) {
                    b[g] = b[g] || c[g]
                });
                b.google_loader_used = "aa";
                b.google_reactive_tag_first = 1 === (K(L).first_tag_on_page || 0);
                Te(164, function() {
                    jl(c, b, a)
                })
            }
        }
        function Ll(a, b, c) {
            var d = b.google_reactive_ads_config;
            if (d) {
                var e = d.page_level_pubvars;
                e = (Da(e) ? e : {}).google_tag_origin
            }
            var f = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className);
            if ((e = nc(c, b.google_ad_slot, e || b.google_tag_origin)) && e.ha && "on" != b.google_adtest && !f && (f = ni(a, c),
            !e.ia || e.ia && (f || 0) >= e.ia))
                return a.className += " adsbygoogle-ablated-ad-slot",
                c = c.google_sv_map = c.google_sv_map || {},
                d = Ea(a),
                b.google_element_uid = d,
                c[b.google_element_uid] = b,
                a.setAttribute("google_element_uid", d),
                "slot" == e.Ga && (null !== td(a.getAttribute("width")) && a.setAttribute("width", 0),
                null !== td(a.getAttribute("height")) && a.setAttribute("height", 0),
                a.style.width = "0px",
                a.style.height = "0px"),
                !0;
            if ((e = hd(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d))
                return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),
                !0;
            a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
            return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (A.console && A.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"),
            !0)
        }
        function Ml(a) {
            var b = document.getElementsByTagName("INS");
            for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
                var e = d;
                if (Hl(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a))
                    return d
            }
            return null
        }
        function Nl(a) {
            if (!K(L).ama_ran_on_page) {
                var b = Eh(A);
                if (b) {
                    if (tj(a)) {
                        var c = sh(J(b, mh, 7));
                        if (!c || !dc(c, 8))
                            return
                    }
                    K(L).ama_ran_on_page = !0;
                    var d = I(b, ph, 13);
                    d && 1 === G(d, 1) && (c = 0,
                    (d = I(d, qh, 6)) && G(d, 3) && (c = G(d, 3) || 0),
                    rc(A, c));
                    ie(3, [b.a]);
                    var e = a.google_ad_client;
                    a = Dh(Da(a.enable_page_level_ads) ? a.enable_page_level_ads : {});
                    T(1009) && (a.google_reactive_ad_format = 40);
                    var f = xh(zh, new wh(null,a));
                    Te(782, function() {
                        var g = f;
                        try {
                            var h = sh(J(b, mh, 7)), k;
                            if (k = h)
                                a: {
                                    var l = G(h, 2);
                                    if (l)
                                        for (var m = 0; m < l.length; m++)
                                            if (1 == l[m]) {
                                                k = !0;
                                                break a
                                            }
                                    k = !1
                                }
                            if (k) {
                                if (G(h, 4)) {
                                    k = {};
                                    var p = new wh(null,(k.google_package = G(h, 4),
                                    k));
                                    g = xh(g, p)
                                }
                                var r = new Wi(e,b,h,g)
                                  , u = new cj;
                                (new hj(r,u)).start();
                                u.c.then(Ka(jj, A), Ka(kj, A))
                            }
                        } catch (w) {
                            Ch(A, {
                                atf: -1
                            })
                        }
                    })
                } else
                    try {
                        A.localStorage.removeItem("google_ama_config")
                    } catch (g) {
                        Ch(A, {
                            lserr: 1
                        })
                    }
            }
        }
        function Ol(a, b) {
            if (a && a.shift)
                for (var c = 20; 0 < a.length && 0 < c; ) {
                    try {
                        Pl(a.shift(), b)
                    } catch (d) {
                        setTimeout(function() {
                            throw d;
                        })
                    }
                    --c
                }
        }
        function Ql() {
            var a = Wc(document, "INS");
            a.className = "adsbygoogle";
            a.className += " adsbygoogle-noablate";
            xd(a);
            return a
        }
        function Rl(a) {
            var b = {};
            Sd(Ye, function(e, f) {
                !1 === a.enable_page_level_ads ? b[f] = !1 : a.hasOwnProperty(f) && (b[f] = a[f])
            });
            Da(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
            var c = Ql();
            Pc.body.appendChild(c);
            var d = {};
            d = (d.google_reactive_ads_config = b,
            d.google_ad_client = a.google_ad_client,
            d);
            d.google_pause_ad_requests = !!K(L).pause_ad_requests;
            Il(c, d)
        }
        function Sl(a) {
            function b() {
                return Rl(a)
            }
            var c = void 0 === c ? L : c;
            af(c).wasPlaTagProcessed = !0;
            var d = c.document;
            if (d.body || "complete" == d.readyState || "interactive" == d.readyState)
                b();
            else {
                var e = Wa(Ue(191, b));
                Uc(d, "DOMContentLoaded", e);
                (new A.MutationObserver(function(f, g) {
                    d.body && (e(),
                    g.disconnect())
                }
                )).observe(d, {
                    childList: !0,
                    subtree: !0
                })
            }
        }
        function Pl(a, b) {
            var c = {};
            Te(165, function() {
                Tl(a, c, b)
            }, function(d) {
                d.client = d.client || c.google_ad_client || a.google_ad_client;
                d.slotname = d.slotname || c.google_ad_slot;
                d.tag_origin = d.tag_origin || c.google_tag_origin
            })
        }
        function Ul(a) {
            delete a.google_checked_head;
            md(a, function(b, c) {
                tc[c] || (delete a[c],
                A.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
            })
        }
        function Vl(a) {
            var b = L
              , c = b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
            if (c) {
                c.setAttribute("data-checked-head", "true");
                var d = K(window);
                if (d.head_tag_slot_vars)
                    throw new P("Only one AdSense head tag supported per page. The second tag is ignored.");
                var e = {};
                nl(c, e);
                Ul(e);
                var f = $a(e);
                d.head_tag_slot_vars = f;
                c = {};
                c = (c.google_ad_client = e.google_ad_client,
                c.enable_page_level_ads = e,
                c);
                b.adsbygoogle || (b.adsbygoogle = []);
                b = b.adsbygoogle;
                b.loaded ? b.push(c) : b.splice(0, 0, c);
                e.google_adbreak_test && Wl(f, a);
                Xe(function() {
                    Wl(f, a)
                })
            }
        }
        function Tl(a, b, c) {
            if (null == a)
                throw new P("push() called with no parameters.");
            if ("object" !== typeof a || null == a || "string" !== typeof a.type && "string" !== typeof a.sound && "string" !== typeof a.preloadAdBreaks) {
                Ma = (new Date).getTime();
                cl(c, a.google_ad_client);
                Xl();
                a: {
                    if (void 0 != a.enable_page_level_ads) {
                        if ("string" === typeof a.google_ad_client) {
                            c = !0;
                            break a
                        }
                        throw new P("'google_ad_client' is missing from the tag config.");
                    }
                    c = !1
                }
                if (c)
                    Yl(a, b);
                else if ((c = a.params) && Sd(c, function(f, g) {
                    b[g] = f
                }),
                "js" === b.google_ad_output)
                    console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
                else {
                    c = Zl(a.element);
                    nl(c, b);
                    var d = K(A).head_tag_slot_vars || {};
                    md(d, function(f, g) {
                        b.hasOwnProperty(g) || (b[g] = f)
                    });
                    if (c.hasAttribute("data-require-head") && !K(A).head_tag_slot_vars)
                        throw new P("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                    if (!b.google_ad_client)
                        throw new P("Ad client is missing from the slot.");
                    b.google_apsail = gf(b.google_ad_client);
                    var e = (d = 0 === (K(L).first_tag_on_page || 0) && sj(b)) && tj(d);
                    d && !e && (Yl(d),
                    K(L).skip_next_reactive_tag = !0);
                    0 === (K(L).first_tag_on_page || 0) && (K(L).first_tag_on_page = 2);
                    b.google_pause_ad_requests = !!K(L).pause_ad_requests;
                    Il(c, b);
                    d && e && $l(d)
                }
            } else
                null != Gl && (null != a.sound || null != a.preloadAdBreaks ? Te(787, function() {
                    Gl.handleAdConfig(a)
                }) : Gl.handleAdBreak(a).catch(function(f) {
                    Ke.H(730, f instanceof Error ? f : Error(String(f)), void 0, void 0)
                }))
        }
        function Xl() {
            var a = L;
            if (T(369)) {
                var b = nc(a, void 0);
                b && b.ha || !Eh(a) || rc(a, 1)
            }
        }
        function $l(a) {
            Ed(function() {
                af(A).wasPlaTagProcessed || A.adsbygoogle && A.adsbygoogle.push(a)
            })
        }
        function Yl(a, b) {
            K(L).skip_next_reactive_tag ? K(L).skip_next_reactive_tag = !1 : (0 === (K(L).first_tag_on_page || 0) && (K(L).first_tag_on_page = 1),
            b && a.tag_partner && (qc(A, a.tag_partner),
            qc(b, a.tag_partner)),
            Nl(a),
            Sl(a))
        }
        function Zl(a) {
            if (a) {
                if (!Hl(a) && (a.id ? a = Ml(a.id) : a = null,
                !a))
                    throw new P("'element' has already been filled.");
                if (!("innerHTML"in a))
                    throw new P("'element' is not a good DOM element.");
            } else if (a = Ml(),
            !a)
                throw new P("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
            return a
        }
        function am() {
            var a = L
              , b = new Bl(a)
              , c = new xl(a)
              , d = new yl(a);
            a = a.__cmp ? 1 : 0;
            b = Cl(b) ? 1 : 0;
            var e;
            (e = "function" === typeof c.f.__uspapi) || (c.c ? c = c.c : (c.c = vd(c.f, "__uspapiLocator"),
            c = c.c),
            e = null != c);
            Ve("cmpMet", {
                tcfv1: a,
                tcfv2: b,
                usp: e ? 1 : 0,
                fc: d.c ? 1 : 0,
                ptt: 9
            }, Qg(62))
        }
        function bm(a) {
            var b = rl();
            if (!1 === a.gdprApplies)
                var c = !0;
            else
                void 0 === a.internalErrorState && (a.internalErrorState = Al(a)),
                c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
            b.S[tl(24)] = c ? a : null
        }
        function cm(a) {
            if (T(365))
                rl().S[tl(26)] = !!Number(a);
            else if (Number(a)) {
                if ((a = fd()) && a.frames && !a.frames.GoogleSetNPA)
                    try {
                        var b = a.document
                          , c = new Xc(b)
                          , d = b.body || b.head && b.head.parentElement;
                        if (d) {
                            var e = Wc(c.a, "IFRAME");
                            e.name = "GoogleSetNPA";
                            e.id = "GoogleSetNPA";
                            e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                            d.appendChild(e)
                        }
                    } catch (f) {}
            } else
                (b = fd().document.getElementById("GoogleSetNPA")) && b.parentNode && b.parentNode.removeChild(b)
        }
        function dm(a) {
            Number(a) ? K(L).pause_ad_requests = !0 : (K(L).pause_ad_requests = !1,
            a = function() {
                if (!K(L).pause_ad_requests) {
                    var b = Zd()
                      , c = Zd();
                    try {
                        if (Pc.createEvent) {
                            var d = Pc.createEvent("CustomEvent");
                            d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                            b.dispatchEvent(d)
                        } else if (Td(c.CustomEvent)) {
                            var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event",{
                                bubbles: !1,
                                cancelable: !1,
                                detail: ""
                            });
                            b.dispatchEvent(e)
                        } else if (Td(c.Event)) {
                            var f = new Event("adsbygoogle-pub-unpause-ad-requests-event",{
                                bubbles: !1,
                                cancelable: !1
                            });
                            b.dispatchEvent(f)
                        }
                    } catch (g) {}
                }
            }
            ,
            A.setTimeout(a, 0),
            A.setTimeout(a, 1E3))
        }
        function em(a) {
            switch (a) {
            case 0:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            case 2:
                a = T(1016) ? !0 : !Id;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
            }
            L._gfp_a_ = a
        }
        function fm(a) {
            Td(a) && window.setTimeout(a, 0)
        }
        function Wl(a, b) {
            pj(pb(Fc(b.Za).toString())).then(function(c) {
                null == Gl && (c.init(a),
                Gl = c)
            })
        }
        ;var gm, hm;
        hm = ic(new vj, 1, ee, 0);
        gm = ic(hm, 2, Gd(), "");
        (function(a, b, c, d) {
            d = void 0 === d ? function() {}
            : d;
            Qe();
            Ke.Da(We);
            Te(166, function() {
                d();
                var e = Ld(Kd(L)) || L;
                Wg(e);
                if ((!C("Trident") && !C("MSIE") || 0 <= Bb(Ib(), 11)) && (null == (L.Prototype || {}).Version || !T(1026))) {
                    var f = c(a, b);
                    Kl();
                    Le(T(84));
                    if (T(312)) {
                        var g = Ue(780, function(m) {
                            L.google_trust_token_operation_status = m
                        });
                        Ue(779, function() {
                            Xk(new Sk(g))
                        })()
                    }
                    T(363) && (e = al(),
                    null != e && e.then(function(m) {
                        L.google_user_agent_client_hint = m.j()
                    }));
                    if (T(1030) && (e = new Bl(window),
                    Cl(e))) {
                        var h = rl();
                        void 0 === vl(h) && (h.S[tl(24)] = null,
                        e.addEventListener(bm))
                    }
                    try {
                        Mk()
                    } catch (m) {}
                    if (e = be(A))
                        e = af(e),
                        e.tagSpecificState[1] || (e.tagSpecificState[1] = new lj);
                    Vl(f);
                    e = window.adsbygoogle;
                    if (!e || !e.loaded) {
                        Qg(62) && am();
                        h = {
                            push: function(m) {
                                Pl(m, f)
                            },
                            loaded: !0
                        };
                        try {
                            Object.defineProperty(h, "requestNonPersonalizedAds", {
                                set: cm
                            }),
                            Object.defineProperty(h, "pauseAdRequests", {
                                set: dm
                            }),
                            Object.defineProperty(h, "cookieOptions", {
                                set: em
                            }),
                            Object.defineProperty(h, "onload", {
                                set: fm
                            })
                        } catch (m) {}
                        if (e)
                            for (var k = y(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), l = k.next(); !l.done; l = k.next())
                                l = l.value,
                                void 0 !== e[l] && (h[l] = e[l]);
                        "_gfp_a_"in window || (window._gfp_a_ = T(1016) ? !0 : !Id);
                        Ol(e, f);
                        window.adsbygoogle = h;
                        e && (h.onload = e.onload)
                    }
                }
            })
        }
        )("", ic(gm, 3, "/r20190131", ""), function(a, b) {
            var c = 2012 < H(b, 1, 0) ? "_fy" + H(b, 1, 0) : "";
            H(b, 3, "");
            var d = H(b, 3, "").replace(/^\//, "")
              , e = a ? Gc(Hc, a, c) : Gc(Ic, H(b, 2, ""), d, c);
            return {
                Za: a ? Gc(Jc, a, c) : Gc(Kc, H(b, 2, ""), d, c),
                Ya: e,
                Xa: a ? Gc(Lc, a, c) : Gc(Mc, H(b, 2, ""), d, c),
                Wa: a ? Gc(Nc, a, c) : Gc(Oc, H(b, 2, ""), d, c)
            }
        });
    }
    ).call(this);

}
/*
     FILE ARCHIVED ON 23:15:20 Nov 07, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:01:52 Mar 22, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.079
  exclusion.robots.policy: 0.069
  cdx.remote: 0.099
  esindex: 0.01
  LoadShardBlock: 1514.282 (6)
  PetaboxLoader3.datanode: 994.02 (8)
  load_resource: 1846.529 (2)
  PetaboxLoader3.resolve: 953.224 (2)
*/
