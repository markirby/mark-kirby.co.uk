---
title: Tools used to create a complex JavaScript app – notes for an Async mini talk
author: Mark Kirby
layout: post
date: 2011-11-10
url: /2011/tools-used-to-create-a-complex-javascript-app-notes-for-an-async-mini-talk/
dsq_thread_id:
  - 1101834527

---
I've spent the last 6 months leading the team who worked with Tesco on the development of the [Tesco Food app][1] in the Chrome Web Store. If there is time I hope to give a quick 5 min talk at Brighton's Async group for the [International Show and Tell][2] this week, these are the notes for that talk.

## [Tesco Food App, Chrome Web Store][1]

  * Large shopping app
  * All local
  * JS, HTML, CSS

## [Backbone][3]

  * Models, collections, structure, underscore wrapped
  * Combined with an MVC approach
  * Didn't take advantage of most, could be done differently

## [jQuery templates][4] for templating

  * HTML, so easy to follow
  * Limited documentation and hard to debug
  * No longer supported
  * Used AJAX to load multiple templates in after launching the app, would not recommend - can be slow and needlessly complex

## [Selenium][5] for automated browser testing

  * reduce the amount of mundane user testing
  * steep learning curve
  * code needs to be as structured as main (almost)
  * don't change versions during a project

## [jQuery Mockjax][6] for mocking data

  * jQuery plugin, intercepting jQuery AJAX calls
  * flexible - allows for most scenarios with a little work
  * minimal contact with app - load it once and it takes over

## Build script with [Rake][7]

  * Concatenation with [sprockets][8] require
  * [jsLint4java][9] for syntax checking - use strict to get team code consistency
  * [YUI Compressor][10] for minification

## Wish I'd used [Google closure compiler][11]

  * Uses docs to check type, static etc
  * Removes code you don't use
  * Can make mistakes/cause issues under documented circumstances

 [1]: https://chrome.google.com/webstore/detail/ffibhmnkceoelgabpnpaaojflglampjb
 [2]: http://asyncjs.com/international2011/
 [3]: http://documentcloud.github.com/backbone/
 [4]: http://api.jquery.com/category/plugins/templates/
 [5]: http://seleniumhq.org/
 [6]: http://enterprisejquery.com/2010/07/mock-your-ajax-requests-with-mockjax-for-rapid-development/
 [7]: http://rake.rubyforge.org/
 [8]: https://github.com/sstephenson/sprockets
 [9]: http://code.google.com/p/jslint4java/
 [10]: http://developer.yahoo.com/yui/compressor/
 [11]: http://code.google.com/closure/compiler/