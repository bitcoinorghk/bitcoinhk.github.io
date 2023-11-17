---
layout: "page"
title: "Lightning"
caption: "Get involved"
subtitle: "Donate money over the Lightning Network"
icon: "user"
background: "url(/media/2018/08/events.jpg) #FF0000"
permalink: "/lightning/"
navigation: "visible"
---

You can donate money here using the Lightning network!

<!---
<div>
<script>
      window.addEventListener("load", function(){
        // Bare minimum - provide the ID
        numpad.attach({
          id : "numpad-1"
        });
      });
      window.addEventListener("load", function(){
        // Bare minimum - provide the ID
        numpad.attach({
          id : "numpad-2"
        });
      });
</script>   
</div>
--->


<div class="contact">
<dl>
<dd>
<form class="form-sub" method="POST" action="https://btcpay.bitcoin.org.hk/api/v1/invoices">
    <label for="numpad-1"> 
    <h4> Donate with BTCPay </h4> 
    <p> This self hosted payment provider accepts either lightning or bitcoin. Select an Amount in <b> (HKD):</b> </p>
    </label>
<style> .btcpay-form { display: inline-flex; align-items: center; justify-content: center; } .btcpay-form--inline { flex-direction: row; } .btcpay-form--block { flex-direction: column; } .btcpay-form--inline .submit { margin-left: 15px; } .btcpay-form--block select { margin-bottom: 10px; } .btcpay-form .btcpay-custom-container{ text-align: center; }.btcpay-custom { display: flex; align-items: center; justify-content: center; } .btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; } .btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; } .btcpay-form select:hover { border-color: #ccc; } .btcpay-form option { color: #000; background: rgba(0,0,0,.1); } .btcpay-input-price { -moz-appearance: textfield; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #fff; }.btcpay-input-price::-webkit-outer-spin-button, .btcpay-input-price::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } </style>
<form method="POST" action="https://we.encrypt.cash/api/v1/invoices" class="btcpay-form btcpay-form--inline">
  <input type="hidden" name="storeId" value="A3bkgCnprnHbXzKbH2SZJJws9mkoVbDPGFm4HzERUR2J" />
  <input type="hidden" name="checkoutDesc" value="Donate to the Bitcoin Association of Hong Kong" />
  <div class="btcpay-custom-container">
    <div class="btcpay-custom">
      <input class="btcpay-input-price" type="number" name="price" min="10" max="10000" step="10" value="100" data-price="10" style="width:3em;" />
    </div>
    <select name="currency">
      <option value="HKD" selected>HKD</option>
      <option value="USD">USD</option>
      <option value="CNY">CNY</option>
      <option value="BTC">BTC</option>
    </select>
  </div>
  <input type="hidden" name="defaultPaymentMethod" value="BTC_LightningLike" />
<button type="submit" class="submit" name="submit" style="min-width:209px;min-height:57px;border-radius:4px;border-style:none;background-color:#0f3b21;cursor:pointer;" title="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"><span style="color:#fff">Donate through</span>
<img src="https://we.encrypt.cash/img/paybutton/logo.svg" style="height:57px;display:inline-block;padding:5% 0 5% 5px;vertical-align:middle;">
</button></form>
<script>
    function handlePlusMinus(event) {
        event.preventDefault();
        const root = event.target.closest('.btcpay-form');
        const el = root.querySelector('.btcpay-input-price');
        const step = parseInt(event.target.dataset.step) || 1;
        const min = parseInt(event.target.dataset.min) || 1;
        const max = parseInt(event.target.dataset.max);
        const type = event.target.dataset.type;
        const price = parseInt(el.value) || min;
        if (type === '-') {
            el.value = price - step < min ? min : price - step;
        } else if (type === '+') {
            el.value = price + step > max ? max : price + step;
        }
    }
    document.querySelectorAll(".btcpay-form .plus-minus").forEach(function(el) {
        if (!el.dataset.initialized) {
            el.addEventListener('click', handlePlusMinus);
            el.dataset.initialized = true;
        }
    });
    
    function handlePriceInput(event) {
        event.preventDefault();
        const root = event.target.closest('.btcpay-form');
        const price = parseInt(event.target.dataset.price);
        if (isNaN(event.target.value)) root.querySelector('.btcpay-input-price').value = price;
        const min = parseInt(event.target.getAttribute('min')) || 1;
        const max = parseInt(event.target.getAttribute('max'));
        if (event.target.value < min) {
            event.target.value = min;
        } else if (event.target.value > max) { 
            event.target.value = max;
        }
    }
    document.querySelectorAll(".btcpay-form .btcpay-input-price").forEach(function(el) {
        if (!el.dataset.initialized) {
            el.addEventListener('input', handlePriceInput);
            el.dataset.initialized = true;
        }
    });
</script>
</form>
</dd>
</dl>
</div>

Donate satoshis via a static lnurl Lightning invoice, directly to our node. Or make use of our Lightning address [donate@bitcoin.org.hk](lightning:donate@bitcoin.org.hk)

[![Static Lightning Donation Invoice](/media/2023/11/ln_donation_small.png)](lightning:LNURL1DP68GURN8GHJ7UM9DEJZUMRPD9EK2EFWDAEXWTMVDE6HYMRS9AGKU5ZPVD8Q8WGHFC)
{:.text-center}

[LNURL1DP68GURN8GHJ7MRW9EKXZ6TNV4JJUMMJVUHKCMN4WFK8QTMFXGURV6TE08QRGY](lightning:LNURL1DP68GURN8GHJ7UM9DEJZUMRPD9EK2EFWDAEXWTMVDE6HYMRS9AGKU5ZPVD8Q8WGHFC)
