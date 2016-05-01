---
title: Optimising visual components for Flash Mobile
author: Mark Kirby
layout: post
date: 2009-08-14
url: /2009/optimising-visual-components-for-flash-mobile/
dsq_thread_id:
  - 1086898180
categories:
  - post
---
I&#8217;ve been working on some a visual component for a flash mobile app, and thought I&#8217;d use it to give you a quick case study on how important it is to optimise everything for mobile. Although this example came from an app for Flash Mobile and Flash Lite, the same problem is suffered by iPhone devs, and anyone developing mobile content.

## The component &#8211; a list of data

I&#8217;m trying create a list of data which can be navigated by pressing up and down on a nav pad. Each time you navigate, the next item in the list comes into view. You can only see one item at a time.

## The intensive option &#8211; a basic list

The first time I did this, I created a long list of data, and showed the first item. Pressing up and down simply moved the list up and down as this diagram demonstrates:

<img class="alignnone size-full wp-image-576" title="ComponentGrid - Intensive method" src="http://mark-kirby.co.uk/wp-content/uploads/2009/08/ComponentGrid-Intensive-method1.png" alt="ComponentGrid - Intensive method" width="375" height="423" />

There are a couple of issues with this:

  * Its uses up a lot of memory as all the list items have to be attached to the stage from the beginning
  * You can&#8217;t have lists looping round, you can only go to each end

## The improved option &#8211; reusing movieclips

As the following diagram will hopefully explain, there is another way. You can have just 3 movieclips, and change the position and content of each as required. This saves memory as you only have 3 movieclips on the stage per component and you can loop round and round.

<img class="alignnone size-full wp-image-580" title="ComponentGrid - good example" src="http://mark-kirby.co.uk/wp-content/uploads/2009/08/ComponentGrid-good-example1.png" alt="ComponentGrid - good example" width="427" height="690" />

Each coloured square represents one movieclip.

As you can see, this is relatively simple to implement and results in a much more efficient and flexible component. Any thoughts, let me know.