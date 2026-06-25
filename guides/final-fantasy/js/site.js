/* FF series hub — loads shared guide-runtime (theme-driven motes + UI) */
(function () {
  var s = document.currentScript;
  if (!s || !s.src) return;
  var root = s.src.match(/^(.*)\/guides\/[^/]+\/js\/site\.js/);
  if (!root || window.__guideRuntimeQueued) return;
  window.__guideRuntimeQueued = true;
  var el = document.createElement("script");
  el.src = root[1] + "/js/guide-runtime.js";
  document.head.appendChild(el);
})();