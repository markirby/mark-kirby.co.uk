---
title: Install Fink on OS X Leopard
author: Mark Kirby
layout: post
date: 2008-09-30
excerpt: A simple tutorial on install Fink and related tools.
url: /2008/install-fink-on-os-x-leopard/
dsq_thread_id:
  - 1094670365
categories:
  - tutorial
tags:
  - fink
  - osx
---
Fink can be used to download many open source tools, its best to also install Xcode.

## 1 &#8211; Install Xcode

Locate the Mac OS X Install Disc 2 that came with your Mac. If you can&#8217;t find it, you can [download the latest copy][1]

Go into Xcode tools and install XcodeTools.mpkg

## 2 &#8211; Install Fink

Once you have installed Xcode, you can install Fink.

Go to the [Fink downloads page][2] and download and save the package for your OS &#8211; it should be the first one if your running Leopard on an Intel Mac.

Open the dmg and run the installer pkg file.

During set up you will be asked something about setting a path &#8211; click YES.

Open Terminal and enter the following:

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    fink scanpackages;<br />
    fink index
  </div>
</div></pre>

If this doesn&#8217;t work check Terminal wasn&#8217;t already open while you installed Fink, if it was, you need to close it and reopen it.

Then enter the following to update Fink:

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">sudo</span> <span class="kw2">apt-get</span> update; <br />
    <span class="kw2">sudo</span> <span class="kw2">apt-get</span> <span class="kw2">install</span> fink
  </div>
</div></pre>

## More info

I used the following resources to compile this guide:

<http://www.finkproject.org/download/index.php>

 [1]: http://developer.apple.com/tools/xcode/
 [2]: http://www.finkproject.org/download/index.php