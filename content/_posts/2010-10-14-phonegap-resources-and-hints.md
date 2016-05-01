---
title: PhoneGap resources and hints
author: Mark Kirby
layout: post
date: 2010-10-14
url: /2010/phonegap-resources-and-hints/
dsq_thread_id:
  - 1086898928
categories:
  - post
---
Here are the key resources and some main points from the PhoneGap talk I gave at Async today.

## What is PhoneGap?

  * PhoneGap lets you *easily* package apps for a range of devices and distribute them on app stores using HTML, CSS and JS
  * You can still publish apps using HTML, CSS and JS for any of the platforms without PhoneGap, it just saves you time
  * PhoneGap provides you with JavaScript APIs which talk to device APIs including geolocation, contacts, notifications, accelerometer and more

## Device APIs

  * Some APIs are documented here <http://docs.phonegap.com/> and in the example at <http://github.com/purplecabbage/Jestitute>, but for complete API usage you will need to dig into the code for your chosen platform/s (for iPhone this is at <a>phonegap/phonegap-iphone/PhoneGapLib/javascripts/core)</a>
  * An individual device API might not be available across all platforms, for a full list of availability check <http://wiki.phonegap.com/Roadmap>
  * Even if a device API is cross platform there are many quirks and it will likely behave differently between platforms

## The install process

  * [Download PhoneGap from here][1], or using [github][2]
  * Installation is different for every platform, follow the instructions here - <http://www.phonegap.com/start> and check the readme notes within PhoneGap folders
  * Installation is neither easy nor straightforward, but once achieved you will find it simple to create new apps and test them using emulators, especially for the iOs apps. An alternative on its way is the [PhoneGap Build][3] solution where you upload apps and get back packaged installers for the various devices. I predict this will cause problems in the long term as it will delay time to publish, slow down testing and make it harder to use the emulators.

## Hints and tips

  * Minimise use of JavaScript especially frameworks, even jQuery can slow down the loading times. Consider using <http://xuijs.com/> instead
  * Don't make too much happen at onDeviceReady
  * Optimise all your code if you suffer any issues, check out <http://jsperf.com>
  * Apps should look native if possible, and differ between platforms unless you have the skills to create a stunning custom UI
  * Ensure the CSS differs between devices, or you use flexible layouts
  * Test on actual devices, emulators aren't reliable, and test on every device you want to launch on, or at least an older model and a newer

## When to use PhoneGap

  * When device APIs aren't key
  * To get an idea quickly to market
  * When creating a simple app such as interfacing with a web API
  * To save time and money when performance might not be key

## Alternatives

  * Titanium Appcelerator Mobile - <http://www.appcelerator.com/products/titanium-mobile-application-development/>
  * Rhomobile Rhodes - <http://rhomobile.com/>

## Related products

  * iScroll <http://cubiq.org/iscroll> and Glovebox - <http://risingj.com/GloveBoxDemo/> solve the iPhone scrolling problem
  * Light mobile frameworks <http://xuijs.com/>, <a href="http://github.com/madrobby/zepto" target="_blank">http://github.com/madrobby/zepto</a> and <a href="http://jquerymobile.com/" target="_blank">http://jquerymobile.com</a>
  * Lawnchair <http://blog.westcoastlogic.com/lawnchair/> solves differences in local data storage
  * More at <http://www.phonegap.com/tools/>

 [1]: http://www.phonegap.com/download/
 [2]: http://github.com/phonegap/phonegap
 [3]: http://build.phonegap.com