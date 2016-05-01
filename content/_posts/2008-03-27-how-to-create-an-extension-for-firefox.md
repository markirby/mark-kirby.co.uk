---
title: How to create an extension for Firefox
author: Mark Kirby
layout: post
date: 2008-03-27
url: /2008/how-to-create-an-extension-for-firefox/
dsq_thread_id:
  - 1086898507
categories:
  - tutorial
---
If you ever fancied building your own firefox toolbar or extension you&#8217;ll find its really easy. However, getting to the stage where you can actually start coding is less so, and its quite hard to find resources. This guide should help you.

The process is as follows:

  1. build a test firefox profile
  2. create your extension skeleton
  3. install your extension in your test firefox profile
  4. start developing
  5. publish your extension

## Build a test firefox profile

Its not good practice to simply start developing an extension using your existing firefox profile. The extension can easily break your profile if you do something wrong, and you will have to keep restarting firefox to see changes, which isn&#8217;t much fun if your reading a tutorial on the same browser.

So we build a test profile, here&#8217;s how to do it on a mac. If your on a PC there&#8217;s lots of tutorials.

Enter the following code into Terminal

<pre lang="bash">cd /Applications/Firefox.app/Contents/MacOS
	./firefox-bin -ProfileManager</pre>

This opens the profile manager. Click create profile, read the blurb and click next.  
You will be asked to enter a profile name &#8211; call it &#8216;test&#8217; or whatever you want. Then look at the path listed underneath and make a note of it &#8211; this where you will need to place your extension later.  
Click done.

Now you have a new profile, which can be accessed at anytime through the above command line. Still, it would be easier if we had an icon we could click. If you have a Mac, continue reading to find out how to make one.

Open a text editor and type this in:

<pre lang="bash">#!/bin/sh
	/Applications/Firefox.app/Contents/MacOS/firefox -P "test"</pre>

Where &#8220;test&#8221; is the name you gave your profile.

Save it as Firefox.test, making sure line endings are UNIX, and no additional extension is saved. The filetype should be Shell Script if you get to pick one.

[Download Launcher][1], a software which will allow you to launch script files from finder. When its installed it will go into Applications > Utilities.

Place Firefox.test somewhere thats easy to find on your system. E.g. the desktop.

Right click firefox.test and select Open With, and other. Select Launcher and check always open with.

Double click the file, and it should open.

Now you can install extensions in this profile, and quit at any time, without affecting your current browser.

## Create your extension skeleton

Now you have your browser, its time to create the skeleton of your first extension.

I&#8217;m not going to mess around explaining what files to create and what to call them. There is a free piece of software which does it all for you &#8211; [Komodo Edit][2]. Its available for PC, Mac and LINUX so there should be no problems.

Install the software and start it up.

Select File -> New -> New Project from template.  
In the new window, select the Mozilla category, and the &#8216;Firefox extension&#8217; template.  
Give the template a name, and pick the directory you want to save it in (you should create a new one).

Click open, and fill in the form with the name of your extension and your domain. This doesn&#8217;t have to be a real domain. Note down the Extension Id that appears, and click save.

The editor will create all the files for you in the specified folder.

## Install your extension in your test firefox profile

The default extension created by Komodo Edit performs a simple Hello World function. Lets now install it in your default profile so we can start editing it and see the changes.

Before continuing you will need the following:

  * The path to your test profile which you should have noted when creating the profile
  * The path to the extension you just created in Komodo Edit
  * The extension id for the extension you just created

If you don&#8217;t have any of those, retrace your steps through the previous sections.

Create a file with your text editor, containing one line &#8211; the path to the extension you just created. You need to include the folder containing the extension, and you MUST have a forward slash at the end of the path. Mine looks like this:

<pre lang="bash">/Users/mark/Sites/my_extension/</pre>

Save this file, naming it with the extension id you just got. e.g. my file is named &#8220;my_extension@mark-kirby.co.uk&#8221;. This should be saved with UNIX line endings. Save it anywhere you like, perhaps the desktop.

Using finder, or explorer, follow the path to your test profile folder.  
Locate the &#8220;extensions&#8221; folder inside. If there isn&#8217;t one, create one.  
Place the file you just created inside this extensions folder.

Startup your firefox test profile. Go to Tools -> Add on&#8217;s. You should see your extension listed. if it isn&#8217;t check everything in this section over.

## Start developing

Now you can start, you&#8217;ll need to use other resources for this and gain an understanding of whats going on. You have your editor, use that to make changes to the code.

I started with this article &#8211; [Your first firefox extension][3], from the Webmonkey site. This explains the following:

  * The interface is programmed in XUL &#8211; tutorials at [XULPlanet][4] and [Mozilla][5].
  * The functionality is programmed in Javascript
  * Extensions are made of a number of components, compiled into an XPI file which is a bit like a ZIP file

To build a basic extension there is a [basic tutorial for Firefox 1.5+][6] on Mozilla, [a comprehensive firefox extension walkthrough][7] on Webgeek, and a [very comprehensive firefox extension tutorial][8] on XUL Planet.

The [mozilla development center][9] has the most up to date info on Firefox extension development. They also have an excellent list of [code snippets][10] showing you how to do a range of tasks.

## Publish your extension

When you have finished development, its very simple to publish your extension. There is full documentation on [chapter 7 of the born geek tutorial][11].

In summary:

The name for the jar should be the same as the name of the package.

Ensure the chrome manifest file is updated to include the jar in the paths:

<pre lang="xml">content my_extension jar:chrome/my_extension.jar!/content/
	overlay chrome://browser/content/browser.xul chrome://my_extension/content/my_extension.xul
	skin my_extension classic/1.0 jar:chrome/my_extension.jar!/skin/</pre>

Navigate to the chrome directory in your extensions folder:

<pre lang="bash">cd Sites/my_extension/chrome</pre>

Create the .jar file:

<pre lang="bash">zip -r my_extension.jar content/* skin/*</pre>

Navigate to the root of the extensions folder:

<pre lang="bash">cd ..</pre>

Create the .xpi file:

<pre lang="bash">zip my_extension.xpi install.rdf chrome.manifest chrome/my_extension.jar</pre>

Install your extension by going into firefox and selecting File -> Open File&#8230; and locating the xpi file.

Done!

 [1]: http://www.maths.mq.edu.au/~steffen/tcltk/Launcher/
 [2]: http://www.activestate.com/Products/komodo_edit/
 [3]: http://www.webmonkey.com/06/25/index3a.html
 [4]: http://www.xulplanet.com/
 [5]: http://developer.mozilla.org/en/docs/XUL_Reference
 [6]: http://developer.mozilla.org/en/docs/Building_an_Extension
 [7]: http://www.borngeek.com/firefox/toolbar-tutorial/
 [8]: http://www.xulplanet.com/tutorials/xultu/
 [9]: http://developer.mozilla.org/en/docs/Extensions
 [10]: http://developer.mozilla.org/en/docs/Code_snippets
 [11]: http://www.borngeek.com/firefox/toolbar-tutorial/ch_7.html