# react-redux-snackbar [![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg)]() [![gzipped size](https://img.shields.io/badge/gzipped-2.5kb-brightgreen.svg)]()
A snackbar (displays toasts) for reactjs, using the redux state container. Follows the [material design guidelines](https://material.io/guidelines/components/snackbars-toasts.html).
Its flexible and customizable at less than 2.5kB gzipped, and has no dependencies (other than that you must use React and Redux in your app of course).

## Install

Install using yarn:

`yarn add react-redux-snackbar`

Or npm:

`npm install --save react-redux-snackbar`

### Implementation

1) Add the reducer

```javascript
// Somewhere where you create your redux-store:
import { createStore, combineReducers } from 'redux';
import { snackbarReducer } from 'react-redux-snackbar'; // Import it
const reducers = {
  // ... reducers ...
  snackbar: snackbarReducer // Make sure its mounted using the "snackbar" key
  // ... reducers ...
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);
```

2) Add the React-component somewhere in your app

```javascript
import { Provider }  from 'react-redux';
import { Snackbar } from 'react-redux-snackbar';

<Provider store={store}>
	// This is maybe in your App.js or something
	// Just put the component somewhere in your app
	<Snackbar />
</Provider>
```

3) Then use it by dispatching the redux-actions, anywhere in your app

```javascript
import { showSnack, dismissSnack } from 'react-redux-snackbar';

dispatch(showSnack('myUniqueId', {
	label: 'Yay, that actually worked!',
	timeout: 7000,
	button: { label: 'OK, GOT IT' }
}));

// Should you want to remove it programatically:

dispatch(dismissSnack('myUniqueId'));
```
## More docs coming soon

### [Changelog](CHANGELOG.md)
