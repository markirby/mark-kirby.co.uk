---
title: Installing PHPUnit with MAMP
author: Mark Kirby
layout: post
date: 2009-04-14
excerpt: 'Installing PHPUnit with MAMP - enabling unit testing within the MAMP environment'
url: /2009/installing-phpunit-with-mamp/
dsq_thread_id:
  - 1086898855
categories:
  - tutorial
---
Download your preferred copy of PHPUnit from <http://pear.phpunit.de/get/>

Extract the folder, placing the folder PHPUnit in /Applications/MAMP/bin/PHP5/lib/php

Open the file PHPUnit/Util/Fileloader.php and replace all instances of

<pre><div class="codesnip-container" >
  <div class="php codesnip" style="font-family:monospace;">
    <span class="sy0">@</span>php_bin<span class="sy0">@</span>
  </div>
</div></pre>

with

<pre><div class="codesnip-container" >
  <div class="php codesnip" style="font-family:monospace;">
    <span class="sy0">/</span>Applications<span class="sy0">/</span>MAMP<span class="sy0">/</span>bin<span class="sy0">/</span>php5<span class="sy0">/</span>bin<span class="sy0">/</span>php
  </div>
</div></pre>

Get the file pear-phpunit from the extracted folder and place it in usr/local/bin

  1. Open the finder
  2. Select Go->to folder
  3. enter usr/local/bin in the path
  4. Drag and drop the file.

With the finder open, select the file and open with a text editor. Ensure the file reads as follows:

<pre><div class="codesnip-container" >
  <div class="php codesnip" style="font-family:monospace;">
    #!/Applications/MAMP/bin/php5/bin/php<br />
    <span class="kw2">&lt;?php</span><br />
    <span class="coMULTI">/* PHPUnit<br />
    &nbsp;*<br />
    &nbsp;* Copyright (c) 2002-2008, Sebastian Bergmann &lt;sb@sebastian-bergmann.de&gt;.<br />
    &nbsp;* All rights reserved.<br />
    &nbsp;*<br />
    &nbsp;* Redistribution and use in source and binary forms, with or without<br />
    &nbsp;* modification, are permitted provided that the following conditions<br />
    &nbsp;* are met:<br />
    &nbsp;*<br />
    &nbsp;* &nbsp; * Redistributions of source code must retain the above copyright<br />
    &nbsp;* &nbsp; &nbsp; notice, this list of conditions and the following disclaimer.<br />
    &nbsp;* <br />
    &nbsp;* &nbsp; * Redistributions in binary form must reproduce the above copyright<br />
    &nbsp;* &nbsp; &nbsp; notice, this list of conditions and the following disclaimer in<br />
    &nbsp;* &nbsp; &nbsp; the documentation and/or other materials provided with the<br />
    &nbsp;* &nbsp; &nbsp; distribution.<br />
    &nbsp;*<br />
    &nbsp;* &nbsp; * Neither the name of Sebastian Bergmann nor the names of his<br />
    &nbsp;* &nbsp; &nbsp; contributors may be used to endorse or promote products derived<br />
    &nbsp;* &nbsp; &nbsp; from this software without specific prior written permission.<br />
    &nbsp;*<br />
    &nbsp;* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS<br />
    &nbsp;* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT<br />
    &nbsp;* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS<br />
    &nbsp;* FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE<br />
    &nbsp;* COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,<br />
    &nbsp;* INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,<br />
    &nbsp;* BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;<br />
    &nbsp;* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER<br />
    &nbsp;* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRIC<br />
    &nbsp;* LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN<br />
    &nbsp;* ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE<br />
    &nbsp;* POSSIBILITY OF SUCH DAMAGE.<br />
    &nbsp;*<br />
    &nbsp;* $Id: pear-phpunit 2805 2008-04-14 16:52:19Z sb $<br />
    &nbsp;*/</span><br />
    <br />
    <span class="kw1">require_once</span> <span class="st_h">'PHPUnit/Util/Filter.php'</span><span class="sy0">;</span><br />
    <br />
    PHPUnit_Util_Filter<span class="sy0">::</span><span class="me2">addFileToFilter</span><span class="br0">&#40;</span><span class="kw4">__FILE__</span><span class="sy0">,</span> <span class="st_h">'PHPUNIT'</span><span class="br0">&#41;</span><span class="sy0">;</span><br />
    <br />
    <span class="kw1">require</span> <span class="st_h">'PHPUnit/TextUI/Command.php'</span><span class="sy0">;</span><br />
    <br />
    <a href="http://www.php.net/define"><span class="kw3">define</span></a><span class="br0">&#40;</span><span class="st_h">'PHPUnit_MAIN_METHOD'</span><span class="sy0">,</span> <span class="st_h">'PHPUnit_TextUI_Command::main'</span><span class="br0">&#41;</span><span class="sy0">;</span><br />
    <br />
    PHPUnit_TextUI_Command<span class="sy0">::</span><span class="me2">main</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span><br />
    <span class="sy1">?&gt;</span>
  </div>
</div></pre>

Now rename your file to phpunit (if you already have a copy of phpunit installed, rename the file to phpunit-mamp so you know which one to use). In terminal:

<pre><div class="codesnip-container" >
  <div class="php codesnip" style="font-family:monospace;">
    sudo mv <span class="sy0">/</span>usr<span class="sy0">/</span>local<span class="sy0">/</span>bin<span class="sy0">/</span>phpunit<span class="sy0">-</span>pear <span class="sy0">/</span>usr<span class="sy0">/</span>local<span class="sy0">/</span>bin<span class="sy0">/</span>phpunit
  </div>
</div></pre>

Now you can run tests from within MAMP by simply typing phpunit into terminal.