---
title: How to debug the Shared Object in Device Central
author: Mark Kirby
layout: post
date: 2009-06-29
excerpt: How to access the shared object in Device Central for debugging purposes. Not a simple method, but one that works nonetheless.
url: /2009/how-to-debug-the-shared-object-in-device-central/
dsq_thread_id:
  - 1106119756
categories:
  - tutorial
---
Here's a quick tutorial explaining how to inspect and debug the shared object created on device central when running tests on Flash Lite apps. Its not simple and took me some work to figure out. If you know a better way, please let me know.

This tutorial is aimed at OS X 10.5 users, with Device Central CS4.

## 1 - Get a capable unarchiver

You need a file unarchiver which can cope with .cpgz files. The only one I could find was [File Juicer][1] which costs around $12 - if anyone finds a free one, let me know.

## 2 - Extract the Shared Object file

Navigate to your home folder and 'Library/Application Support/Adobe/Adobe Device Central CS4&#8243;.

Locate the file named storageObjects.bin and drag it onto the File Juicer icon in your apps.

A folder should appear named 'Storage Objects Juice&#8221;, containing a folder named 'txt&#8221;, containing a file called something like StorageObject(xx% copy)-1.txt - this is the file you'll need.

## 3 - Interpreting the StorageObject file

Open the txt file with your editor of choice. You will see likely see lots of text, expand the text editor to fill your screen to make things easier.

This file contains reference to all saved shared objects, so to see the latest you need to be at the bottom of the file.

Look for codes resembling 'B81FA49052AAA2BD750992BCFD03478D 8144600B02252A799C14CCE2BC9F50B6 ø TCSO &#8221; - this appears to be the delimiter between shared object sessions. 

Directly following each of delimiter you will find the name of your shared object, the name of the shared object element, and any data saved. 

The layout isn't great, line breaks are seemingly random, and its clear this file was not meant for human consumption. Until Adobe add a Shared Object inspector to Device Central, its all we got though, as far as I know.

Anyone got an easier method?

 [1]: http://echoone.com/filejuicer/