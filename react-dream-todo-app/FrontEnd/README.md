# What is Moonshine?
![Logo](./assets/sunrise.png)

___Moonshine___ was primarily made to replace two of the most frequently used apps on my machine but with time I realised I needed a little more feature-packed project. But before I tell you more about it, here are some screenshots:

## Screenshots

![Screenshot_1](./assets/Screenshot%202023-04-06%20at%201.01.25%20PM.png)
![Todo_light_mode_with_Notifications center_Screenshot](./assets/Screenshot%202023-04-07%20at%2011.40.35%20AM.png)
![Todo_Add_Email_screenshot](./assets/Screenshot%202023-04-07%20at%2011.31.40%20AM.png)
![Update_todo_and_send_sms_reminder_screenshot](./assets/Screenshot%202023-04-07%20at%2011.34.46%20AM.png)

To start-off, it was supposed to replace just two apps:

1. A browser extension that shows an inspirational quote, the current time and has a beautiful image background, and

2. Obsidian - Which I used to plan the next day, every night.

As I started to build this, I realised I needed more than just a todo. I encountered two problems and incorporated the solutions for them in Moonshine itself:

- For tasks that needed me to send reminder to a friend, I had to pick up my phone and send a Whatsapp message ( I usually keep my phone away when I'm working, so this was like sending invitation to delightful distractions, which needless to say, was not something I wanted to do). 
> Solution: _I used __Novu__ to incorporate just the feature I wanted: Send reminders to my friends on their phone about a certain task._


-  Now the friends reminder thing was sorted out but what if that friend was a work collegue. I couldn't send them phone reminders as that would make me seem pushy and I couldn't just ignore urgent work related matters as well! So I created another workaround:
> Solution: _I leveraged another feature of __Novu__ to send email reminders on their mail address. This way I was able to send them reminders (and having the mental peace) and not seem like I was trying to push work related tasks._

## Run locally

In the project directory, you can run:

```bash
npm install
```
or
```bash
npm i
```
Either of these commands will install all the packages needed for this project to run.  


```bash
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Make sure you also complete the set up for environment variables listed below, as without it, the app won't run! 👇

Here is Moonshine running locally on my machine:  

![Running_moonshine_locally_screenshot](./assets/Screenshot%202023-04-07%20at%2011.28.09%20AM.png)


There are following additional commands available:

```bash
npm test
```
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm run build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Environment Variables

To run this project, you will need to add the following environment variable to your .env file

`REACT_APP_NOVU_ID_FROM_ADMIN_PANEL`:  

This name is self-explanatory. Obtain it from Novu's admin panel here and add it inside your .env file.


## Tech Stack

**Client-side:**  
Novu, React, Redux, DotEnv, Axios, JWTEncode, Moment, React-Icons and more

**Server-side:**  
Novu, Node, Express, MongoDB, Mongoose, BCrypt, JSONWebToken and more

**Deployment:**  
- Front-End: Vercel
- Back-End: Render


## More info:
- This repo only contains the client-side code and relies on the back-end code [here](https://github.com/sumitsaurabh927/Momentum) to work correctly. Make sure to check that out as well.

- Also, I've written a detailed article about Moonshine and I'll be really happy if you'd [give it a heart here!](inserLlink) 😍
