---
title: How I rebuilt my website in the modern age
author: Mark Kirby
layout: post
date: 2016-06-02
excerpt:
url: /2016/how-I-rebuilt-my-website-in-the-modern-age
---

I'm rebuilding this website. Its 2016. So, no more WordPress.

## What do I want to achieve?

* A place to publish posts [that I own, even if I do post them to Medium as well](https://adactio.com/journal/9694)
* An easy way to list talks I've given, and to get in touch to book me for more ([if anyone still does that](https://remysharp.com/2016/04/25/ffconf-2016-cfp))
* A place to publish my training materials

...And I want to be able to create it all using Markdown, locally.

## There are a few steps I need to take.

* Pick a blogging/publishing platform, which, due to my desire to use Markdown locally will need to be a [static site generator](https://www.staticgen.com/). TLDR: [Hugo](https://gohugo.io/)
* Host the content somewhere it can live on and be accessed in a raw form, even if I am no longer around. TLDR: [Github](https://github.com/markirby/mark-kirby.co.uk), which also covers the version control
* Decide where to host the live site. Considering [Dropbox and Github](https://alexcican.com/post/guide-hosting-website-dropbox-github/)
* Figure out how to quickly deploy to my Host

## Design

### Font

The starting point for me was to pick a font.

Some decisions:

* **Which font provider?** Last I worked with webfonts, I made use of the now shuttered local service [fontdeck](http://blog.fontdeck.com/) and [Typekit](https://typekit.com/). As my budget is limited, and I'm no designer, it seems the best place to find fonts now is *[Google Fonts](https://www.google.com/fonts)*.
* **Serif or sans-serif?** [According to this infographic](http://visual.ly/serif-vs-sans-final-battle), sans-serif is the way forward. Medium uses serif however, and it seems to be gaining ground. Serif for me.
* **Which font?** Filtering Google fonts for 'Sans serif', 'Serif' and 'display' turns up plenty to pick from, including Google's own [Noto](http://www.google.com/get/noto/) collection.

Google Fonts is very easy to set up.

To use the same fonts as this site, add this to the html head tag:

    <link href='https://fonts.googleapis.com/css?family=Noto+Serif:400,400italic,700' rel='stylesheet' type='text/css'>

...and to the css:

    font-family: 'Noto Sans', sans-serif;

### Text and vertical rhythm

### Grid system
