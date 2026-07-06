(function() {
  var RTL = ['ar'];
  var DEFAULT = 'en';
  var LANG_ATTR = 'data-i18n';
  var STORAGE_KEY = 'valsync-lang';

  function getLang() {
    var p = new URLSearchParams(location.search).get('lang');
    if (p) return p;
    try { var s = localStorage.getItem(STORAGE_KEY); if (s) return s; } catch(e) {}
    var nav = (navigator.language || '').split('-')[0];
    return nav || DEFAULT;
  }

  function markActive(lang) {
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      if (b.getAttribute('data-lang') === lang) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    }
  }

  function translate(lang, data) {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.indexOf(lang) >= 0 ? 'rtl' : 'ltr';
    markActive(lang);
    var els = document.querySelectorAll('[' + LANG_ATTR + ']');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute(LANG_ATTR);
      if (!key) continue;
      var keys = key.split('.');
      var val = data;
      var found = true;
      for (var j = 0; j < keys.length; j++) {
        if (val == null) { found = false; break; }
        val = val[keys[j]];
      }
      if (found && typeof val === 'string') {
        els[i].textContent = val;
      }
    }
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
  }

  function loadAndApply(lang) {
    fetch('lang/' + lang + '.json?v=2')
      .then(function(r) { return r.json(); })
      .then(function(data) { translate(lang, data); })
      .catch(function() {
        if (lang !== DEFAULT) loadAndApply(DEFAULT);
      });
  }

  var lang = getLang();
  loadAndApply(lang);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwitcher);
  } else {
    initSwitcher();
  }

  function initSwitcher() {
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
        var l = this.getAttribute('data-lang');
        if (l) loadAndApply(l);
      });
    }
    markActive(lang);
  }
})();
