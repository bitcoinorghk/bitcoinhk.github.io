# README

In order to customize the bootswatch 4 themes (flatly and darkly) you will need to install grunt, see "Bootswatch Customization" instructions below. 

>> The current theme deployed is a modified version of flatly, in sub folder called blue_checkout.

NOTE: Bootstrap.build is not recommended for our btcpay setup because we have modifications in _bootwatch.scss and these changes need to be compiled in to the final bootstrap.css file in order to be used. Since we are not integrating bootstrap 4 to Jekyll but just hosting the css files for btcpay on bitcoin.org.hk, we just build and test elsewhere. If, in the future we want to use Bootstrap 4 with Jekyll, instructions can be found on bootswatch.com

## Bootswatch Customization

To modify a theme or create your own, follow the steps below in your terminal.
You'll need to have Git and Node installed.

Download the repository: git clone https://github.com/thomaspark/bootswatch.git

>> Copy from the bitcoin.org.hk repo the styles/btcpay/flatly/blue_checkout/ files into the downloaded git directory, overwrite (bootswatch/dist/flatly/*) to view existing style mods
>> finish installing grunt (see below), run grunt server, then
>> Make modifications and then update flatly directory on the bitcoin.org.hk repository accordingly. 

Unfortunately I have not found a way to directly deploy grunt to netlify cdn, so we have to configure the theme, test, and then deploy via the bitcoin.org.hk 

## Installing and running Grunt

Install dependencies: npm install

Make sure that you have grunt available in the command line. You can install grunt-cli as described on the Grunt Getting Started page.

In /dist, modify _variables.scss and _bootswatch.scss in one of the theme directories, or duplicate a theme directory to create a new one.

Type grunt swatch:[theme] to build the CSS for a theme, e.g., grunt swatch:flatly for Flatly. Or type grunt swatch to build them all at once.

You can run grunt to start a server, watch for any changes to the SASS files, and automatically build a theme and reload it on change. Run grunt server for just the server, and grunt watch for just the watcher.

See instructions here: https://bootswatch.com/help/