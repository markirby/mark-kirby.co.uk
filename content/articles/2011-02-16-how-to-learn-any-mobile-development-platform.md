---
title: How to learn any mobile development platform
author: Mark Kirby
layout: post
date: 2011-02-16
url: /2011/how-to-learn-any-mobile-development-platform/
dsq_thread_id:
  - 1224200413

---
I'm about to learn yet another new mobile development platform. See if you can guess which one from my latest posts&#8230; I've learned a few languages over the years, and since moving to mobile I've realised there is a standard approach that can be applied to learning any mobile platform. Unlike desktop or web technologies, there are a lack of good books on mobile development platforms, so you'll need to consult a wide range of places to get the info you need. It is far better to do this before you start coding an app, so you know the limitations of the platform, and you'll need to know what you are looking for as you can't read every document and every website.

Here I shall tell you what to look for. Apply this to your platform of choice.

We will be looking at the following areas:

  1. Find the resources available
  2. Locate and download the tools you'll need
  3. Identify and learn the language you'll be coding in
  4. Identify and learn any frameworks you must use
  5. Identify any libraries or frameworks you could use
  6. Identify all available device API's and find out how you can use them
  7. Get coding!

A caveat: before you start, ensure that your chosen platform is actually suitable for your needs. I won't cover that step here, but it should be the very first step.

## Find the resources available

It's all too easy to jump into learning a platform and simply rely on the resources you find first in google, the official documentation or the one book you managed to find. Instead, begin by spending a day (yes a whole day, and set the end of the day as your deadlne to stop searching), and just explore. If your not sure where to start, here are the places I look:

  * the platforms developers home page, and work through as many links in each resource linked to from there
  * search google with the platform name and related terms
  * search amazon, scribd and safari online for books that may have been published and **buy them**, books can be one of the best resources as they have to be relatively free of mistakes, unlike blog posts
  * search twitter for people mentioning the platform, many choose to specialise their twitter accounts and mentions links that they find, which in turn can lead to new resources
  * look for events focused on the platform and see if they have published their sessions for free online

Once your done, do us a favour and publish your list so others can jump off your research and crawl even deeper - I did this very task yesterday,[ my collection of  Windows Phone 7 resources][1] is an example of the kind of range you should be able to find from the get go. You can refine this list as you get deeper in your subject.

You should also set up an RSS feeder to subscribe to the key blogs, news areas and twitter accounts so you can keep on top of the latest developments on a regular basis.

## Locate and download the tools you'll need

Each platform will have a set of required installs, and perhaps a choice of IDE's for creating your apps.

If you have an IDE choice, install them all and try them out with a hello world. Pick the one that works for you and take care to look for:

  * Ease of [code refactoring][2] (can save you lots of debugging)
  * Ease of [debugging][3], is there a built in debugger?
  * Do you want, and does the IDE feature [code completion][4]?
  * What other features could be useful?

Even if there is only one IDE available, you should learn how do all the above featuresT.

## Identify and learn the logic language you'll be coding in

Each platform has a language you'll need to learn first, before getting into more specifics of the platform and visuals. This is the language that takes care of the programs logic:

  * Flash Lite has ActionScript
  * Android, Java
  * iOs, Objective C
  * Windows Phone 7 Silverlight, C-sharp
  * Nokia WRT, JavaScript

Find the language, go back to your resource list and add further resources for that language. Review each one, find the best ones for you and then run through the following topics in a number of different places.

This is also a good test - if you can't answer all these about your language (or at least know where to look) you don't know enough about the language to be as efficient as you could be. If you don't understand any of the questions, you don't know enough about programming concepts to be as efficient as you could be. Rectify any areas before continuing to be building on a strong base, and to ensure you create a high quality mobile app. It's even more important to understand the basics in mobile as performance is such an issue.

### To get started

  * How do you print out a variable?
  * How does the program start? What is the automatic entrance point of the application?
  * What naming conventions are used by the language? Where should case be used, and underscores? If none are imposed, what do the majority of developers use? Check sample code, especially in open source projects which tend to be more regulated, and compose some sample code to remind you how to behave!

### Data types

  * What [primitive data types][5] are available? e.g. boolean, integers, [enums][6] etc.
  * How do you create a variable for a given data type? What are the rules around this?
  * How is memory allocated to data types? Is it managed automatically, do you need to do your own memory management?
  * What mathmatical functions are available without needing additional libraries?
  * What [logical operators][7] are available (AND, NOT, OR)?
  * What, if any, [bitwise operators][8] are available?
  * What are rules around true and false? Does true == 1, does false == 0 etc.
  * What features do you get for free with the String data type? Popular ones include split, join, concatenate, substring etc. You'll need to refer to these regularly.
  * What [regex][9] functions does the language come with?
  * How do you declare an [Array][10], and what functions come built-in to work with Arrays? What rules are there around declaring Arrays?
  * Does your language allow you to create custom data types such as [structs][11], and how do you do this?

### Functions

  * How do you declare a function?
  * What are the rules around passing arguments in? Must they be specified by data type? Do they need to be specified at all?
  * Which data types or at what point are variables [passed by reference, or by value][12]? This is most important to know, otherwise you could end up very confused when values change unexpectedly.
  * Do you have access to advanced features such as [passing functions][13], [anonymous functions][14], [currying][15] or [function overloading][16]?

### Statements

Ensure you learn how the following are done:

  * For loops
  * While loops
  * If / Else statements
  * Switch statements

Then:

  * Are [exceptions][17] available?
  * Must you declare exceptions or are they optional?
  * How do you catch an exception?
  * How do you throw an exception?
  * Can you use the finally cause?

### Code organisation

  * How are [namespaces][18] managed?
  * How do you import namespaces?

### Objects

  * How do you define a [class][19]?
  * How do you declare a [constructor][20] and [destructor][21]?
  * How do you create and destroy an object?
  * How do you define a [class method][22]?
  * How do you invoke (call) a class method?
  * How do you declare methods as public or private?
  * Is [inheritance][23] possible? If so, how do you create a [subclass][24]? How do you call the superclass constructor from a subclass?
  * Can you use [interfaces][25]?
  * How do you create [abstract classes][26]?
  * How can you achieve [Encapsulation][27] and [Polymorphism][28]?
  * What is the [superclass][29] of all objects (the root class)? This might be Object, NSObject etc.
  * What root class methods are available?

And also

  * Is it possible to read or write from local files?
  * Is it possible to use [reflection][30]?
  * How are [events][31] handled, do you have access to [delegates][32]?
  * How can you talk to databases?
  * How can you communicate with remote data sources, such as HTTP web servers?

## Identify and learn any frameworks or class libraries that come built in

The platform will likely come with a set of class libraries you can use, e.g. Windows Phone 7 allows you to use many of the .net classes, java comes with its own set. You will almost certainly have touched on some of these in the last section.  Now is the time to find out which libraries are available for the mobile platform, and try to identify all available classes before you start work so you know where to look when you want to accomplish a specific task. These libraries will be your first port of call when you start coding.

## Identify where you can find additional libraries if you need them

Sometimes the official class libraries aren't enough. Developers often create reusable code and release it as open source. Find out where repositarys of extra classes might be found which you can either use in your own projects to save time, or use as a basis for your own custom code. Never trust these libraries in the same way you would the official ones, always ensure you understand the code and have a suite of unit tests for it before you use it. Make sure libraries will work on the platform before you use them, test them on the actual device. Some will be incompatible even though they might work with the base language.

## Find out how which device API's are available

Now is the time to specialise. Your chosen platform should give you access to a range of device API's such as location, SMS, accelerometer etc. Find out which API's are available, and how you might use them. Now you have a good understanding of what is possible with the platform.

## Look for additional tools

  * Unit testing
  * Acceptance/automated testing of interface
  * Build system
  * Version Control
  * Continuous integration server if needed

 [1]: http://mark-kirby.co.uk/2010/the-best-resources-for-windows-phone-7-development/
 [2]: http://en.wikipedia.org/wiki/Code_refactoring
 [3]: http://en.wikipedia.org/wiki/Debugging
 [4]: http://en.wikipedia.org/wiki/Autocomplete
 [5]: http://en.wikipedia.org/wiki/Primitive_data_types
 [6]: http://en.wikipedia.org/wiki/Enumerated_type
 [7]: http://en.wikipedia.org/wiki/Logical_operator
 [8]: http://en.wikipedia.org/wiki/Bitwise_operation
 [9]: http://en.wikipedia.org/wiki/Regex
 [10]: http://en.wikipedia.org/wiki/Array_data_type
 [11]: http://en.wikipedia.org/wiki/Struct_%28C_programming_language%29
 [12]: http://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_value
 [13]: http://en.wikipedia.org/wiki/First-class_function#Higher-order_functions
 [14]: http://en.wikipedia.org/wiki/Anonymous_function
 [15]: http://en.wikipedia.org/wiki/Partial_application
 [16]: http://en.wikipedia.org/wiki/Function_overloading
 [17]: http://en.wikipedia.org/wiki/Exceptions
 [18]: http://en.wikipedia.org/wiki/Namespace_%28computer_science%29
 [19]: http://en.wikipedia.org/wiki/Class_%28computer_science%29
 [20]: http://en.wikipedia.org/wiki/Constructor_%28object-oriented_programming%29
 [21]: http://en.wikipedia.org/wiki/Destructor_%28computer_science%29
 [22]: http://en.wikipedia.org/wiki/Class_method
 [23]: http://en.wikipedia.org/wiki/Inheritance_%28computer_science%29
 [24]: http://en.wikipedia.org/wiki/Subclass_%28computer_science%29
 [25]: http://en.wikipedia.org/wiki/Protocol_%28object-oriented_programming%29
 [26]: http://en.wikipedia.org/wiki/Abstract_class
 [27]: http://en.wikipedia.org/wiki/Encapsulation_%28object-oriented_programming%29
 [28]: http://en.wikipedia.org/wiki/Polymorphism
 [29]: http://en.wikipedia.org/wiki/Superclass_%28computer_science%29
 [30]: http://en.wikipedia.org/wiki/Reflection_%28computer_science%29
 [31]: http://en.wikipedia.org/wiki/Event_%28computing%29
 [32]: http://en.wikipedia.org/wiki/Delegation_%28programming%29#As_a_language_feature