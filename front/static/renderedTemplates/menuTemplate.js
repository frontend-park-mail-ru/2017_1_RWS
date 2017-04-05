function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}export default function renderMenu(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"front\u002FcomponentTemplates\u002FmenuTemplate.pug":"div\r\n    - var auth = true;\r\n    h1(class='h1Title') Break Away\r\n    div(class='menuBody')\r\n        p(class='title' onclick='auth()')= 'Start'\r\n        p(class='title' onclick='showRating()')= 'Rating'\r\n        if auth\r\n            p(class='title' onclick='userLogout()')= 'Logout'\r\n        else\r\n            p(class='title' onclick='showLogin()')= 'Login'\r\n        p(class='title' onclick='showAbout()')= 'About'\r\n\r\n"};
var pug_indent = [];
;pug_debug_line = 1;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + "\n\u003Cdiv\u003E";
;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
var auth = true;
;pug_debug_line = 3;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + "Break Away\u003C\u002Fh1\u003E";
;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + "\n  \u003Cdiv class=\"menuBody\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"auth()\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Start') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"showRating()\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Rating') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 7;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
if (auth) {
;pug_debug_line = 8;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"userLogout()\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Logout') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
else {
;pug_debug_line = 10;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"showLogin()\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Login') ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
;pug_debug_line = 11;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"showAbout()\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'About') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}