---
layout: blog
title: Start Accepting Bitcoin Now
date: "2020-06-07 20:00:00"
permalink: /accept-bitcoin/
author: liongrass
published: true
background: "url(/media/2015/06/bitcoin.jpg) #FF0000"
redirect_from:
  - /2015-accept-bitcoin-now/
  - /accept-bitcoin-now/

---

## Start Accepting Bitcoin Now

Congratulations! You've made the decision to accept Bitcoin payments. This is a great idea for your business:

- Flexibility: You control the user experience of your consumers and have a large variety of processors to choose from. You can even run or build your own!
- Low fees: Fees can be as low as 0% if you host your own processor. Services that do this for you or convert your Bitcoin to HKD or USD typically charge between 0.5% and 2%.
- Irreversible: Bitcoin transactions cannot be reversed by the customer, meaning there are zero fraud or chargeback risks. All refunds will have to be initiated by you.
- Community: Bitcoin users often seek out places and businesses that accept Bitcoin as payments. If you are a Hong Kong business accepting Bitcoin, write us, and we might promote you for free.

### Option A: Coingate

[Coingate](https://coingate.com/ref/accept-btc) is a payment processor based in Estonia. There are [plugins](https://coingate.com/plugins) available for WooCommerce, Magento, or you can use [payment buttons](https://coingate.com/buttons). If you're tech savvy you can also make use of [Coingate's API](https://developer.coingate.com/) to fully control the experience.

If you have a physical location, you can make use of Coingate's POS system. In addition to Bitcoin, Coingate lets you accept [dozens of cryptocurrencies(https://coingate.com/supported-currencies) including BCH, ETH and LTC. Coingate also lets you accept payments using Lightning.

[Fees](https://coingate.com/pricing) are set flat at 1%.

![Coingate](/media/2020/06/coingate.jpeg)
{:.text-center}

### Option B: Alchemy Pay

[Alchemy Pay](https://www.alchemytech.io/alchemy_english.html) is a Singapore-based Fintech company that can help you not only accept Bitcoin and Lightning, but also Alipay and WeChat Pay.

They are currently handling the cryptocurrency payments at over 20 Pricerite stores in Hong Kong. Alchemy Pay will convert your income to HKD and settle it into your bank account.

![Alchemy](/media/2020/06/alchemy.jpeg)
{:.text-center}

### Option C: BTCPay

[BTCPay](https://btcpayserver.org/) is a software product rather than a service. As such, you will need to run the software yourself on your own server (for example for ~US$9 per month on [Lunanode](https://medium.com/@BtcpayServer/launch-btcpay-server-via-web-interface-and-deploy-full-bitcoin-node-lnd-in-less-than-a-minute-dc8bc6f06a3)). Unlike with payment processers as-a-service, you will not need to sign up or provide identifying information. BTCPay charges no licensing fees, and all payments are handled by yourself without a fee. This is especially great if you have no intention of selling your Bitcoin, but you can also sell them through [an exchange or broker](/buy-bitcoin-in-hong-kong/).

You can use BTCPay as an online or offline tool, as well as use the API to integrate the system into your online shop.

An example payment button. Click on it!

<form method="POST" action="https://btcpay.bitcoin.org.hk/api/v1/invoices">
    <input type="hidden" name="storeId" value="5fv2Vt5WEuLYBzkhFiaDN4r6xy6JdNqTbi3m1mG4ngFa" />
    <input type="hidden" name="price" value="10" />
    <input type="hidden" name="currency" value="USD" />
    <input type="hidden" name="browserRedirect" value="https://www.bitcoin.org.hk/lightning/" />
    <input type="hidden" name="notifyEmail" value="btcpay@bitcoin.org.hk" />
    <input type="image" src="https://btcpay.bitcoin.org.hk/img/paybutton/pay.png" name="submit" style="width:209px" alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor">
</form>
{:.text-center}

![BTCPay](/media/2020/06/btcpay.jpeg)
{:.text-center}

### Other payment processors

- [Coinbase commerce](https://commerce.coinbase.com/)
- [Bitpay](https://bitpay.com/)
- [Coinpayments](https://www.coinpayments.net/index.php)

#### Contact us

Are you interested in accepting Bitcoin payments? Have you considered it but are encountering problems? Have you integrated cryptocurrencies into your business but nobody is using it? Contact us at [info@bitcoin.org.hk](mailto:info@bitcoin.org.hk) and we'll reply as quick as we can!
