---
title: Running a local webserver from a Dropbox folder on OS X
author: Mark Kirby
layout: post
date: 2012-02-20
url: /2012/running-a-local-webserver-from-a-dropbox-folder-on-os-x/
dsq_thread_id:
  - 1087588675

---
I wrote a article a few years back on [setting up virtual hosts on OS X][1] so you can have lots of urls pointing to different folders on your mac, for testing websites. A good practice I have found is to run this folder out of Dropbox, so even if you haven't committed changes to a remote repository your work is always saved and backed up. To do this, there are a couple of extra steps you need to take, so I am writing this article here, do read the old one first to get the basics set up, and then come here for the updates.

## Preparation

Follow the instructions on [setting up virtual hosts on OS X][1].

Your httpd-vhosts.conf should look something like this:

    NameVirtualHost *:80

    <VirtualHost *:80>  
    DocumentRoot "/Users/markirby/Sites"  
    ServerName localhost  
    </VirtualHost>

    <Directory /Users/*/Sites/>  
    Options Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews  
    AllowOverride All  
    Order allow,deny  
    Allow from all  
    </Directory>  

Make sure you have set '/private/etc/hosts', '/private/etc/apache2/httpd.conf' and restarted apache, as per the instructions.

## Create a symlink to link the sites folder to dropbox

Enter the following to create a symlink which will enable you to edit files in either location and have the changes backed up as you work.

    ln -s ~/Sites ~/Dropbox/Sites  

 [1]: /2008/setting-up-virtual-hosts-on-os-x-leopard/