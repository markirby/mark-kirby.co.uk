---
title: Regular Expressions with PHP and HTML
author: Mark Kirby
layout: post
date: 2007-04-17
url: /2007/regular-expressions-with-php-and-html/
dsq_thread_id:
  - 1086898485
categories:
  - tutorial
tags:
  - regex
---
You can use regular expressions to locate specific tags in HTML. My last post gave some examples of this. Here I will explain how to execute the code, how to parse the HTML in different formats and how to compose regular expressions like the ones in the previous post. Finally we will create our own regular expression which pulls out the src variable from img tags in HTML code. This could be used to create a list of images in a given webpage.

1 &#8211; Regular expressions in PHP

To search a block of text for a number of possible matches you need to use the function preg\_match\_all. This uses the following format:  
(text adapted from [PHP Documentation][1])

**preg\_match\_all** ( string $pattern, string $subject, array &$matches [, int $flags [, int $offset]] )  
<span class="term"><em><tt><br /> </tt></em></span>

  * <span class="term"><em><tt>pattern</tt></em></span> &#8211; The pattern to search for, as a string.
  * <span class="term"><em><tt>subject</tt></em></span> &#8211; The input string  &#8211; in our example the HTML code.
  * <span class="term"><em><tt>matches</tt></em></span> &#8211; Just make up a variable name such as $matches and put it in here. It will need to be empty at first and then filled with the results of the search
  * <span class="term"><em><tt>flags <span style="font-family: verdana,'Times New Roman',sans-serif;">- </span></tt></em></span>Can be a combination of the following flags (note that it doesn&#8217;t make sense to use **<tt>PREG_PATTERN_ORDER</tt>** together with **<tt>PREG_SET_ORDER</tt>**)

  * <span class="term"><strong><tt>PREG_PATTERN_ORDER - </tt></strong></span> Orders results so that $matches[0] is an array of full pattern matches, $matches[1] is an array of strings matched by the first parenthesized subpattern, and so on. This will be useful to us for extracting the src, it will be returned in the $matches[1] array if it is the first subpattern.
  * <span class="term"><strong><tt>PREG_SET_ORDER - </tt></strong></span> Orders results so that $matches[0] is an array of first set of matches, $matches[1] is an array of second set of matches, and so on.
  * <span class="term"><strong><tt>PREG_OFFSET_CAPTURE - </tt></strong></span> If this flag is added the character number within the string is also included in the results

<div class="variablelist">
  <dl>
    <dt>
      2 &#8211; Parsing HTML
    </dt>
  </dl>
  
  <p>
    There are two ways of searching the HTML, using the literal HTML code in the regex e.g. &#8216;<img alt="" />&#8216; or using the character codes such as &#8216;<IMG>&#8217;. To use the later apply the function htmlspecialchars to the html first. In this example we will use the literal HTML code. Some peoples expressions use one method some use the other.
  </p>
  
  <p>
    3 &#8211; Composing regular expressions in PHP<br /> (Advice adapted from <a href="http://www.anaesthetist.com/mnm/perl/Findex.htm#regex.htm">Perl regular expressions for the common man</a>)<br /> PHP uses the same syntax for regular expressions as PERL. So resources for PERL regex will be useful.
  </p>
  
  <p>
    Start off by enclosing your expression in the delimiters &#8216;/&#8217; eg &#8216;/img/&#8217;. It won&#8217;t work otherwise.
  </p>
  
  <p>
    Matching start of a word<br /> /^start/ will match &#8216;<span style="text-decoration: underline;">start</span>er&#8217;
  </p>
  
  <p>
    Matching end of a word<br /> end$/ will match &#8216;worlds<span style="text-decoration: underline;">end&#8217;<br /> </span><br /> Matching options<br /> /sh[ou]t/ will match shot or shut
  </p>
  
  <p>
    Matching any character<br /> /sh.t/ will match shit shot shut shxt
  </p>
  
  <p>
    Matching a number of characters<br /> /sh.+t/ will match shoooot shuuut, any until it reaches the t
  </p>
  
  <p>
    Matching one or no characters<br /> /sh.*t/ will match shot, sht, shuuut etc
  </p>
  
  <p>
    Escaping characters<br /> /a \+ b/ will match a + b
  </p>
  
  <p>
    Make a search case insensitive<br /> /sense/i will match sense, Sense or SENSE
  </p>
  
  <p>
    Make the match stop at the first b<br /> Imagine the subject is &#8216;a xxxx b ffff b&#8217; the regex /a+.b/ will match the entire string &#8211; /a+?b/ will match &#8216;a xxxx b&#8217;
  </p>
  
  <p>
    Extract characters from the subject to appear in the $matches array<br /> use (), e.g. /text(.+)remove/ will take the word &#8216;pass&#8217; out of textpassremove and return it along with textpassremove<br /> Reuse extracted charcters in the same regex &#8211; use \1 for the first, \2 for the second, and escape the \ so therefore /\1 and /\2<br /> e.g. /<(.+?)>.+<\/\1>/ means take the text between the < and the very next > found, and then find a <\ followed by a the same     text found in the first (.+?), followed by a closing >. So this would match all very simple HTML tags such as &#8216;<em>test</em>&#8216; or             &#8216;<strong>text</strong>&#8216;. It won&#8217;t work for  more complex tags though.
  </p>
  
  <p>
    Match HTML tags with variables<br /> /<(.+?).*?>.+<\/\1>/i will match a tag
  </p>
</div>

And to extract the img src tag, allowing for spaces between the < and the img  
&#8216;/<.\*img.\*src=&#8221;(.\*?)&#8221;.\*>/i&#8217;

<p class="poweredbyperformancing">
  Powered by <a href="http://scribefire.com/">ScribeFire</a>.
</p>

 [1]: http://uk2.php.net/manual/en/function.preg-match-all.php