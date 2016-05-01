---
title: How to downgrade Ruby on Rails
author: Mark Kirby
layout: post
date: 2008-02-19
url: /2008/how-to-downgrade-ruby-on-rails/
dsq_thread_id:
  - 1086898213
categories:
  - tutorial
tags:
  - ruby-on-rails
---
I&#8217;m learning to use Ruby on Rails at the moment on weekends and after work for a project I&#8217;m working on for a friend. The problem is, I&#8217;m learning using the book Agile Web Development for Rails, which is written for Rails version 1, and I&#8217;ve installed Rails version 2 on my Mac.

The solution is to roll back, and downgrade Rails to a previous version.

Open up terminal

First check the exact version of Rails you are using

<div class="codesnip-container" >
  rails -v
</div>

Uninstall that version, for example, mine is 2.0.2

<div class="codesnip-container" >
  sudo gem uninstall -v 2.0.2 rails
</div>

Then install the previous version you want. I want the last release of version 1, thats 1.2.6

<div class="codesnip-container" >
  sudo gem install rails -v 1.2.6
</div>

&#8211;include-dependencies

Now I check again to be sure the correct version is installed

<div class="codesnip-container" >
  rails -v
</div>

If you need to use pagination, and to follow through with Agile Web Development for Rails you will, use:

\# Note: you&#8217;ll need to have Subversion installed  
ruby script/plugin install svn://errtheblog.com/svn/plugins/classic_pagination  
ruby script/plugin install svn://errtheblog.com/svn/plugins/will_paginate