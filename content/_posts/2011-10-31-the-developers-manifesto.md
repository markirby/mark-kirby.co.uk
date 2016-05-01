---
title: The developer’s manifesto
author: Mark Kirby
layout: post
date: 2011-10-31
url: /2011/the-developers-manifesto/
dsq_thread_id:
  - 1086898913
categories:
  - post
---
The developers manifesto I&#8217;ve created here are a set of coding guidelines that me and the [development team I work with][1] believe will lead to high quality, easily readable code. Code written not for you to read, but for someone else to read. It is the result of several weeks of meetings, reading a number of books, and years of making these mistakes. I am publishing it here first so the team have an online resource to refer to, and to inspire others to create great code also.

## Indentation, brackets and spaces

*We have selected the following standards, but what matters most is not which standard, but that you have a standard. We will use this convention on all new projects. On existing projects, stick with the previously established convention.*

Use** 4 spaces, soft tabs** (so really uses spaces, not&nbsp;tabs when you press the tab key) unless the language requires otherwise.&nbsp;[More over on coding horror&#8230;][2]

Use **brackets on the same line**

[javascript highlight=&#8221;1, 2, 4, 6&#8243;]  
function functionName() {  
if (shouldDoSomething) {  
doSomething();  
} else {  
doNotDoAnything();  
}  
}  
[/javascript]

Add **1 space between brackets and braces**

[javascript]  
function functionName() {  
if (shouldDoSomething) {  
[/javascript]

Add **1 space between operators**

[javascript]  
var concatenatedString = string1 + string2 + ".";  
[/javascript]

## Use meaningful names

Use meaningful names for variables, functions and classes,&nbsp;select names which describe exactly what the variable, function or class does

  * **No abbreviations** except common ones to be listed here as found
  * **No single character variables** except in loops
  * **No hungarian notation** (including data types inside variable names)
  * **No acronyms **use full names
  * Classes are nouns, methods verbs

So this :

[javascript]  
function name(b, c) {  
strName = b + " " + c;  
}  
[/javascript]

becomes:

[javascript]  
function setName(firstName, lastName) {  
name = firstName + " " + lastName;  
}  
[/javascript]

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
  * Don&#8217;t pass arguments to functions in a class except to alter and return them, or ask a question about them. Instead modify class instance variables
  * Don&#8217;t pass true or false flags to arguments, instead call different functions
  * Where you must pass an argument to a function pass only one or two arguments. Three suggests you need to create a new class

### Structure of classes

Classes should be laid out thus:

  1. public static constants
  2. private static constants
  3. private instance variables
  4. overridden functions
  5. public/private functions, ordered in layers as they are used so used functions are as close as possible to the function calling it (see levels in code example below)

*These are controversial, but after trying them, we find code is more readable.*

Before:

[javascript]  
var splash = (function() {

var  
_shouldAutomaticallyChange = true,  
_numberOfSlides = 0,

_getPositionOfCurrentSlide = function() {  
var slidesArray = _getSlidesAsArray();  
var i = slidesArray.length &#8211; 1;  
for (i; i >= 0; i&#8211;) {  
if (jQuery(slidesArray[i]).hasClass("current")) {  
return i + 1;  
}  
}  
return false;  
},

_getPositionOfNextSlide = function(currentSlide, numberOfSlides) {  
if (currentSlide === numberOfSlides) {  
return 1;  
} else {  
return currentSlide + 1;  
}  
},

_getPositionOfPreviousSlide = function(currentSlide, numberOfSlides) {  
if (currentSlide === 1) {  
return numberOfSlides;  
} else {  
return currentSlide &#8211; 1;  
}  
},

_changeSlide = function(from, to) {  
if (from !== to) {  
jQuery(&#8216;#splash-tabs > li:nth-child(&#8216;+from+&#8217;)&#8217;).removeClass(&#8216;current&#8217;);  
jQuery(&#8216;#splash-tabs > li:nth-child(&#8216;+to+&#8217;)&#8217;).addClass(&#8216;current&#8217;);  
jQuery(&#8216;.splash&#8217;+from).fadeOut(&#8216;slow&#8217;).removeClass(&#8216;current&#8217;);  
jQuery(&#8216;.splash&#8217;+to).fadeIn(&#8216;slow&#8217;).addClass(&#8216;current&#8217;);

}  
},

_getSlidesAsArray = function() {  
return jQuery("#splash-tabs > li");  
},

_onClickNext = function() {  
var currentSlide = _getPositionOfCurrentSlide();  
\_changeSlide(currentSlide, \_getPositionOfNextSlide(currentSlide, _numberOfSlides));  
},

_onClickPrevious = function() {  
var currentSlide = _getPositionOfCurrentSlide();  
\_changeSlide(currentSlide, \_getPositionOfPreviousSlide(currentSlide, _numberOfSlides));  
},

_changeIfShouldChange = function() {  
if (_shouldAutomaticallyChange) {  
setTimeout(_change, 6000);  
}  
},

_change = function() {  
if (_shouldAutomaticallyChange) {  
_onClickNext();  
_changeIfShouldChange();  
}  
};

init = function() {

\_numberOfSlides = \_getSlidesAsArray().length;

jQuery("#splash .next").bind(&#8216;click&#8217;, function() {  
_shouldAutomaticallyChange = false;  
_onClickNext();  
});

jQuery("#splash .previous").bind(&#8216;click&#8217;, function() {  
_shouldAutomaticallyChange = false;  
_onClickPrevious();  
});

jQuery("#splash .next").bind(&#8216;touchstart&#8217;, function() {  
jQuery(this).addClass(&#8216;active&#8217;);  
});  
jQuery("#splash .next").bind(&#8216;touchend&#8217;, function() {  
jQuery(this).removeClass(&#8216;active&#8217;);  
});

jQuery("#splash .previous").bind(&#8216;touchstart&#8217;, function() {  
jQuery(this).addClass(&#8216;active&#8217;);  
});  
jQuery("#splash .previous").bind(&#8216;touchend&#8217;, function() {  
jQuery(this).removeClass(&#8216;active&#8217;);  
});

jQuery(&#8216;#splash-tabs > li&#8217;).bind(&#8216;click&#8217;, function() {  
_shouldAutomaticallyChange = false;  
var currentSlide = _getPositionOfCurrentSlide();  
var position = _numberOfSlides &#8211; jQuery(this).nextAll().length;  
_changeSlide(currentSlide, position);  
});

};

return {  
init: init  
}

}());  
[/javascript]

After:

[javascript]  
var splash = (function() {

var  
\_NUMBER\_OF_SLIDES,

_shouldAutomaticallyChange = true,  
_postionOfCurrentSlide = 1,

init = function(automate) {  
\_NUMBER\_OF\_SLIDES = \_countNumberOfTabs();

jQuery("#splash .next").bind(&#8216;click&#8217;, _onClickNext);  
jQuery("#splash .previous").bind(&#8216;click&#8217;, _onClickPrevious);  
jQuery(&#8216;#splash-tabs > li&#8217;).bind(&#8216;click&#8217;, _onClickTab);

jQuery("#splash .next").bind(&#8216;touchstart&#8217;, _onTouchStartButton);  
jQuery("#splash .next").bind(&#8216;touchend&#8217;, _onTouchEndButton);

jQuery("#splash .previous").bind(&#8216;touchstart&#8217;, _onTouchStartButton);  
jQuery("#splash .previous").bind(&#8216;touchend&#8217;, _onTouchEndButton);

if (automate) {  
_triggerDelayedCallToGoToNextSlideAutomatically();  
}  
},

//Level 1

_onClickNext = function() {  
_preventSlidesFromAutomaticallyChanging();  
_goToNextSlide();  
},  
_onClickPrevious = function() {  
_preventSlidesFromAutomaticallyChanging();  
_goToPreviousSlide();  
},  
_onClickTab = function() {  
var positionOfClickedTab = _numberOfSlides &#8211; jQuery(this).nextAll().length;  
_preventSlidesFromAutomaticallyChanging();  
_changeSlide(positionOfClickedTab);  
},

_onTouchStartButton = function() {  
jQuery(this).addClass(&#8216;active&#8217;);  
},  
_onTouchEndButton = function() {  
jQuery(this).removeClass(&#8216;active&#8217;);  
},

/**  
@return {number}  
*/  
_countNumberOfTabs = function() {  
return jQuery("#splash-tabs > li").length;  
},  
_triggerDelayedCallToGoToNextSlideAutomatically = function() {  
if (_shouldAutomaticallyChange) {  
setTimeout(_goToNextSlideAutomatically, 6000);  
}  
},

//Level 2  
_preventSlidesFromAutomaticallyChanging = function() {  
_shouldAutomaticallyChange = false;  
},  
_goToNextSlide = function() {  
\_changeSlide(\_getPositionOfNextSlide());  
},  
_goToPreviousSlide = function() {  
\_changeSlide(\_getPositionOfPreviousSlide());  
},  
_goToNextSlideAutomatically = function() {  
if (_shouldAutomaticallyChange) {  
_goToNextSlide();  
_triggerDelayedCallToGoToNextSlideAutomatically();  
}  
},

//Level 3  
_getPositionOfNextSlide = function() {  
if (\_postionOfCurrentSlide === \_numberOfSlides) {  
return 1;  
} else {  
return _postionOfCurrentSlide + 1;  
}  
},  
_getPositionOfPreviousSlide = function() {  
if (_postionOfCurrentSlide === 1) {  
return _numberOfSlides;  
} else {  
return _postionOfCurrentSlide &#8211; 1;  
}  
},  
_changeSlide = function(postionToChangeTo) {  
if (_postionOfCurrentSlide !== postionToChangeTo) {  
jQuery(&#8216;#splash-tabs > li:nth-child(&#8216; + _postionOfCurrentSlide + &#8216;)&#8217;).removeClass(&#8216;current&#8217;);  
jQuery(&#8216;#splash-tabs > li:nth-child(&#8216; + postionToChangeTo + &#8216;)&#8217;).addClass(&#8216;current&#8217;);  
jQuery(&#8216;.splash&#8217; + _postionOfCurrentSlide).fadeOut(&#8216;slow&#8217;).removeClass(&#8216;current&#8217;);  
jQuery(&#8216;.splash&#8217; + postionToChangeTo).fadeIn(&#8216;slow&#8217;).addClass(&#8216;current&#8217;);  
_postionOfCurrentSlide = postionToChangeTo;  
}  
};

return {  
init: init  
};

}());  
[/javascript]

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