---
title: Date in a nice tone – a WordPress plugin
author: Mark Kirby
layout: post
date: 2008-11-18
url: /2008/date-in-a-nice-tone-a-wordpress-plugin/
dsq_thread_id:
  - 1086898889

---
We made a nice little WordPress plugin at Ribot whilst moving our blog from a bespoke system to a lovely new 2.7 WordPress installation.

'Date in a nice tone' displays the amount of time since a post or page was written in a nice friendly manner. Simply use <? wp\_date\_in\_a\_nice_tone(); ?> to display the date in your theme.

## Description

This is a simple plugin which lets you know in words, roughly how long its been since a post was posted. Its based on the amount of time in seconds since the post was made.

The following messages are displayed according to how long its been since the post was made:

* if over 3 years = “quite a long while ago…”
* if over 2 years = “over two years ago”
* if over a year = “over a year ago”
* if over 355 days = “around a year ago”
* if over 9 months = “almost a year ago”
* if over 6 months = “about half a year ago”
* if over a month = “more than a month ago…”
* if over 28 days ago = “around a month ago”
* if equal to or more than 8 days ago = “in the last month”
* if equal to or more than 5 days ago = “around a week ago”
* if equal to or more than 3 days ago = “a few days ago”
* if equal to or more than 2 days ago = “a couple of days ago”
* if more than an hour ago = “freshly baked”
* if less than or equal to an hour ago = “just now”

A month is assumed to be 31 days (therefore 'more than a month' is always accurate, regardless of the month in question, and since from 28 days to 31 days we say 'around a month ago', this is also accurate).

A year is assumed to be 366 days (therefore 'over a year ago' is always accurate, etc).

## Installation

1. [Download the plugin][1].  
2. Unzip the contents of the downloaded file to the /wp-content/plugins/ directory of your WordPress installation.  
3. Log in to your WordPress dashboard and activate the wp\_date\_with\_a\_nice_tone plugin that should now be visible in the list.  
4. You can now insert <? wp\_date\_in\_a\_nice_tone(); ?> anywhere in The Loop in your WordPress theme.

## Comments

Please leave some comments on our plugin here, and we'll happily do an update where we see fit.

 [1]: http://wordpress.org/extend/plugins/date-in-a-nice-tone/