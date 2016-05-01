---
title: How to install static frameworks on Xcode 4
author: Mark Kirby
layout: post
date: 2012-01-11
url: /2012/how-to-install-static-frameworks-on-xcode-4/
dsq_thread_id:
  - 1086898759
categories:
  - post
---
I had some issues installing OCMock on Xcode 4, and found the method to be documented differently in a number of places. Fortunately I&#8217;ve worked out how to do it and it can be applied to any static framework, so I&#8217;m sharing it here, using OCMock as an example.

## Download the framework and locate the .a and header files

Download the distribution files for the framework (for OCMock it comes as a dmg) and locate the .a and header files.

Here&#8217;s mine on my desktop:

[<img class="alignnone size-full wp-image-972" title="Files in desktop" src="http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-01-11-at-11.48.28.png" alt="" width="618" height="311" />][1]

## Copy these files into your source folder for your Xcode project

  * Make a subfolder in the root of your project folder named &#8216;Libraries&#8217; (or place it where you wish &#8211; I&#8217;ll refer to this as {LIBRARIES FOLDER})
  * Make a subfolder in this with the name of your Framework, e.g. OCMock &#8211; I&#8217;ll call this {FRAMEWORK FOLDER}
  * Copy the contents of your static framework in here, preserving the original folder structure

When you are done your structure should look something like this:

[<img class="alignnone size-full wp-image-1000" title="Screen Shot 2012-03-01 at 16.43.08" src="http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-03-01-at-16.43.08.png" alt="" width="600" height="281" />][2]

&nbsp;

## Create references to the files in Xcode 4

To set up references to these new files:

  * Create a new folder in Frameworks called the same as {FRAMEWORK FOLDER}
  * Drag all the files inside your actual {FRAMEWORK FOLDER} into this one
  * Deselect &#8220;Copy items to your destination folder&#8221;
  * Select the targets you need &#8211; in OCMock case it will be the Unit Tests, but generally it will be the main target

<div>
  <a href="http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-01-11-at-12.19.45.png"><img class="alignnone size-full wp-image-979" title="Adding framework" src="http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-01-11-at-12.19.45.png" alt="" width="600" height="319" /></a>
</div>

You should now see the framework listed.

My project folder now looks like this:

[<img class="alignnone size-full wp-image-1001" title="Screen Shot 2012-03-01 at 16.47.42" src="http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-03-01-at-16.47.42.png" alt="" width="260" height="293" />][3]

*I&#8217;ll add any more headers from other Frameworks  in subgroups with the name of the framework.*

## Add your header search path to the target build settings

  * Select the target you added the framework for, in my case, &#8220;FrameworkInstallTests&#8221;.
  * Select the &#8220;Build Settings&#8221; tab
  * Search for &#8220;header search paths&#8221;
  * Locate &#8220;Header Search Paths&#8221; field
  * Double click the field
  * Check the &#8220;recursive&#8221; box
  * Add this to the settings:
  * $(PROJECT_DIR)/Libraries

<div>
  <a href="http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-01-11-at-12.56.31.png"><img class="alignnone size-full wp-image-981" title="Adding the header setting" src="http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-01-11-at-12.56.31.png" alt="" width="600" height="339" /></a>
</div>

<div>
</div>

<div>
  <em>Note: if you didn&#8217;t place your framework files into the Libraries folder, it should point to whatever {LIBRARIES_FOLDER} is. Because you selected recursive, it will search down until it locates the headers.</em>
</div>

## Add linker flag

  * Select the target you added the framework for, in my case, &#8220;FrameworkInstallTests&#8221;.
  * Select the &#8220;Build Settings&#8221; tab
  * Search for &#8220;linker flags&#8221;
  * Locate &#8220;Other Linker Flags&#8221; field
  * Double click the field
  * Add this:
  * -force\_load $(PROJECT\_DIR)/Libraries/{FRAMEWORK FOLDER}/{YOUR FRAMEWORK NAME}.a
  * Which should be the full path to the .a file for the framework, e.g. &#8220;$(PROJECT_DIR)/Libraries/libOCMock.a&#8221;

## Restart Xcode and you should be done!

Restart Xcode.

Leave any issues in the comments and I&#8217;ll see what I can do.

 [1]: http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-01-11-at-11.48.28.png
 [2]: http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-03-01-at-16.43.08.png
 [3]: http://mark-kirby.co.uk/wp-content/uploads/2012/01/Screen-Shot-2012-03-01-at-16.47.42.png