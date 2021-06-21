# aacProject
A simple Node server project using the RandomUser.me API

## Local Usage 
* Clone this repository onto your local machine
* In the project directory, run `$npm install`
* Run `$npm start` to spin up the project and confirm server is running
* If the server starts, move on to the next steps
* Proceed click the button to obtain users by gender 

## Technologies Used
* [Node](https://nodejs.org/en) - A JavaScript run-time environment that exectues server side code.
* [Express](https://www.npmjs.com/package/express) - A Node package used as middleware to create routes.
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Mark up language used for structuring pages. 
* [Bootstrap](https://getbootstrap.com/)- front-end open source toolkit, featuring responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

## Development Process- Personal Reflection 
I redid the formatting of the API call a few times just to test out different call methods. The final version used ES7's async and await additions which work in Google Chrome, but are not supported in every browser. It would need to be compiled down to ES5 using either Webpack of Babel to ensure that it functions properly in all browsers. 

For styling, I used Bootstrap's grid layout (accessed through their CDN) to style the index.html file. 

