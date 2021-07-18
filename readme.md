# Template for a React/Bulma/Webpack Project

A reasonable starting point for a frontend application anno 2021:

- React without additional fluff.
- Webpack with relevant loaders including babel for ES6+ and live reloading.
- A folder for static non-embedded images and an index.html that automatically gets scripts and css added.
- Bulma plus font-awesome.
- Jest for tests.

To see this particular app point your browser to http://financial-advice.christianhvid.dk

## Requirements

Node.js + npm.

## Usage

To install packages:

```
npm install
```

To run in developer mode with hot reloading:

```
npm run start
```

Point your webbrowser to http://localhost:1234

To create a minified distributable for deployment:

```
npm run build
```

The folder 'dist' will contain the distributable; to publish the application copy all the files.

To clean the build run:

```
npm run clean
```

To run tests usings jest:

```
npm run test
```

To watch tests usings jest:

```
npm run watch
```

To reformat using prettier:

```
npm run prettier
```
