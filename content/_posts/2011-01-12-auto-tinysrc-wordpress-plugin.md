---
title: Auto TinySrc WordPress Plugin
author: Mark Kirby
layout: post
date: 2011-01-12
excerpt: Download and learn how to use our new plugin, enabling all WordPress sites to automatically use TinySrc to optimise all images for mobile.
url: /2011/auto-tinysrc-wordpress-plugin/
dsq_thread_id:
  - 1086898391
categories:
  - post
---
I&#8217;ve published a new WordPress plugin which I wrote for Ribot today, enabling anyone to use TinySrc on their site by simply adding it. [Download it from WordPress.org.][1]

[TinySrc][2] is a service provided by Sencha which dynamically shrinks your images according to the device accessing them. This helps shrink images for mobile, and will cut down the size of a site with [a responsive design][3].

This plugin replaces all image tag src&#8217;s within your content with the tinysrc src (http://mysite.com/myimage.png becomes http://i.tinysrc.mobi/http://mysite.com/myimage.png), and provides a function to call in your themes to optimise those images.

To use the plugin, run through the following:

1. Upload \`auto-tinysrc.php\` to the \`/wp-content/plugins/\` directory

2. Activate the plugin through the &#8216;Plugins&#8217; menu in WordPress

3. Place

<div class="codesnip-container" >
  <div class="php codesnip" style="font-family:monospace;">
    <span class="sy0"><!&#8211;</span>?php<span class="sy0"><</span>br <span class="sy0">/&#8211;></span> <span class="kw1">if</span> <span class="br0">&#40;</span><a href="http://www.php.net/function_exists"><span class="kw3">function_exists</span></a><span class="br0">&#40;</span><span class="st_h">&#8216;get_tinysrc_image&#8217;</span><span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> get_tinysrc_image<span class="br0">&#40;</span><span class="st_h">&#8216;image_url&#8217;</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span><br /> <span class="kw1">echo</span> image_url<span class="sy0">;</span><br /> <span class="br0">&#125;</span> ?<span class="sy0">&</span>gt<span class="sy0">;</span>
  </div>
</div>

in your templates to display any template images optimised, e.g.

<div class="codesnip-container" >
  <div class="php codesnip" style="font-family:monospace;">
    <span class="sy0"><!&#8211;</span>?php<span class="sy0"><</span>br <span class="sy0">/&#8211;></span> <span class="re0">$image_url</span> <span class="sy0">=</span> get_bloginfo<span class="br0">&#40;</span><span class="st_h">&#8216;template_url&#8217;</span><span class="br0">&#41;</span><span class="sy0">.</span><span class="st_h">&#8216;/images/bonsai_404_error.png&#8217;</span><span class="sy0">;</span><br /> <span class="kw1">if</span> <span class="br0">&#40;</span><a href="http://www.php.net/function_exists"><span class="kw3">function_exists</span></a><span class="br0">&#40;</span><span class="st_h">&#8216;get_tinysrc_image&#8217;</span><span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> get_tinysrc_image<span class="br0">&#40;</span><span class="re0">$image_url</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span><br /> <span class="kw1">echo</span> <span class="re0">$image_url</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span> ?<span class="sy0">&</span>gt<span class="sy0">;</span>
  </div>
</div>

4. To get a variable containing the url of an image with the tinysrc url use

<div class="codesnip-container" >
  <div class="php codesnip" style="font-family:monospace;">
    <span class="sy0"><!&#8211;</span>?php<span class="sy0"><</span>br <span class="sy0">/&#8211;></span> <span class="kw1">if</span> <span class="br0">&#40;</span><a href="http://www.php.net/function_exists"><span class="kw3">function_exists</span></a><span class="br0">&#40;</span><span class="st_h">&#8216;get_tinysrc_image&#8217;</span><span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span> &nbsp; &nbsp;get_tinysrc_image<span class="br0">&#40;</span>get_bloginfo<span class="br0">&#40;</span><span class="st_h">&#8216;template_url&#8217;</span><span class="br0">&#41;</span><span class="sy0">.</span><span class="st_h">&#8216;/images/bonsai_404_error.png&#8217;</span><span class="sy0">,</span> <span class="kw4">false</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span> ?<span class="sy0">&</span>gt<span class="sy0">;</span>
  </div>
</div>

 [1]: http://wordpress.org/extend/plugins/auto-tinysrc/
 [2]: http://tinysrc.net/
 [3]: http://www.alistapart.com/articles/responsive-web-design/