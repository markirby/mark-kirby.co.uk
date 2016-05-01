---
title: 5 good practices for small software companies
author: Mark Kirby
layout: post
date: 2008-07-19
url: /2008/5-good-practices-for-small-software-companies/
dsq_thread_id:
  - 1086898616
categories:
  - post
---
Over the last 3 years I introduced some essential processes and practices to the small organisation I worked for. Any small company involved with software development would benefit from these, and although they are all very obvious I wanted to list them here to provide a checklist for anyone rethinking the way they work.

In no particular order the areas I&#8217;m going to look at are:

  * Shared files
  * Version control for code
  * Regular secure backups
  * An online documentation system
  * An inventory of equipment and software

In more detail:

## Share files centrally

If there is more than one employee, having access to a central location allowing you to store files such as text docs and spreadsheets to be accessed by one or more people is essential. It saves you emailing back and forth, and allows you to work on files together &#8211; if you choose carefully.

There are a number of ways you could achieve a shared file system:

  * Google docs &#8211; this allows you to work online, work on documents together, and keep local copies using google gears, ideal if you work away from the office often and takes care of backups, not so good if you&#8217;re unahappy about google having control of your documents
  * Another online document alternative, there are a quite few out there although I haven&#8217;t used them so can&#8217;t advise
  * A server you connect your PC&#8217;s or Mac&#8217;s to, you could use a Mac for this (they allow up to 10 people to connect and save and retrieve files from), or a PC with sharing enabled, or set up a Linux box.

If you decide to go down the google route, consider using [google apps][1] &#8211; this will take care of your email, shared docs and calendar, and lets you use your company site address to log in and as your email address.

## Version control for code

Ensure you are coding with version control. This provides you with a place to store your code, allows more than one person to work on the same piece of code, and lets you save the code in a central location, enabling backup (offsite if you use another provider).

Options include [Subversion][2], CVS (now rather outdated) and [Git][3] (new kid on the block). I use tried and tested Subversion.

Hosting options include:

  * Setting up a repository (the place the code is stored) on a machine in the office &#8211; this requires installation and doesn&#8217;t automatically mean offsite backup, plus you probably need to be in the office to use the system
  * Using a hosted alternative, allowing access from anywhere and ensuring off site backup &#8211; I use [webfaction][4] who provide SVN hosting at a low price

## Regular secure backups

Everyone in the office needs to ensure their work is being backed up properly. I recommend as a minimum a daily backup of all files, this can be kept onsite, and a weekly backup which is kept off site. Addtionally its a good idea to make a monthly copy of your entire hard disk to allow a quick restore including all settings and software.

There is plenty of software available to help you achieve this, all you need is some external storage. I&#8217;ll go into more detail on available options and provide some recommendations over the coming weeks.

Ensure the following:

  * Your backups are secure &#8211; this means if someone finds them, they can&#8217;t access the files
  * Your backups are not next to your computer &#8211; they should be in another location entirely, so that in case of a fire, the files are not lost. As mentioned I keep a weekly backup away from my office.
  * You have a good restore plan, and have tested it, i.e. how will you get the files back once they have gone.

## An online documentation system

As you or your staff code, you will make discoveries, learn new stuff and come up with best practices and methods of doing things. It is key that you write these down, and store them somewhere everyone else in the office can access. This way, if you or someone else leaves the company, everyone still has access to that knowledge.

Stuff to put in your system includes:

  * Code snippets
  * Best practices for coding (naming conventions, bracing guidelines and other general stuff)
  * Tutorials and how-to&#8217;s that members of the team write as they learn something new
  * Documentation for the actual software the team creates (optional &#8211; you might want or need to keep this seperately)

Options for setting up such a system:

  * Use a CMS tool such as WordPress (its come a long way from being just a blogging platform), using plugins to ensure the code snippets play nice
  * A wiki (can be better for team editing, but also sometimes harder to set up and get working as you want it)
  * Lots of documents, such as google docs &#8211; this will be hard to navigate though, but quicker to set up

Again, I&#8217;ll go into more detail on this over the next few weeks.

## An inventory

When purchasing new equipment and software its important to record model details, serial numbers, copies of the software and all the info you will need to claim on insurance or reinstall software in case something goes wrong. These details must be very secure, and probably not kept online.

You might also keep usernames and passwords here &#8211; although I would recommend passwords be kept in the head to be totally secure. When signing up for accounts such as google analytics, amazon etc that everyone should have access to its useful to either use a clearly defined username or record the name you picked.

## Conclusions

Although this article has been rather rushed, I hope you can get a good idea of how to ensure your company is stable and secure from a software perspective. I&#8217;m going to think about each of these in more detail over the coming weeks and hope to provide more advice.

 [1]: http://www.google.com/apps/business/index.html
 [2]: http://subversion.tigris.org/
 [3]: http://git.or.cz/
 [4]: http://www.webfaction.com?affiliate=mkirby