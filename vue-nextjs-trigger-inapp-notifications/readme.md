# Vue 3 & Nextjs Trigger In-App Notifications

This repo is a quick sample of how you can get started triggering notifications using:

-  **Vue 3** for frontend, 
-  **Next.js** for backend,
-  **Novu** for In-App notifications.

Check out the [live app](https://novu-notifications-vue3.vercel.app).

This repo will show how to:
- sign users in with Auth using Auth0.
- trigger email notification on sign up using Novu.
- trigger in-app notification via Novu Node SDK and seeing the notifications in-app realtime via the [Novu Notification Center](https://docs.novu.co/notification-center/getting-started).

## Getting Started

Before running this app, you need to create an [account on Novu](https://web.novu.co) and copy the following credentials:

- [API Key](https://web.novu.co/settings)
- [Application Identifier](https://web.novu.co/settings)


Create an [account on Auth0](https://auth0.com/) as well.


The frontend is served from the `/client` directory, while the backend is served from the `server-next` directory.

## Run the Frontend

In the `/client` directory, replace the env variables with the right values:

- `VITE_AUTH0_DOMAIN` - This is your auth0 domain gotten from your Auth0 account
- `VITE_AUTH0_CLIENT_ID` - Your Auth0 Client ID
- `VITE_AUTH0_CALLBACK_URL=http://localhost:4040/callback` - the port depends on the port your frontend is running on
- `VITE_NOVU_API_SERVER_URL=https://api.novu.co` - This value is perfect. However you can replace it with yours if you're running your own API instance of Novu locally.
- `VITE_SUBSCRIBER_ID` -  Get the subscriber id from the Novu dashboard.
- `VITE_WEBSOCKET_URL=wss://ws.novu.co` - This value is perfect. However you can replace it with your instance of websocket.
- `VITE_API_SERVER_URL=http://localhost:3002` - This is the URL and port via which the backend from server-next is running.


Run the following command inside the `/client` directory to install the client node modules:
```bash
npm install
```

Run the Vue 3 frontend
```bash
npm run dev
```

## Run the Backend

In the `/server-next` directory, replace the env variables with the right values:

- `NEXT_PUBLIC_SUBSCRIBER_ID` - Get the subscriber id from the Novu subscriber dashboard
- `NEXT_PUBLIC_NOVU_APP_ID` - Get the Application Identifier from the Novu dashboard settings
- `NEXT_PUBLIC_NOVU_API_KEY` - Get the API Key from the Novu dashboard settings
- `NEXT_BACKEND_API_URL=https://api.novu.co` - Perfect value. However, you can replace it with yours if you are running a self-hosted Novu API instance.


Run the following command inside the `/server-next` directory to install the server node modules:
```bash
npm install
```

Run the Next.js backend
```bash
npm start
```
