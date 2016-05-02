---
title: Introducing FlexSlider2 manual direction controls extension
author: Mark Kirby
layout: post
date: 2012-07-20
url: /2012/flexslider-manual-direction-controls-jquery-plugin/
dsq_thread_id:
  - 1086898934

---
*Update - Nov 2012 - Thankfully due to a recent update this plugin is no longer needed. *

FlexSlider2 is a jQuery plugin that allows you to easily insert rotating banners, image galleries and app examples. They also automatically become responsive.

## The problem with FlexSlider2

Out of the box however it doesn't allow you to use custom HTML elements for the direction controls.

The default appears as you mouse over the gallery, looking like this:

[][1]

I had a need to use permanent navigation, always appearing, and with custom HTML which differed from the default.

Although FlexSlider2 allows you to set custom tabs (those dots at the bottom), there is no easy way of setting custom directional navigation.

So to fix the issue I wrote an extension to FlexSlider2

## My extension - Flexslider2+ManualDirectionalControls

[Download the extension here][2], you can start using it straight away, following the instructions on github.

In a nutshell, to add the functionality, all you need to do is include the javascript and do the following:

    $(‘.flexslider’).flexslider({
     directionNav: false
     }).flexsliderManualDirectionControls();

There are options you can pass, but this keeps it easy by looking for HTML elements named 'next' or 'previous' inside the '.flexslider' element and takes care of everything.

## Why didn't I just send an updated version of FlexSlider to github?

There was a discussion at [Hatch][3] of simply adapting FlexSlider2 to add the functionality and submit a pull request. I gave it some thought, but since the project currently has 55 issues, 4 pull requests and a great deal of discussion around features, I decided to take the law into my own hands.

  * The extension works by overriding a single aspect of the existing plugin, and then continuing with the original flow, so it doesn't break anything.
  * Its easy to use, with just one line of code needed to set it up
  * It can be used today, without having to worry about being unable to upgrade FlexSlider2 for fear of losing functionality (if you built using my flexslider branch, you could be stuck having to choose between versions)

 [1]: http://mark-kirby.co.uk/wp-content/uploads/2012/07/Screen-Shot-2012-07-20-at-14.55.18.png
 [2]: https://github.com/markirby/FlexSlider-ManualDirectionControls
 [3]: http://thisishatch.co.uk