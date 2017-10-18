
     ...     ..                                              ..                            
  .=*8888x <"?88h.                                         dF                              
 X>  '8888H> '8888      .u    .          u.               '88bu.                           
'88h. `8888   8888    .d88B :@8c   ...ue888b        u     '*88888bu                        
'8888 '8888    "88>  ="8888f8888r  888R Y888r    us888u.    ^"*8888N                       
 `888 '8888.xH888x.    4888>'88"   888R I888> .@88 "8888"  beWE "888L                      
   X" :88*~  `*8888>   4888> '     888R I888> 9888  9888   888E  888E                      
 ~"   !"`      "888>   4888>       888R I888> 9888  9888   888E  888E                      
  .H8888h.      ?88   .d888L .+   u8888cJ888  9888  9888   888E  888F                      
 :"^"88888h.    '!    ^"8888*"     "*888*P"   9888  9888  .888N..888                       
 ^    "88888hx.+"        "Y"         'Y"      "888*""888"  `"888*""                        
        ^"**""                                 ^Y"   ^Y'      ""                           
                                                                                           
                                                                                           
                                                                                           
       ...              s                                   ..                    .x+=:.   
   .x888888hx    :     :8                             < .z@8"`                   z`    ^%  
  d88888888888hxx     .88       .u    .          u.    !@88E                        .   <k 
 8" ... `"*8888%`    :888ooo  .d88B :@8c   ...ue888b   '888E   u         .u       .@8Ned8" 
!  "   ` .xnxx.    -*8888888 ="8888f8888r  888R Y888r   888E u@8NL    ud8888.   .@^%8888"  
X X   .H8888888%:    8888      4888>'88"   888R I888>   888E`"88*"  :888'8888. x88:  `)8b. 
X 'hn8888888*"   >   8888      4888> '     888R I888>   888E .dN.   d888 '88%" 8888N=*8888 
X: `*88888%`     !   8888      4888>       888R I888>   888E~8888   8888.+"     %8"    R88 
'8h.. ``     ..x8>  .8888Lu=  .d888L .+   u8888cJ888    888E '888&  8888L        @8Wou 9%  
 `88888888888888f   ^%888*    ^"8888*"     "*888*P"     888E  9888. '8888c. .+ .888888P`   
  '%8888888888*"      'Y"        "Y"         'Y"      '"888*" 4888"  "88888%   `   ^"F     
     ^"****""`                                           ""    ""      "YP'                


Broadstrokes is an adaptive HTML template.  
The goal is:
    - to be able to reuse elements you've created in the past.
    - to reduce the amount of work require for building complex apps.
    - to create a customizable template that's easy to build on.




-.,_,.-*^*-.,_,.-*^*-.,_,.-*^*-.,_,.- HTML -.,_,.-*^*-.,_,.-*^*-.,_,.-*^*-.,_,.-


This template is built so you can easily replace or add elements.  It is structured 
into four pieces that magnify individual parts.  


index.js -> build file -> component -> styled component


* index.js (The "Website")
    - Compiles all of the components.
    - Routes between the layouts.
    - Renders to the DOM.

* build files (e.g. Nav, Footer, Body, etc...)
    - Breaks the website into manageable pieces.
    - Is the container for components.

* components (e.g. Text Block, Contact Form, etc...)
    - A section of each build file.
    - Can be the final step.

* styled component (e.g. Button, Icon, Link, etc...)
    - Can be styled directly.
    - Great for A/B Testing.
    - Allows for smaller elements to be reused site-wide.




-.,_,.-*^*-.,_,.-*^*-.,_,.-*^*-.,_,.- SASS -.,_,.-*^*-.,_,.-*^*-.,_,.-*^*-.,_,.-


Open a new terminal window and being watching your Sass with:
      sass --watch public/sass/main.scss:public/css/main.css

CSS files are meant to be overwritten with your own custom CSS.

* main.scss
  - This is where all of the css is compiled correctly so that the parts you have
    selected work together.

* custom.scss
  - Write your custom css/scss here.  You can also write css/scss that overwrites 
    parts of your frame (partials you have selected).

* _reset.scss
  - A standard css reset from http://meyerweb.com/eric/tools/css/reset.  I like
    this one because it's simple and allows you to add to it as you work.

* _variables.scss
  - Holds Media Queries, Color Palettes, and Logo Paths





-.,_,.-*^*-.,_,.-*^*-.,_,.-*^*-.,_,.- JAVASCRIPT -.,_,.-*^*-.,_,.-*^*-.,_,.-*^*-.,_,.-


All React components pull the functionality they need from the helpers.js file.  

To add a function:
 *  export function functionName() {};

To import a function in the React Component:
 *  import { functionName } from "../public/helpers";
