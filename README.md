# The reservations app for TGC!

> Please, any doubts write an email to [jalvear25@student-tgc.com](jalvear25@sudent-tgc.com)

## Get your tokens!

Participae in clubs activities in order to obtain tokens and spend them on reserving fishanks.

## Connect your wallet!

Get your phantom account and introduce it in "Your Info" page.

## Make a reservation!

After selecting the date and the period, introduce your name and recive your ticket.

## Check your name at the screen of the fishtank!

Your name will appear in the screen of the fishtank at the time of your reservation, so people can know you have the right to use it.

# Boring code explanations

The app is built with NextJS, a framework commonly used in order to build fullstack applications. This version of the project is developed using NextJS 13.5.4.

## Running the application

In order to run the application in your computer (as a developer mode) you will need the latest version of NodeJS and NPM.

1. First, clone the repository to your work environment: 
    `git clone https://github.com/Ar4rN1c0/blockchain-tgc.git`
2. Second, install all the libraries by running:
    `npm install`
3. Thirdly, run the app with the command:
    `npm run dev`
    This will run the developer mode and generate a local server. The server and the browser will automatically refresh when you save your changed files.

## Modifying the application

If you want to change something, first you need to understand how the app works, here is a quick explanation.

### The internal work.


#### The structure

This app is built as a regular NextJS13 project. Inside the `app` folder you will see many directories, each of one containing a file called `page.tsx` and or a file `layout.tsx`. In the page file there is a React component that will be displayed in the route corresponding to the name of the directory.

Each file will contain components, which are the pieces that build this application. Each component can be of one type: Either a Server Component or a Client Component. You will distinguish between them because the Server Compnents have a string in the top of their code that says `"use client"`.

Server components are used to render he requests to APIs, whereas Client Components can work with React hooks such as `useState()` or `useEffect`. Please read the NextJS documentation in order to learn more about this two types of component.

#### The organization

The main file is in the folder `app` and it is called `page.tsx`. This file will display whatever is in the parent route, in this case, a menu that lets you select a fishtank.

Inside the `fishtank` folder you will see an other folder called `[id]`. This permits scale our app in case we are given more than two fishtanks. Then, in the route `src/app/fishtank/[id]/` there is a `page.tsx` file. This file will display the most important component, **`PeriodesMatrix`**. This is a server component that will consume an API and display whichever periods are available. In the case they are not, then it will display an `Occupied` component, and if it is free, a `Free` component. This Free component is a Client Component, so it can use the hook `useState()`. When being clicked, displays a form that allows you reserve that particular period.

### The transactions provider.

So this is a Blockchain project, where are the transactions made? When you send a form trying to reserve a fishtank, an API is consumed.
```TypeScript
    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
        const data: dataType = {
            email: inputName,
            wallet: inputWallet,
            date: date,
            period: period,
            fishtank: fishtank,
            hash: hash,
            name: name
        }
        fetch('http://panel.jactc.xyz:3002/api/post/rsvp/', {
            method: 'POST',
            body: JSON.stringify(data) ,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(error => {console.log(error)}).then(() => router.refresh())
      }

```

This API will take care of the transactions using your wallet, and has a DB where there are all the confirmed transactions. When we want to display whose fishtanks are free, we ask the API for the transactions completed with date from now to three days in the future. If there was a succesful transaction at one period, it means that it is reserverd.

**You can learn more about the API on its own repository [here](https://google.com)**

### How to change how the app works. 

Here is time to use your imagination. Please make sure your changes work properly before updating the app, and run all the tests you can.


### How to change how the app looks like

If you are fine with the working of the application, but perhaps the design is not the best to you, go to the directory `src/styles`. There you will find a bunch of CSS files (if you do not know how to use CSS, please go and watch some of the thousands of tutorials on YouTube), but not the regular ones. This project is built with CSSModules, so you should check on that aswell.

You can see which classes correspond with each element navigating the code.