---
title: How to bulk delete bookmarks from delicious
author: Mark Kirby
layout: post
date: 2008-12-09
excerpt: 'It can be hard to clean up your old bookmarks from your delicious account - if you have a large amount you want to get rid of, this provides a possible solution, although only for the more technical among you.'
url: /2008/how-to-bulk-delete-bookmarks-from-delicious/
dsq_thread_id:
  - 1089115170
categories:
  - tutorial
---
At work we recently decided to clean out most of the tags and a few old posts from the [ribot delicious account][1]. I couldn&#8217;t find any nice tools that enabled this (if you know of one, do please let me know &#8211; this method is a bit of a hack). On the delicious site the only method is to manually delete each tag, when you have over 400 the four clicks it takes to do this just don&#8217;t make much sense.

The method I&#8217;m going to explain to you, in summary, is this:

  1. you will copy your bookmarks down to a local mySQL database using an existing open source tool
  2. you will delete and edit them locally using your preferred tool
  3. using a script I have made you will turn the database into an uploadable delicious export file
  4. in your delicious account you will delete all your bookmarks and then import them again from the newly created, cleaned, file

WARNING: this could go wrong, I accept no responsibility for any loss of data, read through before beginning and take a backup of all your bookmarks.

## Before you start

  1. Ensure you have a local apache server with PHP and MySQL installed and enabled. On OS X you will simply need to [activate your installation][2], on windows you can [follow my instructions on installing WAMP][3][  
    ][3]
  2. Locate a database editing tool, and it should be one that allows you to delete multiple rows at once such as [Navicat][4]
  3. Create a local database called &#8216;delicious&#8217;  and ensure there is a user that can access it &#8211; it could be the default user root if you haven&#8217;t changed anything since installing

## Getting your bookmarks into the database

Download the [mysqlicious tool][5]

Unzip the downloaded file and open the mirror.php file

Find the first block of code and enter your database name (delicious) and the user and password as shown:

<pre><div class="codesnip-container" >
  <div class="php codesnip" style="font-family:monospace;">
    <span class="re0">$MySQL_Host</span> <span class="sy0">=</span> <span class="st0">"localhost"</span><span class="sy0">;</span><br />
    <span class="re0">$MySQL_Database</span> <span class="sy0">=</span> <span class="st0">"delicious"</span><span class="sy0">;</span><br />
    <span class="re0">$MySQL_Table</span> <span class="sy0">=</span> <span class="st0">"delicious"</span><span class="sy0">;</span><br />
    <span class="re0">$MySQL_Username</span> <span class="sy0">=</span> <span class="st0">"root"</span><span class="sy0">;</span><br />
    <span class="re0">$MySQL_Password</span> <span class="sy0">=</span> <span class="st0">""</span><span class="sy0">;</span>
  </div>
</div></pre>

Then add your delicious username and password to the fields underneath. I found the tag option didn&#8217;t work for me, but the idea is you can restrict the export by tag.

Create a folder called delicious in the area where your webserver is set up to point to (this might be your Sites folder on OS X, instructions on the pages listed earlier).

Copy the two files, mirror.php and MySQLicious.php into this folder.

Go to <http://localhost/delicious/mirror.php>, the tool should now export all your bookmarks to the database.

## Modify the database

If you have a good tool, you can now go through the database table named delicious and quickly delete all the posts you no longer need.

A hint &#8211; by writing simple database queries you can easily boil your bookmarks down to certain tags &#8211; the following SQL will help you:

<pre><div class="codesnip-container" >
  <div class="sql codesnip" style="font-family:monospace;">
    <span class="kw1">SELECT</span> <span class="sy0">*</span> <span class="kw1">FROM</span> delicious <span class="kw1">WHERE</span> tags <span class="kw1">LIKE</span>  <span class="st0">'%ajax%'</span> <span class="kw1">ORDER</span> <span class="kw1">BY</span> tags
  </div>
</div></pre>

## Delete all current bookmarks

WARNING! This could go wrong &#8211; ensure you have [exported the bookmarks to a file][6] as a backup first. Also please note that any bookmarks you import have to be all set to private, or all set to public &#8211; the previous public and private settings will be lost. This problem goes for any kind of import, either the method I am describing here, or by importing the exported file I just reminded you to save.

If you are ready, do the following to quickly delete all your bookmarks:

Go to your bookmarks and set the number displayed to 100

Copy and paste the following code into your browser address bar, replacing the site address

<pre><div class="codesnip-container" >
  <div class="javascript codesnip" style="font-family:monospace;">
    javascript<span class="sy0">:</span><span class="kw2">var</span> delay<span class="sy0">=</span><span class="nu0">2</span><span class="sy0">;</span><br />
    <span class="kw2">var</span> s<span class="sy0">=</span>document.<span class="me1">createElement</span><span class="br0">&#40;</span><span class="st0">'script'</span><span class="br0">&#41;</span><span class="sy0">;</span> s.<span class="me1">type</span><span class="sy0">=</span><span class="st0">'text/javascript'</span><span class="sy0">;</span><br />
    s.<span class="me1">src</span><span class="sy0">=</span><span class="st0">'http://ghill.customer.netspace.net.au/re-mark/re-mark-del-code.js'</span><span class="sy0">;</span><br />
    document.<span class="me1">getElementsByTagName</span><span class="br0">&#40;</span><span class="st0">'head'</span><span class="br0">&#41;</span><span class="br0">&#91;</span><span class="br0">&#93;</span>.<span class="me1">appendChild</span><span class="br0">&#40;</span>s<span class="br0">&#41;</span><span class="sy0">;</span><br />
    <span class="kw1">void</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span>
  </div>
</div></pre>

(courtesy of Scripted Remark &#8211; [Batch Editor For Bookmarks][7])

Allow a few minutes for this to complete, then select the next button and repeat until all bookmarks are gone.

## Upload the bookmarks

Download the [delicious-import.php][8] script I put together (right click on that link) and add it to the delicious folder. This file creates a bookmarks html file which can be imported into delicious, or any other browser.

Navigate to <http://localhost/delicious/delicious-import.php>, save the outputted file somewhere, such as the Desktop (in Firefox go to File -> Save Page As&#8230;) and make sure the extension is set to html.

Go to the [Manual import][9] settings and import the file you just saved.

Your done!

 [1]: http://delicious.com/ribot
 [2]: http://mark-kirby.co.uk/2007/set-up-php-5-apache-2-and-mysql-5-on-os-x-leopard/
 [3]: http://mark-kirby.co.uk/2008/how-to-create-a-local-copy-of-a-wordpress-site/
 [4]: http://www.navicat.com/
 [5]: http://code.google.com/p/mysqlicious/downloads/list
 [6]: https://secure.delicious.com/settings/bookmarks/export
 [7]: http://ghill.customer.netspace.net.au/re-mark/index.html
 [8]: http://mark-kirby.co.uk/wp-content/uploads/2008/12/delicious-import.php.zip
 [9]: https://secure.delicious.com/settings/bookmarks/import?manual=true