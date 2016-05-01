---
title: How to create a local copy of a wordpress site
author: Mark Kirby
layout: post
date: 2008-05-12
url: /2008/how-to-create-a-local-copy-of-a-wordpress-site/
dsq_thread_id:
  - 1086898526
categories:
  - tutorial
tags:
  - wordpress
---
This article explains how you set up a copy of a WordPress site on your computer. This can be very useful if you need to find out what will happen if you do an upgrade, for testing out and playing with plug ins, and for developing WordPress themes.

This article is aimed at PC owners. I use both PC and Mac, and this time I had to do this task on my PC. The principles can also be applied to a Mac, and I have already written a group of articles for Mac which will be linked to from this article that achieve the same results.

We&#8217;ll be going through the following steps:

  * Installing PHP, MySQL and Apache on a PC to form the &#8216;local host&#8217;
  * Copying the WordPress install over from your remote host
  * Copying the database

Here we go&#8230;

## Installing PHP, MySQL and Apache

### Mac users

Go to my tutorial on [setting up PHP, MySQL and Apache on a Mac][1].

### PC users

There are many packages available that allow a one click installation of PHP, MySQL and Apache on a PC. I looked at a few and settled for [WAMP][2], as its kept up to date, is relatively lightweight and easy to use.

  1. Start by [downloading WAMP][3].
  2. Run through the installation, accepting the defaults.
  3. You should now see a new icon in your taskbar &#8211; that&#8217;s WAMP! If you don&#8217;t see it, just start the software by clicking on the icon, or locating it in your programs.
  4. Start your webserver by left clicking on the icon in the taskbar, and selecting Start All Services. Nothing will happen &#8211; the services run behind the scenes.
  5. Open a browser and go to [http://localhost/][3], if you see the WampServer homepage then you&#8217;re ready to start setting up wordpress.

## Copying the WordPress install over from your remote host

Next you are going to download WordPress from your remote host and set it up as a local site.

  1. Using your preferred FTP client (I use the excellent free [filezilla][4]) download all the files in and including the folder associated with your WordPress install. If your WordPress is in a folder called &#8216;wordpress&#8217;, you need to download the whole folder.
  2. Place the downloaded folder into the WAMP folder www. This is where all files to be run on the webserver need to be placed. This can be found by clicking the WAMP icon and selecting the &#8216;www&#8217; directory option. Its also in C:/wamp/www
  3. Once the downloads are complete, go to http://localhost/the\_name\_of\_your\_wordpress_folder, you should see a database error. If you do, its all worked! If you see a server error, its likely to be your .htaccess file &#8211; try removing it temporarily.

## Copying the database

Now you need to get all the tables associated with WordPress out of the remote server, and onto the local server. You&#8217;ll probably need to use PHP MyAdmin, which most hosts include by default. If this isn&#8217;t available and your using a version of WordPress which is later than 2.0.3 you can try the [wordpress db backup plugin][5].

  1. Log in to PhpMyAdmin
  2. Select the database containing your WordPress tables, note down its name
  3. Select the Export Option
  4. Select all the tables related to this WordPress installation
  5. Ensure you download as SQL, check the Data box, so all data is downloaded &#8211; complete and extended inserts. Check the box so you save as file and select no compression (it sometimes goes wrong).

Next you need to import this data into phpMyAdmin on your local WAMP server.

  1. Start PhpMyAdmin by clicking on the WAMP icon and selecting the option phpMyAdmin
  2. On the homepage there is an option called &#8216;Create New Database&#8217;, enter the name of the database from your remote server and click create.
  3. Click on your newly created database in the left hand column.
  4. Click import and browse to your downloaded file
  5. Click &#8216;go&#8217; and all the data should be imported
  6. If you have problems with the size of your datafile, there are other methods &#8211; send me a mail, or add a comment and I&#8217;ll go into them. At the moment I&#8217;m trying to keep this document as simple as I can.

Next you need to set up the same username and password on this local database as is used on your remote database. You will have used these to log in to phpMyAdmin on your remote server, they are also in your wp_config file.

  1. Go to the homepage of the local phpMyAdmin and select &#8216;Privileges&#8217;
  2. Click the add a new user option
  3. Under username enter the username from the remote host, under host select localhost, under password and re-type enter the password from the remote host. Under privileges check all. Click go.

A note on user permissions &#8211; I had some issues with the host type &#8211; basically, in the wp-config file you need to check the DB_HOST entry. If the host is &#8216;localhost&#8217; the user in the local mySQL should be set to host &#8211; localhost. If the host is &#8216;127.0.0.1&#8217; the user should be set to host &#8211; any.

Finally, you need to change a couple of fields inside the wordpress database to ensure the correct web address is used.

  1. Go to the local phpMyAdmin
  2. Select the database containing wordpress
  3. Select the table wp_options
  4. Select browse
  5. Locate the option &#8216;siteurl&#8217; and edit it so the option\_value becomes http://localhost/local\_folder_name
  6. Locate the option &#8216;home&#8217; and edit it so the option\_value becomes http://localhost/local\_folder_name (this might be on the second page of database fields).

And you should now be done check http://localhost/local\_folder\_name.

## Whats Next

Keep an eye out for many more WordPress tutorials over the coming weeks. I&#8217;m currently freelancing and am working on a bunch of WordPress sites for various people, as well as working on some open source themes, premium themes and plug-ins. Email me if you need any assistance &#8211; kirby [dot] mark [at] gmail [dot] com.

 [1]: http://mark-kirby.co.uk/2007/set-up-php-5-apache-2-and-mysql-5-on-os-x-leopard/
 [2]: http://www.en.wampserver.com/
 [3]: http://www.en.wampserver.com/download.php
 [4]: http://filezilla-project.org/
 [5]: http://www.ilfilosofo.com/blog/wp-db-backup/