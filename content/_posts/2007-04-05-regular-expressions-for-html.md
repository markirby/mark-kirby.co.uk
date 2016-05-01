---
title: Regular expressions for HTML
author: Mark Kirby
layout: post
date: 2007-04-05
url: /2007/regular-expressions-for-html/
dsq_thread_id:
  - 1111663776
categories:
  - tutorial
---
Regular expressions can be used to find HTML code which can then be used for cleaning or in CMS&#8217;s. Here are a couple I&#8217;ve been looking for.

### To find all tags on a page

</?\w+((\s+\w+(\s\*=\s\*(?:&#8221;.\*?&#8221;|&#8217;.\*?&#8217;|[^'&#8221;>\s]+))?)+\s\*|\s\*)/?>

### To find a class or id tag

class=&#8221;[^&#8221;]\*[&#8220;]|id=&#8221;[^&#8221;]\*[&#8220;]|style=&#8221;[^&#8221;]*[&#8220;]

  * \sid=” &#8211; the *\s* represent any type of space (tab,  
    space, form/line feed). Checking for a space is important for some tags  
    as it ensures that you are not picking up fragments of other  
    attributes. For instance, *align=”* would pick up both align and valign tag attributes.
  * [^”]*  
    &#8211; this matches any character except the double quote (”) character and  
    continues to until it finds a double quote. This is because the [^”]  
    rule is proceeded by a asterisk (*).
  * ” &#8211; picks up the closing double quote to complete the regex.
  * |\sclass=”[^”]*”|  
    \sstyle=”[^”]*”- the vertical line character (|) signifies an either/or  
    rule. Therefore, it will find all id, class and style tags that begin  
    and end with double quotes

### Replacing tags in dreamweaver

In the following example:

<th>Column Header 1</th>

We want to replace the th tag contents with a link. Use parenthesis  
<th[^>]\*>([^<]\*)</th>

<th><a title=&#8221;Sort By $1&#8243; href=&#8221;#&#8221;>$1</a></th>

### Find image tags

<img[^>]*[>]

### Find links

<a href=&#8221;[^>]*[>]

or

<a[\s]+[^>]\*?href[\s]?=[\s\&#8221;\&#8217;]+(.\*?)[\&#8221;\&#8217;]+.\*?>([^<]+|.\*?)?<\/a>

<p class="poweredbyperformancing">
  Powered by <a href="http://scribefire.com/">ScribeFire</a>.
</p>