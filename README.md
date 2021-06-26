# Setup

- Clone this repo

```bash
$ git clone https://www.github.com/wise-introvert/amish-todo.git
```

- Install all the dependencies

```bash
$ yarn
```

- Create a project in firebase and copy over the config to `.env` ( you'll have to create the file ). Look at `.env.example` for reference
- Start the app

```bash
$ yarn start
```

# Deployment

> :warning: Make sure hosting is enabled in the firebase console by visiting <pre>https://console.firebase.google.com/u/0/project/\<your-project-name\>/hosting/sites</pre> and clicking on "Get Started"

- Install [firebase-tools](https://firebase.google.com/docs/cli#windows-npm)
- Login to the firebase cli

```bash
$ firebase login
```

- Build the application

```bash
$ yarn build
```

- Deploy to hosting

```bash
$ firebase deploy --only hosting
```
