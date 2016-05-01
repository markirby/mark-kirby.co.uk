---
title: Nokia Qt SDK 1.0 review
author: Mark Kirby
layout: post
date: 2010-08-06
excerpt: "A review of the Nokia Qt SDK, a framework allowing you to publish native apps to Symbian and Maemo devices. A nice tool, but there's plenty to learn and it's just early days still. Read on to find out why Qt could be more challenging than learning iPhone, how to get started and problems you might encounter."
url: /2010/nokia-qt-sdk-review/
dsq_thread_id:
  - 1086898899
categories:
  - post
---
The Nokia Qt SDK 1.0 was launched in June to allow developers to create apps for Symbian and Maemo devices. I decided to install it and see how quickly I could get up and running, and give my thoughts on the platform. This is part of an ongoing project in which I&#8217;ll trial a range of mobile developer platforms, and started with my review of the current [mobile development trends][1].

<img class="alignnone size-full wp-image-667" title="137117543_b07374c424" src="http://mark-kirby.co.uk/wp-content/uploads/2010/08/137117543_b07374c4241.jpg" alt="137117543_b07374c424" width="328" height="500" />

*<span><a href="http://creativecommons.org/licenses/by-nc-nd/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /><img title="Noncommercial" src="http://l.yimg.com/g/images/cc_icon_noncomm_small.gif" border="0" alt="Noncommercial" /><img title="No Derivative Works" src="http://l.yimg.com/g/images/cc_icon_noderivs_small.gif" border="0" alt="No Derivative Works" /></a></span> [Some rights reserved][2] by [J. Kernion][3]*

## Installation

There are 2 types of installer, online and offline. The online installer is supposed to download the required dependencies and install them, but it failed to work on any platform for me, either crashing during the download phase, or resulting in a broken install. I would avoid.

I was able to install the SDK on OS X using the offline installer, but there a few gotchas which lost me a good few hours. Ensure you go through the following steps when installing on OS X:

  * [Install or upgrade to XCode 3.2.3][4]
  * When installing the SDK don&#8217;t attempt to change the default install path (I&#8217;m sure you could, but leaving it alone lead to everything working without issue)
  * Restart your mac after the SDK install
  * Ensure you accept the default path when creating new projects (this will be one step above the root of the install of the SDK, which allows essential paths to be found)

Since I had to work most of this out for myself I feel the installer could have been a little more pro-active, taking care of the above and saving us some time. It&#8217;s also worth noting that the OS X SDK is still in beta, and doesn&#8217;t come with Symbian drivers.

<img class="alignnone size-full wp-image-671" title="Hair pulling" src="http://mark-kirby.co.uk/wp-content/uploads/2010/08/3345896050_8e2d8cbe51.jpg" alt="Hair pulling" width="500" height="334" />

*<span><a href="http://creativecommons.org/licenses/by-sa/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /><img title="Share Alike" src="http://l.yimg.com/g/images/cc_icon_sharealike_small.gif" border="0" alt="Share Alike" /></a></span> [Some rights reserved][5] by [stuartpilbrow][6]*

## Getting started &#8211; you need to know C++ and more

By far the best place to start is the [Forum Nokia Qt Getting Started][7] page which guides you nicely through the process of opening a sample app, running it in the emulator and then installing on a device. This is followed by a wealth of tutorials, videos and demo apps which will get you up and running with all the API&#8217;s in no time&#8230;provided you already know C++ and have experience with Qt for desktop. This is an essential point, if you don&#8217;t yet know C++ you have to learn it before starting with Qt, the Nokia documentation alone won&#8217;t help you.

Documentation within the IDE Qt Creator isn&#8217;t as strong. [A sample mobile app tutorial is provided][8], but it&#8217;s quite confusing and probably not worth bothering with in light of all the other online resources. Plenty of sample apps are provided within the creator, but all are desktop specific and will need altering to run properly on mobile. None of them take advantage of the device specific API&#8217;s. There are sample apps on the Forum Nokia site you can download and install, but it&#8217;s a shame these sample apps aren&#8217;t provided within the Qt Creator.

<img class="alignnone size-full wp-image-675" title="QT" src="http://mark-kirby.co.uk/wp-content/uploads/2010/08/333656054_08ceb81a86.jpg" alt="QT" width="500" height="375" />

<span><a href="http://creativecommons.org/licenses/by-nc-nd/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /><img title="Noncommercial" src="http://l.yimg.com/g/images/cc_icon_noncomm_small.gif" border="0" alt="Noncommercial" /><img title="No Derivative Works" src="http://l.yimg.com/g/images/cc_icon_noderivs_small.gif" border="0" alt="No Derivative Works" /></a></span> *[Some rights reserved][2] by [Stillframe][9]*

## The emulator

The Nokia Qt SDK comes with its own emulator which faithfully recreates either the N900 for Maemo or the N97 for Symbian. The emulator is one of the more advanced I&#8217;ve used, unlike many its very easy to resize to fit your display, and allows you to easily simulate battery, signal and a wide range of other API&#8217;s. I&#8217;m not sure how capable it is of running all apps, I had some issues running the Symbian sample app [FlickrDemo][10] on the emulator, getting a lot of errors instead of the expected images which are supposed to download.

## Installing on device

The Forum Nokia documentation [guides you through installing on a Symbian or Maemo device][11]. I tried to install on the N97, and was able to do so without any trouble after installing the[ Ovi Suite][12] on Windows 7. You cannot install to a device from OS X, but I was able to manage it from Windows XP within Parallels. I tried to install [FlickrDemo][10] on the N97, but on loading got an OS error which prevented the app from running. Other apps which didn&#8217;t use the device API&#8217;s loaded without an issue, so it could simply be that the N97 wasn&#8217;t compatible with the API&#8217;s. More work would be needed to get to the bottom of this, adding time to the entire process.

<img class="alignnone size-full wp-image-677" title="N97" src="http://mark-kirby.co.uk/wp-content/uploads/2010/08/3810779827_7a20566c23.jpg" alt="N97" width="500" height="333" />

<span><a href="http://creativecommons.org/licenses/by-sa/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /><img title="Share Alike" src="http://l.yimg.com/g/images/cc_icon_sharealike_small.gif" border="0" alt="Share Alike" /></a></span> *[Some rights reserved][5] by [William Hook][13]*

## How long did it take me to create a simple app?

It&#8217;s been the end of a long week attempting to get up and running on the Qt platform. Initial issues installing on OS X, a trip to the Nokia N8 launch plus the speed impact Parallels 5 had on my Mac reduced my time with the installed platform to 3 days. At this point I realised I should really learn C++, and took another 2 days going over the basics. This left me one day to get to grips with Qt, the Nokai API&#8217;s, come up with an idea for a simple app and create the app. I then ended up spending time attempting to get the FlickrDemo running on a device without success. Clearly, this would take a little longer (and I probably should get some more RAM for running Parallels). I certainly managed a Hello World, and got that running on the N97. As for anything more complex, there really wasn&#8217;t time.

## Final thoughts

To be able to develop anything of consequence on Qt you seem to need just as much time as it takes to become an iPhone developer. Instead of Objective-C you need to learn C++, instead of Cocoa you learn Qt, instead of Cocoa Touch you learn about the Nokia API&#8217;s and their framework. Instead of a large pool of forums, developers and books you have the more limited resources of the Forum Nokia website. I propose this is actually a more challenging task than learning iPhone development, but there are certainly skills you would learn in iPhone and Qt development that are interchangable between the two languages, and it might be worth tacking both. If you are already a C++ developer, or especially if you develop on Qt, you will be up and running within a week.

Apps ran super fast on the N97 &#8211; I was able to play with an animated demo that responded far quicker than anything I&#8217;ve managed to product using the WRT web app engine. Native is certainly the way forward for intensive apps, and for using device API&#8217;s. If you want to target Nokia, get stuck in!

<img class="alignnone size-full wp-image-672" title="iPhone vs Nokia" src="http://mark-kirby.co.uk/wp-content/uploads/2010/08/3240082364_be5aa7bcd0.jpg" alt="iPhone vs Nokia" width="500" height="346" />

*<span><a href="http://creativecommons.org/licenses/by-nc-sa/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /><img title="Noncommercial" src="http://l.yimg.com/g/images/cc_icon_noncomm_small.gif" border="0" alt="Noncommercial" /><img title="Share Alike" src="http://l.yimg.com/g/images/cc_icon_sharealike_small.gif" border="0" alt="Share Alike" /></a></span> [Some rights reserved][14] by [Theo W L Jones][15]*

 [1]: /2010/mobile-app-development-trends/
 [2]: http://creativecommons.org/licenses/by-nc-nd/2.0/ "Attribution-NonCommercial-NoDerivs License"
 [3]: http://www.flickr.com/photos/juliettek/
 [4]: http://developer.apple.com/technologies/xcode.html
 [5]: http://creativecommons.org/licenses/by-sa/2.0/ "Attribution-ShareAlike License"
 [6]: http://www.flickr.com/photos/stuartpilbrow/
 [7]: http://www.forum.nokia.com/Develop/Qt/Getting_started/
 [8]: http://doc.qt.nokia.com/qtcreator-2.0/creator-mobile-example.html
 [9]: http://www.flickr.com/photos/stillframe/
 [10]: http://www.forum.nokia.com/document/Mobile_Hands-on_Labs/Qt/QtEverywhere/03.html
 [11]: http://www.forum.nokia.com/Develop/Qt/Getting_started/Step_4_Deploy.xhtml
 [12]: http://europe.nokia.com/support/download-software/nokia-ovi-suite
 [13]: http://www.flickr.com/photos/williamhook/
 [14]: http://creativecommons.org/licenses/by-nc-sa/2.0/ "Attribution-NonCommercial-ShareAlike License"
 [15]: http://www.flickr.com/photos/theojones/