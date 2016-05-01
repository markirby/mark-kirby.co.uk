---
title: Structuring Flash Lite code the MVC way
author: Mark Kirby
layout: post
date: 2009-07-20
excerpt: "Advice on how to structure your Flash and Flash Lite code in an MVC way, also taking principles of build from Java's ANT tool. Aimed at those already using classes to develop Flash Lite code."
url: /2009/structuring-flash-lite-code-the-mvc-way/
dsq_thread_id:
  - 1127827141
categories:
  - tutorial
---
I recently had a discussion with Thomas Joos on ways of structuring code that conform to basic standards. Taking his ideas on board and combining them with some of my own, I propose this simple structure which can serve as the starting point for a new Flash Lite or Flash project. This is based on the MVC model, and ANT for JAVA.

## The root

The root of your project could contain the following folders:

  * build
  * deploy
  * src

Here&#8217;s more details on each

### build

The build folder is for your Flash output, generated during the build process.

You can set this folder in Flash CS4 by opening the .fla file and going to : &#8220;File -> Publish settings&#8230;&#8221; in the menu, and then navigating to the build folder to set the file for the Flash type in the popup which comes up.

The build folders contents should be able to be deleted at any time, and recreated by running the build. Do not keep any source files or the .fla in here!

### deploy

The deploy folder is a good place to keep your installers, such as the .sis files produced by the Adobe Mobile Packager, or other packagers.

### src

The src folder is the place to keep your source code, that&#8217;s your .fla and related .as files, structured as explained in the following section.

## The source code folder

As mentioned, all your source code should be kept in the src folder.

The structure of src folder will look something like this:

  * com
  * companyName
  * appName
  * controller
  * model
  * view
  * main.as

  * utils
  * components

  * appName.fla

So your .fla file goes into the root of src, alongside a folder structure unique to your company, which will also be reflected in the namespaces you give your classes.

The classes specific to the app go within a folder with the same name as the app, and the classes which can be used in other applications are placed alongside this folder in their own folders. I&#8217;ll go into more detail on the contents of each folder next. 

### appName

Within the appName folder, you place the classes which cannot be reused in other applications and are specific to this application. These will form the core of this individual application.

You will also place a main.as file here which will be called from the .fla file and will call the various controllers to manage the app.

#### model

In the model folder you store datatypes declaring data formats used within the app, as well as perhaps classes to manage arrays of data stored and kept in memory whilst the app is running.

#### view

In the view folder you store classes relating to screens as well as components that you only want to use within this app.

#### controller

In the controller folder you can store classes relating to the logic of the programme, a key controller to manage what key is pressed and when, a screen controller to manage what screen is currently being displayed, perhaps an API controller to manage all the API calls. The classes here will work closely with the view and the model, building views and manipulating the model. They will be called initially from your main.as class.

### utils

Within the utils folder you place helpers and utilities which can be reused in other apps. You should be able to drop classes in here and just start reusing them.

### components

Within the components folder you place classes which relate to visual components of your app, stored in the library of the .fla. These components classes, although may come with different assets in another app, can always be reused and will always behave in the same way when placed in another app.