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

<a href="https://coingate.com/pay/lightning" rel="noopener noreferrer nofollow" target="_blank"><img alt="CoinGate Payment Button" src="https://static.coingate.com/images/buttons/4.png" /></a>
{:.text-center}

<form method="POST" action="https://btcpay.bitcoin.org.hk/api/v1/invoices">
    <input type="hidden" name="storeId" value="5fv2Vt5WEuLYBzkhFiaDN4r6xy6JdNqTbi3m1mG4ngFa" />
    <input type="hidden" name="price" value="10" />
    <input type="hidden" name="currency" value="USD" />
    <input type="hidden" name="browserRedirect" value="https://www.bitcoin.org.hk/lightning/" />
    <input type="hidden" name="notifyEmail" value="btcpay@bitcoin.org.hk" />
    <input type="image" src="https://btcpay.bitcoin.org.hk/img/paybutton/pay.png" name="submit" style="width:209px" alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor">
</form>
{:.text-center}


<form method="post" name="kform" data-buy action="https://btcpay.bitcoin.org.hk/apps/C7rejWEZzKnnk8ddfiByP48i3jq/pos">
<div class="input-group">
<div class="input-group-append">
<input class="form-control" type="number" min="0" step="0.01" name="amount" placeholder="0.00 HKD">
<input type="hidden" name="notifyEmail" value="btcpay@bitcoin.org.hk" />

<p><input type="button" class="fbutton" 
       name="7" value="7" id="7" 
       onClick="document.kform.amount.value+='7'"/>
<input type="button" class="fbutton" 
       name="8" value="8" id="8" 
       onClick="document.kform.amount.value+='8'"/>
<input type="button" class="fbutton" 
       name="9" value="9" id="9" 
       onClick="document.kform.amount.value+='9'"/></p>

<p><input type="button" class="fbutton" 
       name="4" value="4" id="4" 
       onClick="document.kform.amount.value+='4'"/>
<input type="button" class="fbutton" 
       name="5" value="5" id="5" 
       onClick="document.kform.amount.value+='5'"/>
<input type="button" class="fbutton" 
       name="6" value="6" id="6" 
       onClick="document.kform.amount.value+='6'"/></p>

<p><input type="button" class="fbutton" 
       name="1" value="1" id="1" 
       onClick="document.kform.amount.value+='1'"/>
<input type="button" class="fbutton" 
       name="2" value="2" id="2" 
       onClick="document.kform.amount.value+='2'"/>
<input type="button" class="fbutton" 
       name="3" value="3" id="3" 
       onClick="document.kform.amount.value+='3'"/></p>

<p><input type="button" class="fbutton" 
       name="0" value="0" id="0" 
       onClick="document.kform.amount.value+='0'"/>
<input type="button" class="fbutton" 
       name="dot" value="." id="dot" 
       onClick="document.kform.amount.value+='.'"/>
<input type="button" class="fbutton" 
       name="C" value="C" id="C" 
       onClick="document.kform.amount.value=''"/></p>

<button class="btn btn-primary" type="submit">Pay</button>
</div>
</div>
</form>
{:.text-center}
