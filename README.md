# aacProject
A simple Node server project using the RandomUser.me API

## Local Usage 
* Clone this repository onto your local machine
* In the project directory, run `$npm install`
* Run `$npm start` to spin up the project and confirm server is running
* If the server starts open localhost:3000 in your chrome browser 
* Proceed click the button to obtain users by gender 

## Technologies Used
* [Javascript](https://www.javascript.com/) - The scripting language used to manipulate the DOM. 
* [Node](https://nodejs.org/en) - A JavaScript run-time environment that executes server side code.
* [Express](https://www.npmjs.com/package/express) - A Node package used as middleware to create routes.
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Mark up language used for structuring pages. 
* [Bootstrap](https://getbootstrap.com/)- front-end open source toolkit, featuring responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

## File Structure 
+--AACProject (Base Directory)
|    +-- Node_modules (contains directories for all node modules)
|    +-- Public
|        +-- Scripts
|            +-- userApiLib.js
|            +-- script.js
|        +-- Styles
|        +-- Images
|        +-- Utilities 
|    +-- Views
|        +-- index.html
|    +-- server.js (node server file)
|    +-- .gitignore
|    +-- package.json
|    +-- package-lock.json
|    +-- README.md

## Development Process- Personal Reflection 
I redid the formatting of the API call a few times just to test out different call methods. The final version used ES7's async and await additions which work in Google Chrome, but are not supported in every browser. It would need to be compiled down to ES5 using either Webpack of Babel to ensure that it functions properly in all browsers. 

For styling, I used Bootstrap's grid layout (accessed through their CDN) to style the index.html file. It's a solid was to make something look visually appealing  and consistent very quickly. 

In addition, I added some humor to the project- just to make it a little fun. 





