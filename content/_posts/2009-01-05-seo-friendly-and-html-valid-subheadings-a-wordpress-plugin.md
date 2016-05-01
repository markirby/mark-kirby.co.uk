---
title: SEO friendly and HTML valid subheadings – a WordPress plugin
author: Mark Kirby
layout: post
date: 2009-01-05
url: /2009/seo-friendly-and-html-valid-subheadings-a-wordpress-plugin/
dsq_thread_id:
  - 1086898129
categories:
  - post
---
I recently created an SEO friendly WordPress theme for [Ribot][1] which meets the following 2 key SEO requirements:

  * have the H1 on archive pages and the homepage set to the title of those pages, or the name of your blog
  * set the H1 on single posts or pages to be the title of the post/page

This causes an issue with subheadings when composing your posts. In the category pages the articles titles will be the H2, but in the individual posts the articles titles will be the H1. Do you set your subheadings to start at H2 and please the single pages, or H3 and please the category pages?

I created the [SEO friendly and HTML valid subheadings plugin][2] to resolve the issue by replacing subheading tags with the following on pages where the plugin tag is added:

- H2 into H3  
- H3 into H4  
- H4 into H5  
- H5 into H6  
- H6 into P.headingSix

 [1]: http://ribot.co.uk/
 [2]: http://wordpress.org/extend/plugins/seo-friendly-and-html-valid-subheadings/