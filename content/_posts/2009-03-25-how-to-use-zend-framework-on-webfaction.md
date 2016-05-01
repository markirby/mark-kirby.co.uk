---
title: How to use Zend Framework on Webfaction
author: Mark Kirby
layout: post
date: 2009-03-25
url: /2009/how-to-use-zend-framework-on-webfaction/
dsq_thread_id:
  - 1086898383
categories:
  - tutorial
---
A quick tutorial on setting up the Zend Framework on a Webfaction host. The problem I ran into was that Zend requires the domain point to the public subfolder, but Webfaction requires the domain point to the root of the application, otherwise the error &#8220;Not application mounted at the root of this domain&#8221; is shown.

Here&#8217;s how to avoid the issue.

  1. Create a regular Static/CGI/PHP application called <appname> within the panel
  2. Place the Zend Framework code within the <appname> folder created inside &#8220;/home/<username>/webapps/<appname>&#8221;
  3. Select the option in Panel for adding a new application
  4. Select the &#8220;Symbolic link to static/cgi/php app&#8221; as app type
  5. Name the app <appname-symlink>
  6. In the extra info field add an absolute path to the public folder, such as &#8220;/home/<username>/webapps/<appname>/public&#8221;
  7. Create a new website named <appname-website> (or whatever you like) which uses the application <appnamesymlink>
  8. Create a domain and link it to the website <appname-website>