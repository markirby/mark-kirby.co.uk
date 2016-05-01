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

If you have lots of sites to test, you might want to be able to type a url into the browser, and see the site directly. To do that you need to modify your Mac&#8217;s hosts file, and set up a Virtual Server.

*Updated Feb 2012*

## Preparation

Decide upon the URL you want to use, I&#8217;m going for mark-kirby.dev in this example.

Decide where you want the files to go that will appear for this url, and place them there on your computer. I&#8217;m using /Users/username/Sites/mark-kirby for this example.

Start apache:

  1. Go to system preferences
  2. Select &#8220;sharing&#8221;
  3. Check the box &#8220;Web Sharing&#8221; &#8211; apache will start

## 2 &#8211; Edit the hosts file

Open the file

[bash]  
/private/etc/hosts  
[/bash]

Since this file is hidden, you will need to need to check the option &#8220;open hidden files&#8221; if your text editor has one, or use the terminal to open the file directly.

[bash]  
mate /private/etc/hosts  
[/bash]

Alternatively, you could:

  1. Open finder
  2. click on go
  3. select &#8220;Go to folder&#8221;
  4. enter in /private/etc/

You will see the following:

[bash]  
##  
\# Host Database  
#  
\# localhost is used to configure the loopback interface  
\# when the system is booting. Do not change this entry.  
##  
127.0.0.1 localhost  
255.255.255.255 broadcasthost  
::1 localhost  
[/bash]

Underneath this, enter your local IP address (127.0.0.1) and the name of the site you want to set up, e.g.

[bash]  
127.0.0.1 mark-kirby.dev  
[/bash]

Save the file &#8211; you will have to authenticate &#8211; and now when ever you type http://mark-kirby.dev into a browser it will give you your local folders &#8211; EVEN if mark-kirby.dev is an actual website on the internet. Browsers always check the hosts file first.

## Add the virtual host in apache

If you type mark-kirby.dev into your browser now, you will still see your default folders, you need do some more work.

Open the file

[bash]  
/private/etc/apache2/extra/httpd-vhosts.conf  
[/bash]

using the methods described above.

You will see this first &#8211;

[bash]  
#  
\# Use name-based virtual hosting.  
#  
NameVirtualHost *:80  
[/bash]

Don&#8217;t touch it!

Then you will see this &#8211;

[bash]  
<VirtualHost *:80>  
ServerAdmin webmaster@dummy-host.example.com  
DocumentRoot "/usr/docs/dummy-host.example.com"  
ServerName dummy-host.example.com  
ServerAlias www.dummy-host.example.com  
ErrorLog "/private/var/log/apache2/dummy-host.example.com-error_log"  
CustomLog "/private/var/log/apache2/dummy-host.example.com-access_log" common  
</VirtualHost>  
[/bash]

First I&#8217;ll quickly explain what each line means:

  * ServerAdmin &#8211; the email address of the server admapachestrator e.g. mark-kirby@mark-kirby.dev, this will show up on error pages
  * DocumentRoot &#8211; the location of the files to show e.g. /User/username/Sites/mark-kirby
  * ServerName &#8211; the domain name you want to use e.g mark-kirby.dev
  * ServerAlias &#8211; an alternative name which will point to the same place e.g. www.mark-kirby.dev
  * ErrorLog &#8211; the location of a log file to output errors to, e.g. &#8220;/User/username/Sites/logs/mark-kirby-error-log&#8221;
  * CustomLog &#8211; the location of a file where all other logs should be written, followed by a format &#8211; just stick with common &#8211; e.g. &#8220;/User/username/Sites/logs/mark-kirby-access-log common&#8221;

So really, you only need DocumentRoot and ServerName if this is a test server only you will access.

Firstly comment out the examples &#8211; very important, don&#8217;t miss this step!

Then add a default entry so localhost will still take you to the root of your Sites folder:

[bash]  
<VirtualHost *:80>  
DocumentRoot "/Users/username/Sites"  
ServerName localhost  
</VirtualHost>  
[/bash]

Finally, add your entry, e.g.

[bash]  
<VirtualHost *:80>  
DocumentRoot "/Users/username/Sites/mark-kirby"  
ServerName mark-kirby.dev  
</VirtualHost>  
[/bash]

Save this, you&#8217;ll need to authenticate.

## Set Permissions on your sites folder

Thanks to [Jeremy Keiths solution][1] &#8211; we can ensure permissions are set to allow all sites to be viewed without setting them on each one. This is great for our purposes, but would never be used on a live server.

Add this to your vhosts file:  
[bash]  
<Directory /Users/*/Sites/>  
Options Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews  
AllowOverride All  
Order allow,deny  
Allow from all  
</Directory>  
[/bash]

## Activate virtual hosts in apache

If you haven&#8217;t done so, by default the file you just edited, won&#8217;t be enabled in Apache.

To change this open up another hidden file &#8211; /private/etc/apache2/httpd.conf

Find the line

[bash]  
\# Virtual hosts  
#Include /private/etc/apache2/extra/httpd-vhosts.conf  
[/bash]

And uncomment the include so it looks like this:

[bash]  
\# Virtual hosts  
Include /private/etc/apache2/extra/httpd-vhosts.conf  
[/bash]

Save the file &#8211; you may need to authenticate.

## Restart Apache

This still won&#8217;t work, until you restart apache.

To restart apache:

  1. Go to system preferences
  2. Select &#8220;sharing&#8221;
  3. Uncheck the box &#8220;Web Sharing&#8221; &#8211; apache will stop
  4. Check it again &#8211; apache will start

or&#8230;

[bash]  
sudo apachectl restart  
[/bash]

Test your site &#8211; you should be in luck!

 [1]: http://adactio.com/journal/1395