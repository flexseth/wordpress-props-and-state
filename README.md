## Props and State sample block 
Made with @wordpress/create-block 

Please note that this code will not work with the current version of the create-block package, due to the way the metadata is stored in the new package. This is just a functioning demo of props and state that could be used in place of create-block to showcase how to persist data on the backend and front-end. 

git clone the repo

cd into directory

npm i

If using wp-env: Startup wp-env
- Requirements: Docker - running
- Requirements: Node/NPM - running/installed

Troubleshooting 
> Could not connect to Docker. Is it running?
Make sure to open the Docker application first, before wp-env

Once you have your environment going, and this is in your local plugins folder... 

npm run start 
- starts scripts 
- watches changes and builds block

Go to website, insert block
- Activate plugin
- Create new post
- Add Props and State Block

Modify input field - value 
- persists, 
- updates in previewer, 
- and is available on front-end
