---
title: WordPress Slideshare code not working?
author: Mark Kirby
layout: post
date: 2009-02-25
url: /2009/wordpress-slideshare-code-not-working/
dsq_thread_id:
  - 1102557748
categories:
  - tutorial
---
We found the SlideShare code for WordPress is no longer working out of the box. Its because there is one variable you need to add, the width. They used to add a default width of 425 in the code, this is now missing.

Therefore, make:

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    slideshare <span class="kw2">id</span>=1068027<span class="sy0">&</span><span class="re2">doc</span>=ribotmobiledesignuk
  </div>
</div></pre>

<pre><div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    slideshare <span class="kw2">id</span>=1068027<span class="sy0">&</span><span class="re2">doc</span>=ribotmobiledesignuk<span class="sy0">&</span><span class="kw2">w</span>=<span class="nu0">425</span>
  </div>
</div></pre>