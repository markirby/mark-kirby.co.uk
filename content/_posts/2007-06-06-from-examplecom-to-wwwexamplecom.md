---
title: From example.com to www.example.com
author: Mark Kirby
layout: post
date: 2007-06-06
url: /2007/from-examplecom-to-wwwexamplecom/
categories:
  - tutorial
---
Make sure your website does not appear when entering in the hostname without the initial www &#8211; this can lead to a [301 sabotage][1]. This is where a duplicate penalty could be triggered and get you knocked out of google.

Put this in your .htaccess file

RewriteEngine on  
RewriteCond %{HTTP_HOST} !^www\.example\.com [NC]  
RewriteCond %{HTTP_HOST} !^$  
RewriteRule ^/(.*) http://www.example.com/$1 [R=301,L]

 [1]: http://www.threadwatch.org/node/2817