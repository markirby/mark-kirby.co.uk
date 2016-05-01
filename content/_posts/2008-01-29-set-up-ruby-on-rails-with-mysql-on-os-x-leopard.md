---
title: Set up Ruby on Rails with mySQL on OS X Leopard
author: Mark Kirby
layout: post
date: 2008-01-29
url: /2008/set-up-ruby-on-rails-with-mysql-on-os-x-leopard/
dsq_thread_id:
  - 1086898000
categories:
  - tutorial
tags:
  - ruby-on-rails
---
I decided to start learning Ruby on Rails, apparently one of the best programming languages/frameworks out there. RoR (Ruby on Rails) comes pre-installed on Leopard, but its not the latest version, and its set up to work with SQLlite, not mySQL, which I want to use.

This tutorial will get you the latest version of Rails and let it work with mySQL. I have another tutorial which covers [how to install mySQL][1].

## 1 &#8211; Ensure you have installed X-code

This won&#8217;t work without XCode, so install the correct version first, from the Leopard DVD.

## 2 &#8211; Update Rails on Leopard

To update Rails to the latest version on OS X 10.5 simply open terminal and enter the following command:

<div class="codesnip-container" >
  sudo gem install rails &#8211;include-dependencies
</div>

If you want to clean up older versions of rails run this command:

<div class="codesnip-container" >
  sudo gem cleanup
</div>

## 3 &#8211; Install the mySQL Ruby Gem

I only know this works with the MySQL binary installation described [here][2]. So be warned!

<div class="codesnip-container" >
  sudo -s<br /> ARCHFLAGS=&#8221;-arch i386&#8243; gem install mysql &#8212; &#8211;with-mysql-dir=/usr/local/mysql
</div>

Pick the latest version of mySQL for Ruby when asked :

<div class="codesnip-container" >
  Select which gem to install for your platform (universal-darwin9.0)<br /> 1. mysql 2.7.3 (mswin32)<br /> 2. mysql 2.7.1 (mswin32)<br /> 3. mysql 2.7 (ruby)<br /> 4. mysql 2.6 (ruby)<br /> 5. Skip this gem<br /> 6. Cancel installation
</div>

I picked 3 &#8211; mySql 2.7 as thats the latest.

If you suffer issues try [this complete guide][3].

## 4 &#8211; Test it works

  1. Choose the location you want to put the code for a rails app in &#8211; I choose /Sites in my home directory in the following example.
  2. Navigate to the folder with terminal: <div class="codesnip-container" >
      cd Sites
    </div>

  3. Issue the rails set up command with database parameter: <div class="codesnip-container" >
      rails appname &#8211;database=mysql
    </div>

  4. Create a database called appname_development with your preferred tool such as cocoaMySQL
  5. Ensure there is a user called root without a password, if not, you will need to alter the file at appname/config.database.yml
  6. Navigate to the appname folder in terminal: <div class="codesnip-container" >
      cd Sites/appname
    </div>

  7. Run: <div class="codesnip-container" >
      rake db:migrate
    </div>

  8. Then startup <div class="codesnip-container" >
      ruby script/server
    </div>

  9. And go to locahost:3000 to see the app in action

If you have some problems, it is likely because the default binary mySQL from the website is not fully compatible at first with Ruby. To fix the problems, check out my post on [setting up MySQL on a Mac][4].

 [1]: http://www.mark-kirby.co.uk/2007/12/10/set-up-php-5-apache-2-and-mysql-5-on-os-x-leopard/
 [2]: http://www.mark-kirby.co.uk/2007/set-up-php-5-apache-2-and-mysql-5-on-os-x-leopard/
 [3]: http://trac.macosforge.org/projects/ruby/wiki/Troubleshooting
 [4]: /2007/set-up-php-5-apache-2-and-mysql-5-on-os-x-leopard/