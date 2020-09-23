---
layout: "page"
title: "Lightning"
caption: "Get involved"
subtitle: "Donate money using Lightning"
icon: "user"
background: "url(/media/2018/08/events.jpg) #FF0000"
permalink: "/lightning/"
navigation: "visible"
---

You can donate money here using the Lightning network!

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


<div class="contact">
<dl>
<dd>
<form class="form-sub" method="POST" action="https://btcpay.bitcoin.org.hk/api/v1/invoices">
    <label for="numpad-1"> 
    <h4> Donate with BTCPay </h4> 
    <p> This self hosted payment provider accepts either lightning or bitcoin. Select an Amount in <b> (HKD):</b> </p>
    </label>
    <input class="form-sub" type="number" min="0" step="0.01" name="price" placeholder="100.00 HKD" value="100.00" id="numpad-1"/>
    <input type="hidden" name="storeId" value="5fv2Vt5WEuLYBzkhFiaDN4r6xy6JdNqTbi3m1mG4ngFa" />
    <input type="hidden" name="currency" value="USD" />
    <input type="hidden" name="browserRedirect" value="https://www.bitcoin.org.hk/lightning/" />
    <input type="hidden" name="notifyEmail" value="btcpay@bitcoin.org.hk" />
    <input type="image" src="https://btcpay.bitcoin.org.hk/img/paybutton/pay.png" name="submit" style="width:200px"  alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor">
</form>
</dd>
</dl>
</div>



<div class="contact">
<dl>
<dd>
<form class="form-sub" action="https://www.coinpayments.net/index.php" method="post">
<label for="numpad-2"> <h4> Donate with CoinPayments</h4> 
<p> 
via the lightning network. Select an Amount in <b> (HKD): </b>
</p>
</label>
  <input class="form-sub" type="number" min="0" step="0.01" name="amountf" value="100.00" id="numpad-2"/>
	<input type="hidden" name="cmd" value="_pay_simple">
	<input type="hidden" name="reset" value="1">
	<input type="hidden" name="merchant" value="84ffa7d089e5eefdc9ff75f09f948f80">
	<input type="hidden" name="item_name" value="Donation">
	<input type="hidden" name="currency" value="HKD">
	<input type="hidden" name="want_shipping" value="0">
	<input type="image" src="https://www.coinpayments.net/images/pub/buynow-grey.png" style="width:200px" alt="Pay Now with CoinPayments.net">
</form>
</dd>
</dl>
</div>

Donate satoshis via a static [lnurl Lightning invoice](https://github.com/fiatjaf/awesome-lnurl), proxied by [tip.bigsun.xyz](https://tip.bigsun.xyz/) directly to our node.

![Static Lightning Donation Invoice](/media/2020/09/lnd_donation.png)
{:.text-center}

lnurl1dp68gurn8ghj7arfwqhxy6t8wd6kutnc09az7mrww4exctesxvuxve3kv43nxenzx5exxv3nvcck2cfjvcengvtzvsmkvwtyvsurjwfhxcmrxwpsxu6nqef5vdjnscehxe3xvvfjv5cnzef3vfnrjcf39acxzunpd4esmxwqg6

<!-- 
<div>
<dl>
<dt><b> Coingate: </b></dt>
<dd>
<a href="https://coingate.com/pay/lightning" rel="noopener noreferrer nofollow" target="_blank"><img alt="CoinGate Payment Button" src="https://static.coingate.com/images/buttons/4.png" />
</a>
</dd>
</dl>
</div>
-->
