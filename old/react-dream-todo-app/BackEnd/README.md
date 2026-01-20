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
Runs the app in the development mode.

Make sure you also complete the set up for environment variables listed below, as without it, the app won't run! 👇

Here is Moonshine running locally on my machine:  

![Running_moonshine_locally_screenshot](./assets/Screenshot%202023-04-07%20at%2011.28.09%20AM.png)




## Environment Variables

To run this project, you will need to add the following environment variable to your .env file

`MONGO_CONNECTION_URL`: The URL that you've obtained from MongoDB.  

`NOVU_API_KEY`: Your Novu API key

Add them both to your .env file.


## Tech Stack

**Client-side:**  
Novu, React, Redux, DotEnv, Axios, JWTEncode, Moment, React-Icons and more

**Server-side:**  
Novu, Node, Express, MongoDB, Mongoose, BCrypt, JSONWebToken and more

**Deployment:**  
- Front-End: Vercel
- Back-End: Render


## More info:
- This repo only contains the back-end code and relies on the front-end code [here](https://github.com/sumitsaurabh927/Momentum-fe) to work correctly. Make sure to check that out as well.

- Also, I've written a detailed article about Moonshine and I'll be really happy if you'd [give it a heart here!](inserLlink) 😍
