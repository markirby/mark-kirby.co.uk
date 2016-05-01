---
title: Using git and github on OS X
author: Mark Kirby
layout: post
date: 2008-09-30
excerpt: Instructions on how to install git on OSX, set up an account with github and contribute to an existing project on there. Its aimed at someone who has been asked to contribute to a codebase in github, but has no idea how.
url: /2008/using-git-and-github-on-os-x/
dsq_thread_id:
  - 1086898781
categories:
  - tutorial
tags:
  - git
  - github
  - osx
---
git is an alternative to SVN. I&#8217;m just starting out using it, so I&#8217;ll explain how to install it and use the github repository. Once I&#8217;ve got into it more deeply, I&#8217;ll go into detail on the pro&#8217;s and con&#8217;s.

This article is going to be most useful if someone has just asked you to start contributing to an existing project located on github. It covers everything you will need to connect to the project and start editing.

## Install git

Firstly Download git [from google code][1]. If you are running a new Mac, you&#8217;ll want the intel version for Leopard.

Run the installer.

## Set up a github account

Before you can contribute to a github project, you&#8217;ll need a github account.

[Go to the plans page][2] and signup for a free open source account.

## Get added to the project

Send your account username to whoever is running the project you wish to work on, and they can add you to enable access.

## Create a public key and add it to github

In order to access github you will need to create a public key on your machine and add it to the account. You can do this for each machine you use.

To create the public key run through the [github instructions][3] on providing an SSH key for OS X, or use mine:

### Step 1 &#8211; find an existing public key file

Open terminal

Look for a .pub file inside your .ssh folder by typing

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> .ssh<br />
    <span class="kw2">ls</span>
  </div>
</div></pre>

If you see a .pub file skip to step 3

### Step 2 &#8211; create a new public key file

If you don&#8217;t have a .pub file, create one.

In terminal enter

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">ssh-keygen</span>
  </div>
</div></pre>

When prompted to select a name for the file, just hit enter. When asked for a password, enter a selected one and remember it &#8211; you will need this to access github.

### Step 3 &#8211; copy the public key file

In terminal enter

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw2">cat</span> id_rsa.pub <span class="sy0">|</span> pbcopy
  </div>
</div></pre>

### Step 4 &#8211; enter the key into github

Then [access your account details][4] (make sure you are logged in) and locate the SSH Public keys heading. Select &#8220;Add another public key&#8221; and paste (ctrl+V) the key in there.

## Clone the project you wish to contribute to

To start working on a project, you first need to clone it. The [git clone][5] command is used in this case to download a local copy of the project.

First you must choose a folder on your Mac to place the files. I use my local Sites folder for all code work.

Navigate to this folder from within terminal, e.g.

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> Sites
  </div>
</div></pre>

Clone the project from github using the following command:

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git clone git<span class="sy0">@</span>github.com:accountname<span class="sy0">/</span>repositoryname.git
  </div>
</div></pre>

In the above example, accountname refers to the account name that the project you will work on is stored under, repositoryname is the name of the project.

A folder will be created inside your chosen folder with the name repositoryname, containing all the files.

## Checkout a branch of the project to work on

To start working on the code you will need to checkout a branch of the clone.

To do this, navigate to the folder which contains the clone using Terminal.

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> Sites<span class="sy0">/</span>repositoryname
  </div>
</div></pre>

Checkout a branch, which you can name myBranch or anything you wish

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git checkout <span class="re5">-b</span> myBranch
  </div>
</div></pre>

This will then switch the files inside the folder to a branch.

## Add and remove files

When you edit files, you can don&#8217;t need to anything more. 

To add a new file, use the command:

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git add path<span class="sy0">/</span>to<span class="sy0">/</span><span class="kw2">file</span>
  </div>
</div></pre>

To remove a file (and this also removes it from your local area, so be careful):

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git <span class="kw2">rm</span> path<span class="sy0">/</span>to<span class="sy0">/</span><span class="kw2">file</span>
  </div>
</div></pre>

## Commit changes back to the branch when you&#8217;re done

You can commit changes as often as you like.

Navigate to the folder which contains the clone using Terminal.

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> Sites<span class="sy0">/</span>repositoryname
  </div>
</div></pre>

Commit changes

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git commit <span class="re5">-a</span> <span class="re5">-m</span> <span class="st0">"message"</span>
  </div>
</div></pre>

## Rolling back

To revert back to the state of the last commit, enter the following:

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git reset <span class="re5">--hard</span> HEAD
  </div>
</div></pre>

## Push the branch back to the team

When you have made all your local changes, you can send them up to the team hosting the project.

Navigate to the folder which contains the clone using Terminal.

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    <span class="kw3">cd</span> Sites<span class="sy0">/</span>repositoryname
  </div>
</div></pre>

Push branch

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git push origin myBranch
  </div>
</div></pre>

Remove a branch from the server

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git push origin :myBranch
  </div>
</div></pre>

## Merging changes

To bring changes down from the main path, first fetch the changes:

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git fetch origin
  </div>
</div></pre>

then merge with your branch

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    git merge origin<span class="sy0">/</span>myBranch
  </div>
</div></pre>

## More info

You should find the following guides useful:

  * [Github documentation][6]
  * [Git User Manual][7]

 [1]: http://code.google.com/p/git-osx-installer/
 [2]: http://github.com/plans
 [3]: http://github.com/guides/providing-your-ssh-key
 [4]: https://github.com/account
 [5]: http://www.kernel.org/pub/software/scm/git/docs/git-clone.html
 [6]: http://github.com/guides/home
 [7]: http://www.kernel.org/pub/software/scm/git/docs/user-manual.html