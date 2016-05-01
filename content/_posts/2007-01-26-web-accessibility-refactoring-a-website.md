---
title: Web Accessibility – Refactoring a website
author: Mark Kirby
layout: post
date: 2007-01-26
url: /2007/web-accessibility-refactoring-a-website/
categories:
  - post
tags:
  - Web Accessibility
---
Refactoring a website means rewriting it to make it accessible. You cannot do this all at once, its best done over time using priorities. Look at the following factors to select tasks to do and pages to them on.

**WCAG Priorities**  
By following the WCAG guidelines 1.0 you can make your website more accessible. [WCAG Guidelines 1.0][1] are broken down into 3 priorities. Those in priority 1 should be implemented before those in priority 3.

**Ease**  
Easy quick tasks should be completed first before more complex major ones.  
**  
Impact**  
Navigation, headers, top pages should be worked on before small rarely visited parts of the site.

Here are some links from the [ww3][2] to help you refactor a website and learn more about accessibility.

[http://www.w3.org/WAI/WCAG20/quickref/][3]  
A quick reference to locate the factors that relate to your site, and how to fix them.

[http://www.w3.org/WAI/ER/tools/Overview.html][4]  
A list of tools to help check accessibility of sites.

[http://www.w3.org/WAI/EO/Drafts/PWD-Use-Web/][5]  
To learn ways disabled users use the web

[http://www.doit.wisc.edu/accessibility/video/intro.asp][6]  
Video introduction to the screen reader

<http://www.w3.org/TR/ATAG20/#gl-tool-accessible-perceivable>  
Guidelines on building authoring tools

Building accessible content

1 – Use test equivalents for non-text content (images, videos, sound)

Use the alt tag

If non-text content contain information convey information include that in the alt tag

If the non-text content serves a purpose describe the purpose in the alt tag

If the non-text content is pure decoration or is visual only display it in a way that is invisible to screen readers, e.g. css background images

If an image contains text such as a logo ‘AVERT.org’, but is linking to somewhere like the home page, make the alt text the same as the link location, not the image text e.g. ‘home’.

Don’t use unnecessary words in alt text like home page. The word page is pointless, of course it will be a page, they are not going to go home.

Formatting images should have an empty alt tag without any spaces alt=’’

Images for decoration can have an empty alt tag

Active images inside a link which also includes text can have an empty alt

Images such as graphs with a lot of text to summarise can use the longdesc attribute. You can then link in file with the text. <img longdesc=”longdescriptions.html#piechart1”>

2 – Using colour to convey information

Colour alone is not enough to convey information. Red for required fields in a form to a colourblind person may not appear as red. Use an asterisk as well

Underline links, or make them change in some way when the mouse or keyboard passes over them using the css :hover and :focus classes. Focus is important, as it works for people using keyboards and not mouse.

3 – Make sure colours contrast properly

  * Use the tool at http://www.visionaustralia.org.au/info.aspx?page=1571
  * To pass the ratio should be higher than 5.1, although this is a level 2 requirement of WCAG 2.0 and is not essential

4 – Tables

  * Only use for data
  * Identify row and column headers – use the th tag and specify scope col or row -> <th scope=”col”> <th scope=”row”>
  * Add a caption which programmatically associates the title of the table and the table. <caption =””>
  * Add a summary which summaries what the table shows, not the contents. E.g. summary=”schedule by course time, location and instructor”

5 &#8211; Headers  
•    Headers should take the following format:  
o    <h1>Site title</h1>  
o    <h2>Navigation</h2>  
o    <h2>Page title</h2>  
o    <h3>Subheadings</h3>  
o    <h3>Subheadings</h3>  
o    <h2>Footer Navigation</h2>  
•    This allows people to navigate properly with keyboards and screen readers

6 – Links  
•    Assistive technologys bring up groups of links.  
•    If you have links with the text ‘click here’ you will end up with a list containing only the text link here

 [1]: http://www.w3.org/WAI/intro/wcag "WCAG Guidelines"
 [2]: http://www.w3.org/WAI "ww3"
 [3]: http://www.w3.org/WAI/WCAG20/quickref/ "Quick reference"
 [4]: http://www.w3.org/WAI/ER/tools/Overview.html "Accessibility tools"
 [5]: http://www.w3.org/WAI/EO/Drafts/PWD-Use-Web/ "How disabled use web"
 [6]: http://www.doit.wisc.edu/accessibility/video/intro.asp "Screen reader video"