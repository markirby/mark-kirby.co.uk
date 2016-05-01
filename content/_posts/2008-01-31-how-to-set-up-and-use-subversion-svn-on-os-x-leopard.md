---
title: How to set up and use Subversion (SVN) on OS X Leopard
author: Mark Kirby
layout: post
date: 2008-01-31
url: /2008/how-to-set-up-and-use-subversion-svn-on-os-x-leopard/
dsq_thread_id:
  - 1086898249
categories:
  - tutorial
tags:
  - subversion
---
Subversion is a tool which allows you to save code changes and then step back through the changes at a later date, or revert back to previous changes if things go wrong. It provides the following benefits:

  * Mistakes matter less &#8211; you can always go back
  * More than one person can work on the same code, without conflicts
  * If you work on more than one machine you can save the code in a central location
  * Loads more on the [subversion website][1]

If you do all your development on one machine and work alone, then you can get away with installing Subversion on your local machine (make sure you back everything up though!), this tutorial is aimed at you.

This tutorial is aimed mainly at Leopard users, who have Subversion pre-installed, but if you are using Tiger and have managed to install Subversion yourself it will work for you too.

## Setting up the SVN Repository area on OS X

SVN comes preinstalled on OS X, but there is a little more work to be done before you can use it properly.

Open up terminal, and start by creating the folder that will hold your applications repositories:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    $ <span class="kw2">sudo</span> <span class="kw2">mkdir</span> <span class="sy0">/</span>usr<span class="sy0">/</span>local<span class="sy0">/</span><span class="kw2">svn</span>
  </div>
</div>

Change ownership of this folder to www so it can be accessed through the web browser and the svn system will work:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    $ <span class="kw2">sudo</span> <span class="kw2">chown</span> <span class="re5">-R</span> www:www <span class="sy0">/</span>usr<span class="sy0">/</span>local<span class="sy0">/</span><span class="kw2">svn</span>
  </div>
</div>

Go into the apache conf area and edit svn.conf:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> <span class="sy0">/</span>etc<span class="sy0">/</span>apache2<span class="sy0">/</span>other<br /> pico svn.conf
  </div>
</div>

Enter the text

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    LoadModule dav_svn_module <span class="sy0">/</span>usr<span class="sy0">/</span>libexec<span class="sy0">/</span>apache2<span class="sy0">/</span>mod_dav_svn.so<br /> <span class="sy0"><</span>location<span class="sy0">></span><br /> DAV <span class="kw2">svn</span><br /> SVNParentPath <span class="sy0">/</span>usr<span class="sy0">/</span>local<span class="sy0">/</span><span class="kw2">svn</span><br /> <span class="sy0"></</span>location<span class="sy0">></span>
  </div>
</div>

Save the text

Restart Apache:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    $ <span class="kw2">sudo</span> apachectl graceful
  </div>
</div>

## Setting up a repository into OS X

Now we have our svn area set up, lets imagine we want to create a repository for a project, perhaps one we&#8217;ve already been working on before (although this will work even if you haven&#8217;t yet started).

First we want to create a sample set of folders which can be used time and time again to set up the default folder structure of the SVN repository. Choose a location on your system &#8211; I&#8217;ve done it in /Library/WebServer/Documents, and create the folder svn_default and within that /trunk, /branches and /tags. You can do this from terminal using the following commands:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">sudo</span> <span class="kw2">mkdir</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>svn_default<br /> <span class="kw2">sudo</span> <span class="kw2">mkdir</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>svn_default<span class="sy0">/</span>trunk<br /> <span class="kw2">sudo</span> <span class="kw2">mkdir</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>svn_default<span class="sy0">/</span>branches<br /> <span class="kw2">sudo</span> <span class="kw2">mkdir</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>svn_default<span class="sy0">/</span>tags
  </div>
</div>

Now we need to create your repository in the svn area we set up recently. Enter the following into terminal, substituting appname for the name of your app:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">sudo</span> <span class="kw2">svnadmin</span> create <span class="sy0">/</span>usr<span class="sy0">/</span>local<span class="sy0">/</span>svn<span class="sy0">/</span>appname
  </div>
</div>

Check everything worked by going to http://localhost/svn/appname/.  
You should see a webpage with a heading of Revision 0: /

Now you need to give the www authority to change files, so stick this into terminal

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">sudo</span> <span class="kw2">chown</span> <span class="re5">-R</span> www:www <span class="sy0">/</span>usr<span class="sy0">/</span>local<span class="sy0">/</span><span class="kw2">svn</span>
  </div>
</div>

Next we want to create our default file system inside the SVN repository, so put the following into terminal:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> import <span class="re5">-m</span> <span class="st0">"initial import"</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>svn_default http:<span class="sy0">//</span>localhost<span class="sy0">/</span>svn<span class="sy0">/</span>appname
  </div>
</div>

You should see the following output:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    Adding &nbsp; &nbsp; &nbsp; &nbsp; <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>svn_default<span class="sy0">/</span>trunk<br /> Adding &nbsp; &nbsp; &nbsp; &nbsp; <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>svn_default<span class="sy0">/</span>branches<br /> Adding &nbsp; &nbsp; &nbsp; &nbsp; <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>svn_default<span class="sy0">/</span>tags<br /> Committed revision <span class="nu0">1</span>.
  </div>
</div>

Take a look at http://localhost/svn/appname, the heading should now say Revision 1, and you will see links showing the filesystem you added.

Now you want to put the working version of your app into the trunk folder. In my case, the app i want to add is in the Documents folder, and thats also going to be the place I want to continue working on it. Put the following into terminal, where /Library/WebServer/Documents/appname links to the location of your app.

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> import <span class="re5">-m</span> <span class="st0">"app import"</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>appname http:<span class="sy0">//</span>localhost<span class="sy0">/</span>svn<span class="sy0">/</span>appname<span class="sy0">/</span>trunk
  </div>
</div>

You should now see all the files adding into the SVN repositiory, and at http://localhost/svn/appname you should be able to click on the Trunk link and see the files.

Now all the files are in the SVN, you need to check them out for the first time in order to start working on them.If you, like me, want to work on the same folder as the one you just uploaded from, you will need to remove that folder before continuing.

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">sudo</span> <span class="kw2">rm</span> <span class="re5">-r</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>appname
  </div>
</div>

Then go to the directory above the one you want to work with &#8211; so instead of appname (which should no longer be in Documents anyway), go to Documents.

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents
  </div>
</div>

Then checkout the files

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> checkout http:<span class="sy0">//</span>localhost<span class="sy0">/</span>svn<span class="sy0">/</span>appname<span class="sy0">/</span>trunk appname
  </div>
</div>

Now you should see the files in the appname folder. Well done, you can now make changes to files and use the commands listed below to add the changes and retrieve them from the SVN system.

## Working with SVN repositories on OS X

Now you have a working repository you can use various commands to save and retrieve code changes.

You first must always navigate to the folder you set up in terminal, so following the above example it would be

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>appname
  </div>
</div>

### Get the latest code

When you start work you should update to get any changes made, if more than one person is making changes to the code.

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>appname
  </div>
</div>

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> update
  </div>
</div>

### Find differences you made since the last commit

After updating, you might change some files, to find out what files you changed run

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>appname
  </div>
</div>

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> &nbsp;status
  </div>
</div>

To find out exact changes run

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>appname
  </div>
</div>

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> <span class="kw2">diff</span>
  </div>
</div>

### Set a file back to how it was before

You&#8217;ve changed a file, but haven&#8217;t commited, and you don&#8217;t like what you&#8217;ve done. You can easily go back to the last committed copy by typing the following:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>appname
  </div>
</div>

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> revert path<span class="sy0">/</span>to<span class="sy0">/</span>file.php
  </div>
</div>

where path/to/file is the path from but not including appname. e.g. if I made an error in appname/path/to/file.php I would use the above path

### Saving changes

After making all your changes you can save them back into the repository with the following command:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> <span class="sy0">/</span>Library<span class="sy0">/</span>WebServer<span class="sy0">/</span>Documents<span class="sy0">/</span>appname
  </div>
</div>

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> commit <span class="re5">-m</span> <span class="st0">"Describe the changes you made"</span>
  </div>
</div>

### Adding a group of new files

When you add new files to a project they won&#8217;t automatically get added by Subversion. You can either add them one by one using

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> add filename_or_dirname
  </div>
</div>

or try

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> <span class="re5">&#8211;force</span> add .
  </div>
</div>

### Removing files

To remove a file or folder from your project, don&#8217;t just delete it from your local file system. Instead do this:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> delete filename_or_dirname
  </div>
</div>

That marks them for deletion and removes it from the local file system, when you next commit, they will be deleted from the svn repository:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> commit <span class="re5">-m</span> <span class="st0">"removing files"</span>
  </div>
</div>

### Tagging a version of your code

If you are happy with a version of your code and want to take a snapshot to make it easier to roll back should problems arise with the next version, you can create a copy with a tag. Remember the tags folder we created, thats a good place to put these tagged versions. Users can then download them from here, and not worry about small changes you may have made since.

To do this:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> copy http:<span class="sy0">//</span>localhost<span class="sy0">/</span>svn<span class="sy0">/</span>appname<span class="sy0">/</span>trunk http:<span class="sy0">//</span>localhost<span class="sy0">/</span>svn<span class="sy0">/</span>appname<span class="sy0">/</span>tags<span class="sy0">/</span>release-1.0 <span class="re5">-m</span> <span class="st0">"Tagging the 1.0 release of the &#8216;appname&#8217; project."</span>
  </div>
</div>

### Creating a Branch

If you want to make a branch to continue working on a project, perhaps in a different way to before, a branch should be created.

To create a branch

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">svn</span> copy http:<span class="sy0">//</span>localhost<span class="sy0">/</span>svn<span class="sy0">/</span>appname<span class="sy0">/</span>trunk http:<span class="sy0">//</span>localhost<span class="sy0">/</span>svn<span class="sy0">/</span>appname<span class="sy0">/</span>branches<span class="sy0">/</span>branch1 <span class="re5">-m</span> <span class="st0">"new branch"</span>
  </div>
</div>

## We&#8217;re done

Thats enough to get started, for more information [download the free Subversion ][2]book.

 [1]: http://subversion.tigris.org/
 [2]: http://svnbook.red-bean.com/