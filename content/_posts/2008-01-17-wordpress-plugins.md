---
title: WordPress plugins
author: Mark Kirby
layout: post
date: 2008-01-17
url: /2008/wordpress-plugins/
categories:
  - post
---
When setting up a new WordPress installation you ought to have some purpose for the blog, and there will probably some features that will enable you to achieve this purpose.

For example, I am working on a blog for someone who sells coffee, he wants to minimise spam comments and have great SEO.

At work, we use WordPress as an easy way to manage documentation and tutorials, so we need highlighted and coloured output of example code, and the ability to put H1 and H2 in the posts.

Luckily there a plugins that help us to achieve these goals, so here, under the desired features, I have listed the best plugin&#8217;s for WordPress.

1. No spam

Whatever your working on you won&#8217;t want spam clogging up your posts.

Install [Askimet][1] to get around the Spam problem. It comes preinstalled on the latest versions of WordPress.

2. Advanced features of the tinyMCE editor

[TinyMCE advanced][2] takes care of these.

3. Control of title tags

Use [SEO Title tag plugin][3] to enable you to choose your own titles and not have to put up with defaults.

Don&#8217;t forget to put this code between your title tags when setting it up (in Presentation -> Header)

<div class="codesnip-container" >
  <title><?php if (function_exists(&#8216;seo_title_tag&#8217;)) { seo_title_tag(); } else { bloginfo(&#8216;name&#8217;); wp_title();} ?></title>
</div>

4. Change permalink structure

Ensure redirects from the old style with [Deans Permalinks Migration][4]

5. I need a contact form

The [WordPress Ready Contact Form][5] is easy to set up (so long as you read the documentation) and fully modifiable.

6. I want to include photo&#8217;s from Flickr

[Use the Flickr Photo Album for WordPress][6] plugin

7. I want regular wordpress database backups emailed to me

Use the [WordPress DB Backup plugin][7]

8. I want to use Google Analytics

The [Google Analytics for WordPress plugin][8] lets you quickly add the analytics tag to every page and automatically tracks downloads and outbound links

 [1]: http://akismet.com/
 [2]: http://www.laptoptips.ca/projects/tinymce-advanced/
 [3]: http://www.netconcepts.com/seo-title-tag-plugin/
 [4]: http://www.deanlee.cn/wordpress/permalinks-migration-plugin/
 [5]: http://green-beast.com/blog/?page_id=136
 [6]: http://tantannoodles.com/toolkit/photo-album/
 [7]: http://wordpress.org/extend/plugins/wp-db-backup/
 [8]: http://wordpress.org/extend/plugins/google-analytics-for-wordpress/