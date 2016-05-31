hugo server --theme=_mark
hugo server --theme=huggle -w

cd themes/_mark && gulp watch

Steps

- Content
  - Home (not sure)
  - About (bio, timeline, projects, skills)
  - Articles
  - Speaking (list of talks given, dates, content, link to slides, call to action - form)
  - Teaching (training materials hub)
  - Contact (wufoo form, why you might contact etc)

- Design the blog with
  - Create a sample post showing all the different text types (See paul)
  - P (text)
  - Bullets
  - Headings throughout
  - Images
  - Code rendering plugin
  - Home page
  - Article
  - Google analytics
  - Comments?
  - Set up about page (perhaps with Linkedin)
  - Set up Twitter integration
  - Contact form
- Remove the old posts that have low engagement and aren't interesting
- Add blurb to each post keeping
  - ensure that is in the text that appears on google search

Design

* Home - blog posts, easy to contact and find me
* About - linkedin stuff
* Speaking - speakers bio
* Contact - contact form wufoo

Create a new post:

    hugo new _posts/2016-05-03-good-to-great.md

Build:

    rm -rf public/
    hugo

Serve:

    hugo server --watch --verbose
