---
title: Mobile app development trends – what languages should you be learning?
author: Mark Kirby
layout: post
date: 2010-07-29
url: /2010/mobile-app-development-trends/
dsq_thread_id:
  - 1086898174
categories:
  - post
---
Mobile app development is a minefield, there&#8217;s so many different platforms, and different things to consider. I decided now was a good time to run through the market today, as of July 2010 and try to identify what you as a developer should be learning, or what business owners should be looking at. The quick answer by the way &#8211; it depends.

<img class="alignnone size-full wp-image-684" title="Lots of phones" src="http://mark-kirby.co.uk/wp-content/uploads/2010/07/3291782531_d7c35704b7.jpg" alt="Lots of phones" width="500" height="333" />

<span><a href="http://creativecommons.org/licenses/by-nc-nd/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /><img title="Noncommercial" src="http://l.yimg.com/g/images/cc_icon_noncomm_small.gif" border="0" alt="Noncommercial" /><img title="No Derivative Works" src="http://l.yimg.com/g/images/cc_icon_noderivs_small.gif" border="0" alt="No Derivative Works" /></a></span> *[Some rights reserved][1] by [chich.shin][2]*

## What&#8217;s out there?

### Mobile platforms, languages and SDK&#8217;s

There are many mobile brands, multiple possible platforms and SDK&#8217;s depending on the devices. It&#8217;s a crowded field, but I thought I&#8217;d at least try to provide a brief summary of what&#8217;s involved with each platform, devices they run on and places to start looking for more information.

### iOs

  * Runs on iPhone, iPad
  * Start at the [iPhone Dev Centre][3]
  * Requires you run Mac OS X, $99 for the SDK, you must use the XCode IDE
  * Write native apps using native Objective-C, or using HTML + JavaScript and a porting tool such as [PhoneGap][4] or [Titanium][5]
  * Sell apps only through the iTunes App Store

<img class="alignnone size-full wp-image-686" title="iOs" src="http://mark-kirby.co.uk/wp-content/uploads/2010/07/4486938191_55507a5a34.jpg" alt="iOs" width="500" height="333" />

<span><a href="http://creativecommons.org/licenses/by/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /></a></span> *[Some rights reserved][6] by [Yutaka Tsutano][7]*

### Android

  * Runs on a range of Android enabled devices including handsets from HTC, Samsung, LG and Motorola as well as a growing range of Tablets
  * Start at [Android.com][8]
  * Open source and can be built on Windows, Mac OS X and Linux, you can choose your IDE, plugins provided for Eclipse
  * Write native apps in Java, or using HTML + JavaScript and a porting tool such as [PhoneGap][4], [Sony Ericsson Web SDK][9] or [Titanium][5]
  * Sell apps in the official [Android Market][10], or unofficial stores such as [Handango][11], [GetJar][12], [Handmark][13] and [SlideME][14]

<img class="alignnone size-full wp-image-687" title="Giant Google Android statue with puppy and cupcake" src="http://mark-kirby.co.uk/wp-content/uploads/2010/07/3538820892_0ba042956a.jpg" alt="Giant Google Android statue with puppy and cupcake" width="500" height="333" />

<span><a href="http://creativecommons.org/licenses/by/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /></a></span> *[Some rights reserved][6] by [ToastyKen][15]*

### BlackBerry

  * Runs on all BlackBerry devices
  * Start at the [BlackBerry developer zone][16]
  * Write native apps in Java 5, or write Blackberry Widgets for newer devices using HTML + JavaScript
  * Use Windows, Mac OS X, Linux with an IDE of your choice including plugins for Microsoft Visual Studio and Eclipse. You can also use [PhoneGap][4] to publish Web Widgets.
  * Sell apps in the official store [BlackBerry App World][17] or unofficial stores such as [Handango][11], [GetJar][12] and [Handmark][13]

<img class="alignnone size-full wp-image-689" title="BlackBerry" src="http://mark-kirby.co.uk/wp-content/uploads/2010/07/4626149925_608a7d438c.jpg" alt="BlackBerry" width="500" height="375" />

<span><a href="http://creativecommons.org/licenses/by-nc-nd/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /><img title="Noncommercial" src="http://l.yimg.com/g/images/cc_icon_noncomm_small.gif" border="0" alt="Noncommercial" /><img title="No Derivative Works" src="http://l.yimg.com/g/images/cc_icon_noderivs_small.gif" border="0" alt="No Derivative Works" /></a></span> *[Some rights reserved][1] by [Official BlackBerry Images][18]*

### Symbian

  * Runs on most Nokia devices and a range of others from manufacturers such as Sony Ericsson and Sharp ([full list here][19])
  * Start at the [Symbian Developer Site][20]
  * Although apps can be written in a range of languages, ([a guide can be found here][21]) the best approach is to choose between [Symbian C++][22] (which supports the widest range of devices), [WRT Widgets][23] (which are written in HTML/CSS/JS but don&#8217;t have much device access) or [Qt][24] (a cross platfrom C++ style language whose apps run on S60 3rd edition + Symbian devices as well as Windows Mobile, Maemo/Meego). You can also use [PhoneGap][4] to publish WRT Widgets alongside output for other platforms.
  * The Nokia Qt SDK runs on Windows and Linux, with a beta for Mac OS X and can also be used for developing Symbian C++ apps. Alternatively both types of app can be developed using the Windows only Carbide.c++ or using custom tools. WRT Widgets can be written using the tools of your choice, or using [Symbian WRT Toolkit][25] which also now includes PhoneGap and runs on Windows, OS X and Linux.
  * Sell Apps in the Nokia run [Ovi Store][26] or unofficial stores such as [Handango][11], [GetJar][12] and [Handmark][13]
  * [Read my full review of the Qt Nokia SDK here][27]

### MeeGo/Maemo

  * Maemo 5 runs on the Nokia N900 and Nokia Tablets, since Feb 2010 it has merged with Moblin to become MeeGo. MeeGo runs on a range on netbooks and will be installed on certain future high-end Nokia devices.
  * Start at the [Maemo page on Forum Nokia][28], from October 2010 the MeeGo project for devices should replace this location.
  * Apps for Maemo are written using the Maemo 5 SDK with allows development in Qt (a cross platfrom C++ style language whose apps also run on Windows Mobile, MeeGo and S60 3rd edition+ Symbian devices). Apps for MeeGo will use the same language albeit with a slightly different (hopefully backwards compatible) SDK.
  * Sell Apps in the Nokia run [Ovi Store][26] or unofficial stores such as [Handango][11], [GetJar][12] and [Handmark][13]
  * [Read my full review of the Qt Nokia SDK here][27]

### Windows Phone 7

  * Windows Phone development is now gearing up for the future and Windows Phone 7, a gorgeous interface for devices being launched in Q3 2010.
  * Start at the [Windows Phone developer portal][29] and the [Getting Started page on MSDN][30]
  * Apps for Windows Phone 7 are written using [Silverlight][31] for most apps or the[ XNA Framework][32] for graphics based games.
  * The free toolset [Windows Phone Developer Tools Beta][33] is required and runs on Windows Vista/Windows 7
  * Sell Apps in the [Windows Marketplace for Mobile][34]
  * [Read my full review of the Windows Phone 7 Developer Tools CTP][35] here

### Others

  * [Java ME][36] is installed on more devices than any other platform, but far from being &#8216;write once run anywhere&#8217; can require different builds for each device. Write in Java, and publish on any of a huge range of application stores.
  * [AIR/Flash Lite][37] is installed on a range of devices and platforms including Symbian and Android. It has limited access to device API&#8217;s and is best used for simple apps. There are multiple versions of Flash Lite with different capabilities, and all run in the rudimentary ActionScript 2 language. AIR can run on Android 2.2+ and runs ActionScript 3. All Flash Lite developers need a licensed copy of Adobe Flash, AIR developers can use the free SDK. Apps can be distributed in a range of app stores.
  * Windows Mobile 6/6.5 has been replaced by Windows Phone 7. Despite there being plenty of devices out there still running the software, and no devices currently running Windows Phone 7, Microsoft seems to be discouraging developers from developing apps for Windows Mobile with all developer portals redirected to Windows Phone 7 info and tutorials. Windows Mobile apps were written in .net and require XP or Vista along with Visual Studio 2008.
  * [BREW][38] is installed on devices by operators, with the majority being in the US and Japan and almost none in Europe. It has a huge install base though, 1400+ devices and 250 million handsets. Apps can be written using C, C++ and on some devices Flash Lite and Java. BREW apps are said to be costly and take a long time to produce due to expensive and slow certification processes. Apps can be purchased on the device using operators stores.
  * [BREWMP][39] is a new OS aimed at low end devices and installed on HTC SMART, Samsung Reality and AT+T&#8217;s Quick Messaging Devices. Apps are written using Flash Lite, Trig, Lua or C. Application stores will be launched to sell apps, with the [first launching in China][40].
  * [Samsung Bada][41] is Samsungs new OS for Smartphones, and currently features on Samsung Wave and Omnia devices. Native apps are written in C++ with the option of using Web Technologies and Flash. Apps can be purchased through the [Samsung Apps][42] store which currently has almost 1500 free and paid apps.
  * Palm and HP are still encouraging developers to create apps for webOS, the innovative but sadly ignored OS running on the Palm Pre. There&#8217;s plenty of support including a web only IDE and all apps are written using HTML/CSS/JS. Get started at the [Palm Developer Center][43]. Apps are purchased on the device.

## What do other developers say?

These major reports have been released over the past 3 months, each the result of research conducted on various developers working in the mobile sector. Both are worth reading in full if you have a spare hour.

  * [The Appcelerator Mobile Developer Survey June 2010][44] is a survey of 2,733 Appcelerator developers who were asked which platforms they liked working with and which they would look to work with in the future. To be taken with a pinch of salt perhaps, given that Appcelerator developers are using a platform which makes it easy to publish to multiple platforms, perhaps giving them a bias and lack of experience in working with individual platforms.
  * [The Vision Mobile Mobile Developer Economics 2010 Report][45] is a far more in depth study than Appcelerators, with developers chosen using a wider range of criteria, and asked a wider range of questions. Only 400 developers were questioned for this report however.

### Preferred platforms &#8211; Android and iOs come out top

Apple&#8217;s platform came out high in almost all areas of the Appcelerator survey. Developers feel Apple&#8217;s platform has the best near-term outlook (78% for Apple vs 16% for Android with Blackberry and other platforms not getting a look in), and although 54% said they felt Android had the best long-term outlook, 40% still plumped for Apple.

Appcelerator asked developers what they would be interested in developing for, iPhone and iPad came out top, with Androids mobile and tablet offerings close behind. Blackberry and Windows 7 raised less interest, with very few developers interested in developing  for Symbian, Palm Pre or Meego.

Vision mobile asked what developers actually develop using and found Android came out on top (60%) with iPhone in second place closely followed by Java ME and Symbian. The most important reason for choosing a platform was market penetration and monetisation.

### Market Penetration &#8211; Java ME and Symbian have the largest user base

Vision Mobile found that whilst developers prefer Android and iOS the number of people with Java ME and Symbian devices is far larger. Flash Lite, Java ME and Symbian all have a small number of apps available for large numbers of devices, in Q2 2010 Symbian had just 6000 apps for sale with a market share of 390 million units. iOS and to a lesser extent Android have much large numbers of apps for a smaller market share, in that same quarter Apple had 180,000 apps for 60 million units. Windows Phone and Blackberry have both low numbers of apps for low numbers of users.

One area of the market being under-served was localised apps, Vision Mobile found localised Spanish and French Apps counted for less than 3000 total apps in the crowded Android store.

### Monetisation &#8211; App stores lead the way

Less than 5% of developers Vision Mobile interviewed used the once ubiquitous operator portals or preinstallation through operator to distribute their apps, the majority use app stores, with Apple&#8217;s and Androids the most popular. App stores offer a faster route to market, and faster time to payment.

The leading app stores are reputedly hard to make money from. Both are very crowded. Android has only 13 of its 46 countries able to accept payments for apps, users can &#8216;return&#8217; apps within 24 hours without reason if they don&#8217;t like them. A standalone developer in Apple&#8217;s App Store can hope to sell an average 1000 &#8211; 2000 apps at $1.99. (Vision Mobile).

* *

### Ease of development &#8211; Android beats all others

Vision Mobile assessed Android, Symbian, Java ME and iOs platforms for ease of development. Based on their test data they concluded Android took the least time to develop and debug apps with, followed by Symbian, Java ME and with iPhone coming in last. I personally wasn&#8217;t totally convinced by their testing methodology, so I would suggest you read this section of the report and study the data to draw your own conclusions (Appendix 2). They also only focused on 4 platforms &#8211; 2 of which (Symbian and Java ME) are clearly on the wane.

## My conclusions

### Android,  iOs and Web are the best skills to sell to others

As a freelancer or employee looking to sell your skills to others, Android, iOs and Web are safe bets to keep you in pocket.

Android and iOs are popular platforms and I predict there will continue to be a demand for developers of these platforms. As the field gets inevitably more crowded you can differentiate yourself by being reliable and producing good quality code (not as common as you might think). Releasing your own apps to impress potential clients (but not to make money themselves &#8211; see below) would be a good idea at this point.

Gaining experience in a range of Widget platforms will allow you to transfer web skills between platforms and enable you to offer a range of platforms to an employer. With web you can target Symbian, Blackberry, iOs, Android and even Palm. Familiarise yourself with each platforms own widget set up and install process as well as the PhoneGap tool.

### To make a quick buck or gain fame as a single developer focus on untapped markets

I feel strongly that lone developers wanting to make money or gain fame from a mobile app should team up with a great designer, but it has happened in the past. The key is to avoid over populated areas where it will be very hard for even the best teams to stand out, unless they have an existing brand.

My feeling is the iOs and Android stores are far too crowded already, but if you must enter the iOs or Android stores, think about targeting a niche. As mentioned before, localised apps is an untapped area for many&#8230;

A great way of making money from mobile apps looks to be to target the long tail of platforms. Samsung Bada is out but with few apps yet released, Windows Phone 7 is unreleased giving plenty of time to be one of the first apps to launch in that field, and for slightly busier stores but perhaps safer long-term skill investments get into Symbian Qt and BlackBerry.

### To launch an rich app for an existing brand test the water with web, then go multi-platform

If you have an existing brand and want to launch an app which doesn&#8217;t require lots of device API&#8217;s I would launch on web platforms first. This will be cheaper in terms of development as the skills are often easier to find, and you can write once and publish on multiple platforms easily thanks to tools like PhoneGap.

Once you reach the limitations of web, assuming there is a demand for your product, you should release in iOS and Android stores to get the app lovers interested, and then consider Qt for Symbian (ensuring the widest range of future devices) to target the Nokia masses and BlackBerry for the young elite and business customers. Consider Windows 7, although be aware of the risk it might not be a success.

### To tackle emerging markets or for simple apps for non smart phones consider Java ME, BREW and Flash Lite

Most people don&#8217;t have a phone that can run the platforms we&#8217;ve discussed, with the exception of Symbian. Most people have a phone that can run Java ME. If you want to tackle the non smartphone market, you will need to start dabbling with Java ME. For the US markets consider BREW also, and try BREWMP for newer low end devices. The nicest interfaces can be produced using Flash Lite, but this prevents you from accessing the device API&#8217;s in the same way, limited memory can cause problems for you, and less phones run Flash Lite than run Java. Expect to spend lots of time and money tailoring your build to each device, and consider that many people without smartphone&#8217;s don&#8217;t even realise they can install apps.

## Open to comments, and coming next

With my work at [ribot][46] I get to play with a wide range of platforms, and I&#8217;ll be experimenting with more of those listed over the coming weeks. Expect more info on the various languages and my thoughts on differences between them. Please let me know your opinions below on these ideas.

Follow up articles:

  * [Review of the Qt Nokia SDK ][27]- why Qt could be more challenging than learning iPhone, how to get started and problems you might encounter
  * [Review of Windows Phone 7 Developer Tools CTP][35] &#8211; easy to code, well documented and a delight to use, I loved this toolkit and the possibilities it suggests

 [1]: http://creativecommons.org/licenses/by-nc-nd/2.0/ "Attribution-NonCommercial-NoDerivs License"
 [2]: http://www.flickr.com/photos/chihoonshin/
 [3]: http://developer.apple.com/iphone/index.action
 [4]: http://www.phonegap.com/
 [5]: http://www.appcelerator.com/
 [6]: http://creativecommons.org/licenses/by/2.0/ "Attribution License"
 [7]: http://www.flickr.com/photos/ivyfield/
 [8]: http://www.android.com/index.html
 [9]: http://developer.sonyericsson.com/wportal/devworld/technology/web/websdk?cc=gb&lc=en
 [10]: http://www.android.com/market/
 [11]: http://www.handango.com/homepage/Homepage.jsp
 [12]: http://www.getjar.com/
 [13]: http://store.handmark.com/
 [14]: http://slideme.org/
 [15]: http://www.flickr.com/photos/toasty/
 [16]: http://na.blackberry.com/eng/developers/
 [17]: http://na.blackberry.com/eng/services/appworld/?
 [18]: http://www.flickr.com/photos/blackberryimages/
 [19]: http://www.symbian.org/devices
 [20]: http://developer.symbian.org/
 [21]: http://developer.symbian.org/wiki/index.php/Runtimes_Feature_Table
 [22]: http://www.forum.nokia.com/Develop/Other_Technologies/Symbian_C++/
 [23]: http://www.forum.nokia.com/Develop/Web/
 [24]: http://qt.nokia.com/
 [25]: http://developer.symbian.org/wiki/index.php/Symbian_Web_Development_Tools_%28WRT_Tools%29
 [26]: https://store.ovi.com/
 [27]: http://http://mark-kirby.co.uk/2010/nokia-qt-sdk-review/
 [28]: http://www.forum.nokia.com/Devices/Maemo/
 [29]: http://developer.windowsphone.com/windows-phone-7/
 [30]: http://msdn.microsoft.com/en-us/ff380145.aspx
 [31]: http://www.silverlight.net/getstarted/
 [32]: http://msdn.microsoft.com/en-us/aa937791.aspx
 [33]: http://www.microsoft.com/downloads/details.aspx?FamilyID=c8496c2a-54d9-4b11-9491-a1bfaf32f2e3&displaylang=en
 [34]: http://marketplace.windowsphone.com
 [35]: http://mark-kirby.co.uk/2010/windows-phone-7-ctp-review/
 [36]: http://www.oracle.com/technetwork/java/javame/overview/index.html
 [37]: http://www.adobe.com/devnet/devices/index.html?view=downloads
 [38]: http://brew.qualcomm.com/brew/en/developer/overview.html
 [39]: http://www.brewmp.com/
 [40]: http://english.sina.com/technology/2010/0630/327199.html
 [41]: http://www.bada.com/
 [42]: http://www.samsungapps.com/
 [43]: http://developer.palm.com
 [44]: http://www.appcelerator.com/mobile-developer-survey-june-2010/
 [45]: http://www.visionmobile.com/blog/2010/07/mobile-developer-economics-2010-the-migration-of-developer-mindshare/
 [46]: http://ribot.co.uk/