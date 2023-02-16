Anthony blog for Job

A curated list of the tech I use

Link https://my-blog-react.vercel.app

Stack
________________________________________________________________________________________________________________________
Vercel - The platform for frontend developers, providing the speed and reliability 
         innovators need to create at the moment of inspiration
Tailwind CSS - CSS Framework
React - Component-based UI framework for JS
React Icons - Icon set
Vite.js - A rapid development tool for modern web projects
Zustand - State manager



Project Structure
________________________________________________________________________________________________________________________
Inside of project, you'll see the following folders and files:

PROJECT_ROOT
├── public              # static assets
├── src
│   ├── assets          # images
│   ├── components      # React components
│   │   
│   ├── service         # global method
│   │     └── styles    # types 
│   ├── pages           # page layouts
│   ├── store           # storage for state 
│   └── styles          # global stylesheets 
└── 


Building the App

You may run npm run build command to build the app.

$ npm run build
By default, the build output will be placed at dist. You may deploy this dist folder to any of your preferred platforms.

Testing the App Locally 
Once you've built the app, you may test it locally by running npm run preview command.

$ npm run build
$ npm run preview
The vite preview command will boot up a local static web server that serves the files from dist at http://localhost:4173. 
It's an easy way to check if the production build looks OK in your local environment.

You may configure the port of the server by passing the --port flag as an argument.

json
{
"scripts": {
"preview": "vite preview --port 8080"
}
}
Now the preview command will launch the server at http://localhost:8080.

