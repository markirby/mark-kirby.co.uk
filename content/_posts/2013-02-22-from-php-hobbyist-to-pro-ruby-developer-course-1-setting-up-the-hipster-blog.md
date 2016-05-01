---
title: From PHP hobbyist to pro Ruby developer course – 1, Setting up the hipster blog
author: Mark Kirby
layout: post
date: 2013-02-22
url: /2013/from-php-hobbyist-to-pro-ruby-developer-course-1-setting-up-the-hipster-blog/
dsq_thread_id:
  - 1098596036
categories:
  - post
---
This is the first part of a longer course I'm developing for an Intern I've hired who we are guiding through the process of becoming a 'pro developer'. In time these notes will form part of a larger post.

## Ensure you are on a Mac or Linux machine

None of this is going to work if you are using Windows, so the first step is to install Linux. [Download the latest version of Ubuntu][1], and get it installed on your PC.

## Setup a GitHub account

If you don't have one, [set up your GitHub account][2], where you can store your code and show it off!

Ensure you have set up your .ssh public/private keys, there is [good documentation on GitHub][3].

## Learn the basics of Git

[Working through this tutorial][4] will get you up and running, and handily, it focuses on Octopress as an example!

*Use the [Code School tutorial][5] after for a second perspective if you wish.*

## Read the first chapter of The Well-Grounded Rubyist

It helps to have an understanding of where Ruby stores files to enable you to happily install Octopress and its dependencies, so reading the first chapter of our core course text - The Well Grounded Rubyist will give you that grounding.

## Set up RVM

Next you need to set up RVM to manage your gemsets and ruby versions. [First follow this tutorial][6] which will explain why RVM is so useful and how to get started.

## Install and setup Octopress

Octopress is blogging platform of choice for the cool kids. It lets you store all your posts in MarkDown and uses Git to keep them versioned. You can host it on Github Pages, Heroku or your own choice of platform.

  * [Follow the standard guide][7]s - don't forget to use RVM to set your gemset location and Ruby version.
  * Consider using [POW][8] if you haven't already

## Set up your plugins

I recommend (sign up for an account if you haven't already) hooking into:

  * Twitter
  * Delicious
  * Github

Get some content on them all first!

## Write your first blog post and publish

Write your first post, on your starting point and current experience, and what your goals are after completing the course.

Write your second post on the process of setting up Octopress and RVM and your thoughts on the platforms so far.

 [1]: http://www.ubuntu.com/
 [2]: https://github.com/
 [3]: https://help.github.com/articles/generating-ssh-keys
 [4]: http://try.github.com/levels/1/challenges/1
 [5]: http://www.codeschool.com/courses/try-git
 [6]: http://net.tutsplus.com/tutorials/why-you-should-use-rvm/
 [7]: http://octopress.org/docs/
 [8]: http://pow.cx/