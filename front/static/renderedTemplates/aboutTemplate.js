function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t)return e;
    var r, c, n, s = "";
    for (r = t.index, c = 0; r < a.length; r++) {
        switch (a.charCodeAt(r)) {
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n
    }
    return c !== r ? s + a.substring(c, r) : s
}
var pug_match_html = /["&<>]/;
function pug_rethrow(n, e, r, t) {
    if (!(n instanceof Error))throw n;
    if (!("undefined" == typeof window && e || t))throw n.message += " on line " + r, n;
    try {
        t = t || require("fs").readFileSync(e, "utf8")
    } catch (e) {
        pug_rethrow(n, null, r)
    }
    var i = 3, a = t.split("\n"), o = Math.max(r - i, 0), h = Math.min(a.length, r + i), i = a.slice(o, h).map(function (n, e) {
        var t = e + o + 1;
        return (t == r ? "  > " : "    ") + t + "| " + n
    }).join("\n");
    throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n
}
export default function renderAbout(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var pug_debug_filename, pug_debug_line;
    try {
        var pug_debug_sources = {"front\u002FcomponentTemplates\u002FaboutTemplate.pug": "div\r\n    h1(class='h1Title') Our Team\r\n    div(class='aboutBody')\r\n        - var names = [[\"Kuchaeva Karina\", \"Fullstack\"], [\"Zlobina Svetlana\", \"Fullstack\"], [\"Bayramukov Yan\", \"Bug Designer\"], [\"Ovchinnikov Maksim\", \"Designer\"], [\"Maschkin Egor\", \"Producer\"]];\r\n        each name in names\r\n            h2 #{name[1]}\r\n            h3 #{name[0]}\r\n\r\n\r\n\r\n"};
        var pug_indent = [];
        ;
        pug_debug_line = 1;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "\n\u003Cdiv\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "Our Team\u003C\u002Fh1\u003E";
        ;
        pug_debug_line = 3;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "\n  \u003Cdiv class=\"aboutBody\"\u003E";
        ;
        pug_debug_line = 4;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        var names = [["Kuchaeva Karina", "Fullstack"], ["Zlobina Svetlana", "Fullstack"], ["Bayramukov Yan", "Bug Designer"], ["Ovchinnikov Maksim", "Designer"], ["Maschkin Egor", "Producer"]];
        ;
        pug_debug_line = 5;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
// iterate names
        ;
        (function () {
            var $$obj = names;
            if ('number' == typeof $$obj.length) {
                for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
                    var name = $$obj[pug_index0];
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Ch2\u003E";
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + (pug_escape(null == (pug_interp = name[1]) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
                    ;
                    pug_debug_line = 7;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Ch3\u003E";
                    ;
                    pug_debug_line = 7;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + (pug_escape(null == (pug_interp = name[0]) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
                }
            } else {
                var $$l = 0;
                for (var pug_index0 in $$obj) {
                    $$l++;
                    var name = $$obj[pug_index0];
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Ch2\u003E";
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + (pug_escape(null == (pug_interp = name[1]) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
                    ;
                    pug_debug_line = 7;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Ch3\u003E";
                    ;
                    pug_debug_line = 7;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + (pug_escape(null == (pug_interp = name[0]) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
                }
            }
        }).call(this);

        pug_html = pug_html + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
    } catch (err) {
        pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
    }
    ;
    return pug_html;
}