---
title: Why the Digg bar sucks
author: Mark Kirby
layout: post
date: 2009-04-21
url: /2009/why-the-digg-bar-sucks/
dsq_thread_id:
  - 1086898400
categories:
  - post
---
Digg have just launched a new feature called the Digg bar. To see this in action, put the url digg.com/ in front of any website, e.g. <http://digg.com/http://bbc.co.uk>. What this does is create a shortened URL, like tinyurl et al, and redirects you to that URL. You then see a toolbar embedded in the website which allows you do certain Digg related tasks.

This is a major f**k up. Here's why:

## 1 - Its helping to break the web (along with tinyurl, bit.ly etc)

First and foremost as Jeremy Keith mentioned last week, [URL shortening services break the web][1]. They are great until the service owner decides to close them down, at which point you have broken links everywhere. The point of the web is that URLs remain in place, and if the owner of the site chooses to close the site, he can redirect them. The site owners should own the links, not a third party application.

## 2 - It could see your rank drop in Google

The Digg URL shortening service doesn't redirect you to the original site when you click on the link, it puts you on the Digg site, and shows the original site inside a frame. This is how they get their toolbar in place. If anyone Diggs the link from the toolbar, it Diggs the site on their servers. This means the links won't be considered to point to your site by Google, and you get no ranking increase or benefit. Where people would have previously linked to your site, they now link to Digg.

## 3 - It provides a bad user experience to users of your site

* When users visit your site via a Digg URL, they see that URL in the address bar
* If they follow a link on your site, the URL in the address bar remains unchanged
* If they want to bookmark the site in the Digg toolbar, they bookmark the URL they arrived on - regardless of the page they are on
* If they want to bookmark the site in their own bookmarking service (such as their browser, or a delicious plugin), they bookmark the Digg URL, and the page they arrived on, not the one they are currently on
* If they close the toolbar at any point, they are returned to the page they arrived on
* Here's the killer - if they leave your site, they still see the Digg URL, and would bookmark the URL they arrived on

In summary, this is a bad idea! Let's hope it isn't widely used, or Digg fix it soon.

In the meantime, here's a post on [how to remove the Digg bar from your blog][2].

 [1]: http://adactio.com/journal/1566/
 [2]: http://www.bloggingtips.com/2009/04/07/how-to-remove-the-digg-bar-from-your-blog/