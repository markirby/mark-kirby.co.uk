---
title: How to install wordpress using ssh and svn
author: Mark Kirby
layout: post
date: 2008-05-23
excerpt: |
  |
    How to install wordpress on a remote server that has ssh access, or on your own local machine, using svn. 
    
    This will enable you to install Wordpress with a single line of code and update Wordpress with a single line of code, from then on.
url: /2008/how-to-install-wordpress-using-ssh-and-svn/
dsq_thread_id:
  - 1086898761
categories:
  - tutorial
---
This tutorial will allow you to install wordpress on a remote server that has ssh access, or on your own local machine, using svn. This will allow you to do the following:

  * install WordPress with a single line of code
  * update WordPress with a single line of code, from then on

This could save you hours of work if you manage several wordpress sites and don&#8217;t use WordPressMU.

## What you will need

If you are installing this on a mac, and you have [set up a webserver][1] you are ready to go!

If you are are installing this on windows you will need to [install svn on windows][2] first. Seek out the Win32 package. You will also need a webserver &#8211; you can follow my post on how to [install wordpress on a local machine][3] to figure that one out.

If you are installing this on a remote server, perhaps your webhost, you will need ssh access.

If you understand everything so far, your going to find the next step very easy. If not, you should probably read my [post on SVN][4] first. Then read on.

## Step 1 &#8211; Getting to the place you want to install WordPress

Firstly you need to get to the position on your server, be it on Windows, Mac or a remote server, where you want to install your WordPress software. Once you reach that point, its the same wherever you are.

### On WIndows

Go to start -> click Run type &#8216;cmd&#8217; and click OK &#8211; this loads up the command line.

Figure out where you want the wordpress installation to go, on my machine I use WAMP so for me its C:\wamp\www

Type the following into the command line window (and press enter after):

<pre>cd C:\wamp\www</pre>

Where &#8216;C:\wamp\www&#8217; is the path you want to use.

Type:

<pre>mkdir directoryname</pre>

Where directoryname is the name of the folder you want the WordPress installation to go into.

Type:

<pre>cd directoryname</pre>

Where directoryname is the name of the folder you just created.

You&#8217;re ready for step 2.

### On Mac

Open up terminal

Figure out where you want the wordpress installation to go, I use my Sites folder.

Type the following into terminal:

<pre>cd Sites</pre>

Where &#8216;Sites&#8217; is the path you want to use.

Type:

<pre>mkdir directoryname</pre>

Where directoryname is the name of the folder you want the WordPress installation to go into.

Type:

<pre>cd directoryname</pre>

Where directoryname is the name of the folder you just created.

You&#8217;re ready for step 2.

### On a remote server

You will need the following details:

  * Your ssh username
  * Your ssh password
  * Your IP Address

You may need to ask your host for some of these details, and they may not give them to you either.

#### Connecting to your host using Windows

First [install PuTTY][5] (go for the installation that just says PuTTY) and start the software.

Under Host name or IP address, enter the host name or IP address of your web server.

Once connected, enter your login name.

Then enter the password.

Skip the Mac section and continue.

#### Connecting to your host using a mac

Log in to your remote server using the command

<pre>ssh username@192.168.0.100</pre>

Where username is the username you have that allows ssh access, and 192.168.0.100 is the IP address of the server you want to log in to.

#### Navigating to your folder

ow navigate to the folder you want to install wordpress in.

<pre>cd /username/www</pre>

Where &#8216;/username/www&#8217; is the path to the place where your websites are all stored on your remote server.

Type:

<pre>mkdir directoryname</pre>

Where directoryname is the name of the folder you want the WordPress installation to go into if that doesn&#8217;t work you may need to use your hosts control panel to make the folder and then continue.

Type:

<pre>cd directoryname</pre>

Where directoryname is the name of the folder you just created.

Now move on to step 2.

## Step 2 &#8211; Install WordPress

First you need to select your version, I would always go for the latest, but what is that?

Go to this website &#8211; <http://svn.automattic.com/wordpress/tags/> thats the Subversion repository (if you don&#8217;t understand what that means don&#8217;t worry). Scroll down to find the latest version at the bottom of the page.

Bearing in mind the version you want, enter the following into your command line window:<br id="hb4q" />

<code id="dnhd">svn co http://svn.automattic.com/wordpress/tags/2.5.1/ .</code>

Where 2.5.1 is the version you want to use.

Set up a database, set up your wp-config as normal and your ready to go!

## Step 3 &#8211; Update WordPress using SVN

Updates are much easier now. Updating with SVN will ensure no folders are overwritten and any unused files are removed.

Do a backup first to be on the safe side, and wake sure your database is backed up.

Using the instructions above in step 1, navigate to the folder containing your WordPress installation.

Once you are inside the folder, enter the following:

<code id="dnhd">svn sw http://svn.automattic.com/wordpress/tags/2.5.2/ .</code>

Where 2.5.2 is the version you want to update to.

You&#8217;re done!

 [1]: http://mark-kirby.co.uk/2007/set-up-php-5-apache-2-and-mysql-5-on-os-x-leopard/
 [2]: http://subversion.tigris.org/project_packages.html#binary-packages
 [3]: http://http://mark-kirby.co.uk/2008/how-to-create-a-local-copy-of-a-wordpress-site/
 [4]: http://mark-kirby.co.uk/2008/how-to-set-up-and-use-subversion-svn-on-os-x-leopard/
 [5]: http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html