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
git is an alternative to SVN. I'm just starting out using it, so I'll explain how to install it and use the github repository. Once I've got into it more deeply, I'll go into detail on the pro's and con's.

This article is going to be most useful if someone has just asked you to start contributing to an existing project located on github. It covers everything you will need to connect to the project and start editing.

## Install git

Firstly Download git [from google code][1]. If you are running a new Mac, you'll want the intel version for Leopard.

Run the installer.

## Set up a github account

Before you can contribute to a github project, you'll need a github account.

[Go to the plans page][2] and signup for a free open source account.

## Get added to the project

Send your account username to whoever is running the project you wish to work on, and they can add you to enable access.

## Create a public key and add it to github

In order to access github you will need to create a public key on your machine and add it to the account. You can do this for each machine you use.

To create the public key run through the [github instructions][3] on providing an SSH key for OS X, or use mine:

### Step 1 - find an existing public key file

Open terminal

Look for a .pub file inside your .ssh folder by typing

    cd .ssh
    ls

If you see a .pub file skip to step 3

### Step 2 - create a new public key file

If you don't have a .pub file, create one.

In terminal enter

    ssh-keygen
  

When prompted to select a name for the file, just hit enter. When asked for a password, enter a selected one and remember it - you will need this to access github.

### Step 3 - copy the public key file

In terminal enter



    cat id_rsa.pub | pbcopy
  


### Step 4 - enter the key into github

Then [access your account details][4] (make sure you are logged in) and locate the SSH Public keys heading. Select 'Add another public key' and paste (ctrl+V) the key in there.

## Clone the project you wish to contribute to

To start working on a project, you first need to clone it. The [git clone][5] command is used in this case to download a local copy of the project.

First you must choose a folder on your Mac to place the files. I use my local Sites folder for all code work.

Navigate to this folder from within terminal, e.g.



    cd Sites
  


Clone the project from github using the following command:



    git clone git@github.com:accountname/repositoryname.git
  


In the above example, accountname refers to the account name that the project you will work on is stored under, repositoryname is the name of the project.

A folder will be created inside your chosen folder with the name repositoryname, containing all the files.

## Checkout a branch of the project to work on

To start working on the code you will need to checkout a branch of the clone.

To do this, navigate to the folder which contains the clone using Terminal.



    cd Sites/repositoryname
  


Checkout a branch, which you can name myBranch or anything you wish



    git checkout -b myBranch
  


This will then switch the files inside the folder to a branch.

## Add and remove files

When you edit files, you can don't need to anything more. 

To add a new file, use the command:



    git add path/to/file
  


To remove a file (and this also removes it from your local area, so be careful):



    git rm path/to/file
  


## Commit changes back to the branch when you're done

You can commit changes as often as you like.

Navigate to the folder which contains the clone using Terminal.



    cd Sites/repositoryname
  


Commit changes



    git commit -a -m "message"
  


## Rolling back

To revert back to the state of the last commit, enter the following:



    git reset --hard HEAD
  


## Push the branch back to the team

When you have made all your local changes, you can send them up to the team hosting the project.

Navigate to the folder which contains the clone using Terminal.



    cd Sites/repositoryname
  


Push branch



    git push origin myBranch
  


Remove a branch from the server



    git push origin :myBranch
  


## Merging changes

To bring changes down from the main path, first fetch the changes:



    git fetch origin
  


then merge with your branch



    git merge origin/myBranch
  


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