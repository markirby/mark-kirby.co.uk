---
title: Creating an efficient REST API with HTTP
author: Mark Kirby
layout: post
date: 2013-01-16
excerpt: "A guide to creating a REST API, which will enable you to build API's in a cost and resource effective way that follows clear standards. I take you through the core principles you need to know to build a REST API."
url: /2013/creating-a-true-rest-api/
dsq_thread_id:
  - 1086897402
categories:
  - post
  - highlight
---
Many API&#8217;s produced call themselves **RESTful**, but barely cover any of the core principles of REST. REST is a standard you can choose to follow, and many (but not all) will help you to build an API that is efficient, easy to use and highly understandable. Here I highlight all the core principles, and how using them can help you to build an excellent API, which is a rare thing indeed.

<a href="http://mark-kirby.co.uk/2013/principles-of-a-true-rest-api/image_print/" rel="attachment wp-att-1151"><img class="alignnone size-full wp-image-1151" alt="image_print" src="http://mark-kirby.co.uk/wp-content/uploads/2013/01/image_print.jpeg" width="400" height="388" /></a>

## Why bother

A REST API follows standards, and these standards take into account many of the gotchas you would encounter if you just made up your own rules, as many choose to.

It is likely **you will also be creating the clients** (for example, you may be making mobile apps that the API supports), and the better the API, the easier it is to create those clients.

Following these standards means:

  * Documentation will make more sense and so developers will **understand your API quicker**
  * Developers who have used other REST API&#8217;s will **already understand** how to use yours
  * Developers will therefore be able to integrate quicker and therefore **deliver products faster and at lower cost**
  * The API will handle common issues out of the box so clients should contain **less bugs**
  * Many of the principles will make your clients faster, **improving product quality**
  * These principles help to ensure as much as possible is managed by the server, so you **don&#8217;t have to repeat as much code** in each client

## Create a uniform interface by mapping HTTP methods to CRUD

CRUD = Create, Read, Update, Delete

HTTP methods = POST, GET, PUT, DELETE

  * Create = POST
  * Read = GET
  * Update = PUT
  * Delete = DELETE

So instead of API calls such as:

  * Create &#8211; GET: /user/new?name=Mark
  * Read &#8211; GET: /user/1
  * Update &#8211; GET: /user/1/update?name=John
  * Delete &#8211; GET: /user/1/delete

Simply:

  * Create &#8211; POST: /user (with the variables in the entity-body)
  * Read &#8211; GET: /user/1
  * Update &#8211; PUT: /user/1 (with the variables in the entity-body)
  * Delete &#8211; DELETE: /user/1

See [IBM &#8211; RESTful Web Services: The Basics][1] for more justifications on this.

Following this means everyone can understand how to use your API in a common way and **keeps the API simple**.

## Understand the difference between a URI and a Resource

Consider the following:

  * POST: http:/test.com/user
  * GET: http:/test.com/user/1
  * PUT: http:/test.com/user/1
  * DELETE: http:/test.com/user/1

POST, GET, PUT, DELETE are the methods

http:/test.com/user, http:/test.com/user/1 are URI&#8217;s

**user/1 **is a user, which is a resource

## Understand the difference between a resource and a representation

From the above example calling GET: http:/test.com/user/1 will return a representation of the resource user:1.

A representation is a set of attributes related to the resource, e.g.

  * name: mark
  * city: brighton

A representation will have a format (XML, JSON , XHTML etc), and a language.

## Keep the number of resources low

The resource names **should often** map conceptual domain entities. They should map to objects, not actions on the objects.

If you want to **declare a user as a subscriber**, you **don&#8217;t need to add a resource called subscribe**. Just pass the following representation:

  * name: mark
  * city: brighton
  * subscriber: YES

This **keeps documentation and coding simpler.**

## Create addressability by mapping a URI to each resource, possibly each representation

A URI should map to only one resource.

  * test.com/user maps only to user

There should be URI mapping to each representation of the resource

  * test.com/user.xml maps to the xml representation of the user
  * test.com/user.json maps to the json representation of the user

This enables URI&#8217;s to be shared in a consistent way, which **keeps things simple**.

## Name resources and representations carefully

Follow simple rules for naming resources. I recommend:

Use forward slashes to show child objects, with a resource for each item.

  * /events &#8211; exposes all events
  * /events/concerts &#8211; exposes all concerts
  * /events/concerts/1 &#8211; exposes concert with id of 1

Use semi-colons where there is no obvious sequence:

  * /events/locations/the-concorde-2;the-brighton-dome &#8211; is a search for 2 event locations

Use comma&#8217;s when the order matters but they are not child items:

  * <span style="line-height: 13px;">/events/locations/25.9,22.5 &#8211; is a lat/long search</span>

This keeps API&#8217;s consistent, making it **easier to interact with them**.

## Use POST for creating, not editing

When you POST you POST to an unknown resource.

  * POST: /user

How should you handle the following situation:

  * POST: /user/1

You could update it with the new data, or you could respond with a already created code, and force the use of PUT.

I recommend keeping things simple, and refusing to update.

## Consider the use of overloaded POST only to handle situations where PUT and DELETE are unavailable

If you want to allow your API to support clients without PUT and DELETE (in reality a rare situation these days), use overloaded POST. A true REST API wouldn&#8217;t do this, but sometimes you need to be flexible.

One way of doing this is to define in the API the actual call you want to use to replace POST:

  * POST: /user/1?method=put
  * POST: /user/1?method=delete

The API can then convert the POST call into the appropriate method, and funnel it into the same route.

## GET and HEAD should only ever fetch data, never alter or delete it

If you manipulate or delete data using GET, you put your data at risk.

It is possible a web crawler or browser call could delete your data.

**GET should only ever fetch data.**

## Allow for multiple identical PUT or DELETE requests, without side effects

If you are updating the price of a widget in a PUT request, don&#8217;t allow anything like:

  * price: +1
  * price: -2

Instead, only accept a new price:

  * price: 3.99

This is because an app could submit a PUT multiple times, without realising the negative effects. In the first example this would result in the price going up by 1 (or down by 2) on each submit.

In the second, the price would always remain at 3.99, there would be no ill effects.

## Use HTTP Response Codes

HTTP provides response codes to inform clients of the status of their request. **Use them! **Don&#8217;t just return a 200 response with an error description if something is wrong.

These are the main ones used:

### 2xx &#8211; Success codes

  * **200 &#8211; OK**, all is fine. *Entity-body *contains the resource requested in its current state
  * **201 &#8211; Created**, a new resource has been created. *Location* header contains the address of the new resource. *Entity-body* contains the representation of the new resource as it is on the server
  * **202 &#8211; Accepted**, a clients request is pending and will be completed later. *Location* header contains the expected address of the new resource so it can be checked later.

### 3xx &#8211; Redirection codes

  * **301 &#8211; Moved Permanently**, the API has moved a resource in response to the request, or an old resource is requested. *Location* contains the new URI.
  * **304 &#8211; Not Modified**, the client already has this data, used when the client provided a *If-Modified-Since* header and the data hasn&#8217;t been modified. *Date *header is required, *ETag* and *Content-Location* should be same as a 200, *Expires, Cache-Control* and *Vary* are required if they&#8217;ve changed since last sent.

### 4xx &#8211; Client side error

  * **400 &#8211; Bad Request**, there is a client-side problem, the document in the entity-body should contain more info on the problem
  * **401 &#8211; Unauthorized**, wrong credentials provided, or no credentials provided. *WWW-Authenticate* header should describe the authentication methods accepted. *Entity-body* could contain more details about the error.
  * **404 &#8211; Not Found**, no resource matches the requested URI, there is no reference to it on the server
  * **409 &#8211; Conflict**, client attempted to do something which would leave a resource in an inconsistent state, such as create a user with an already taken name. *Location *could point to the source of the conflict. *Entity-body* to describe the conflict.
  * **412 &#8211; Precondition failed**, client wanted to modify a resource using a If-Unmodified-Since/If-Match header, the resource had been modified by someone else.

### 5xx &#8211; Server side error

  * **500 &#8211; Internal Server Error**, there is an error on the server

More codes can be found in the [HTTP/1.1 Status Code Definitions guide][2]

## Handle and use meta-data in HTTP Headers

Implementing these will make your API more flexible and keep information in standard locations rather than URI&#8217;s.

These are common request headers (from client to server)

  * [Accept-Encoding][3] &#8211; asks the server to use compression of responses
  * [Authorization][4] &#8211; enables authentication via any method
  * [Host][5] &#8211; **required** &#8211; domain name of the URI, e.g. www.test.com
  * [If-Match][6] &#8211; value of a previous calls ETag response used with a PUT or DELETE. Server should only act if nobody else has modified the resource since you last fetched it. Otherwise provides a 412.
  * [If-Modified-Since][7] &#8211; value of a previous Last-Modified response used with a GET. Server should only provide a response if the resource was modified since the timestamp submitted. Use in conjunction with If-None-Match in case the change occurred within the same second. Otherwise provide a 304.
  * [If-None-Match][7] &#8211; value of a previous calls ETag response used with a GET. Server should only provide a response if the ETag doesn&#8217;t match, i.e. the resource has been altered. Otherwise provide a 304.
  * [If-Unmodified-Since][8] &#8211; value of a previous Last-Modified response used with a PUT or DELETE. Server should only act if nobody else has modified the resource since you last fetched it. Otherwise provides a 412.
  * [User-Agent][9] &#8211; information on your client, useful for gathering statistics

These are common response headers (from server to client)

  * [Content-Encoding][10] &#8211; tells the client what compression is being used
  * [Content-Length][11] &#8211; tells the client how many bytes the content body contains
  * [Content-Type][12] &#8211; tells the client the media type the entity-body is, e.g. text/html
  * [ETag][13] &#8211; a string representing a version of a representation of a resource, useful in detecting if a resource has changed with If-Match or If-None-Match
  * [Last-Modified][14] &#8211; the **time the representation changed**, useful in detecting if a resource has changed with If-Modified-Since and If-Unmodified-Since
  * [Location][15] &#8211; URI relating to the request, varies according to the HTTP status
  * [WWW-Authenticate][16] &#8211; tells the client the expected authentication type when responding with a 401

These are common request and response headers (bi-directional)

  * [Date][17] &#8211; time on the client the request was made, time on the server request was responded too. The server must provide this unless is is responding with a 100, 101, 500, 503

## REST is stateless &#8211; so don&#8217;t handle state in your API

REST API&#8217;s must be stateless. Every call requiring authentication should provide the authentication and never a session key.

When you attempt to handle state in your API you create a nightmare of sessions and session handling on the API side, and create lots of repetitive work for each service connecting to your API who has to potentially always handle the case where the session has expired. **Handling state will slow down your API** and all clients using it.

Stateless API&#8217;s are **easier to scale**, **more reliable **and **simpler to use**.

## REST is cacheable 1 &#8211; allow clients to GET only updated resources via HTTP

If your clients are repeatedly requesting the same data you are **unnecessarily slowing all applications down**, increasing bandwidth from the server to the clients and wasting computation power. Instead, use HTTP to handle this.

### The easy way with Last-Modified

  * Server provides a *Last-Modified *header with each GET call, the date the resource was last modified.
  * Clients can now GET with the header *If-Unmodified-Since* containing the latest Last-Modified value
  * The server either updates the resource if the Last-Modified value for the resource matches the one in If-Unmodified-Since, or respond with a 304 Not Modified.

### Get more precise with ETags

There is a risk here where more than one person can update data, that the data updated again within the same second. This is why you can also use ETags.

  * Server provides an ETag ([more on how to create ETags][18]) which represents the resources current state, with each GET call
  * Clients can now GET with the header If-None-Match containing the latest ETag value
  * The server either responds with the resource if the ETags differ, or respond with a 304 Not Modified.

However, ETags are more costly to generate than Last-Modified, and should be considered carefully.

## REST is cacheable 2 &#8211; prevent accidental simultaneous updates of the same resource via HTTP

A common issue when more than one client can access the same resource is having one client do an update, and then another client overwrite that update because they didn&#8217;t know it had occurred.

### The basic way with Last-Modified

  * Server provides a *Last-Modified *header with each GET call, the date the resource was last modified.
  * Clients can now PUT with the header *If-Modified-Since* containing the latest Last-Modified value
  * The server either responds with the resource if the dates differ, or respond with a 412 PreCondition Failed.

### Get more precise with ETags

  * Server provides an ETag ([more on how to create ETags][18]) which represents the resources current state, with each GET call
  * Clients can now GET with the header If-Match containing the latest ETag value
  * The server either responds with the resource if the ETags differ, or respond with a 412 PreCondition Failed.

[Read more about preventing race conditions][19].

## Use the HEAD method to allow the client to manage its bandwidth better

The HEAD method for an resource should return a meta-data only representation of the resource.

*HEAD: /user* should return everything *GET: /user* would except the entity-body.

This could be useful for a number of reasons, e.g. the Content-Length header might tell the client it doesn&#8217;t want to fetch this particular entity-body if its too large.

## Version your API, and never change released features

Each URI should begin with a version number.

  * <span style="line-height: 13px;">/v1/user</span>

Returns:

  * <span style="line-height: 13px;">name</span>
  * phonenumber

If you remove anything from the representation being returned for user, or change the rules about what you accept, you need to increase the version number &#8211; don&#8217;t just change the current representation.

  * <span style="line-height: 13px;">/v2/user</span>

Returns

  * <span style="line-height: 13px;">name</span>

**This prevents your clients from breaking!**

&nbsp;

## Understand Hypermedia application state and why you probably shouldn&#8217;t use it

Hypermedia Application State (also known as HATEOAS) is a concept wherein the client uses just one URI, and from that URI is able to deduce how to interact with the API by following links, as one would when using a website. What this means in theory is that the client need not know how to use the API in a certain way, which enables the API to evolve without updating all the clients. [This talk explains it well][20].

This is one part of REST I don&#8217;t agree with for most situations, although it is [technically part of having a true REST API][21].

The concept is great in theory, but it poses the following issues:

  * At least 2 API calls are needed to perform any task, one to identify how to perform the task, and then the one to actually do it &#8211; which means **more data being transferred**, and **more time taken** to get the data. This is **terrible for mobile**, especially as the signal could be lost in between asking how to perform the task, and actually doing it.
  * You should not use JSON to run this type of API, and JSON is the most efficient way of passing information to clients
  * This is not a common way of consuming an API, so it creates complexity for the client developers, which could cause the development to **take longer**, or **put people off** using the API
  * There is still lots of information the client needs to know about the API in order to respond to it and navigate it, so its not true separation of concerns anyway

Ultimately what this does is put the needs of the developers over that of the users. It places **theory over practicality**. No other aspect of REST does this, and that is why this is the one thing I don&#8217;t recommend, and [neither does the creator of Ruby on Rails][22], [nor Michael Bleigh][23]. [Others do][24], and its a big debate area. Understand it and make your own choices.

## Next steps

### Learn more about API&#8217;s

The best book you can read on this subject is the REST bible: [RESTful Web Services, by Leonard Richards][25], a [Kindle edition is also available][26].

### Get outside help with your API&#8217;s

If you&#8217;ve enjoyed this article and have an API project you&#8217;d like help with, I may be available as a consultant on your project. I&#8217;ve built REST API&#8217;s for mobile apps, and worked with Tesco on the early versions of their (non REST) API as a mobile developer. I learned much from this experience, and have both made, and seen, many of the issues that can occur from not following the above guidelines. My business partner and our CTO [James McCarthy][27] has over 20 years experience building back-end systems and API&#8217;s for organisations such as AMEX and may also be available.

To hire one of us, [check out the contact page][28].

 [1]: https://www.ibm.com/developerworks/webservices/library/ws-restful/
 [2]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10
 [3]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
 [4]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8
 [5]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.23
 [6]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.24
 [7]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.25
 [8]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.28
 [9]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.43
 [10]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11
 [11]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13
 [12]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17
 [13]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19
 [14]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.29
 [15]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.30
 [16]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.47
 [17]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.18
 [18]: http://bitworking.org/news/150/REST-Tip-Deep-etags-give-you-more-benefits
 [19]: http://blog.m.artins.net/restful-web-services-preventing-race-conditions/
 [20]: http://oredev.org/2010/sessions/hypermedia-apis
 [21]: http://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven
 [22]: http://37signals.com/svn/posts/3373-getting-hyper-about-hypermedia-apis
 [23]: http://www.intridea.com/blog/2010/4/29/rest-isnt-what-you-think-it-is
 [24]: http://opensoul.org/blog/archives/2012/10/29/why-hypermedia-apis-matter/
 [25]: http://www.amazon.co.uk/gp/product/0596529260/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0596529260&linkCode=as2&tag=tobloggle0e-21
 [26]: http://www.amazon.co.uk/gp/product/B0043D2ED6/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B0043D2ED6&linkCode=as2&tag=tobloggle0e-21
 [27]: http://www.linkedin.com/in/jamesmccarthy
 [28]: /about