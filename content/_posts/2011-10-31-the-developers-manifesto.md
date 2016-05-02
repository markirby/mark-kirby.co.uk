---
title: The developer’s manifesto
author: Mark Kirby
layout: post
date: 2011-10-31
url: /2011/the-developers-manifesto/
dsq_thread_id:
  - 1086898913

---
The developers manifesto I've created here are a set of coding guidelines that me and the [development team I work with][1] believe will lead to high quality, easily readable code. Code written not for you to read, but for someone else to read. It is the result of several weeks of meetings, reading a number of books, and years of making these mistakes. I am publishing it here first so the team have an online resource to refer to, and to inspire others to create great code also.

## Indentation, brackets and spaces

*We have selected the following standards, but what matters most is not which standard, but that you have a standard. We will use this convention on all new projects. On existing projects, stick with the previously established convention.*

Use** 4 spaces, soft tabs** (so really uses spaces, not&nbsp;tabs when you press the tab key) unless the language requires otherwise.&nbsp;[More over on coding horror&#8230;][2]

Use **brackets on the same line**


    function functionName() {  
      if (shouldDoSomething) {  
        doSomething();  
      } else {  
        doNotDoAnything();  
      }  
    }  

Add **1 space between brackets and braces**

    function functionName() {  
      if (shouldDoSomething) {  

Add **1 space between operators**

    var concatenatedString = string1 + string2 + ".";  

## Use meaningful names

Use meaningful names for variables, functions and classes,&nbsp;select names which describe exactly what the variable, function or class does

  * **No abbreviations** except common ones to be listed here as found
  * **No single character variables** except in loops
  * **No hungarian notation** (including data types inside variable names)
  * **No acronyms **use full names
  * Classes are nouns, methods verbs

So this :

    function name(b, c) {  
      strName = b + " " + c;  
    }  

becomes:

    function setName(firstName, lastName) {  
      name = firstName + " " + lastName;  
    }  

## Use consistent names

Define these patterns at the start of the project

  * Is it a manager or a controller
  * Is it fetch or get

## Functions and classes

  * Functions do only one thing, and the name of the function must clearly identify that thing
  * Functions should have no side effects, so a function named checkPassword should not also initialise a session
  * Functions ideally be no more than 4 lines, certainly no more than 8
  * Functions can have no more than one level of indentation
  * Functions must work at one level of abstraction, either calling other functions, or performing a single action low level code, such as manipulating a string
  * Classes have a single area of responsibility and are as small as possible
  * Don't pass arguments to functions in a class except to alter and return them, or ask a question about them. Instead modify class instance variables
  * Don't pass true or false flags to arguments, instead call different functions
  * Where you must pass an argument to a function pass only one or two arguments. Three suggests you need to create a new class

### Structure of classes

Classes should be laid out thus:

  1. public static constants
  2. private static constants
  3. private instance variables
  4. overridden functions
  5. public/private functions, ordered in layers as they are used so used functions are as close as possible to the function calling it (see levels in code example below)

## Comments

  * Comments should not be needed except to document var and argument types in Javascript
  * Instead of comments use smaller, better named functions
  * A doc system such as JavaDoc should not require you to duplicate any information, e.g. functions should only be named in the code, not repeated in doc notation
  * Never commit commented out code

## Testing

We write code with full unit testing and integration/automated user testing (using tools such as Selenium to mock user input)

## Repository management

We use git

## Code reviews

All code pushed to the main development branch is reviewed by another team member, checking all of the points listed here and making sure code is readable and makes sense

 [1]: http://ribot.co.uk
 [2]: http://www.codinghorror.com/blog/2009/04/death-to-the-space-infidels.html