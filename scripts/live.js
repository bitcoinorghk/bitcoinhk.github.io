/* =========================================================
   BAHK — live blockchain data, count-up + scroll reveal
   No dependencies. Degrades gracefully if APIs/JS fail.
   ========================================================= */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function setText(id, txt) { var el = $(id); if (el) el.textContent = txt; }
  function fmt(n) { return Number(n).toLocaleString('en-US'); }
  function fmtUSD(n) { return '$' + fmt(Math.round(n)); }
  function fmtHKD(n) { return 'HK$' + fmt(Math.round(n)); }

  /* ---------- count-up ---------- */
  function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }

  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    if (prefersReduced) { el.textContent = fmt(target); return; }
    var dur = 1700, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = fmt(Math.round(target * easeOutExpo(p)));
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target);
    }
    requestAnimationFrame(step);
  }

  /* ---------- scroll reveal + count trigger ---------- */
  var reveals = document.querySelectorAll('.reveal');
  var counted = false;

  function countAll() {
    if (counted) return;
    counted = true;
    var nodes = document.querySelectorAll('.stat-num .count');
    for (var i = 0; i < nodes.length; i++) animateCount(nodes[i]);
  }

  if ('IntersectionObserver' in window && !prefersReduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    for (var r = 0; r < reveals.length; r++) io.observe(reveals[r]);

    var statsBar = document.querySelector('.stats-bar');
    if (statsBar) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { countAll(); io2.disconnect(); }
        });
      }, { threshold: 0.25 });
      io2.observe(statsBar);

      // Fallback: if a fast/instant scroll skips the observer, catch it on scroll.
      var checkInView = function () {
        if (counted) { window.removeEventListener('scroll', checkInView); return; }
        var r = statsBar.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          countAll();
          window.removeEventListener('scroll', checkInView);
        }
      };
      window.addEventListener('scroll', checkInView, { passive: true });
      checkInView();
    } else {
      countAll();
    }
  } else {
    for (var k = 0; k < reveals.length; k++) reveals[k].classList.add('revealed');
    countAll();
  }

  /* ---------- live Bitcoin data ---------- */
  // fetch JSON/text with a hard failure on non-2xx so fallbacks trigger
  function getJSON(url) {
    return fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  function getText(url) {
    return fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); });
  }

  function loadPrice() {
    // Primary: CoinGecko — USD + HKD + 24h change in one call.
    getJSON('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,hkd&include_24hr_change=true')
      .then(function (d) {
        var b = d && d.bitcoin;
        if (!b || !b.usd) throw new Error('no data');
        setText('btc-price-usd', fmtUSD(b.usd));
        setText('nav-price-val', fmtUSD(b.usd));
        if (b.hkd) setText('btc-price-hkd', fmtHKD(b.hkd));
        var ch = b.usd_24h_change;
        var chEl = $('btc-change');
        if (chEl && typeof ch === 'number') {
          var up = ch >= 0;
          chEl.textContent = (up ? '▲ ' : '▼ ') + Math.abs(ch).toFixed(2) + '%';
          chEl.className = 'live-change ' + (up ? 'up' : 'down');
        }
      })
      .catch(function () {
        // Fallback: mempool.space prices (USD only) + HKD peg estimate.
        getJSON('https://mempool.space/api/v1/prices')
          .then(function (d) {
            if (!d || !d.USD) return;
            setText('btc-price-usd', fmtUSD(d.USD));
            setText('nav-price-val', fmtUSD(d.USD));
            setText('btc-price-hkd', fmtHKD(d.USD * 7.8));
            var chEl = $('btc-change');
            if (chEl && chEl.textContent === '···') chEl.textContent = '24h';
          })
          .catch(function () {});
      });
  }

  function applyHeight(h) {
    setText('btc-height', fmt(h));
    setText('hero-height', fmt(h));
    var interval = 210000;
    var next = Math.ceil((h + 1) / interval) * interval;
    var left = next - h;
    var days = Math.floor((left * 10) / 1440);
    setText('btc-halving', fmt(days) + ' days');
    setText('btc-halving-sub', '~' + fmt(left) + ' blocks to go');
  }

  function loadBlocks() {
    // Primary: Blockstream Esplora — reliable, CORS-friendly.
    getText('https://blockstream.info/api/blocks/tip/height')
      .then(function (t) { var h = parseInt(t, 10); if (isNaN(h)) throw new Error('nan'); applyHeight(h); })
      .catch(function () {
        getText('https://mempool.space/api/blocks/tip/height')
          .then(function (t) { var h = parseInt(t, 10); if (!isNaN(h)) applyHeight(h); })
          .catch(function () {});
      });
  }

  function applyFees(fast, eco) {
    setText('btc-fee', fast + ' sat/vB');
    setText('btc-fee-sub', 'Economy: ' + eco + ' sat/vB');
  }

  function loadFees() {
    // Primary: Blockstream fee-estimates (conf-target → sat/vB).
    getJSON('https://blockstream.info/api/fee-estimates')
      .then(function (d) {
        var fast = Math.max(1, Math.round(d['1'] || d['2'] || 1));
        var eco = Math.max(1, Math.round(d['144'] || d['6'] || 1));
        applyFees(fast, eco);
      })
      .catch(function () {
        getJSON('https://mempool.space/api/v1/fees/recommended')
          .then(function (d) { if (d && d.fastestFee) applyFees(d.fastestFee, d.economyFee || d.hourFee); })
          .catch(function () {});
      });
  }

  if ($('live-bitcoin') || $('nav-price') || $('hero-height')) {
    loadPrice(); loadBlocks(); loadFees();
    setInterval(loadPrice, 60000);
    setInterval(loadBlocks, 60000);
    setInterval(loadFees, 120000);
  }
})();
