Notes for the app
this will make t easier to undertand the application and data flow 



Core : Managing State in react with REact redux

Intro:

Redux is a popular data store for JS and React.

Principle: Data binding should flow in one direction and should be stored as a single source of truth.

Concepts: 
    1. Store - a single object with fields for each selection of data.You update the data by dispatching an action that says how the data should change.
    You then interpret actions and update the data using reducers.
    2. Reducers - functions that apply actions to data and return a new state instead of mutating the previous state.

Lets build a bird watching app with react and react redux

Prerequisites : A node env, react dev environment, basic knowledge of HTML, JS and a bit of CSS

Step 1 : Set up a store

Install redux and connect to the root component i.e index.js

use :  npm install --save redux react-redux

Import Prvider component from react-redux and add to the root component(src/index.js)

