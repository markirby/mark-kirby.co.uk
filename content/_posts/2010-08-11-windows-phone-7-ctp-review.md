---
title: Windows Phone 7 CTP review
author: Mark Kirby
layout: post
date: 2010-08-11
excerpt: "A review of the Windows Phone 7 CTP which allows you to create apps using Silverlight for the new WP7 devices coming in Holiday 2010. One of the best mobile platforms I've come across, this looks incredibly promising. Read on to find out why."
url: /2010/windows-phone-7-ctp-review/
dsq_thread_id:
  - 1090536580
categories:
  - post
---
The Windows Phone 7 CTP was launched in July 2010 and allows developers to start working on apps for Windows Phone 7 (WP7), the  new mobile platform from Microsoft due for release in Holiday 2010. As part of an ongoing investigation into a range of mobile development platforms, I installed and played with the CTP and will present my findings here. This is part of an ongoing project in which I trial a range of mobile developer platforms, which started with my review of the current [mobile development trends][1].

<img class="alignnone size-full wp-image-707" title="Windows Phone 7" src="http://mark-kirby.co.uk/wp-content/uploads/2010/08/4363792321_5717eb1dee.jpg" alt="Windows Phone 7" width="500" height="329" />

## Thoughts on the Windows Phone 7 platform

Windows 7 has been positioned for developers somewhere between the iPhone and Android, but with benefits over both.

**Low level of device fragmentation:** Like iOs, differences in devices are going to be limited. Like Android there will be a wide range of devices running Windows Phone 7 software after the initial devie is launched, unlike Android there will be just 2 screen resolutions that all devices must conform to and a wide set of minimum hardware specifications. This means it should be easier to develop on and test with Windows Phone 7 devices than the wide range of Android, Symbian, Blackberry etc devices that are out there.

**Simple app store process:** Like both Android and iOs there will be an app store, with a review process similar to the iTunes App Store. Microsoft have stated during the MIX10 event that their app store process will be as transparent as possible, and from the outset it looks like they are trying to make things easier and be more open than Apple. At the same time they intend to have more quality control than Android App Stores.

**Easy learning curve**: Unlike iOs, software is coded using Silverlight or XNA. Silverlight is to be the language of choice for regular apps, and has a far easier learning curve than Objective-C or the native languages Nokia, Blackberry and Android use (Java and C++ based languages) &#8211; its most similar to Flash in it&#8217;s approach. There is also no other choice of &#8216;native&#8217; development platform, all apps including Microsofts own are coded using Silverlight, so it&#8217;s a level playing field. XNA is for creating games, and I won&#8217;t be covering it here.

**The bad news&#8230;** No devices have been released yet, and there is no telling how successful the launch will be. Also the CTP will change before release, so be prepared for some surprises.

## Installation &#8211; easy and free

You will need Vista or Windows 7 to install the free CTP, then you simply [download the tools][2] and with a one-click install get a trimmed down version of Visual Studio 2010, Expression Blend, emulator and all required prerequisites and additional tools. Thats it! This is one of the simplest and quickest installs I&#8217;ve come across on any platform including iOs and Android. It was even simpler and less confusing than when I&#8217;ve had to work with Web Widgets such as Nokia&#8217;s WRT. It looks like the tools will remain free as Windows Phone 7 comes out of CTP and goes into full release, but it isn&#8217;t 100% clear.

## The emulator &#8211; fast and reliable, but no devices

The emulator runs within its own virtual machine so it&#8217;s nice and fast and apparently gives a reliable idea as to device performance. A colleague found that due to the VM being used he couldn&#8217;t run the emulator within Parallels on OS X, although it worked fine with VMWare Fusion. The emulator takes a little while to load up (20 &#8211; 30 secs on my MacBook Pro), but providing you don&#8217;t close it, each subsequent build and run fires up almost instantly.

Sadly there are no actual devices to test on yet, so you cannot see how the app will actually run. This will want to be rectified before products go on sale to the general public if developers want to release apps at the same time without guessing at performance levels.

## Getting started &#8211; a wealth of documentation

Since development is based on Silverlight and C#, both established languages, there are plenty of blog posts, books and articles showing you how to do almost anything you can imagine in a regular desktop app. Clearly there is also a need to understand the differences developing for mobile brings and Microsoft have done a great job getting together plenty of documentation and tutorials. I&#8217;ve listed the starting points for all the resources I could find here for you to browse if you&#8217;re interested:

  * [Windows Team Blog][3] &#8211; regularly updated with the latest release news and tips, the place for latest announcements
  * [Windows Phone for Developers][4] &#8211; a hub for all info from Microsoft, although it feels somewhat sparse at first glance
  * [MSDN official documentation][5] &#8211; covers all API&#8217;s and classes provided by Windows Phone 7, as well as highlighting differences between platforms
  * [Training Videos on Windows Phone 7 ][6]- an unorganised but comprehensive collection of training videos
  * [WP7 Training Kit][7] &#8211; includes selected videos and hands on tutorials to provide a complete Windows Phone 7 training course
  * [MIX10 Sessions][8] &#8211; Microsofts developers conference had a focus on Windows Phone 7 this year, and all the sessions are available here

As you can see, there is no shortage of documentation, and that&#8217;s a rare treat for a technology which has yet to be officially released.

## How long did it take to create a sample app?

After watching a couple of sessions from MIX10 and working through the tutorials in the WP7 training kit (which took around a day), I was able to piece together a simple app which called a web service and displayed selected data in formatted fields. From start to finish the app took around 3 hours and I didn&#8217;t get &#8216;stuck&#8217; at any point. Whenever I googled something I found a range of examples and methods, and before you knew it I was using XML to LINQ and the app was done and running in the emulator.

## Final thoughts

<img class="alignnone size-full wp-image-708" title="Limitations live only in our minds" src="http://mark-kirby.co.uk/wp-content/uploads/2010/08/3350545431_f042f11374.jpg" alt="Limitations live only in our minds" width="500" height="500" />

*<span><a href="http://creativecommons.org/licenses/by-nc-nd/2.0/"><img title="Attribution" src="http://l.yimg.com/g/images/cc_icon_attribution_small.gif" border="0" alt="Attribution" /><img title="Noncommercial" src="http://l.yimg.com/g/images/cc_icon_noncomm_small.gif" border="0" alt="Noncommercial" /><img title="No Derivative Works" src="http://l.yimg.com/g/images/cc_icon_noderivs_small.gif" border="0" alt="No Derivative Works" /></a></span> [Some rights reserved][9] by [Yuga.][10]*

This looks like it will be a great platform to work with. The choice of language alone is enough to make this one of the easiest to get to grips with. Silverlight feels intuitive and easy to use, especially with the productivity benefits Visual Studio gives you. I&#8217;m as much a fan of TextMate and open source apps as the next person, but there is no denying Visual Studio is one of the best IDE&#8217;s out there. If you don&#8217;t know the language the code hinting tool alone can help you out no end, and that&#8217;s before we being to cover refactoring assistance and debugging tools.

It&#8217;s too early to say how well devices will actually perform, how easy the process of getting apps to market will be and how successful this platform will become. As a simple review of the tools, language and ease of development though, I can say with conviction that this will be one of the easiest to rapidly get apps developed with maximum access to device API&#8217;s and great looking interfaces.

I would go so far as to propose Windows Phone 7 will actually be *the* easiest mobile platform to develop for&#8230;

  * Android, Qt, Java, iOs all have far steeper learning curves
  * WebOS, WRT and other web widgets which could arguably be easier to code for (although once you get started with C# and Silverlight you won&#8217;t want to jump back into JavaScript in a hurry again) lack the access to device API&#8217;s and suffer from performance hits
  * Flash Lite/AIR are roughly the same learning curve but suffer from performance problems and lack access device API&#8217;s as well as being fragmented with different versions of Flash and Actionscript on different devices

Finger crossed for this platform, it could be a developers dream <img src="http://mark-kirby.co.uk/wp-includes/images/smilies/icon_wink.gif" alt=";-)" class="wp-smiley" />

 [1]: ../2010/mobile-app-development-trends/
 [2]: http://www.microsoft.com/downloads/details.aspx?FamilyID=c8496c2a-54d9-4b11-9491-a1bfaf32f2e3&displaylang=en
 [3]: http://windowsteamblog.com/windows_phone/b/wpdev/
 [4]: http://developer.windowsphone.com/
 [5]: http://msdn.microsoft.com/en-us/library/ff402535%28VS.92%29.aspx
 [6]: http://channel9.msdn.com/tags/Windows+Phone/#Page=1
 [7]: http://channel9.msdn.com/learn/courses/WP7TrainingKit/
 [8]: http://live.visitmix.com/Sessions/Tags/WindowsPhone/Page1/
 [9]: http://creativecommons.org/licenses/by-nc-nd/2.0/ "Attribution-NonCommercial-NoDerivs License"
 [10]: http://www.flickr.com/photos/illbethesun/