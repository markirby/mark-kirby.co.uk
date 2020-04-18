Get a skill up and running very quickly.

* Open the skills kit: https://developer.amazon.com/edw/home.html#/skills
* Add a new skill: https://developer.amazon.com/edw/home.html#/skill/create/
* Fill out the form
* Create the interaction model

To run locally:

* Install bespoken if you haven't already
* Go to the src directory of the skill you want to run
* bst proxy lambda index.js --verbose
* Open configuration in the Alexa Skills kit
* Select HTTPS, Europe and enter the bespoken proxy
* In SSL certificate, check the option "My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority"
* Set the application id in your skill, this can be found in the skill developer console

    var alexa = Alexa.handler(event, context);
    alexa.appId = "app id here";

To debug locally:

* Change to the app folder
* npm install bespoken-tools
* Open Webstorm
* Open project, navigating to your skill folder
* Code -> run
* Add a new configuration
* Set JavaScript file to 'node_modules/bespoken-tools/bin/bst-proxy.js'
* Set 'Application Parameters' to 'lambda <LambdaFile.js>'
* Apply
* Close
* Click the bug to run the skill locally

To run in cloud:

* Create Lambda -  https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/create/select-blueprint
* Select blank
* Configure trigger, pick Alexa Skills kit
* Add 'Name' and 'Description'
* Code entry type - Zip
* Make sure you've added the appId
* Cd into the folder
* zip -r ./skill.zip *
* Upload
* Pick lambda - index.handler, if index.js is the opening file
* Create custom role
* Select test
* Pick 'Alex Start Session'
* Find amzn1.ask.account, and add the appId
* Save and test
* Take the arn
* Set it in the skill
