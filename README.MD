# Lean MEAN Boilerplate

The reason for this MEAN (MongoDB, Express, Angular and Node) boilerplate is that other boilerplates seemed to involve things like Jade precompiled HTML, and the front-end seemed more baked-in to the back-end. Personally I was more drawn to the public HTML/JS/CSS being in the `/public` folder and just serving those files to the browser and using `$http` in Angular to talk to the API controlled by Node. Also, this boilerplate is made to work with Foreman/Heroku in that it uses global variables for connecting to MongoDB and other things.

## Instructions

Get the dependencies with NPM and Bower.

	npm install
	bower install

You will needs to create a `.env` file that is ignored by Git by default. If you have not crated on before, it should be in this format.

	VARIABLE_NAME=StringOfTheValueYouWant

The current varibales needed are these below. The values given are examples.

	WEB=nodemon --exec node-theseus server.js // this can simply be `node server.js`, it's what runs when you do foreman start web
	PUBLIC_FOLDER=public // this is the folder that will be served up via HTTP. if you compile your stuff with gulp/frunt, it might be 'build', for example
	PORT=3000 // the port the app will run on
	MONGOLAB_URI=mongodb://heroku_app:password@server.mongolab.com:31942/heroku_database // this is the URI to your mongoDB databse. the example is to a mongolab one, which Heroku offers with a free tier

You will need to install Foreman, which I believe also comes in the Heroku toolbelt. Then, to run the app, do this.

	foreman start web

That's it for now.