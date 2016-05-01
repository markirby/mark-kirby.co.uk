---
title: XML standards cheatsheet
author: Mark Kirby
layout: post
date: 2009-04-22
excerpt: A simple guide to crafting standards compliant XML. Covers structuring XML documents, defining XML elements and how to best use attributes.
url: /2009/xml-standards-cheatsheet/
dsq_thread_id:
  - 1103233468
categories:
  - tutorial
---
Here&#8217;s a simple guide to crafting standards compliant XML. I&#8217;m currently working on an API, and found it easy to knock off some XML for the output without thinking about it much. That&#8217;s not enough though, I wanted to follow some defined standards, so I did some research and decided to get the key points down here.

## Define XML

XML is a way of marking up data. The data could be directly from a database, for example the result of a nested query. Instead of just outputting the results as plain text, we can mark up each element of the results in a machine readable format. That&#8217;s XML. 

## Simple XML element

A single element representing a stand alone piece of information would be represented as follows:

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3"><span class="re1"><person<span class="re2">></span></span></span>Mark<span class="sc3"><span class="re1"></person<span class="re2">></span></span></span>
  </div>
</div>

## Complex Types

A name on its own might not be enough, for a person you might have other pieces of information. A person can be considered a complex type of XML element, constructed from several other XML elements.

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3"><span class="re1"><person<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><firstname<span class="re2">></span></span></span>Mark<span class="sc3"><span class="re1"></firstname<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><surname<span class="re2">></span></span></span>Kirby<span class="sc3"><span class="re1"></surname<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><address<span class="re2">></span></span></span>50 Poles Hill, Brighton, BN1<span class="sc3"><span class="re1"></address<span class="re2">></span></span></span><br /> <span class="sc3"><span class="re1"></person<span class="re2">></span></span></span>
  </div>
</div>

We could introduce another complex type to break up the address into further elements.

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3"><span class="re1"><person<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><firstname<span class="re2">></span></span></span>Mark<span class="sc3"><span class="re1"></firstname<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><surname<span class="re2">></span></span></span>Kirby<span class="sc3"><span class="re1"></surname<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><address<span class="re2">></span></span></span><br /> &nbsp; &nbsp; <span class="sc3"><span class="re1"><firstline<span class="re2">></span></span></span>50 Poles Hill<span class="sc3"><span class="re1"></firstline<span class="re2">></span></span></span><br /> &nbsp; &nbsp; <span class="sc3"><span class="re1"><town<span class="re2">></span></span></span>Brighton<span class="sc3"><span class="re1"></town<span class="re2">></span></span></span><br /> &nbsp; &nbsp; <span class="sc3"><span class="re1"><postcode<span class="re2">></span></span></span>BN1<span class="sc3"><span class="re1"></postcode<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"></address<span class="re2">></span></span></span><br /> <span class="sc3"><span class="re1"></person<span class="re2">></span></span></span>
  </div>
</div>

## Nested elements

A root element (say, person) could have more than one of a specific element (say, phone number). This is fine, and would be represented as follows:

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3"><span class="re1"><person<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><firstname<span class="re2">></span></span></span>Mark<span class="sc3"><span class="re1"></firstname<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><surname<span class="re2">></span></span></span>Kirby<span class="sc3"><span class="re1"></surname<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><phone<span class="re2">></span></span></span>01273 4444441<span class="sc3"><span class="re1"></phone<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><phone<span class="re2">></span></span></span>07988 3838381<span class="sc3"><span class="re1"></phone<span class="re2">></span></span></span><br /> <span class="sc3"><span class="re1"></person<span class="re2">></span></span></span>
  </div>
</div>

## Attributes

XML elements can have attributes added to them to add more information about the element. 

I feel you should use attributes to add meta information about the element, information about the data itself, information useful to machines and not people. Here are a few examples:

  * Database id&#8217;s
  * Created date
  * Edited date

Here&#8217;s our person with some suitable attributes:

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3"><span class="re1"><person</span> <span class="re0">id</span>=<span class="st0">&#8216;1&#8217;</span> <span class="re0">created</span>=<span class="st0">&#8217;21-01-2009&#8242;</span> <span class="re0">edited</span>=<span class="st0">&#8217;22-01-2009&#8242;</span><span class="re2">></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><firstname<span class="re2">></span></span></span>Mark<span class="sc3"><span class="re1"></firstname<span class="re2">></span></span></span><br /> &nbsp; <span class="sc3"><span class="re1"><surname<span class="re2">></span></span></span>Kirby<span class="sc3"><span class="re1"></surname<span class="re2">></span></span></span><br /> <span class="sc3"><span class="re1"></person<span class="re2">></span></span></span>
  </div>
</div>

I&#8217;ve seen API&#8217;s come up with a single element (say person), and stuff the tag with attributes containing all the details, thus:

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3"><span class="re1"><person</span> <span class="re0">firstname</span>=<span class="st0">&#8216;Mark&#8217;</span> <span class="re0">surname</span>=<span class="st0">&#8216;Kirby&#8217;</span> <span class="re0">address</span>=<span class="st0">&#8217;50 Poles Hill&#8230;&#8217;</span><span class="re2">></span><span class="re1"></person<span class="re2">></span></span></span>
  </div>
</div>

This is very bad! It&#8217;s hard to read, hard to process, inflexible and doesn&#8217;t follow established standards.

An attribute can only be used once per element, and you shouldn&#8217;t store multiple values for a single attribute.

This is wrong:

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3"><span class="re1"><person</span> <span class="re0">tag</span>=<span class="st0">&#8216;lawyer&#8217;</span> <span class="re0">tag</span>=<span class="st0">&#8216;doctor&#8217;</span><span class="re2">></span><span class="re1"></person<span class="re2">></span></span></span>
  </div>
</div>

This is wrong:

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3"><span class="re1"><person</span> <span class="re0">tag</span>=<span class="st0">&#8216;lawyer,doctor&#8217;</span><span class="re2">></span><span class="re1"></person<span class="re2">></span></span></span>
  </div>
</div>

This is correct:

## Constructing an XML document

An XML document should (and for should read must for standards sake) have the following features:

### An XML document should have the extension XML

### An XML document should begin with the XML declaration

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3">< ?xml <span class="re0">version</span>=<span class="st0">"1.0"</span> <span class="re0">encoding</span>=<span class="st0">"Unicode"</span> <span class="re0">standalone</span>=<span class="st0">"yes"</span><span class="re2">?></span></span>
  </div>
</div>

  * Version should be set to 1.0 to comply with the majority of parsers.
  * Encoding can be specified, or left out to assume Unicode
  * Standalone yes means there is no DTD or XSD document describing the XML available, no means there is a document, leave the attribute out to assume no

### An XML document must have one and only one root element

In the above example, if you wanted to list more than one person, you could start with a root element, &#8216;people&#8217;.

<div class="codesnip-container" >
  <div class="xml codesnip" style="font-family:monospace;">
    <span class="sc3"><span class="re1"><people<span class="re2">></span></span></span><br /> &nbsp; &nbsp; <span class="sc3"><span class="re1"><person<span class="re2">></span></span></span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="sc3"><span class="re1"><firstname<span class="re2">></span></span></span>Mark<span class="sc3"><span class="re1"></firstname<span class="re2">></span></span></span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="sc3"><span class="re1"><surname<span class="re2">></span></span></span>Kirby<span class="sc3"><span class="re1"></surname<span class="re2">></span></span></span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="sc3"><span class="re1"><address<span class="re2">></span></span></span>50 Poles Hill, Brighton, BN1<span class="sc3"><span class="re1"></address<span class="re2">></span></span></span><br /> &nbsp; &nbsp; <span class="sc3"><span class="re1"></person<span class="re2">></span></span></span><br /> &nbsp; &nbsp; <span class="sc3"><span class="re1"><person<span class="re2">></span></span></span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="sc3"><span class="re1"><firstname<span class="re2">></span></span></span>Chris<span class="sc3"><span class="re1"></firstname<span class="re2">></span></span></span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="sc3"><span class="re1"><surname<span class="re2">></span></span></span>Kirby<span class="sc3"><span class="re1"></surname<span class="re2">></span></span></span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="sc3"><span class="re1"><address<span class="re2">></span></span></span>24 Linfield Road, Brighton, BN1<span class="sc3"><span class="re1"></address<span class="re2">></span></span></span><br /> &nbsp; &nbsp; <span class="sc3"><span class="re1"></person<span class="re2">></span></span></span><br /> <span class="sc3"><span class="re1"></people<span class="re2">></span></span></span>
  </div>
</div>