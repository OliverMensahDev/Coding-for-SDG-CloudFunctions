
## Building JAMStack Application using DigitalOcean services
 A sample repository using DigitalOcean Cloud Functions, Spaces, Managed Database and App plaform to build JAMstack Application
 - Create mongo db cluster and database: Data to be imported into the mongo db document is a json array of event object with image and description as properties. 
 - Create spaces and upload those images. Get their urls and use that to create the data.
 - Import the data into the database document
 - Write cloud function to read the data and deploy the function
 - Use JavaScript to connect to the function and display the data in your web UI
 - Push the Code to github repository
 - Deploy to App platform

## Approach 
 - Sign up on DigitalOcean if you have no account yet 
 - Install and setup doctl
: https://docs.digitalocean.com/reference/doctl/how-to/install/
 - Follow this tutorial on how to be build JAMStack app on DigitalOcean: https://docs.digitalocean.com/tutorials/create-a-jamstack-site-using-serverless-functions/