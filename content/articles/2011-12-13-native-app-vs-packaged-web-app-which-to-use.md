---
title: Native vs Web with PhoneGap – which to use
author: Mark Kirby
layout: post
date: 2011-12-13
url: /2011/native-app-vs-packaged-web-app-which-to-use/
dsq_thread_id:
  - 1086898388

---
*Update Dec 2014 - This article is historical, and requires an update to take into account the vastly improved performance of devices since 2011. Cordova is certainly valid solution from a performance perspective, assuming optimisation best practices are followed (another post to come). My points about not emulating native components still stand, mostly for ease of cross platform use (to avoid having one platforms typical UI in another). MK*

I've been talking to people about native vs web for years, and don't fall down on one single answer. I thought it was time to get these thoughts down on paper. I've framed the discussion around a series of questions you might ask about an app you are developing.

## Are you designing an app which could be composed of native interface elements?

If you are designing an app for a phone, I would strongly consider **using** **native UI components where possible**.

  * Native UI components provide a unified experience
  * The user should already know how to use your app as it features recognisable interface elements
  * Time spent redesigning existing components is time that could be spent better on the overall experience and areas that really are specific to your domain

[METAR reader for iPhone][1] was built as a packaged web app, and does not use standard UI elements.

[<img class="alignnone size-medium wp-image-955" title="mzl.epwurhsn" src="http://mark-kirby.co.uk/wp-content/uploads/2011/12/mzl.epwurhsn-200x300.jpg" alt="" width="200" height="300" />][2]

It looks very nice, it could be for Android as much as iPhone, but could also easily be created using well styled native UI elements which would make it easier for users to know what to do and give the app a more familiar feel. What are those bottom 3 tabs for?

Some apps don't really need to use native interface elements...

## Apps with neutral designs

If you are designing a tablet app you may find yourself designing something which is neutral, more like a website, which doesn't use native UI components. On tablet devices apps tend to follow less of a standard UI look, so there is less consistency anyway.

The [FT web app][3] looks the same on all devices, and doesn't lend itself to using native UI elements.

<img class="alignnone size-medium wp-image-961" title="FT-app" src="http://mark-kirby.co.uk/wp-content/uploads/2011/12/FT-app-300x205.jpg" alt="" width="300" height="205" />

This app can look like this on any device, it uses no common interface elements.

## Recreating native interface elements with web technologies is a bad idea

Recreating standard UI components in web can lead to the '**uncanny valley**' effect, where the app looks native but doesn't feel quite right, as [this discussion][4] describes.

## Native interface elements differ between platforms

Each platform has a different standard look and feel.

Facebook on iPhone:

<img class="alignnone size-medium wp-image-962" title="facebook-for-iphone-13" src="http://mark-kirby.co.uk/wp-content/uploads/2011/12/facebook-for-iphone-13-200x300.jpg" alt="" width="200" height="300" />

Facebook on Android:

<img class="alignnone size-medium wp-image-963" title="Foreman_11657656_1024_38814_424516450908_74769995908_4660025_5606091_n_257x380" src="http://mark-kirby.co.uk/wp-content/uploads/2011/12/Foreman_11657656_1024_38814_424516450908_74769995908_4660025_5606091_n_257x380-202x300.jpg" alt="" width="202" height="300" />

Facebook on Windows Phone:

<img class="alignnone size-medium wp-image-964" title="Facebook-Windows-Phone-7" src="http://mark-kirby.co.uk/wp-content/uploads/2011/12/Facebook-Windows-Phone-7-189x300.jpg" alt="" width="189" height="300" />

Each version of the app is consistent with the platform running it, and facebook lends itself to this. You certainly couldn't put the iPhone design onto an Android device without it looking fake.

If you want to develop an app with a consistent UI on the platform running it (and in most cases you should), you need to **redesign the app for every platform**.

There will therefore be **additional CSS work to do on every platform** you want the app to run on, but with web you can share the core code. Even if you don't redesign the app for other devices, browser differences mean you may have inconsistencies which will need to be tested for and worked out.

## Neutral designs work well as packaged web apps

If your app doesn't contain any native UI elements (like the FT app) it can easily be produced with web technologies without feeling fake.

The user has no expectations related to the UI elements you are using, so performance issues are reduced.

It will be easier to create custom UI elements with web technologies than using native tools to do so, so the project can be delivered quicker.

No redesign will be needed when putting the app on other devices, so minimal effort will be needed to target multiple platforms.

## To conclude...

Don't recreate native experiences with packaged web apps.

Use packaged web apps to create platform neutral experiences that can run across many platforms, none of which resemble the native experience on any single platform.

 [1]: http://itunes.apple.com/us/app/metar-reader/id465765574?mt=8
 [2]: http://mark-kirby.co.uk/wp-content/uploads/2011/12/mzl.epwurhsn.jpeg
 [3]: http://apps.ft.com/ftwebapp/
 [4]: http://hackerne.ws/item?id=2982224