---
title: The Mobile context
author: Mark Kirby
layout: post
date: 2011-02-24
url: /2011/the-mobile-context/
dsq_thread_id:
  - 1086898447
categories:
  - post
---
The mobile context is being discussed a great deal at the moment in regards to mobile web. What does it mean? How can we use it? How can we make assumptions about the context a user is in, based on their device?

[<img class="alignnone size-full wp-image-856" title="IMG_2928" src="http://mark-kirby.co.uk/wp-content/uploads/2011/02/4025098447_59668094b3.jpeg" alt="" width="500" height="333" />][1]

To give a few examples of assumed mobile contexts, and ways sites might work around them:

  * I&#8217;m an airline, my user is on a mobile, they must be checking in, I&#8217;ll remove access to booking and focus on check in features
  * I&#8217;m a shop, user on a mobile, they must be looking for a store, I&#8217;ll serve up the address and a map and remove access to the shop
  * I&#8217;m a newspaper, user on a mobile, they must be on the move, only want to know the top 3 stories

Perhaps the user was not in those contexts, they were at home, booking a flight, online shopping or wanting to read the local news. On their mobile, in front of the tv or perhaps in bed. [Research showing how large a percentage of people use the mobile web at home has been done][2], lets not ignore this key fact.

## The number one crime in the name of mobile context

A number of sites have taken to serving up different mobile content, and allowing **no access** to the remaining content on the site. Some even redirect users to a mobile site from any link, rendering urls you may want to use inaccessible.

This leads to a broken web, on mobile.

## The download speed argument

One main argument for reducing content on mobile is that the download speed is less, or bandwidth is more limited.

I often use my mobile at work and home to browse sites. I am sure I&#8217;m not the only one.

I also often use my desktop in hotels and with a dongle.

**Mobile != low download speed**

## Other ways of guessing context

Recently I&#8217;ve heard suggestions of other, harder to measure ways of guessing context.

  * Detecting location using GPS
  * Detecting motion using GPS
  * Detecting download/connection

These are harder to measure, and still don&#8217;t accurately confirm context. If it were possible to accurately know the context the user is in, we still have a problem.

## Context != intent

I&#8217;m definitely moving, I&#8217;m definitely in a car. I&#8217;m going to look at your website.

This *still* doesn&#8217;t mean my intent is to find an address, or quickly use a news site and check the most popular stories. Context can&#8217;t predict the way a user is going to use the site.

**Mind reading is no way to base fundamental content decisions**

## So what can you be sure of?

You can be sure the user has a smaller screen. Content may need rearranging, using techniques such as [Responsive Web Design][3].

Content may need to be somewhat repurposed or refocused. This should relate to the priority you set things in on the desktop.

Low priority items may need to be removed. Examples include:

  * Duplicate navigation
  * Large adverts
  * Superfluous imagery
  * Large interactive features

You may wish to give higher priority to certain features **research** has shown people are more likely to need when on a small mobile device (your own research, into **your** users).

## My guidelines to safely changing sites based on device:

  * All urls should resolve and present the core content available on that page to any device
  * That&#8217;s it really!

&nbsp;

 [1]: http://www.flickr.com/photos/sansharma/4025098447/
 [2]: http://thefonecast.com/News/tabid/62/EntryId/3602/Mobile-shopping-is-popular-when-watching-TV-says-Orange-UK-research.aspx
 [3]: http://www.alistapart.com/articles/responsive-web-design/