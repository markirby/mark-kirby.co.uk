---
title: Flash Lite Components – an introduction
author: Mark Kirby
layout: post
date: 2009-08-07
url: /2009/flash-lite-components-an-introduction/
dsq_thread_id:
  - 1086898156
---

This article takes a look at Flash Lite Components - reusable controls and elements which you can drop into Flash Lite apps. I look at existing techniques, libraries and components as well as some tips on creating your own. My personal reason for this investigation is that at ribot we are working on some visual components for a little app we are creating, and I'd like to find some pointers on how we might be able to craft these in a reusable way. Hopefully you will learn something from this, and comment away at the end to feed back into the conversation.

[<img class="size-full wp-image-561   alignnone" title="Actionscript" src="http://mark-kirby.co.uk/wp-content/uploads/2009/08/2530021664_357b6699b0.jpg" alt="Actionscript" width="360" height="270" />][1]

## What existing Flash Lite components are available?

### Forum Nokia

The latest high profile component release (actually around a year ago now) I could find was the [Forum Nokia Flash Lite Components][2] which include a button, popup dialog and scrollbar. Some of the components are skinable, they are flexible in terms of size. They appear easy to install and well documented. [Adobe reported on these][3], mentioning they were rather high in memory consumption - this is down to their flexibility and ease of use - there's a price to pay for everything on mobile!

Forum Nokia then launched a competition this year which resulted in some [winning Flash Lite Components][4] being developed. From that article you can download and play with a few other components. These all appear to follow the same structure as the components created by Nokia.

### Adobe examples

The Flash Mobile blog has some [Flash Lite UI Component Examples][5] which are intended for internal use only and aren't documented. Apparently they are very lightweight, so could be a good example of how to develop components, and were developed by the Adobe team. Closer inspection reveals they aren't especially flexible nor reusable. They are too lightweight! Yes they use less memory, but they haven't taken into account the need for different sizes and purposes that the Nokia components have. [The page that contains the examples][5] has some other great Flash Lite resources and is well worth further investigation.

### Shuriken Framwork

[Shuriken Components][6] is a framework for creating Flash Lite 2.x+ components, and is the work of one solo developer [Jesse Warden][7]. These components are far more developer centric, resulting in a very light SWF file, with as many elements as possible drawn dynamically. This framework requires lots of developer input, and is closest in style to the framework we have been working on recently. My concern about this framework is it ties the presentation to the logic code too closely. As a resource its great if you want to go down the path of creating assets dynamically though, with plenty of code to play with and learn from. Sadly, there's a lack of documentation (unless I missed it, feel free to chip in Jesse if you find this article).

### Conclusion

So in summary, it looks like plenty of people have thought about making Flash Lite component libraries, but really only got to the stage where they were able to teach others how to make those libraries using their ideas. Not many people seem to have taken them up on this, but since we are looking to develop our own components anyway, this seems plenty to go on.

## Installing components

### Installing components using MXP files

The easiest components to install were those which used MXP files to manage the installation. These then run the Adobe Extension Manager which installs the following:

  * Install .fla files containing the assets for the component into your default Flash components folder e.g '[INSTALL PATH]\Flash  
    CS4\en\Configuration\Components\Forum Nokia&#8221;
  * Install class .as files containing the logic of the component into your default Flash classpath, e.g. '[INSTALL PATH]\Flash  
    CS4\en\Configuration\Classes\com\forumnokia&#8221;

To add components now, all you need to do is drag them from the components window inside Flash CS3/CS4 into your .fla for your app.

In the case of the forum nokia components, it wasn't quite this simple, they required me to download an additional library and manually add it to the classes folder. It would have been great if the MXP file had done this for me. A point to consider when designing your own components I feel - make it as simple as possible to start using components as quickly as possible. If an automated feature doesn't take care of the whole install process, the entire process may as well be manual, since the automation tricks you into thinking its taken care of everything.

### Installing components manually

In the absence of an MXP file (neither Shuriken nor the Adobe components came with MXP's) I found I had to open up the .fla file of the component, copy the component into the .fla for my app, and then copy the class into my classpath. It works, but it feels hacky and I'm sure there's a better way - perhaps just by making an MXP myself.

## Creating and using components

Forum Nokia produced their [guide to using and creating Flash Lite Components][8] this June. This is an excellent guide and covers many of the topics I had planned to go into here. Read through it to learn how best to create and package your components for reuse. It covers topics I won't go into here such as

  * how to package MXP files, including custom icons and demos to display within the Flash IDE
  * how to enable parameters which can be edited from within the IDE using the component inspector
  * considerations when planning which features to include in your component

## Skinning visual elements

The Nokia components have been designed to make it apparently easy to customise the components. Within the fla file visual elements are placed in a folder structure that can be copied so new skins based on the originals can be added. Providing they share the same names, linkage id's and positions of the original skin, these new assets can easily be swapped for the originals to create a new skin, but you are restricted to the basic structure defined in the master component.

Where a number of states are used there is a folder for each state within the skin. Personally, I'd like to see a way of changing simple elements like colours dynamically to reduce the amount of visual elements required. The Shuriken Components seem to take this approach, drawing the components dynamically for all states instead of relying on visual assets.

The Nokia components also manage state by hiding the various states and swapping between them, which isn't great for memory usage as it increases the amount of MovieClips on the stage at a given time. I'd experiment with removing them from the stage when they weren't needed instead of hiding them.

## Scaling visual elements

The Nokia Components visual elements are cut up so they are scalable, which means their width and height can be altered dynamically without distortion. This has been achieved by separating out intricate elements such as rounded corners, edges and base backgrounds. The AS Class that manages the component then looks for a placeholder movieclip the developer places within the stage and resizes all the visual elements using a scaling multiplier to match the dimensions of the placeholder.

The placeholder technique is a clever one, and a great idea for visual developers. It does mean more movieclips on the stage though, and places all the control in the hands of the Flash visual IDE. In our own apps, I would ensure the components could accept a width and height submitted to the AS Class using its API instead of relying on a placeholder, which would reduce the size of the final SWF and moves control of the components back into the apps Classes.

Since the Shuriken framwork uses dynamic resources these components also scale very nicely.

## Targeting different devices

Nokia have considered device targeting, and use the placeholder technique combined with multiple frames to manage different sizes (its all explained in the [guide to using and creating Flash Lite Components][8]). I'm not a fan of adding frames into the stage, and would perhaps use a build process, perhaps with rake and MTASC to generate different swf's with different resource sizes. That's a blog post for another day for sure!

## Conclusions

Nokia have done some great work in this field, laying the ground for people to develop custom components. However, I feel their components may be a little too bloated for many existing devices to cope with. I'd love to hear some feedback from them on this - do they not feel their recommended methods result in swf's that are simply too large, and lead to high memory usage apps? There is no denying the ease of use and installation of these components though.

I feel that taking things forward, we can learn from both Nokia and Jesse Warden's Shuriken Framework, the space is wide open for someone to come up with a well documented and useable yet relatively light and optimised framework and set of sample components for Flash Lite. Are you working on such a thing? Leave your comments and thoughts below. I'm off to work on my own ideas now!

## Key references and people to follow&#8230;

* [Forum Nokia][9]
* [Mark Doherty of Adobe][10]
* [Jesse Warden][11], Flex and Flash RIA dev
* Pinbadge Actionscript image care of Joe Pemberton of fellow mobile UI guys [Punchcut][12] <a rel="cc:attributionURL" href="http://www.flickr.com/photos/joepemberton/">http://www.flickr.com/photos/joepemberton/</a> / <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/2.0/">CC BY-NC-ND 2.0</a>
* [Ribot][13], the mobile user interface team behind the project I'm working on that inspired this research - you'll be hearing more about Flash Mobile components from us in the coming months methinks&#8230;

 [1]: http://www.flickr.com/photos/joepemberton/
 [2]: http://www.forum.nokia.com/info/sw.nokia.com/id/d2336af2-0953-40a6-8dae-b80d368dead1/Adobe_Flash_Lite_2_x_Components_for_Mobile_Development.html
 [3]: http://www.flashmobileblog.com/2008/07/19/flash-lite-11-and-flash-lite-20-components/
 [4]: http://wiki.forum.nokia.com/index.php/Mobile_Design_Challenge_part_2
 [5]: http://www.flashmobileblog.com/examples/
 [6]: http://code.google.com/p/shurikencomponents/
 [7]: http://jessewarden.com/about
 [8]: http://www.forum.nokia.com/info/sw.nokia.com/id/332b6e95-b173-4b58-8552-4639795212f9/Guide_to_Flash_Lite_Components.html
 [9]: http://www.forum.nokia.com/
 [10]: http://www.flashmobileblog.com/
 [11]: http://jessewarden.com/
 [12]: http://www.punchcut.com/index.php
 [13]: http://ribot.co.uk/