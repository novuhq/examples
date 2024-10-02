
# Web component notification center:

This app uses Novu's web component to add a notification center to any web app. The best part about it is that it can be used in any web app, no matter what tech stack you've used.

You can read more about it [here](https://docs.novu.co/notification-center/web-component/)

## How to run this app:

Running this app on your local machine is quite simple. You just need to go through the following steps:

- Make sure you've clone both the frontend as well as the backend code to your machine
- run `npm install` in the root of backend to install all the packages
- Now, you go over to [Novu](https://web.novu.co) to get your API key and add it to the `.env` file in the root of the frontend repo under this variable name `NOVU_API_KEY`
- Repeat the last step for the backend repo as well with the same variable name.
- Create a database on MongoDB.
- Also add your __MongoDB connection URL__ to the backend's _.env_ file under the variable name `CONNECTION_URL`. You can get it from the MongoDB database you've created in a previous step.
- Now test the following end-point on Postman: `https://notificationsgeneratorbackend.onrender.com/home` and don't forget to add `{"description":"testing"}` in the request. 

You can also go through a detailed article that also covers deploying the frontend as well as the backend [here](https://dev.to/novu/how-to-add-in-app-notifications-to-any-web-app-1b4n)

Lastly, if you're stuck at any step and need help with anyting, don't hesitate to hop on to our [Discord Server](https://discord.gg/novu)