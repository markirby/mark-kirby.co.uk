---
title: Deleting database entries without really deleting them
author: Mark Kirby
layout: post
date: 2006-11-13
url: /2006/deleting-database-entries-without-really-deleting-them/
tags:
  - CakePHP
---
Sometimes it is dangerous to allow users to delete database entries, where an entry has been carefully entered, an accidental deletion would be very annoying. At the same time, its not fun to have to search through unrelevant entries which should have been deleted.  
The best way of deleting these type of entries is to mark them to delete, and go through them later deleting them if space is an issue, or never really delete them.

This is easy to do in cake. In this example we have a titles table and we dont want to actually delete any titles/

Create a field in the database table called to_delete with a default value of 0.

Modify the model to add a hide function &#8211;

> <font face="Courier New"> function hide ($id=null)<br /> {<br /> if ($id)<br /> {<br /> $this->id = $id;<br /> $this->saveField(&#8216;to_delete&#8217;, &#8216;1&#8217;);<br /> return true;<br /> }<br /> }</font>

Alter the delete function in the controller

> <font face="Courier New"> function delete($id) {<br /> if($this->Title->hide($id)) {<br /> </font> <font face="Courier New">$this->flash(&#8216;The Title deleted: id &#8216;.$id.&#8221;, &#8216;/titles/index&#8217;);<br /> }<br /> }<br /> </font>

And your done, any deletes will now set the the field to\_delete to 1. Now you can restrict any views of titles by adding a where clause stating &#8216;where to\_delete = 0&#8242;.