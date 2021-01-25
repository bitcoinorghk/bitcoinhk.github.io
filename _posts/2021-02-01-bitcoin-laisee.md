---
layout: blog
title: Bitcoin Laisee
date: "2021-01-17 08:00:00"
permalink: /laisee/
author: liongrass
published: true
background: "url(/media/2021/01/background.png) #FF0000"

---

## Bitcoin Laisee

In Hong Kong it is customary to gift money for special occasions, especially Lunar New Year, weddings and births. The cash is typically enclosed in a red envelope (also called red pocket, 紅包, 利是 or 利事). The envelope is gifted, the recipient takes out the cash from the envelope. The Bitcoin Laisee achieves the same experience using LNURL-withdrawal QR codes that can be gifted electronically of physically.

Happy year of the bull!


### Redeeming Your Bitcoin Laisee

To redeem your Laisee, you need a Lightning wallet that supports LNURL-withdrawal, such as [BLW](https://lightning-wallet.com/), [Bluewallet](https://bluewallet.io/), [Wallet of Satoshi](https://www.walletofsatoshi.com/) or [Phoenix](https://phoenix.acinq.co/). You can find [a complete list here.](https://github.com/fiatjaf/awesome-lnurl/#wallets) 

Simply scan the QR code of your Bitcoin Laisee. You are shown the amount you are able to withdraw. Confirm, and the funds should appear in your wallet.

_Have you received a Bitcoin Laisee and have trouble redeeming it? [Join our Bitcoin helpdesk on Telegram](/2020-new-chats/) or write us at [helpdesk@bitcoin.org.hk](mailto:helpdesk@bitcoin.org.hk)_

### Making Your Own Bitcoin Laisee

If you would like to make your own Bitcoin Laisee, you are welcome to do so and we are happy to share how we did it.

#### Use LNbits

We are using LNbits to create our Bitcoin Laisee. You can make use of [our LNbits installation](https://bits.bitcoin.org.hk/), [or use the offical service](https://lnbits.com/). You can also [install LNbits yourself](https://lnbits.org/).

Simply navigate to the front page, give your wallet a name and 'add a new wallet.'

Under 'Manage extensions' you can enable LNURLw.

In LNbits you can find your wallet in the top left corner. You will need to fund it using a Lightning wallet. Simply 'Create Invoice' and set an amount. Pay the invoice with your Lightning wallet and the funds will appear in your LNbits wallet. You should deposit enough Satoshi into the wallet for your Bitcoin Laisee, e.g. the amount of Laisee you want to create multiplied with the amount of Satoshi per Laisee. You can add more funds to the wallet later anytime.

#### Generate Laisee QR codes

You can create Laisee manually in LNbits by navigating to the LNURLw extension, then selecting 'Quick Voucher.' Choose your wallet, select the withdrawal amount and set the 'number of vouchers' to 1. Please note that even when choosing 'number of vouchers' to be larger than 1, this will still only create a single voucher, yet will allow the recipient to withdraw more than once from the QR code.

We have created a simple Python script for you to create more than one Bitcoin Laisee at a time. [You can find it here](https://github.com/liongrass/lntools).

The script will return a list of urls as well as lightning invoices, beginning with LN. You can navigate to the urls manually and copy the QR code, or generate them manually from the lightning invoices. We recommend you convert the invoices to lower case for maximum compatibility with lightning wallets.

#### Print Laisee QR codes

Our Bitcoin Laisee are printed on sticker labels found in a stationary shop. They are stuck on an explanatory note printed similarly to business cards on 250g matt laminated paper. You can find the template here.

#### Get Red Pockets

You can find red pockets in any well sorted stationary shop. You can alternatively buy Bitcoin-themed Laisee [at Too Free To Fail](https://toofreetofail.com/collections/too-free-to-fail/products/bitcoin-red-pocket-laisee-with-bull-design-10pc) or pick some up from [Genesis Block](https://twitter.com/genesisblockhk/status/1350011878420971521).

_Do you have trouble making your own Bitcoin Laisee? [Join our Bitcoin helpdesk on Telegram](/2020-new-chats/) or write us at [helpdesk@bitcoin.org.hk](mailto:helpdesk@bitcoin.org.hk)_

### Acknowledgements

Thank you to the countless teams working on the Lightning Network, specifically LND, the team at LNbits as well as Bitcarrot.

#### More Laisee

Want us to make more Laisee? You can use the lnurl-pay link below to re-fill our wallet!

![Laisee Donation URL](/media/2021/01/lnurl.png)
{:.text-center}

lnurl1dp68gurn8ghj7cnfw3ejucnfw33k76tw9ehhyeewdp4j7mrww4excup0v9cxjtmkxyhkcmn4wfkz7dqlfeksr
{:.text-center}
