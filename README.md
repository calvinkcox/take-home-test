# Divvy Teams UI

I've added a few testing libraries, a mock server, and other things on top of CRA for this example app.
The mock server will start automatically with `yarn start` so you shouldn't need to worry.

In `/src/components/ChatRoom.tsx` you will find code to switch to the Divvvy mock API:
```
// switch to this for the local version with multiple chat rooms
return fetch(`/message-rooms/${roomId}`)
  .then((res) => res.json())
  .then(({ messages }: MessageRoom) => messages);

// switch to this for the divvy mock api (don't forget to get rid of the "local dev only" code)
// return fetch("https://api.mocki.io/v1/5ce8b374")
//   .then((res) => res.json());
```
You will still have to keep the mock server running as it builds out the navigation sidebar.
The links will just all load the mock api data rather than a specific chat room.

Hopefully this is a solid example of my React skills.

Total working time was about 1hr 40 mins which you should be able to see from the commit history.

Calvin

<hr />
<hr />
<hr />

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
