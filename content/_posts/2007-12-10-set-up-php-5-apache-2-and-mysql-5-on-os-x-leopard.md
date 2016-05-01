---
title: Set up PHP 5, Apache 2 and MySQL 5 on OS X Leopard
author: Mark Kirby
layout: post
date: 2007-12-10
url: /2007/set-up-php-5-apache-2-and-mysql-5-on-os-x-leopard/
dsq_thread_id:
  - 1086898022
categories:
  - tutorial
---
### The aim of this tutorial

You have a new mac, with leopard installed. You want to be able to test your PHP websites on your mac (in my case, my wordpress blog), so you can make sure things work before uploading to your webserver. You, like me, are unsure how to go about this.

By the end of this tutorial you will type the address localsite into your browser, and be able to see your PHP database driven website. You can edit files, and see the changes locally, without ever having to go online.

### Step 1 – Apache and PHP

Leopard comes with Apache 2 and PHP 5 preinstalled. All we need to do is activate it.

#### 1a &#8211; Change the apache conf file to activate PHP

  1. Using a text editor such as [smultron][1], TextMate or command line tool Pico, which lets you open hidden files. Open Apache&#8217;s conf file on your system at /private/etc/apache2/httpd.conf  
    On Pico open terminal and type</p> <div class="codesnip-container" >
      sudo pico /private/etc/apache2/httpd.conf
    </div>
    
    For TextMate
    
    <div class="codesnip-container" >
      mate /private/etc/apache2/httpd.conf
    </div>

  2. Search for this line – <div class="codesnip-container" >
      #LoadModule php5_module libexec/apache2/libphp5.so
    </div>

  3. Remove the hash and you will have php 5 available for use &#8211; <div class="codesnip-container" >
      LoadModule php5_module libexec/apache2/libphp5.so
    </div>

  4. Save and authenticate

#### 1b &#8211; Turn on web sharing in Leopard

  1. On OS X Go to system preferences > sharing
  2. Tick the web sharing box

You should now be online!

Enter localhost in your browser, you should see the apache webpage.

You then put your files in /Library/WebServer/Documents

e.g. i put a folder called website inside the Documents folder. I can access this by typing localhost/website in my browser.

Easy!

#### 1c &#8211; Optional &#8211; changing the location of your websites to the Sites folder in your home directory

Some people prefer not to keep their development files in /Library/WebServer/Documents. Fortunately its very easy to set up Apache so that it gets the files from your Sites folder.

Using a text editor such as smultron, TextMate or command line tool Pico, which lets you open hidden files, open Apache&#8217;s conf file on your system at /private/etc/apache2/httpd.conf

On Pico open terminal and type 

<div class="codesnip-container" >
  sudo pico /private/etc/apache2/httpd.conf
</div>

For TextMate

<div class="codesnip-container" >
  mate /private/etc/apache2/httpd.conf
</div>

Find this:

<div class="codesnip-container" >
  #<br /> # DocumentRoot: The directory out of which you will serve your<br /> # documents. By default, all requests are taken from this directory, but<br /> # symbolic links and aliases may be used to point to other locations.<br /> #<br /> DocumentRoot &#8220;/Library/WebServer/Documents&#8221;
</div>

and replace with the path to your sites folder, mine is &#8220;/Users/myname/Sites&#8221;, myname is the name of my home directory.

e.g.

<div class="codesnip-container" >
  DocumentRoot &#8220;/Users/myname/Sites&#8221;
</div>

Then find the code:

<div class="codesnip-container" >
  #<br /> # This should be changed to whatever you set DocumentRoot to.<br /> #<br /> <Directory &#8220;/Library/WebServer/Documents&#8221;>
</div>

And change there as well, e.g.

<div class="codesnip-container" >
  <Directory &#8220;/Users/
</div>

<div class="codesnip-container" >
  myname
</div>

<div class="codesnip-container" >
  /Sites&#8221;>
</div>

Now restart web sharing (go back into system preferences and uncheck, then recheck the box).

Now when you type localhost into your browser, it will give you the contents of your Sites folder.

### Step 2 – MySQL

MySQL provides us with the database element of the package.

#### 2a &#8211; Install MySQL

MySQL does not come with Leopard, and the package for Tiger will not work without some modifications. These are described here, but do take care to look for a Leopard package first over at [mysql.com][2] as this is the best thing to use.

  1. [Open this webpage][2] &#8211; if its moved, search for mysql 5 downloads
  2. Find the mac os x package (.dmg files) section. If 10.5 is still unavailable, pick the one for 10.4, x86 if your on an intel mac, otherwise Power PC.
  3. Install the MYSQL package, leaving the prefpane and startup item if your using the 10.4 installer.

#### 2b &#8211; Fix MySQL &#8211; ONLY complete this section if you downloaded the 10.4 Tiger package

The problem with the Tiger mySQL package is that it doesn&#8217;t use the same settings as PHP so PHP can&#8217;t find it. Its easy enough to fix &#8211; we just build a symbolic link from the expected location to the actual location as follows:

Open terminal (Applications > Utilities > Terminal)

In Terminal, type

<div class="codesnip-container" >
  sudo /usr/local/mysql/bin/safe_mysqld
</div>

Which starts up the new server

Then enter

<div class="codesnip-container" >
  sudo mkdir /var/mysql/
</div>

Which creates the directory PHP looks for the MySQL connection in.

Now enter

<div class="codesnip-container" >
  sudo ln -s /tmp/mysql.sock /var/mysql/mysql.sock
</div>

To create a symbolic link to the ports file.

Now you can startup mySQL with

<div class="codesnip-container" >
  sudo /usr/local/mysql/bin/safe_mysqld
</div>

and connect using the settings:

  * Address &#8211; localhost or 127.0.0.1
  * Username &#8211; root
  * Password &#8211; none (thats no password, not the word none!)

#### 2c &#8211; Create a startup item so MySQL starts up whenever the Mac does

This might not be needed with the 10.5 MySQL release, it should come with a package to do this. If it does not, or you are using the 10.4 release, read on.

Make the following file using your preferred text editor:

<div class="codesnip-container" >
  <?xml version=&#8221;1.0&#8243; encoding=&#8221;UTF-8&#8243;?><br /> <!DOCTYPE plist PUBLIC &#8220;-//Apple//DTD PLIST 1.0//EN&#8221; &#8220;http://www.apple.com/DTDs/PropertyList-1.0.dtd&#8221;><br /> <plist version=&#8221;1.0&#8243;><br /> <dict><br /> <key>KeepAlive</key><br /> <true/><br /> <key>Label</key><br /> <string>com.mysql.mysqld</string><br /> <key>Program</key><br /> <string>/usr/local/mysql/bin/mysqld_safe</string><br /> <key>RunAtLoad</key><br /> <true/><br /> </dict></plist>
</div>

Save this as

<div class="codesnip-container" >
  com.mysql.mysqld.plist
</div>

inside

<div class="codesnip-container" >
  /Library/LaunchDaemons
</div>

Then open terminal and run the following:

<div class="codesnip-container" >
  sudo chown root /Library/LaunchDaemons/com.mysql.mysqld.plist
</div>

<div class="codesnip-container" >
  sudo launchctl load /Library/LaunchDaemons/com.mysql.mysqld.plist
</div>

Which sets the owner as root and ensures it auto loads each time

### 3 &#8211; Your done!

Thats it! Now PHP should simply work with the default connections.

To add databases and edit your mySQL setup, simply [download mySQL admin][3] to access your server.

Log in initially with mysql admin using the following settings:

  * server hostname &#8211; localhost
  * Username &#8211; root
  * Password &#8211; leave blank

Using mysql server admin you can now change the root password, build databases, and lots more.

Thanks to [Red91][4] whose blog post [Installing MySQL with Leopard][5] helped me to set up the MySQL side, [mymacinations][6] whose blog post helped me to get PHP started.

 [1]: http://smultron.sourceforge.net/
 [2]: http://dev.mysql.com/downloads/mysql/5.0.html#macosx-dmg
 [3]: http://dev.mysql.com/downloads/gui-tools/5.0.html
 [4]: http://www.red91.com
 [5]: http://www.red91.com/articles/2007/12/14/installing-mysql-on-leopard
 [6]: http://mymacinations.com/2007/10/28/apache-php-and-mysql-on-leopard/