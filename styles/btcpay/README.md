# README

In order to customize the bootswatch 4 themes (flatly and darkly) you will need to install grunt, see "Bootswatch Customization" instructions below. 

>> The current theme deployed is a modified version of flatly, in sub folder called blue_checkout. 

NOTE: Bootstrap.build is not recommended for our btcpay setup because we have modifications in _bootwatch.scss and these changes need to be compiled in to the final bootstrap.css file in order to be used. 

Since we are not integrating bootstrap 4 to Jekyll but just hosting the css files for btcpay on bitcoin.org.hk, we just build and test elsewhere. If, in the future we want to use Bootstrap 4 with Jekyll, instructions can be found on bootswatch.com

## Bootswatch Customization

To modify a theme or create your own, follow the steps below in your terminal.
You'll need to have Git and Node installed.

Download the repository: git clone https://github.com/thomaspark/bootswatch.git

>> Copy from the bitcoin.org.hk repo the styles/btcpay/flatly/blue_checkout/ files into the downloaded git directory, overwrite (bootswatch/dist/flatly/*) to view existing style mods
>> finish installing grunt, run grunt server, then
>> Make modifications and then update flatly directory on the bitcoin.org.hk repository accordingly.

## Installing and running Grunt

See instructions here: https://bootswatch.com/help/