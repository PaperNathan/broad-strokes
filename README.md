Broadstrokes is an adaptive HTML template.  It's designed to be a modular coding
UI Kit.

The goals are:
    - to be able to reuse elements you've created in the past.
    - to reduce the amount of work require for building complex apps.
    - to create a customizable template that's easy to build on.




-=-=-=- HTML -=-=-=-


This template is built so you can easily replace or add elements.  It is structured 
into four pieces that magnify individual parts.  


index.js -> build file -> component -> crumbs


* index.js (The "Website")
    - Compiles all of the components.
    - Routes between the layouts.
    - Renders to the DOM.

* build files (e.g. Nav, Footer, Body, etc...)
    - Breaks the website into manageable pieces.
    - Is the container for components.

* components (e.g. Containers, Text Blocks, Contact Forms, etc...)
    - A section of each build file.
    - Can be the final step.

* crumbs (e.g. Buttons, Icons, Links, etc...)
    - Can be styled directly.
    - Great for A/B Testing.
    - Allows for smaller elements to be reused site-wide.


** index.html **

index.html (public/index.html) can be used to add additional cdn's or additional
header information.


** Difference Between Components and Crumbs **

Components are dependencies used by build files to layout their major sections.  
The build files may require some components so the layout doesn't break.  With this
in mind, it's best to put components in the folder containing the build file that
imports them.  

Crumbs are elements used by the entire site.  Crumbs are are not dependencies of specific
build files.  The Crumbs folder structure has been organized to cover a variety of 
elements you may create but isn't immutable.  The structure is:

    * av (src/crumbs/av)
        - For Audio, Video, and Canvas elements.

    * formatting (src/crumbs/formatting)
        - For Static and Text elements.

    * interactive (src/crumbs/interactive)
        - For elements that require user interaction/input.  (e.g. Buttons, Input Fields, Text Areas, etc...)





-=-=-=- SASS -=-=-=-


Open a new terminal window and being watching your Sass with:
      sass --watch public/sass/main.scss:public/css/main.css

CSS files are meant to be overwritten with your own custom CSS.

* main.scss
  - This compiles reset.scss, global.scss, and custom.scss to be converted into css.

* custom.scss
  - Write your custom css/scss here.

* _reset.scss
  - A standard css reset from http://meyerweb.com/eric/tools/css/reset.

* _global.scss
  - Holds CSS properties that are used throughout the site.





-=-=-=- JAVASCRIPT -=-=-=-


* helpers.js (./public/helpers.js)
    - This file is for custom javascript, jQuery, and animations (anime.js).  This
      directly modifies the DOM.

* componentFunctions.js (./src/componentFunctions.js)
    - This file is where all components can access additional functions. 

    - To add a function:
        *  export function functionName() {};

    - To import a function in the React Component:
        *  import { functionName } from "./../../componentFunctions";
