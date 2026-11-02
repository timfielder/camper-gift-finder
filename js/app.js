(function () {
  'use strict';
  var P = window.GF_PRODUCTS || [];
  var ICON = { car: '🏕️', backpacking: '🎒', rv: '🚐', hunting: '🦌', fishing: '🎣', winter: '❄️' };
  var STYLE_LABEL = { car: 'a car & family camper', backpacking: 'a backpacker', rv: 'an RV camper', hunting: 'a hunter', fishing: 'an angler', winter: 'a winter camper' };
  var WHO_LABEL = { partner: 'your partner', dad: 'Dad', mom: 'Mom', kid: 'a kid', teen: 'a teen', friend: 'a friend', coworker: 'a coworker' };
  var BUDGET_LABEL = { 'u25': 'under $25', '25-50': '$25–50', '50-100': '$50–100', '100+': '$100+' };
  var ORDER = ['u25', '25-50', '50-100', '100+'];
  var state = { who: null, style: null, budget: null, level: 'any' };
  var steps = ['who', 'style', 'budget', 'level'];
  var cur = 0;

  function $(s, el) { return (el || document).querySelector(s); }
  function $all(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  // Exposed for tests and landing pages
  function recommend(q) {
    var bi = ORDER.indexOf(q.budget);
    var scored = P.map(function (p) {
      var s = 0;
      if (p.styles.indexOf(q.style) >= 0) s += 6; else return null;
      var pi = ORDER.indexOf(p.band);
      if (pi === bi) s += 5; else if (pi === bi - 1) s += 2.5; else if (pi < bi) s += 1; else return null; // never over budget
      if (p.who.indexOf(q.who) >= 0) s += 4; else if (q.who === 'kid') return null; else s -= 1;
      if (q.level && q.level !== 'any') { if (p.level === q.level) s += 2; else if (p.level !== 'any') s -= 2; }
      if (q.budget === 'u25' && p.stocking) s += 1;
      if (p.styles[0] === q.style) s += 1.5; // primary use
      s += p.styles.length > 3 ? 0 : 0.5; // specialists slightly preferred
      return { p: p, s: s };
    }).filter(Boolean).sort(function (a, b) { return b.s - a.s || b.p.priceApprox - a.p.priceApprox; });
    var out = [], brands = {};
    scored.forEach(function (x) { if (out.length < 8 && !brands[x.p.brand]) { out.push(x.p); brands[x.p.brand] = 1; } });
    if (out.length < 5) scored.forEach(function (x) { if (out.length < 8 && out.indexOf(x.p) < 0) out.push(x.p); });
    if (out.length < 5) { // widen: same budget, any style that fits the person
      P.filter(function (p) { return ORDER.indexOf(p.band) <= bi && p.who.indexOf(q.who) >= 0 && out.indexOf(p) < 0; })
        .slice(0, 5 - out.length).forEach(function (p) { out.push(p); });
    }
    return out.slice(0, 8);
  }
  window.GF_recommend = recommend;

  function card(p, style) {
    var ic = ICON[style] || ICON[p.styles[0]] || '🎁';
    return '<article class="card pick"><div class="ic" aria-hidden="true">' + ic + '</div><div>' +
      '<h3>' + esc(p.name) + '</h3>' +
      '<div class="meta">' + esc(p.brand) + ' · ' + esc(p.price) + (p.stocking && p.priceApprox <= 26 ? ' <span class="tag s">stocking stuffer</span>' : '') + '</div>' +
      '<p>' + esc(p.why) + '</p>' +
      '<a class="buy" href="' + esc(window.GF_LINK(p)) + '" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon →</a>' +
      '</div></article>';
  }
  window.GF_card = card;

  var root = $('#quiz');
  if (!root) return;

  function show(i) {
    cur = i;
    $all('.step', root).forEach(function (el, k) { el.classList.toggle('on', k === i); });
    $('.progress i', root).style.width = ((i + 1) / steps.length * 100) + '%';
    $('#qback').classList.toggle('hidden', i === 0);
    var first = $('.step.on .opt', root); if (first && document.activeElement && root.contains(document.activeElement)) first.focus();
  }

  $all('.opt', root).forEach(function (b) {
    b.addEventListener('click', function () {
      var k = b.getAttribute('data-k'), v = b.getAttribute('data-v');
      state[k] = v;
      $all('.opt[data-k="' + k + '"]', root).forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      if (k === 'level') { finish(); return; }
      setTimeout(function () { show(steps.indexOf(k) + 1); }, 120);
    });
  });
  $('#qback').addEventListener('click', function () { if (cur > 0) show(cur - 1); });
  $('#qskip').addEventListener('click', function () { state.level = 'any'; finish(); });

  function finish(fromUrl) {
    if (!state.who || !state.style || !state.budget) return;
    var picks = recommend(state);
    var res = $('#results');
    var title = 'Gifts for ' + WHO_LABEL[state.who] + ', ' + STYLE_LABEL[state.style] + ', ' + BUDGET_LABEL[state.budget];
    $('#rtitle').textContent = title;
    $('#rcount').textContent = picks.length + ' gift ideas' + (state.level !== 'any' ? ' for a ' + state.level + ' camper' : '') + '. Prices are approximate; check the current price before you buy.';
    $('#picks').innerHTML = picks.map(function (p) { return card(p, state.style); }).join('');
    res.classList.remove('hidden');
    var qs = '?who=' + state.who + '&style=' + state.style + '&budget=' + encodeURIComponent(state.budget) + (state.level !== 'any' ? '&level=' + state.level : '');
    try { history.replaceState(null, '', qs + '#results'); } catch (e) {}
    $('#shareurl').value = location.href.split('#')[0];
    document.title = title + ' | Camper Gift Finder';
    if (!fromUrl) res.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.gtagEvent) window.gtagEvent('quiz_complete', state);
  }

  $('#restart').addEventListener('click', function () {
    state = { who: null, style: null, budget: null, level: 'any' };
    $all('.opt', root).forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
    $('#results').classList.add('hidden');
    try { history.replaceState(null, '', location.pathname); } catch (e) {}
    show(0); root.scrollIntoView({ behavior: 'smooth' });
  });
  $('#copy').addEventListener('click', function () {
    var i = $('#shareurl'); i.select();
    var done = function () { $('#copy').textContent = 'Copied!'; };
    if (navigator.clipboard) navigator.clipboard.writeText(i.value).then(done, done); else { document.execCommand('copy'); done(); }
  });

  // Restore from shareable URL
  var u = new URLSearchParams(location.search);
  if (u.get('who') && u.get('style') && u.get('budget') && WHO_LABEL[u.get('who')] && STYLE_LABEL[u.get('style')] && BUDGET_LABEL[u.get('budget')]) {
    state.who = u.get('who'); state.style = u.get('style'); state.budget = u.get('budget');
    state.level = ['beginner', 'seasoned'].indexOf(u.get('level')) >= 0 ? u.get('level') : 'any';
    steps.forEach(function (k) { $all('.opt[data-k="' + k + '"]', root).forEach(function (o) { o.setAttribute('aria-pressed', o.getAttribute('data-v') === state[k] ? 'true' : 'false'); }); });
    show(3); finish(true);
    setTimeout(function () { $('#results').scrollIntoView({ block: 'start' }); }, 50);
  } else show(0);
})();
