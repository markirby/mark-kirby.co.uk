---
title: ASUnit with FlashLite 2.x and 3.x
author: Mark Kirby
layout: post
date: 2009-04-28
excerpt: How to set up ASUnit for unit testing Flash Lite. Works with FlashLite 2.x and above. We focus on how to install the ASUnit framework, where to place your tests and how to run the tests, along with links to how to write the tests.
url: /2009/asunit-with-flashlite/
dsq_thread_id:
  - 1102841767
categories:
  - tutorial
---
The tutorial explains a simple way to get started with ASUnit for unit testing your Flash Lite apps. There are many different ways of setting up ASUnit, but rather than be open and vague I&#8217;m going to prescribe a specific method which I feel separates your tests from the framework nicely, whilst being quick and easy to set up at the same time. Once you manage this, you&#8217;ll soon find your favourite method.

Please note &#8211; this method will also work with all Actionscript 2.0 Flash 8 apps.

## 1 &#8211; Download and install the ASUnit Framework

[Download the latest version of the code][1].

Unpackage and locate the folder named &#8216;as25&#8242;.

Copy this folder &#8216;as25&#8242; into the classpath (the root folder containing the code files) of your app.

Create another folder in the classpath called &#8216;tests&#8217;.

I&#8217;m assuming the classpath also contains all your components, classes etc, or if you have yet to code, its empty.

Here&#8217;s the contents of my root folder so you can follow my examples:

* AppName.fla (file)  
* _classpath (folder, containing all my .as files)  
** as25 (folder)  
** tests (folder)  
** other .as files

## 2 &#8211; Set up the ASUnitRunner app

### 2a &#8211; Copy the ASUnitRunner.fla and open it

Copy the ASUnitRunner.fla file to the same location as your apps fla file/s.

My folder now looks like this:

* AppName.fla (file)  
*** ASUnitRunner.fla (file)**  
* _classpath (folder, containing all my .as files)  
** as25 (folder)  
** tests (folder)  
** other .as files

Open the newly moved ASUnitRunner file with your editor.

### 2b &#8211; Set the publish settings

Open publish settings and set the .swf to be published in your chosen location. 

Alternatively you can create a folder called bin in the same folder the ASUnitRunner is sitting in, and it will automatically publish in there.

### 2c &#8211; Set the classpath

Open the Actionscript settings (in CS4 its File -> Publish Settings -> Flash -> Script settings button). 

Remove both classpaths currently in place.

Set one class path pointing to the src folder within the as25 folder starting from the location of the fla e.g.

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    .<span class="sy0">/</span>path<span class="sy0">/</span>to<span class="sy0">/</span>as25<span class="sy0">/</span>src
  </div>
</div>

in my case:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    .<span class="sy0">/</span>_classpath<span class="sy0">/</span>as25<span class="sy0">/</span>src
  </div>
</div>

Set another class path pointing to the classpath root starting from the location of the fla e.g.

in my case:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    .<span class="sy0">/</span>_classpath
  </div>
</div>

### 2d &#8211; Set the action to the right folder

Open the first frame of the fla and change it to:

<div class="codesnip-container" >
  <div class="bash codesnip" style="font-family:monospace;">
    import tests.AsUnitRunner;<br /> AsUnitRunner.main<span class="br0">&#40;</span>this<span class="br0">&#41;</span>;
  </div>
</div>

## 3 &#8211; Set up the tests folder

### 3a &#8211; copy test files

There are 2 more files to copy over into your tests folder.

Copy &#8216;as25/test/AllTests.as&#8217; to &#8216;tests/AllTests.as&#8217;

Copy &#8216;as25/test/AsUnitRunner.as&#8217; to &#8216;tests/AsUnitRunner.as&#8217;

### 3b &#8211; Add correct paths to AllTests.as

AllTests is set up to test ASUnit itself &#8211; so we will update it to test a sample file we will create.

Change tests/AllTests.as to:

<div class="codesnip-container" >
  <div class="actionscript codesnip" style="font-family:monospace;">
    <span class="kw2">class</span> tests.<span class="me1">components</span>.<span class="me1">AllTests</span> <span class="kw3">extends</span> asunit.<span class="me1">framework</span>.<span class="me1">TestSuite</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">private</span> <span class="kw2">var</span> className:<span class="kw3">String</span> = <span class="st0">"AllTests"</span>;</p> 
    
    <p>
      &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw2">function</span> AllTests<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">super</span><span class="br0">&#40;</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; addTest<span class="br0">&#40;</span><span class="kw2">new</span> tests.<span class="me1">components</span>.<span class="me1">ExampleTest</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span><br /> <span class="br0">&#125;</span></div> </div> 
      
      <h3>
        3c &#8211; Add correct paths to AsUnitRunner.as
      </h3>
      
      <p>
        Change tests/AsUnitRunner.as to:
      </p>
      
      <div class="codesnip-container" >
        <div class="actionscript codesnip" style="font-family:monospace;">
          <span class="kw3">import</span> asunit.<span class="me1">textui</span>.<span class="me1">TestRunner</span>;<br /> <span class="kw3">import</span> tests.<span class="me1">AllTests</span>;</p> 
          
          <p>
            <span class="kw2">class</span> tests.<span class="me1">AsUnitRunner</span> <span class="kw3">extends</span> TestRunner <span class="br0">&#123;</span>
          </p>
          
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw3">static</span> <span class="kw2">function</span> main<span class="br0">&#40;</span>container:<span class="kw3">MovieClip</span><span class="br0">&#41;</span> : <span class="kw3">Void</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw2">var</span> tR = <span class="kw2">new</span> AsUnitRunner<span class="br0">&#40;</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span>
          </p>
          
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw2">function</span> AsUnitRunner<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">start</span><span class="br0">&#40;</span>AllTests<span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span><br /> <span class="br0">&#125;</span></div> </div> 
            
            <h2>
              4 &#8211; Create sample file to test along with some tests
            </h2>
            
            <h3>
              4a &#8211; Create components/Example.as
            </h3>
            
            <p>
              Create a folder called components at the root of your classpath, for me thats:
            </p>
            
            <p>
              * AppName.fla (file)<br /> * ASUnitRunner.fla (file)<br /> * _classpath (folder, containing all my .as files)<br /> ** as25 (folder)<br /> ** tests (folder)<br /> <strong>** components (folder)</strong><br /> ** other .as files
            </p>
            
            <p>
              Create a new file called Example.as and place it inside the components with the following code:
            </p>
            
            <div class="codesnip-container" >
              <div class="actionscript codesnip" style="font-family:monospace;">
                <span class="kw2">class</span> components.<span class="me1">Example</span> <span class="br0">&#123;</span></p> 
                
                <p>
                  &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw2">function</span> Example<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span>
                </p>
                
                <p>
                  <span class="br0">&#125;</span></div> </div> 
                  
                  <h3>
                    4b &#8211; Create tests/components/AllTests and ExampleTest
                  </h3>
                  
                  <p>
                    Create a folder within your tests folder called components, for me thats:
                  </p>
                  
                  <p>
                    * AppName.fla (file)<br /> * ASUnitRunner.fla (file)<br /> * _classpath (folder, containing all my .as files)<br /> ** as25 (folder)<br /> ** tests (folder)<br /> <strong>*** components (folder)</strong><br /> ** components (folder)<br /> ** other .as files
                  </p>
                  
                  <p>
                    Create the following two files:
                  </p>
                  
                  <p>
                    AllTests.as
                  </p>
                  
                  <div class="codesnip-container" >
                    <div class="actionscript codesnip" style="font-family:monospace;">
                      <span class="kw2">class</span> tests.<span class="me1">components</span>.<span class="me1">AllTests</span> <span class="kw3">extends</span> asunit.<span class="me1">framework</span>.<span class="me1">TestSuite</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">private</span> <span class="kw2">var</span> className:<span class="kw3">String</span> = <span class="st0">"AllTests"</span>;</p> 
                      
                      <p>
                        &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw2">function</span> AllTests<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">super</span><span class="br0">&#40;</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; addTest<span class="br0">&#40;</span><span class="kw2">new</span> tests.<span class="me1">components</span>.<span class="me1">ExampleTest</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span><br /> <span class="br0">&#125;</span></div> </div> 
                        
                        <p>
                          ExampleTest.as
                        </p>
                        
                        <div class="codesnip-container" >
                          <div class="actionscript codesnip" style="font-family:monospace;">
                            <span class="kw3">import</span> components.<span class="me1">Example</span>;<br /> <span class="kw3">import</span> asunit.<span class="me1">framework</span>.<span class="me1">TestCase</span>;</p> 
                            
                            <p>
                              <span class="kw2">class</span> tests.<span class="me1">components</span>.<span class="me1">ExampleTest</span> <span class="kw3">extends</span> TestCase <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">private</span> <span class="kw2">var</span> className:<span class="kw3">String</span> = <span class="st0">"ExampleTest"</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">private</span> <span class="kw2">var</span> instance:Example;
                            </p>
                            
                            <p>
                              &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw2">function</span> ExampleTest<span class="br0">&#40;</span>testMethod:<span class="kw3">String</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">super</span><span class="br0">&#40;</span>testMethod<span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span>
                            </p>
                            
                            <p>
                              &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw2">function</span> setUp<span class="br0">&#40;</span><span class="br0">&#41;</span>:<span class="kw3">Void</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; instance = <span class="kw2">new</span> Example<span class="br0">&#40;</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span>
                            </p>
                            
                            <p>
                              &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw2">function</span> tearDown<span class="br0">&#40;</span><span class="br0">&#41;</span>:<span class="kw3">Void</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">delete</span> instance;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span>
                            </p>
                            
                            <p>
                              &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw2">function</span> testInstantiated<span class="br0">&#40;</span><span class="br0">&#41;</span>:<span class="kw3">Void</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; assertTrue<span class="br0">&#40;</span><span class="st0">"Example instantiated"</span>, instance <span class="kw3">instanceof</span> Example<span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span>
                            </p>
                            
                            <p>
                              &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw3">public</span> <span class="kw2">function</span> test<span class="br0">&#40;</span><span class="br0">&#41;</span>:<span class="kw3">Void</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; assertTrue<span class="br0">&#40;</span><span class="st0">"failing test"</span>, <span class="kw2">false</span><span class="br0">&#41;</span>;<br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span><br /> <span class="br0">&#125;</span></div> </div> 
                              
                              <h2>
                                5 &#8211; Run your tests
                              </h2>
                              
                              <p>
                                Now you are all set up, time to run those tests.
                              </p>
                              
                              <p>
                                Simply publish and run AsUnitRunner.fla.
                              </p>
                              
                              <p>
                                Expect to see a failure, the dummy test is set up expected to fail.
                              </p>
                              
                              <p>
                                Now you can see how to set up ASUnit, you can expand Example.as and add some functions to test, and play around until you are ready to test your own functions. <a href="http://www.flashcodersny.org/wordpress/?p=103">Advice on how to write tests can be found here</a>. I hope to add another tutorial on this soon.
                              </p>

 [1]: http://asunit.org/