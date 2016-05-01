---
title: MIR (Malarkey Image Replacement) IE6 fix
author: Mark Kirby
layout: post
date: 2008-12-10
url: /2008/mir-malarkey-image-replacement-ie6-fix/
dsq_thread_id:
  - 1127260867
categories:
  - tutorial
---
I&#8217;ve been using the [MIR technique][1] for image replacement for a while now, but always have to use a fix for IE6. In IE6 the method causes the first letter of the text being replaced to be displayed. Since I keep searching my email for the fix which was sent to me by [Jay Gooby][2], I thought I&#8217;d post it on here.

<pre><div class="codesnip-container" >
  <div class="css codesnip" style="font-family:monospace;">
    <span class="re1">.mir</span> <span class="br0">&#123;</span> <span class="kw1">letter-spacing</span> <span class="sy0">:</span> <span class="re3">-1000em</span><span class="sy0">;</span> <span class="kw1">text-indent</span> <span class="sy0">:</span> <span class="re3">-999em</span><span class="sy0">;</span> <span class="kw1">overflow</span> <span class="sy0">:</span> <span class="kw2">hidden</span><span class="sy0">;</span> <span class="br0">&#125;</span><br />
    <span class="coMULTI">/* Just for Opera, but hide from MacIE */</span><br />
    <span class="coMULTI">/*\*/</span>html&gt<span class="sy0">;</span>body <span class="re1">.mir</span> <span class="br0">&#123;</span> <span class="kw1">letter-spacing</span> <span class="sy0">:</span> <span class="kw2">normal</span><span class="sy0">;</span> <span class="kw1">text-indent</span> <span class="sy0">:</span> <span class="re3">-999em</span><span class="sy0">;</span><br />
    <span class="kw1">overflow</span> <span class="sy0">:</span> <span class="kw2">hidden</span><span class="sy0">;</span><span class="br0">&#125;</span>
  </div>
</div></pre>

 [1]: http://www.stuffandnonsense.co.uk/archives/examples/malarkey-method-example.html
 [2]: http://gooby.org/