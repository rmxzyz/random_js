//nitro emojis for free?
javascript: (function () {
  javascript: !(function () {
    function e(e) {
      const t = (function () {
        let e,
          t = "undefined" == typeof unsafeWindow ? window : unsafeWindow;
        if (null != t.webpackChunkdiscord_app) {
          const n = ["__extra_id__"];
          t.webpackChunkdiscord_app.push([
            n,
            {},
            (t) => {
              (e = t), (n.length = 0);
            },
          ]);
        } else {
          if (null == t.webpackJsonp) return null;
          delete (e =
            "function" == typeof t.webpackJsonp
              ? t.webpackJsonp(
                  [],
                  {
                    __extra_id__: (e, t, n) => {
                      t.default = n;
                    },
                  },
                  ["__extra_id__"]
                ).default
              : t.webpackJsonp.push([
                  [],
                  {
                    __extra_id__: (e, t, n) => {
                      e.exports = n;
                    },
                  },
                  [["__extra_id__"]],
                ])).m.__extra_id__,
            delete e.c.__extra_id__;
        }
        const n = (t) => {
          for (let n in e.c)
            if (e.c.hasOwnProperty(n)) {
              let i = e.c[n].exports;
              if (!i) continue;
              if ((i.__esModule && i.default && (i = i.default), t(i)))
                return i;
            }
          return null;
        };
        return {
          findModule: n,
          findModuleByUniqueProperties: (e) =>
            n((t) => e.every((e) => void 0 !== t[e])),
        };
      })();
      if (null == t && e) return 0;
      const { findModule: n, findModuleByUniqueProperties: i } = t;
      let o = i([
        "getDisambiguatedEmojiContext",
        "searchWithoutFetchingLatest",
      ]);
      if (null == o && e) return 0;
      let l = i(["parse", "parsePreprocessor", "unparse"]);
      if (null == l && e) return 0;
      let r = i(["useEmojiSelectHandler"]);
      if (null == r && e) return 0;
      const u = o.searchWithoutFetchingLatest;
      function a(e, t) {
        e.content = e.content.replace(
          `<${t.animated ? "a" : ""}:${t.originalName || t.name}:${t.id}>`,
          t.url.split("?")[0] + "?size=48"
        );
      }
      o.searchWithoutFetchingLatest = function () {
        let e = u.apply(this, arguments);
        return e.unlocked.push(...e.locked), (e.locked = []), e;
      };
      const s = l.parse;
      l.parse = function () {
        let e = s.apply(this, arguments);
        if (0 !== e.invalidEmojis.length) {
          for (let t of e.invalidEmojis) a(e, t);
          e.invalidEmojis = [];
        }
        let t = e.validNonShortcutEmojis;
        for (let n = 0; n < t.length; n++) {
          const i = t[n];
          i.available || (a(e, i), t.splice(n, 1), n--);
        }
        return e;
      };
      const c = r.useEmojiSelectHandler;
      return (
        (r.useEmojiSelectHandler = function (e) {
          const { onSelectEmoji: t, closePopout: n } = e,
            i = c.apply(this, arguments);
          return function (e, o) {
            if (o.toggleFavorite) return i.apply(this, arguments);
            const l = e.emoji;
            null != l && (t(l, o.isFinalSelection), o.isFinalSelection && n());
          };
        }),
        1
      );
    }
    var t = 0;
    !(function n() {
      0 === e() && window.setTimeout(600 == ++t ? e : n, 100, !0);
    })();
  })();
})();
