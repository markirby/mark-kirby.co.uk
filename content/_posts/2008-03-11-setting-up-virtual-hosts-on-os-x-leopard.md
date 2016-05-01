---
title: Setting up virtual hosts on OS X Leopard to Lion
author: Mark Kirby
layout: post
date: 2008-03-11
url: /2008/setting-up-virtual-hosts-on-os-x-leopard/
dsq_thread_id:
  - 1086898621
categories:
  - tutorial
tags:
  - PHP
---
Here is a definitive guide to setting up virtual hosts on OS X, the instructions work on all versions from Leopard to Lion/Mountain Lion.

If you have lots of sites to test, you might want to be able to type a url into the browser, and see the site directly. To do that you need to modify your Mac's hosts file, and set up a Virtual Server.

_Updated Feb 2012_

## Preparation

Decide upon the URL you want to use, I'm going for mark-kirby.dev in this example.

Decide where you want the files to go that will appear for this url, and place them there on your computer. I'm using /Users/username/Sites/mark-kirby for this example.

Start apache with terminal:
    
    sudo apachectl start

## 2 - Edit the hosts file

Open the file at '/private/etc/hosts'
  
Since this file is hidden, you will need to need to check the option "open hidden files" if your text editor has one, or use the terminal to open the file directly.

    nano /private/etc/hosts
  
Alternatively, you could:

  1. Open finder
  2. click on go
  3. select "Go to folder"
  4. enter in /private/etc/

You will see the following:

    ##
    # Host Database
    #
    # localhost is used to configure the loopback interface
    # when the system is booting.  Do not change this entry.
    ##
    127.0.0.1       localhost
    255.255.255.255 broadcasthost
    ::1             localhost

Underneath this, enter your local IP address (127.0.0.1) and the name of the site you want to set up, e.g.

    ##
    # Host Database
    #
    # localhost is used to configure the loopback interface
    # when the system is booting.  Do not change this entry.
    ##
    127.0.0.1       localhost
    255.255.255.255 broadcasthost
    ::1             localhost
    127.0.0.1 mark-kirby.dev
    
Save the file - you will have to authenticate - and now when ever you type http://mark-kirby.dev into a browser it will give you your local folders - EVEN if mark-kirby.dev is an actual website on the internet. Browsers always check the hosts file first.

## Add the virtual host in apache

If you type mark-kirby.dev into your browser now, you will still see your default folders, you need do some more work.

Open the file /private/etc/apache2/extra/httpd-vhosts.conf
  
    nano /private/etc/apache2/extra/httpd-vhosts.conf

using the methods described above.

You will see this first:

    <VirtualHost *:80>
        ServerAdmin webmaster@dummy-host.example.com
        DocumentRoot "/usr/docs/dummy-host.example.com"
        ServerName dummy-host.example.com
        ServerAlias www.dummy-host.example.com
        ErrorLog "/private/var/log/apache2/dummy-host.example.com-error_log"
        CustomLog "/private/var/log/apache2/dummy-host.example.com-access_log" common
    </VirtualHost>

    <VirtualHost *:80>
        ServerAdmin webmaster@dummy-host2.example.com
        DocumentRoot "/usr/docs/dummy-host2.example.com"
        ServerName dummy-host2.example.com
        ErrorLog "/private/var/log/apache2/dummy-host2.example.com-error_log"
        CustomLog "/private/var/log/apache2/dummy-host2.example.com-access_log" common
    </VirtualHost>

First I'll quickly explain what each line means:

  * ServerAdmin - the email address of the server admapachestrator e.g. mark-kirby@mark-kirby.dev, this will show up on error pages
  * DocumentRoot - the location of the files to show e.g. /User/username/Sites/mark-kirby
  * ServerName - the domain name you want to use e.g mark-kirby.dev
  * ServerAlias - an alternative name which will point to the same place e.g. www.mark-kirby.dev
  * ErrorLog - the location of a log file to output errors to, e.g. "/User/username/Sites/logs/mark-kirby-error-log"
  * CustomLog - the location of a file where all other logs should be written, followed by a format - just stick with common - e.g. "/User/username/Sites/logs/mark-kirby-access-log common"

So really, you only need DocumentRoot and ServerName if this is a test server only you will access.

Firstly comment out the examples - very important, don't miss this step!

Then add a default entry so localhost will still take you to the root of your Sites folder:
  
    <VirtualHost *:80>
        DocumentRoot "/Users/{username}/Sites"
        ServerName localhost
    </VirtualHost>

Finally, add your entry, e.g.

    <VirtualHost *:80>
        DocumentRoot "/Users/{username}/Sites/mark-kirby"
        ServerName mark-kirby.dev
    </VirtualHost>
    
Where {username} is your username.
  
Save this, you'll need to authenticate.

## Set Permissions on your sites folder

Thanks to [Jeremy Keiths solution][1] - we can ensure permissions are set to allow all sites to be viewed without setting them on each one. This is great for our purposes, but would never be used on a live server.

Add this to your vhosts file:
  
    <Directory /Users/*/Sites/>
      Options Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
      AllowOverride All
      Order allow,deny
      Allow from all
    </Directory>

## Activate virtual hosts in apache

If you haven't done so, by default the file you just edited, won't be enabled in Apache.

To change this open up another hidden file - /private/etc/apache2/httpd.conf

Find the line

    # Virtual hosts
    #Include /private/etc/apache2/extra/httpd-vhosts.conf
  
And uncomment the include so it looks like this:

    # Virtual hosts
    Include /private/etc/apache2/extra/httpd-vhosts.conf

Save the file - you may need to authenticate.

## Restart Apache

This still won't work, until you restart apache.

To restart apache:

  1. Go to system preferences
  2. Select "sharing"
  3. Uncheck the box "Web Sharing" - apache will stop
  4. Check it again - apache will start

or:

    sudo apachectl restart

Test your site - you should be in luck!

 [1]: http://adactio.com/journal/1395