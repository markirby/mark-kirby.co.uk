---
title: Subversion and Ruby on Rails
author: Mark Kirby
layout: post
date: 2008-02-22
url: /2008/subversion-and-ruby-on-rails/
dsq_thread_id:
  - 1086898009
categories:
  - tutorial
tags:
  - ruby-on-rails
---
When using Subversion with Ruby on Rails there are a couple of things to take note of.

Firstly, there are files you want to exclude from the Subversion repository, the log files, temporary files and database file. The log files and tmp files can get very large, and the database file might be different on different machines.

To exclude them you can use the [script from railsonwave][1], also attached below. Run this when you set the project up, or at any time afterwards.

<pre>#!/bin/sh
svn remove log/*
svn commit -m"removing log files"
svn propset svn:ignore "*.log" log/
svn update log/
svn commit -m 'Ignoring all files in /log/ ending in .log'
svn move config/database.yml config/database.example
svn commit -m 'Moving database.yml to database.example to provide a template for anyone who checks out the code'
svn propset svn:ignore "database.yml" config/
svn update config/
svn commit -m 'Ignoring database.yml'
svn remove tmp/*
svn propset svn:ignore "*" tmp/
svn update tmp/
svn commit -m "ignore tmp/ content from now"
svn propset svn:ignore ".htaccess" config/
svn update config/
svn commit -m 'Ignoring .htaccess'
svn propset svn:ignore "dispatch.fcgi" config/
svn update config/
svn commit -m 'Ignoring dispatch.fcgi'</pre>

Random mutterings has taken this a step further with [this script][2] which will run all this for you when you create a new project.

Secondly, you will want to automatically add new files created by the generate script when you commit. If you use the Subversion command

<pre><div class="codesnip-container" >
  svn --force add .
</div></pre>

To do this, you will end up adding all those files you excluded. Instead try [this tip from the Rails Wiki][3]

<div class="codesnip-container" >
  svn status | grep &#8220;^\?&#8221; | awk &#8220;{print $2}&#8221; | xargs svn add
</div>

Run that just before a commit and you can be sure all files, old and new have been updated.

An even better solution from the Rails Wiki also is this script which you can save in your apps folder under script as rails-commit.

<pre>#!/usr/bin/env ruby

# my take on a easy commit script for rails...
# it is far from prefect, so:
# please feed back the modifications you made to it!
#
# Fixed bugs on empty to_ arrays and spelling mistakes
# by Vesa-Pekka Palmu
# orginal by Cies Breijs -- cies.breijsATgmailDOTcom
# based on a bash script by Anonymous Gentleman
# found here: &lt;a href="http://wiki.rubyonrails.org/rails/pages/HowtoUseRailsWithSubversion"&gt;http://wiki.rubyonrails.org/rails/pages/HowtoUseRailsWithSubversion&lt;/a&gt;

to_add = []
to_remove = []
to_checkin = []

`svn status`.each_line do |l|
  action_char, path = l.split(' ', 2)
  path.strip!
  case action_char
    when '?'
      to_add &lt;&lt; path
    when '!'
      to_remove &lt;&lt; path
    when 'M'
      to_checkin &lt;&lt; path
  end
end

puts "\nyou are about to..." 

def print_list(array, str)
  puts "\n#{str}:"
  array.each { |i| puts "\t"+i }
  puts "\t&lt;nothing&gt;" if array.length == 0
end

print_list(to_add, 'add')
print_list(to_remove, 'remove')
print_list(to_checkin, 'checkin')

puts "\nplease write something for the commit log and hit enter..."
puts "(hitting enter on an empty line will cancel this commit)\n\n" 

log = gets.strip

if log.empty?
  puts "commit cancelled!\n"
  exit
end

puts "\ncontacting repository...\n" 

`svn add #{to_add.join(' ')}` unless to_add.empty?
`svn remove #{to_remove.join(' ')}` unless to_remove.empty?
puts "\n" + `svn commit -m "#{log.gsub('"', '\"')}"` + "\n" 

puts "running 'svn update' to be sure we are up-to-date..."
puts `svn update`

puts "\nfinished.\n"</pre>

Once added, in command line do

ruby script/rails-commit

and the script will run, telling you what will be added, and prompt you to enter a message. Perfect!

 [1]: http://www.railsonwave.com/railsonwave/2006/12/19/smart-subversion-script-for-rails-projects
 [2]: http://randomutterings.com/articles/2007/09/19/subversion-script-for-rails-developers
 [3]: http://wiki.rubyonrails.org/rails/pages/HowtoUseRailsWithSubversion