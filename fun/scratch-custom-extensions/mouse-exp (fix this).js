 {
                key: "getInfo",
                value: function() {
                    return {
                        id: "WitCatMouse",
                        name: this.formatMessage("WitCatMouse.name"),
                        docsURI: "https://www.ccw.site/post/c36aa805-b29d-48da-aba1-468a6cf80bfa",
                        blockIconURI: s.q,
                        menuIconURI: s.q,
                        color1: "#8eace1",
                        color2: "#86a2d4",
                        blocks: [{
                            opcode: "setfill",
                            blockType: "command",
                            text: this.formatMessage("WitCatMouse.setfill"),
                            hideFromPalette: !0,
                            arguments: {
                                num: {
                                    type: "number",
                                    defaultValue: "360"
                                }
                            }
                        }, {
                            opcode: "fill",
                            blockType: "command",
                            text: this.formatMessage("WitCatMouse.fill"),
                            hideFromPalette: !0,
                            arguments: {
                                set: {
                                    type: "bool",
                                    menu: "set"
                                }
                            }
                        }, {
                            opcode: "resolution",
                            blockType: "reporter",
                            text: this.formatMessage("WitCatMouse.resolution"),
                            arguments: {}
                        }, "---".concat(this.formatMessage("WitCatMouse.name.1")), {
                            opcode: "set",
                            blockType: "command",
                            text: this.formatMessage("WitCatMouse.set"),
                            arguments: {
                                set: {
                                    type: "bool",
                                    menu: "set"
                                }
                            }
                        }, {
                            opcode: "when",
                            blockType: "Boolean",
                            text: this.formatMessage("WitCatMouse.when"),
                            arguments: {
                                key: {
                                    type: "string",
                                    menu: "key"
                                }
                            }
                        }, {
                            blockType: "button",
                            text: this.formatMessage("WitCatMouse.url"),
                            onClick: this.url
                        }, {
                            opcode: "cursor",
                            blockType: "command",
                            text: this.formatMessage("WitCatMouse.cursor"),
                            arguments: {
                                cursor: {
                                    type: "string",
                                    menu: "cursor"
                                }
                            }
                        }, {
                            opcode: "cursorurl",
                            blockType: "command",
                            text: this.formatMessage("WitCatMouse.cursorurl"),
                            arguments: {
                                x: {
                                    type: "string",
                                    defaultValue: "0"
                                },
                                y: {
                                    type: "string",
                                    defaultValue: "0"
                                },
                                text: {
                                    type: "string",
                                    defaultValue: "base64:ico"
                                }
                            }
                        }, {
                            opcode: "mouseuse",
                            blockType: "command",
                            text: this.formatMessage("WitCatMouse.mouseuse"),
                            arguments: {
                                mouseuse: {
                                    type: "string",
                                    menu: "mouseuse"
                                }
                            }
                        }, {
                            opcode: "acceleration",
                            blockType: "reporter",
                            text: this.formatMessage("WitCatMouse.acceleration"),
                            arguments: {
                                way: {
                                    type: "string",
                                    menu: "way"
                                }
                            }
                        }, "---".concat(this.formatMessage("WitCatMouse.name.2")), {
                            opcode: "down",
                            blockType: "reporter",
                            text: this.formatMessage("WitCatTouch.down"),
                            arguments: {}
                        }, {
                            opcode: "num",
                            blockType: "reporter",
                            text: this.formatMessage("WitCatTouch.num"),
                            arguments: {
                                num: {
                                    type: "number",
                                    defaultValue: "1"
                                },
                                type: {
                                    type: "string",
                                    menu: "type"
                                }
                            }
                        }, {
                            opcode: "cantouch",
                            blockType: "Boolean",
                            text: this.formatMessage("WitCatMouse.cantouch"),
                            arguments: {
                                type: {
                                    type: "string",
                                    menu: "types"
                                }
                            }
                        }, {
                            opcode: "IsMobile",
                            blockType: "Boolean",
                            text: this.formatMessage("WitCatMouse.IsMobile"),
                            arguments: {}
                        }],
                        menus: {
                            key: [{
                                text: this.formatMessage("WitCatMouse.key.1"),
                                value: "0"
                            }, {
                                text: this.formatMessage("WitCatMouse.key.2"),
                                value: "1"
                            }, {
                                text: this.formatMessage("WitCatMouse.key.3"),
                                value: "2"
                            }, {
                                text: this.formatMessage("WitCatMouse.key.4"),
                                value: "3"
                            }, {
                                text: this.formatMessage("WitCatMouse.key.5"),
                                value: "4"
                            }],
                            cursor: {
                                acceptReporters: !0,
                                items: [{
                                    text: this.formatMessage("WitCatMouse.cursor.1"),
                                    value: "default"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.2"),
                                    value: "text"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.3"),
                                    value: "move"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.4"),
                                    value: "n-resize"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.5"),
                                    value: "e-resize"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.6"),
                                    value: "not-allowed"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.7"),
                                    value: "pointer"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.8"),
                                    value: "progress"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.9"),
                                    value: "wait"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.10"),
                                    value: "help"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.11"),
                                    value: "vertical-text"
                                }, {
                                    text: this.formatMessage("WitCatMouse.cursor.12"),
                                    value: "crosshair"
                                }]
                            },
                            set: [{
                                text: this.formatMessage("WitCatMouse.set.1"),
                                value: "true"
                            }, {
                                text: this.formatMessage("WitCatMouse.set.2"),
                                value: "false"
                            }],
                            way: [{
                                text: this.formatMessage("WitCatMouse.way.1"),
                                value: "x"
                            }, {
                                text: this.formatMessage("WitCatMouse.way.2"),
                                value: "y"
                            }],
                            type: [{
                                text: this.formatMessage("WitCatTouch.type.1"),
                                value: "x"
                            }, {
                                text: this.formatMessage("WitCatTouch.type.2"),
                                value: "y"
                            }, {
                                text: this.formatMessage("WitCatTouch.type.3"),
                                value: "ID"
                            }],
                            types: [{
                                text: this.formatMessage("WitCatMouse.types.1"),
                                value: "ontouchstart"
                            }, {
                                text: this.formatMessage("WitCatMouse.types.2"),
                                value: "onmousedown"
                            }],
                            mouseuse: [{
                                text: this.formatMessage("WitCatMouse.mouseuse.1"),
                                value: "lock"
                            }, {
                                text: this.formatMessage("WitCatMouse.mouseuse.2"),
                                value: "release"
                            }]
                        }
                    }
                }
            }, {
                key: "set",
                value: function(e) {
                    history.pushState(null, null, null),
                    l.parentNode.oncontextmenu = function() {
                        return "true" === e.set
                    }
                }
            }, {
                key: "when",
                value: function(e) {
                    return "down" === u[e.key]
                }
            }, {
                key: "mouseuse",
                value: function(e) {
                    "release" === e.mouseuse ? document.exitPointerLock() : l.parentNode.requestPointerLock()
                }
            }, {
                key: "acceleration",
                value: function(e) {
                    return "x" === e.way ? i : -r
                }
            }, {
                key: "down",
                value: function() {
                    return c.length
                }
            }, {
                key: "num",
                value: function(e) {
                    return e.num > 0 && e.num <= c.length ? "x" === e.type ? this.runtime.stageWidth * ((c[e.num - 1].clientX - l.getBoundingClientRect().left) / l.offsetWidth) : "y" === e.type ? this.runtime.stageHeight * ((c[e.num - 1].clientY - l.getBoundingClientRect().top) / l.offsetHeight) : c[e.num - 1].identifier : null
                }
            }, {
                key: "fill",
                value: function() {
                    console.warn("全屏因浏览器兼容问题已下线，在未来修复后将会重新上线\nFull screen has been taken offline due to browser compatibility issues. It will be back online after a future fix")
                }
            }, {
                key: "setfill",
                value: function() {
                    console.warn("全屏因浏览器兼容问题已下线，在未来修复后将会重新上线\nFull screen has been taken offline due to browser compatibility issues. It will be back online after a future fix")
                }
            }, {
                key: "resolution",
                value: function() {
                    return l.height
                }
            }, {
                key: "cantouch",
                value: function(e) {
                    return e.type in document.documentElement
                }
            }, {
                key: "IsMobile",
                value: function() {
                    return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(navigator.userAgent)
                }
            }, {
                key: "cursor",
                value: function(e) {
                    l.parentNode.parentNode.parentNode.style.cursor = e.cursor
                }
            }, {
                key: "cursorurl",
                value: function(e) {
                    if (null == e.text.match("^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$") || (console.warn("请使用ico格式的base64文本\nPlease use base64 text in ico format"),
                    0)) {
                        var t = function(e) {
                            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "file", o = e.split(","), s = o[0].match(/:(.*?);/)[1], a = s.split("/")[1], u = atob(o[1]), i = u.length, r = new Uint8Array(i); i--; )
                                r[i] = u.charCodeAt(i);
                            return new File([r],"".concat(t, ".").concat(a),{
                                type: s
                            })
                        }(e.text)
                          , o = window.webkitURL.createObjectURL(t) || window.URL.createObjectURL(t);
                        l.parentNode.parentNode.parentNode.style.cursor = "url(".concat(o, ")").concat(e.x, " ").concat(e.y, ",auto")
                    }
                }
            }, {
                key: "url",
                value: function() {
                    return new Promise((function(e) {
                        var t = document.createElement("input");
                        t.type = "file",
                        t.style = "display:none;",
                        t.accept = ".ico",
                        t.click(),
                        t.onchange = function() {
                            var o = new FileReader
                              , s = new FileReader
                              , a = t.files[0];
                            o.onload = function(t) {
                                navigator.clipboard.writeText(t.currentTarget.result),
                                alert("base64代码已经被复制到剪切板，可以粘贴以使用\nThe base64 code has been copied to the clipboard and can be pasted for use"),
                                e(t.target.result)
                            }
                            ,
                            o.onerror = function() {
                                e()
                            }
                            ,
                            s.readAsArrayBuffer(a),
                            s.onload = function(e) {
                                if ("ico" == a.name.split(".")[a.name.split(".").length - 1]) {
                                    var t = e.target.result;
                                    console.log("".concat(t.byteLength / 1024, " KB")),
                                    t.byteLength / 1024 <= 10 ? o.readAsDataURL(a) : (console.warn("文件过大，可能导致工程文件崩溃！！！\nThe file is too large, may cause the project file crash!!!"),
                                    alert("文件过大，可能导致工程文件崩溃！！！\nThe file is too large, may cause the project file crash!!!"))
                                } else
                                    console.warn("请选择*.ico文件\nPlease select the *.ico file"),
                                    alert("请选择*.ico文件\nPlease select the *.ico file")
                            }
                        }
                        ,
                        window.onfocus = function() {
                            setTimeout((function() {
                                e("")
                            }
                            ), 1e3)
                        }
                    }
                    ))
                }
            }],
            o && a(t.prototype, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        document.addEventListener("mousedown", (function(e) {
            u[e.button] = "down",
            "down" === u[0] && (c = JSON.parse('[{"clientX":"'.concat(e.clientX, '","clientY":"').concat(e.clientY, '","identifier":"mouse"}]')))
        }
        )),
        document.addEventListener("mouseup", (function(e) {
            u[e.button] = "up",
            c = []
        }
        )),
        document.addEventListener("mousemove", (function(e) {
            c = "down" === u[0] ? JSON.parse('[{"clientX":"'.concat(e.clientX, '","clientY":"').concat(e.clientY, '","identifier":"mouse"}]')) : [],
            i = e.movementX,
            r = e.movementY,
            clearTimeout(n),
            n = setTimeout((function() {
                i = 0,
                r = 0
            }
            ), 30)
        }
        )),
        l.addEventListener("touchstart", (function(e) {
            c = e.targetTouches,
            u[0] = "down"
        }
        )),
        l.addEventListener("touchmove", (function(e) {
            i = e.targetTouches[0].clientX - c[0].clientX,
            r = e.targetTouches[0].clientY - c[0].clientY,
            clearTimeout(n),
            n = setTimeout((function() {
                i = 0,
                r = 0
            }
            ), 30),
            c = e.targetTouches
        }
        )),
        l.addEventListener("touchend", (function(e) {
            c = e.targetTouches,
            u[0] = "up"
        }
        ))
