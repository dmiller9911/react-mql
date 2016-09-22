# react-mql

React Component, HOC, and Redux Reducer to manage mediaQueries.

## Installation

```
npm install --save react-mql
```

## What's included

#### `<MatchMedia media={ [] }/>{ (matchMedia) => {} }</MatchMedia>`

A React component that takes a `media` prop and a function for `children` the function is called with the mediaQueries and if the match the query.

#### `withMatchMedia(mediaQuery [, mediaQuery])(Component)`

An HOC that will pass the status of mediaQueries as a prop provided to the wrapped component.

#### `createMatchMediaReducer(mediaQuery [, mediaQuery])`

Creates a redux store for the provided mediaQueries.

#### `syncMatchMediaWithStore(reducerKey, reduxStore)`

Monitors the mediaQueries from the matchMediaReducer

## MatchMedia Example

```js
import React, { Component } from 'react'
import { MatchMedia } from 'react-mql';
import { minWidthSmall, minWidthMedium } from './styles/breakpoints'; //minWidthSmall: ('min-width: 500px') minWidthMedium: ('min-width: 800px')

const MatchMediaExample = (props) => (
  <div>
    <MatchMedia media={[ minWidthSmall, minWidthMedium ]}>
      { (matchesMedia) => ( //matchMedia: { "('min-width: 500px')": true, "('min-width: 800px')": true }
        <div>
          { matchMedia[minWidthSmall] && <div>I show match min-width of 500px</div> }
          { matchMedia[minWidthMedium] && <div>I show match min-width of 800px</div> }
        </div>
      ) }
    </MatchMedia>
  </div>
);
export default MatchMediaExample;
```

## withMatchMedia Example

```js
import React, { Component } from 'react'
import { withMatchMedia } from 'react-mql';
import { minWidthSmall, minWidthMedium } from './styles/breakpoints'; //minWidthSmall: ('min-width: 500px') minWidthMedium: ('min-width: 800px')

const withSmallAndMedium(minWidthSmall, minWidthMedium);

const MatchMediaExample = (props) => ( // props.matchesMedia: { "('min-width: 500px')": true, "('min-width: 800px')": true }
  <div></div>
);
export default withSmallAndMedium(MatchMediaExample);
```

## Redux Example

```js

import React from 'react'
import ReactDOM from 'react-dom'
import { createMatchMediaReducer, syncMatchMediaWithStore } from 'react-mql'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { minWidthSmall, minWidthMedium } from './styles/breakpoints'; //minWidthSmall: ('min-width: 500px') minWidthMedium: ('min-width: 800px')
import Application from './Application';
import reducers from './reducers'

// Add the reducer to your store on the `matchesMedia` key
const store = createStore(
  combineReducers({
    ...reducers,
    matchesMedia: createMatchMediaReducer(minWidthSmall, minWidthMedium)
  })
);

// Start listening on the mediaQueries and dispatch events on changes.
syncMatchMediaWithStore('matchesMedia', store);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('mount')
);
```