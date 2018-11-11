# BellaJin

Beauty salon customer management web app built using React.js, Node.js, and Google's Firebase.

## Screenshots

#### Home
![Home](./screenshots/home.png?raw=true)
#### Profile
![Profile Page](./screenshots/profile.png?raw=true)
#### Booking
![Appointment Making](./screenshots/booking.png?raw=true)
#### Rating
![Appointment Rating](./screenshots/rating.png?raw=true)

## Getting Started

### Prerequisites

1. Initialize firebase project at: https://console.firebase.google.com
2. Install firebase cli tools:
    ```
    npm install -g firebase-tools
    ```
3. Init project
    ```
    firebase use --add
    firebase init
    ```
   Rest of setup should look like this:
    ```
    Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter
    to confirm your choices.
    ◉ Database: Deploy Firebase Realtime Database Rules
    ◯ Firestore: Deploy rules and create indexes for Firestore
    ◉ Functions: Configure and deploy Cloud Functions
    ❯◉ Hosting: Configure and deploy Firebase Hosting sites
    ◯ Storage: Deploy Cloud Storage security rules
    
    === Database Setup

    Firebase Realtime Database Rules allow you to define how your data should be
    structured and when your data can be read from and written to.

    ? What file should be used for Database Rules? database.rules.json
    ✔  Database Rules for  have been downloaded to database.rules.json.
    Future modifications to database.rules.json will update Database Rules when you run
    firebase deploy.

    === Functions Setup

    A functions directory will be created in your project with a Node.js
    package pre-configured. Functions can be deployed with firebase deploy.

    ? What language would you like to use to write Cloud Functions? JavaScript
    ? Do you want to use ESLint to catch probable bugs and enforce style? No
    ? File functions/package.json already exists. Overwrite? No
    i  Skipping write of functions/package.json
    ? File functions/index.js already exists. Overwrite? No
    i  Skipping write of functions/index.js
    ? Do you want to install dependencies with npm now? Yes
    up to date in 5.052s

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to be uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ? File build/index.html already exists. Overwrite? No
    i  Skipping write of build/index.html

    i  Writing configuration info to firebase.json...
    i  Writing project information to .firebaserc...

    ✔  Firebase initialization complete!
    ```


4. Enable Google Calendar API: https://console.developers.google.com

    1. Create service account key from `APIs & Services` > `Credentials`> `Create Credentials`. 

    2. Save service account key as `jwt.keys.json` and copy key to functions directory on same level as `index.js`.

### Installing

```
npm install
```

## Running the tests

Tests are in construction under userContext branch

## Deployment

1. Make build directory

    ```
    npm run build
    ```

2. Confirm build works

    ```
    firebase serve
    ```

    Visit `localhost:5000`. If you see firebase welcome screen, make sure `build/index.js` has been over written by npm run build. Also make sure `firebase.json` matches following:

    ```
    {
        "hosting": {
            "public": "build",
            "ignore": [
            "firebase.json",
            "**/.*",
            "**/node_modules/**"
            ],
            "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
            ]
        },
        "functions": {
            "predeploy": [
            "npm --prefix \"$RESOURCE_DIR\" run lint"
            ],
            "source": "functions"
        },
        "database": {
            "rules": "database.rules.json"
        }
    }
    ```
3. If `localhost:5000` behaves as expected, deploy to firebase server:
    ```
    firebase deploy
    ```

## Built With

* [Material-Kit-React](https://github.com/creativetimofficial/material-kit-react) - Free react theme based on Material-UI
* [Material-UI](https://material-ui.com/) - Additional react components
* [Firebase Re-Base](https://github.com/tylermcginnis/re-base) - Firebase Bindings

## TODO

1. [ ] Implement userContext to view components under userContext branch
    - [x] ProfilePage
    - [x] LandingPage
    - [x] LoginPage
    - [ ] Checkout
2. [ ] Merge userContext to dev
3. [ ] Merge dev to master