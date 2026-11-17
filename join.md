---
layout: "page"
title: "Become a Member"
caption: "join"
subtitle: "Join the Bitcoin Association of Hong Kong"
icon: "user"
background: "url(/images/bahk-bg-01.jpg) #FF0000"
permalink: "/join/"
navigation: "visible"
---

<style>
  /* This page only. The BAHK App hero runs full width, in the app's black and orange. */
  body:has(.jx) .page-hero { display: none; }
  body:has(.jx) section.post { padding-top: 0; }
  .post-content:has(.jx) { max-width: none; }
  body:has(.jx) { overflow-x: clip; }
  .jx > .jx-sec, .jx + .join { max-width: 1080px; margin-left: auto; margin-right: auto; }
  .jx img { margin: 0; border-radius: 0; }
  .jx h3 { font-size: clamp(1.6rem, 3vw, 2.1rem); font-weight: 800; letter-spacing: -.02em; margin: 0 0 .5rem; }
  .jx-sec { padding: 64px 0; border-bottom: 1px solid var(--border); }
  .jx-sec > p.jx-intro { color: var(--grey); margin: 0 0 28px; font-size: 1.0625rem; }
  .jx-btn { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 22px; border-radius: 999px; font-weight: 700; background: var(--btc); color: #fff !important; text-decoration: none !important; border: 2px solid var(--btc); }
  .jx-btn:hover { background: var(--btc-dark); border-color: var(--btc-dark); }
  .jx-btn-ghost { background: transparent; border-color: rgba(255,255,255,.35); }
  .jx-btn-ghost:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.6); }

  .jx-hero { width: 100vw; margin-left: calc(50% - 50vw); background: radial-gradient(ellipse 55% 70% at 72% 55%, rgba(247,147,26,.22), transparent 70%), #050506; color: #fff; overflow: hidden; }
  .jx-hero-in { max-width: 1080px; margin: 0 auto; padding: 72px var(--px) 56px; display: grid; grid-template-columns: 1.05fr 1fr; gap: 32px; align-items: center; }
  .jx-eyebrow { color: #9a9aa0; font-weight: 600; font-size: 1.25rem; margin: 0 0 .25rem; letter-spacing: -.01em; }
  .jx-hero h1 { font-size: clamp(3rem, 7vw, 5.25rem); line-height: 1; font-weight: 800; letter-spacing: -.045em; margin: 0 0 1rem; background: linear-gradient(100deg, #ffc46b 0%, #f7931a 45%, #e8590c 100%); -webkit-background-clip: text; background-clip: text; color: transparent; padding: .06em 0; }
  .jx-hero .jx-lead { font-size: clamp(1.15rem, 2vw, 1.4rem); font-weight: 600; line-height: 1.35; margin: 0 0 28px; color: #fff; max-width: 26ch; }
  .jx-ctas { display: flex; gap: 10px; flex-wrap: wrap; }
  .jx-small { margin: 18px 0 0; color: #9a9aa0; font-size: .9375rem; }
  .jx-small a { color: #f7931a; }
  .jx-hero img { width: 100%; max-width: 520px; justify-self: center; filter: drop-shadow(0 30px 60px rgba(0,0,0,.5)); }

  .jx-perks { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .jx-perk { border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 22px; background: var(--bg); }
  .jx-perk svg { width: 30px; height: 30px; color: var(--btc); }
  .jx-perk h4 { margin: 12px 0 4px; font-size: 1.0625rem; }
  .jx-perk p { margin: 0; color: var(--grey); font-size: .9375rem; line-height: 1.55; }

  .jx-plans { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .jx-plan { border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 28px; display: flex; flex-direction: column; gap: 6px; }
  .jx-plan.jx-main { border: 2px solid var(--btc); }
  .jx-plan .jx-name { font-weight: 700; color: var(--grey); text-transform: uppercase; letter-spacing: .08em; font-size: .8125rem; }
  .jx-plan .jx-price { font-size: 2.6rem; font-weight: 800; letter-spacing: -.03em; line-height: 1.1; }
  .jx-plan .jx-price span { font-size: 1rem; font-weight: 600; color: var(--grey); letter-spacing: 0; }
  .jx-plan p { margin: 0 0 14px; color: var(--grey); }
  .jx-plan .jx-btn { margin-top: auto; align-self: flex-start; }
  .jx-note { margin: 16px 0 0; color: var(--grey); font-size: .9375rem; }
  .jx-note a { color: var(--btc); }

  .jx-steps { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; counter-reset: none; }
  .jx-steps li { margin: 0; padding: 0; }
  .jx-steps li::before { content: none; }
  .jx-n { display: inline-flex; width: 36px; height: 36px; border-radius: 50%; background: var(--btc); color: #fff; font-weight: 800; align-items: center; justify-content: center; }
  .jx-steps h4 { margin: 12px 0 4px; font-size: 1.0625rem; }
  .jx-steps p { margin: 0; color: var(--grey); font-size: .9375rem; line-height: 1.55; }

  .jx-member { margin-top: 40px; border-radius: var(--radius-lg); background: #0b0b0d; color: #fff; padding: 28px; display: flex; gap: 20px; align-items: center; justify-content: space-between; flex-wrap: wrap; }
  .jx-member h4 { margin: 0 0 4px; font-size: 1.25rem; color: #fff; }
  .jx-member p { margin: 0; color: #b5b5bb; max-width: 52ch; }


  .jx-places { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 10px; }
  .jx-places li { margin: 0; padding: 10px 16px; border: 1px solid var(--border); border-radius: 999px; font-weight: 600; font-size: .9375rem; background: var(--bg); }
  .jx-places li::before { content: none; }
  .jx-faq details { border-bottom: 1px solid var(--border); padding: 16px 0; }
  .jx-faq summary { cursor: pointer; font-weight: 700; font-size: 1.0625rem; list-style: none; display: flex; justify-content: space-between; gap: 16px; }
  .jx-faq summary::-webkit-details-marker { display: none; }
  .jx-faq summary::after { content: '+'; color: var(--btc); font-weight: 800; font-size: 1.3rem; line-height: 1; }
  .jx-faq details[open] summary::after { content: '–'; }
  .jx-faq details p { margin: 10px 0 0; color: var(--grey); }
  .jx-faq a { color: var(--btc); }

  @media (max-width: 860px) {
    .jx-hero-in { grid-template-columns: 1fr; padding-top: 48px; text-align: left; }
    .jx-hero img { max-width: 420px; }
    .jx-perks { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 560px) {
    .jx-perks, .jx-plans, .jx-steps { grid-template-columns: 1fr; }
    .jx-sec { padding: 48px 0; }
      .jx-btn { width: 100%; }
  }
</style>

<div class="jx">

  <section class="jx-hero">
    <div class="jx-hero-in">
      <div>
        <p class="jx-eyebrow">Introducing the</p>
        <h1>BAHK App.</h1>
        <p class="jx-lead">Your membership and benefits, finally in one place.</p>
        <div class="jx-ctas">
          <a class="jx-btn" href="https://members.bitcoin.org.hk/join">Apply to join</a>
          <a class="jx-btn jx-btn-ghost" href="https://members.bitcoin.org.hk/join/existing">Already a member? Register</a>
        </div>
        <p class="jx-small">Members log in at <a href="https://members.bitcoin.org.hk/login">members.bitcoin.org.hk</a></p>
      </div>
      <img src="/images/bahk-app-hero.webp" alt="The BAHK member card in front of the BAHK App on a phone" width="1100" height="1039">
    </div>
  </section>

  <section class="jx-sec">
    <h3>What you get</h3>
    <p class="jx-intro">Join the people building Bitcoin in Hong Kong since 2012.</p>
    <div class="jx-perks">
      <div class="jx-perk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M6 15h5"/></svg><h4>Your member card</h4><p>In the BAHK App. Show it to get member prices.</p></div>
      <div class="jx-perk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12.5V4a1 1 0 0 1 1-1h8.5l8.8 8.8a1.4 1.4 0 0 1 0 2l-7.5 7.5a1.4 1.4 0 0 1-2 0z"/><circle cx="8" cy="8" r="1.6"/></svg><h4>18+ discounts</h4><p>Restaurants, hotels, shops and services across Hong Kong. More coming soon.</p></div>
      <div class="jx-perk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v3M5.5 9h13l-1 12h-11z"/><path d="M9 9V7.5a3 3 0 0 1 6 0V9"/></svg><h4>Christmas dinner</h4><p>Included with your membership every year.</p></div>
      <div class="jx-perk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/></svg><h4>Events</h4><p>Monthly meetups, classes and members-only events.</p></div>
      <div class="jx-perk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3.5" width="16" height="17" rx="2.5"/><path d="M8 8.5h8M8 12h8M8 15.5h5"/></svg><h4>Classifieds</h4><p>Buy and sell with other members.</p></div>
      <div class="jx-perk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg><h4>A vote</h4><p>Voting rights in the association.</p></div>
    </div>
  </section>

  <section class="jx-sec" id="join-member">
    <h3>Membership</h3>
    <p class="jx-intro">Open to everyone with a connection to Hong Kong and an interest in Bitcoin.</p>
    <div class="jx-plans">
      <div class="jx-plan jx-main">
        <div class="jx-name">Individual</div>
        <div class="jx-price">HK$1,500 <span>a year</span></div>
        <p>Christmas dinner included. Paid in bitcoin.</p>
        <a class="jx-btn" href="https://members.bitcoin.org.hk/join">Apply to join</a>
      </div>
      <div class="jx-plan">
        <div class="jx-name">Under 27</div>
        <div class="jx-price">HK$888 <span>a year</span></div>
        <p>Christmas dinner included. Paid in bitcoin.</p>
        <a class="jx-btn" href="https://members.bitcoin.org.hk/join">Apply to join</a>
      </div>
    </div>
    <p class="jx-note">Benefits are for members whose annual fee is paid up to date. A company? Email <a href="mailto:info@bitcoin.org.hk">info@bitcoin.org.hk</a>.</p>
  </section>

  <section class="jx-sec" id="how-to-join">
    <h3>How to join</h3>
    <p class="jx-intro">It all happens in the BAHK App.</p>
    <ol class="jx-steps">
      <li><span class="jx-n">1</span><h4>Apply in the BAHK App</h4><p>Tell us about yourself.</p></li>
      <li><span class="jx-n">2</span><h4>Two member referrals</h4><p>Name two members who know you.</p></li>
      <li><span class="jx-n">3</span><h4>Pay in bitcoin</h4><p>In the app. Once approved, your card is ready. If not, we refund you.</p></li>
    </ol>
    <div class="jx-member">
      <div>
        <h4>Already a member?</h4>
        <p>Register in the BAHK App to get your card. Renew there each year, between 1 October and 9 December.</p>
      </div>
      <a class="jx-btn" href="https://members.bitcoin.org.hk/join/existing">Register</a>
    </div>
  </section>

  <section class="jx-sec" id="member-discounts">
    <h3>Member discounts</h3>
    <p class="jx-intro">Show your card in the BAHK App and save at these places. Many give you a better deal when you pay in bitcoin.</p>
    <ul class="jx-places">
      <li>21M Digital Marketing</li>
      <li>AEM Crypto Software</li>
      <li>AirBTC</li>
      <li>Aki Hotel and Novotel</li>
      <li>Bankole, crypto law adviser</li>
      <li>BitGo</li>
      <li>Charlie Banana</li>
      <li>Frank's Restaurant and Bar</li>
      <li>Montaj Tailors</li>
      <li>ORM Korean Restaurant</li>
      <li>Santorini Grill</li>
      <li>Santorini Steakhouse</li>
      <li>Tree House Restaurants</li>
      <li>Whale Lounge</li>
    </ul>
    <p class="jx-note">See each deal in the BAHK App. More are coming soon. Want to offer a discount to members? Email <a href="mailto:info@bitcoin.org.hk">info@bitcoin.org.hk</a>.</p>
  </section>

  <section class="jx-sec jx-faq">
    <h3>Questions</h3>
      <details><summary>Who can join?</summary><p>Anyone with a connection to Hong Kong and an interest in Bitcoin.</p></details>
      <details><summary>How do I pay?</summary><p>In bitcoin, in the BAHK App.</p></details>
      <details><summary>When do I renew?</summary><p>Once a year, between 1 October and 9 December. Your renewal includes the Christmas dinner.</p></details>
      <details><summary>Who gets the benefits?</summary><p>Members whose annual fee is paid up to date: the card, discounts, Christmas dinner and classifieds.</p></details>
      <details><summary>What if I am not approved?</summary><p>We refund your fee.</p></details>
      <details><summary>Can a company join?</summary><p>Yes. Email <a href="mailto:info@bitcoin.org.hk">info@bitcoin.org.hk</a> and we will set it up with you.</p></details>
  </section>

</div>

<div class="join">
  <div class="network">
    <h3>Our Network</h3>
    <div class="tabs">
      <div class="tab1 " data-tab="corp">
        Corporate members
      </div>
      <div class="tab1 current" data-tab="org">
        Partner Organizations
      </div>
      <div class="tab1" data-tab="com">
        Media
      </div>
    </div>
    <div class="logos">
      <div id="corp" class="content">
      	<img src="/media/corp/aax.png" alt="aax logo">
      	<img src="/media/corp/anx.png" alt="anx logo">
	<img src="/media/corp/atum.png" alt="atum logo">
	<img src="/media/corp/coinunited.png" alt= "coinunited logo">
	<img src="/media/corp/daemon.png" alt= "daemon logo">
	<img src="/media/corp/edge.png" alt="edge logo">
	<img src="/media/corp/etoro.png" alt="etoro logo">
	<img src="/media/corp/gbcai.png" alt="gbcai logo">
	<img src="/media/corp/gb.png" alt="genesis block logo">
	<img src="/media/corp/hkbitcoinatm.png" alt="hk bitcoin atm logo">
	<img src="/media/corp/nil.png" alt="nil logo">
	<img src="/media/corp/onesatoshi.png" alt="nil logo">
	<img src="/media/corp/salg.svg" alt="salg logo">
  	<img src="/media/corp/hashkey.png" alt="hashkey logo">
      </div>
      <div id="org" class="content  current-content">
	<img src="/media/org/adam.svg" alt="logo">
	<img src="/media/org/bach.png" alt="logo">
	<img src="/media/org/bck.svg" alt="logo">
	<img src="/media/org/ffm.svg" alt="logo">
   <img src="/media/org/bitcoin_malta.jpg" width="200" alt="Bitcoin Malta logo">  
      </div>
      <div id="com" class="content">
	<img src="/media/media/jinse.svg" alt="logo">
	<img src="/media/media/bitcoinmagazine.png" alt="logo">
	<img src="/media/media/chaintalk.png" alt="logo">
	<img src="/media/media/coindesk.svg" alt="logo">
	<img src="/media/media/cointelegraph.svg" alt="logo">
	<img src="/media/media/forkast.png" alt="logo">
  <img src="/media/media/bitcoin_news.jpg" width="200" alt="Bitcoin News logo">
  <img src="/media/media/bitcoiner_events.png" alt="Bitcoiner Events logo" width="300">
      </div>
    </div>
    <a href="/members/" class="nbtn">Members</a>
  </div>
</div>
