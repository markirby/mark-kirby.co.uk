---
title: Using Hugo with asset management, SASS and Gulp
author: Mark Kirby
layout: post
date: 2016-05-02
excerpt: 
url: /2016/using-hugo

---

I wanted to use Hugo to build the new version of this site.

On its own, Hugo has the following issues:

* No asset management support, hence
  * No SASS
  * No minification of JS
* The public folder isn't deleted

I've decided to use Gulp to setup the asset pipeline and run hugo.

This article takes you through all the steps: http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/

## Install base dependencies

[Install Node](https://nodejs.org/en/) if you need to.

    cd {root}
    npm init

Install gulp globally to handle the process:

    npm install gulp -g
    
Install gulp in the project, saving it to the devDependencies in the package.json file so it can be installed easily in future by running `npm install`.

     npm install gulp --save-dev
     
     
## Setup task to build content





## Building content

Create a post:

    hugo new _posts/2016-05-03-good-to-great.md