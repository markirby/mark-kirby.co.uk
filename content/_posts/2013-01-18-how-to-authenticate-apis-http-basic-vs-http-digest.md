---
title: How to authenticate APIs – HTTP Basic vs HTTP Digest
author: Mark Kirby
layout: post
date: 2013-01-18
url: /2013/how-to-authenticate-apis-http-basic-vs-http-digest/
dsq_thread_id:
  - 1088414229

---

A comparison of the pros and cons of the three main secure ways of authenticating an API, in plain business terms. We cover:

  * HTTP Basic Access Authentication over SSL
  * HTTP Digest

The answer, [as usual][1], is it depends, but if you can force the server to use SSL, or are creating a private API, then its Basic.

## HTTP Basic Access Authentication over SSL

[HTTP Basic][2] is a simple form of authentication where:

  * STEP 1 - the client makes a request for information, sending a username and password to the server in plain text
  * STEP 2 - the server responds with the desired information or an error

HTTP Basic doesn't need to be implemented over SSL, but if you don't, it isn't secure at all. So I'm not even going to entertain the idea of using it without.

### Pros

  * Its <strong>simple to implement</strong>, so your client developers will have <strong>less work to do</strong> and take <strong>less time to deliver</strong>, so developers could be <strong>more likely to want to use your API </strong>
  * Unlike Digest, you can store the passwords on the server in whatever encryption method you like, such as [bcrypt][3], making the **passwords more secure**
  * Just one call to the server is needed to get the information, making the client **slightly faster** than more complex authentication methods might be

### Cons

  * SSL is slower to run than basic HTTP so this **causes the clients to be slightly slower**
  * If you **don't have control of the clients**, and can't [force the server to use SSL][4], a developer might not use SSL, causing a **security risk**

In summary - if you have control of the clients, or can ensure they use SSL, HTTP Basic is a good choice. The slowness of the SSL can be cancelled out by the speed of only making one request.

## HTTP Digest Access Authentication

HTTP Digest access authentication is a more complex form of authentication that works as follows:

  * STEP 1 - a client sends a request to a server
  * STEP 2 -the server responds with a special code (called a nonce), another string representing the 'realm' and asks the client to authenticate
  * STEP 3 - the client responds with this nonce and an encrypted version of the username, password and realm (a hash)
  * STEP 4 - the server responds with the requested information if the client hash matches their own hash of the username, password and realm, or an error if not

### Pros

  * No usernames or passwords are sent to the server in plaintext, making a non-SSL connection more secure than an HTTP Basic request that isn't sent over SSL. This means SSL isn't required, which makes each call <strong>slightly faster</strong>

### Cons

  * For every call needed, the client must make 2, making the process <strong>slightly slower </strong>than HTTP Basic
  * HTTP Digest is **vulnerable** to a man-in-the-middle security attack which basically means it **could be hacked**
  * HTTP Digest prevents use of the strong password encryption, meaning the passwords stored on the server **could be hacked**

In summary, HTTP Digest is vulnerable to at least 2 methods of hacking, where a server using strong encryption for passwords with HTTP Basic over SSL is not.

If you don't have control over your clients however they could attempt to perform Basic authentication without SSL, which is much less secure than Digest.

## The answer - it depends, but probably HTTP Basic

Ideal:

  * Use HTTP Basic with SSL, slower than non-SSL, but only one call needed per information request
  * Store passwords on the server encrypted with a strong password hash such as bcrypt, making it harder for hackers to extract them from the server
  * Force the server to serve the API over SSL

If you can't force the server to server the API over SSL, and don't have control over all the clients being built (i.e. you are creating a public API):

  * Use HTTP digest

 [1]: http://adactio.com/journal/4437/
 [2]: http://en.wikipedia.org/wiki/Basic_access_authentication
 [3]: http://en.wikipedia.org/wiki/Bcrypt
 [4]: http://stackoverflow.com/questions/567434/force-https-for-entire-server-domain