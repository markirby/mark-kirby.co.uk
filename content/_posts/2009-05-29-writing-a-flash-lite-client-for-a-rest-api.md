---
title: Writing a Flash Lite Client for a REST API
author: Mark Kirby
layout: post
date: 2009-05-29
excerpt: "Advice on writing a Flash Lite client for a REST API. Covers limitations of Flash Lite, changes you might need to make to your API, reasons someone else's API might not work, and pointers on how to GET and POST data."
url: /2009/writing-a-flash-lite-client-for-a-rest-api/
dsq_thread_id:
  - 1086898236
categories:
  - tutorial
---
This tutorial explains how to create a flash REST API client that works with Actionscript 2 and Flash Lite 3.1+. Its not as simple as you might think, but the most complex part is knowing and understanding all the restrictions, many of which I&#8217;ve outlaid here.

## API restrictions

Unfortunately there are some restrictions within Flash Lite which means you will only be able to access certain API&#8217;s. Before continuing, ensure the API you are trying to access meets the following criteria. If its your API, you are in luck, you can fix these issues.

### Crossdomain Policy

You will need to be accessing an API which has a crossdomain policy file in place. If you own the API you can [create one][1]. If not you will need to create a proxy &#8211; although that&#8217;s out of scope of this tutorial.

### Authentication

Flash Lite does not work with HTTP header based security using the &#8220;Authorize&#8221; header. The function for adjusting headers &#8211; XML.addRequestHeader has a bug. In addition, you cannot use the addRequestHeader feature unless you are making a POST request, bug or no bug. This means for GET request you need to find another way of authenticating anyway. If the API you have access to doesn&#8217;t allow any other means of authentication, you won&#8217;t be able to write a Flash Lite client. 

If you have control of the API, ensure it can read the user credentials from the URL for GET requests, and from either the URL or parameter body for POST requests. That way you can avoid having to use addRequestHeader. 

### HTTP Status codes

Flash can&#8217;t easily interpret HTTP status codes. The API should therefore have an option for returning status in either an XML or string format. The HTTP status should always be 200, with the actual success code returned in the body of the content. This code can then be interpreted by Flash. 

Please note, for POST&#8217;s, the status returned should be of the same type (either XML or string) as the data posted. So in other words if you pass XML to the API to POST data, the status should be returned as XML, if you pass name key pairs to POST data, the status should be returned as a plain text name key pair (e.g. name=xxxx). If the API interprets POSTed data in chunks of XML, it should return the status as XML. This enables you to use either XML.sendAndLoad to send and read XML or LoadVars.sendAndLoad to send and read variables. You can&#8217;t (as far as I can tell) send XML and read variables, or send variables and read XML. 

### PUT and DELETE

You can&#8217;t make PUT and DELETE requests from Flash (or indeed any browser), so you will need to ensure your API uses overloaded POST. That is, you can specify the PUT or DELETE method in the POST url and the API interprets it, or you can make edits and deletes through the basic POST or GET functions.

## Flash Lite checklist

You will need to make a few updates to your app before connecting to the API.

### Playback settings

Ensure you have set the playback settings to access network only (File in top menu -> Publish Settings option -> Flash tab -> Advanced section -> Local playback security dropdown -> set to Access network only)

### Device central

Ensure you have selected a Flash Lite 3.1 device in Device Central for testing.

Ensure under the device central security settings you have selected &#8220;Local Trusted Sandbox&#8221;.

### Flash Lite security settings

When testing on a device as a swf, if you find network errors, ensure the swf is placed inside the Flash Lite trusted folder, if available. Location of the trusted folder will vary from device to device, but for Nokia&#8217;s N95 its located in C:/Data/Others/Trusted. Note that the Others folder may appear as Other without the s &#8211; this is not an issue. If you can&#8217;t find the Trusted folder inside Other(s), create it. To access the swf from the device just navigate directly to C:/Other(s), the data folder won&#8217;t appear within the phone view. There&#8217;s more on this topic on [Kuneri Bloggy][2].

## Making a GET request

To perform a GET request, returning XML you use the [XML.load][3] method. 

<div class="codesnip-container" >
  <div class="actionscript codesnip" style="font-family:monospace;">
    <span class="kw2">var</span> my_xml:<span class="kw3">XML</span> = <span class="kw2">new</span> <span class="kw3">XML</span><span class="br0">&#40;</span><span class="br0">&#41;</span>;</p> 
    
    <p>
      my_xml.<span class="kw3">onLoad</span> = <span class="kw2">function</span><span class="br0">&#40;</span>success:<span class="kw3">Boolean</span><span class="br0">&#41;</span> <span class="br0">&#123;</span>
    </p>
    
    <p>
      &nbsp; &nbsp; <span class="kw2">var</span> endTime:<span class="kw3">Number</span> = <span class="kw3">getTimer</span><span class="br0">&#40;</span><span class="br0">&#41;</span>;
    </p>
    
    <p>
      &nbsp; &nbsp; <span class="kw2">var</span> elapsedTime:<span class="kw3">Number</span> = endTime-startTime;<br /> &nbsp; &nbsp; <br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>success<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"xmlDecl:"</span>+my_xml.<span class="kw3">xmlDecl</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"contentType:"</span>+my_xml.<span class="kw3">contentType</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"docTypeDecl:"</span>+my_xml.<span class="kw3">docTypeDecl</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"packet:"</span>+my_xml.<span class="kw3">toString</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"Unable to load remote XML."</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; <span class="br0">&#125;</span>
    </p>
    
    <p>
      &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"loaded in: "</span>+elapsedTime+<span class="st0">" ms."</span><span class="br0">&#41;</span>;
    </p>
    
    <p>
      <span class="br0">&#125;</span>;<br /> my_xml.<span class="kw3">load</span><span class="br0">&#40;</span><span class="st0">"http://api.url.com/user/1.xml"</span><span class="br0">&#41;</span>;</div> </div> 
      
      <p>
        You get the idea, you could create a text field to output the data on the device, manipulate the xml etc.
      </p>
      
      <p>
        To perform a GET request returning name value pairs, you use the <a href="http://help.adobe.com/en_US/AS2LCR/Flash_10.0/help.html?content=Part2_AS2_LangRef_1.html">LoadVars.load</a> method.
      </p>
      
      <div class="codesnip-container" >
        <div class="actionscript codesnip" style="font-family:monospace;">
          <span class="kw2">var</span> myLoadVars:<span class="kw3">LoadVars</span> = <span class="kw2">new</span> <span class="kw3">LoadVars</span><span class="br0">&#40;</span><span class="br0">&#41;</span>;<br /> myLoadVars.<span class="kw3">onLoad</span> = <span class="kw2">function</span><span class="br0">&#40;</span>success:<span class="kw3">Boolean</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>success<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="kw3">this</span>.<span class="kw3">toString</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"Error loading/parsing LoadVars."</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; <span class="br0">&#125;</span><br /> <span class="br0">&#125;</span>;<br /> myLoadVars.<span class="kw3">load</span><span class="br0">&#40;</span><span class="st0">"http://api.url.com/user/1.json"</span><span class="br0">&#41;</span>;
        </div>
      </div>
      
      <h2>
        POST request
      </h2>
      
      <p>
        To make a POST request by sending name value pairs and processing a returned status code in name value format, you use the <a href="http://help.adobe.com/en_US/AS2LCR/Flash_10.0/help.html?content=Part2_AS2_LangRef_1.html">LoadVars.sendAndLoad</a> method.
      </p>
      
      <p>
        In this example we are posting a name value pair of &#8220;name=New Category&#8221;, with the server interpreting the field name, and returning either &#8220;error=404&#8243; or &#8220;status=200&#8243; as plain text output. The code interprets either the error or the status and traces it out to the console. You would probably interpret it in some way and do something more with it.
      </p>
      
      <div class="codesnip-container" >
        <div class="actionscript codesnip" style="font-family:monospace;">
          <span class="kw2">var</span> resultLoadVars:<span class="kw3">LoadVars</span> = <span class="kw2">new</span> <span class="kw3">LoadVars</span><span class="br0">&#40;</span><span class="br0">&#41;</span>;<br /> resultLoadVars.<span class="kw3">onLoad</span> = <span class="kw2">function</span><span class="br0">&#40;</span>success:<span class="kw3">Boolean</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>success<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>resultLoadVars.<span class="kw3">error</span> <span class="sy0">!</span>== <span class="kw3">undefined</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"error: "</span>+result_lv.<span class="kw3">error</span><span class="br0">&#41;</span>; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>resultLoadVars.<span class="kw3">status</span> <span class="sy0">!</span>== <span class="kw3">undefined</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"status: "</span>+result_lv.<span class="kw3">status</span><span class="br0">&#41;</span>; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"Error connecting to server."</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span><br /> <span class="br0">&#125;</span>;<br /> <span class="kw2">var</span> send_lv:<span class="kw3">LoadVars</span> = <span class="kw2">new</span> <span class="kw3">LoadVars</span><span class="br0">&#40;</span><span class="br0">&#41;</span>;<br /> send_lv.<span class="kw3">name</span> = <span class="st0">"New Category"</span>;<br /> send_lv.<span class="kw3">sendAndLoad</span><span class="br0">&#40;</span><span class="st0">"http://api.url.com/user/1"</span>, result_lv, <span class="st0">"POST"</span><span class="br0">&#41;</span>;
        </div>
      </div>
      
      <p>
        To make a POST request by sending XML and processing a returned status code in XML format, you use the <a href="http://help.adobe.com/en_US/AS2LCR/Flash_10.0/help.html?content=Part2_AS2_LangRef_1.html">XML.sendAndLoad</a> method.
      </p>
      
      <p>
        In this example we are posting xml containing the tag name with content &#8220;New Category&#8221;, with the server interpreting the field name, and returning either an error tag with the code &#8220;404&#8221; or a status tag with the code &#8220;200&#8221; as XML. The code interprets either the error or the status and traces it out to the console. You would probably interpret it in some way and do something more with it.
      </p>
      
      <div class="codesnip-container" >
        <div class="actionscript codesnip" style="font-family:monospace;">
          <span class="kw2">var</span> dataToPost:<span class="kw3">String</span> = <span class="st0">"<name>New Category</name>"</span>;<br /> <span class="kw2">var</span> my_xml:<span class="kw3">XML</span> = <span class="kw2">new</span> <span class="kw3">XML</span><span class="br0">&#40;</span>dataToPost<span class="br0">&#41;</span>;<br /> <span class="kw2">var</span> myReply_xml:<span class="kw3">XML</span> = <span class="kw2">new</span> <span class="kw3">XML</span><span class="br0">&#40;</span><span class="br0">&#41;</span>;<br /> myReply_xml.<span class="kw3">ignoreWhite</span> = <span class="kw2">true</span>;<br /> myReply_xml.<span class="kw3">onLoad</span> = myOnLoad;<br /> my_xml.<span class="kw3">sendAndLoad</span><span class="br0">&#40;</span><span class="st0">"http://api.url.com/user/1"</span>, myReply_xml<span class="br0">&#41;</span>;<br /> <span class="kw2">function</span> myOnLoad<span class="br0">&#40;</span>success:<span class="kw3">Boolean</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>success<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span><span class="br0">&#40;</span>myReply_xml.<span class="kw3">firstChild</span>.<span class="kw3">nodeName</span> == <span class="st0">"error"</span><span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"error: "</span>+myReply_xml.<span class="kw3">firstChild</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span> <br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span><span class="br0">&#40;</span>myReply_xml.<span class="kw3">firstChild</span>.<span class="kw3">nodeName</span> == <span class="st0">"status"</span><span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"status: "</span>+myReply_xml.<span class="kw3">firstChild</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span> &nbsp; &nbsp; &nbsp; &nbsp;<br /> &nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp;<span class="kw3">trace</span><span class="br0">&#40;</span><span class="st0">"Error connecting to server."</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; <span class="br0">&#125;</span><br /> <span class="br0">&#125;</span>
        </div>
      </div>
      
      <h2>
        Next steps
      </h2>
      
      <p>
        Don&#8217;t worry too much about following the code examples here, follow the links to the adobe documentation and see if you can get the code to work with the API you have. I&#8217;m starting out in this area too &#8211; so have really just presented my initial findings after a couple of days research &#8211; hopefully this will save some of you that time at least! Leave issues or problems with specific devices, links to better ways of doing things or suggestions in the comments.
      </p>

 [1]: http://www.moock.org/asdg/technotes/crossDomainPolicyFiles/
 [2]: http://bloggy.kuneri.net/2008/05/13/the-pain-of-flash-lite-30
 [3]: http://help.adobe.com/en_US/AS2LCR/Flash_10.0/help.html?content=Part2_AS2_LangRef_1.html