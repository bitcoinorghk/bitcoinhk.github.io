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
    <input class="form-sub" type="number" min="0" step="0.01" name="price" placeholder="100.00 HKD" value="100.00" id="numpad-1"/>
    <input type="hidden" name="storeId" value="5fv2Vt5WEuLYBzkhFiaDN4r6xy6JdNqTbi3m1mG4ngFa" />
    <input type="hidden" name="currency" value="HKD" />
    <input type="hidden" name="browserRedirect" value="https://www.bitcoin.org.hk/lightning/" />
    <input type="hidden" name="notifyEmail" value="btcpay@bitcoin.org.hk" />
    <input type="image" src="https://btcpay.bitcoin.org.hk/img/paybutton/pay.png" name="submit" style="width:200px"  alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor">
</form>
</dd>
</dl>
</div>

Donate satoshis via a static lnurl Lightning invoice, directly to our node. Or make use of our Lightning address [donate@bitcoin.org.hk](lightning:LNURL1DP68GURN8GHJ7MRW9EKXZ6TNV4JJUMMJVUHKCMN4WFK8QTMFXGURV6TE08QRGY)

[![Static Lightning Donation Invoice](/media/2022/02/lnd_donation.png)](lightning:LNURL1DP68GURN8GHJ7MRW9EKXZ6TNV4JJUMMJVUHKCMN4WFK8QTMFXGURV6TE08QRGY)
{:.text-center}

[LNURL1DP68GURN8GHJ7MRW9EKXZ6TNV4JJUMMJVUHKCMN4WFK8QTMFXGURV6TE08QRGY](lightning:LNURL1DP68GURN8GHJ7MRW9EKXZ6TNV4JJUMMJVUHKCMN4WFK8QTMFXGURV6TE08QRGY)

To open up a channel with your node, you can find it with the key _038ff6ec3fb52c23f1ea2f341bd7f9dd899766380750e4ce8c76bf12e11e1bf9a1_ at _@172.81.181.220:9735_ or _@6p5bw3wvy22tneyhsc4dmnyxr5yq4qt5erhnobzeb2megakj7f4twyad.onion:9735_

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
