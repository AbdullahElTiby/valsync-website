(function() {
  var RTL = ['ar'];
  var DEFAULT = 'en';
  var LANG_ATTR = 'data-i18n';
  var HTML_ATTR = 'data-i18n-html';
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
    function applyAttr(attr, useHtml) {
      var els = document.querySelectorAll('[' + attr + ']');
      for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute(attr);
        if (!key) continue;
        var keys = key.split('.');
        var val = data;
        var found = true;
        for (var j = 0; j < keys.length; j++) {
          if (val == null) { found = false; break; }
          val = val[keys[j]];
        }
        if (found && typeof val === 'string') {
          if (useHtml) els[i].innerHTML = val; else els[i].textContent = val;
        }
      }
    }
    applyAttr(LANG_ATTR, false);
    applyAttr(HTML_ATTR, true);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
  }

  function loadAndApply(lang) {
    fetch('lang/' + lang + '.json?v=4')
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

  // ponytail: AI explainer reads .legal text at runtime, builds a prompt,
  // and sets ?q=<encoded> hrefs on each .ai-btn. Clipboard copy on click
  // covers services that don't honor ?q=. URL length is fine for ~4KB text.
  function initAiExplain() {
    var legal = document.querySelector('main .legal');
    var row = document.querySelector('.ai-row');
    if (!legal || !row) return;

    var isTerms = !!legal.querySelector('[data-i18n="legal.terms.title"]');
    var docLabel = isTerms ? 'Terms of Use' : 'Privacy Policy';

    var bases = {
      chatgpt: 'https://chatgpt.com/',
      claude: 'https://claude.ai/new',
      gemini: 'https://gemini.google.com/app',
      grok: 'https://grok.com/',
      mistral: 'https://chat.mistral.ai/chat',
      perplexity: 'https://www.perplexity.ai/search',
      deepseek: 'https://chat.deepseek.com/',
      qwen: 'https://chat.qwen.ai/'
    };

    function refresh() {
      var text = legal.innerText.trim();
      var prompt = "Please explain VALSYNC's " + docLabel + " below in simple, plain language. "
        + "Highlight the most important points a user should know. "
        + "Answer in the same language as the text below.\n\n---\n" + text + "\n---";
      var enc = encodeURIComponent(prompt);
      var btns = row.querySelectorAll('.ai-btn');
      for (var i = 0; i < btns.length; i++) {
        var k = btns[i].getAttribute('data-ai');
        var b = bases[k];
        if (!b) continue;
        btns[i].href = b + (b.indexOf('?') >= 0 ? '&' : '?') + 'q=' + enc;
        btns[i]._p = prompt;
      }
    }

    row.addEventListener('click', function(e) {
      var t = e.target.closest && e.target.closest('.ai-btn');
      if (t && t._p) { try { navigator.clipboard.writeText(t._p); } catch(_) {} }
    });

    refresh();
    setTimeout(refresh, 600); // re-grab after i18n applies translated text
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAiExplain);
  } else {
    initAiExplain();
  }
})();
