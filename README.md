**SSSRRR - Simple Server Side React Redux Rendering "boilerplate".**

[![Build Status](https://travis-ci.org/linuxenko/sssrrr-boilerplate.svg?branch=master)](https://travis-ci.org/linuxenko/sssrrr-boilerplate)

Made to be simple for very quick start developing react/redux applications without wasting time on pretyfying and removing redundant stuff."

**Features**

  * react
  * react-router
  * redux
  * jest

**Installation**

Check out repository to your workspace with `git`, and run `npm i` inside of `sssrrr-boilerplate` directory.

Available npm scripts: `test`, `lint`, `build`, `start`.

**Configuration**

SSSRRR share routing configuration between browser and server side applications with `react-router`.

shared/routes.js
```js
<Route component={Application}>
  <Route name="home" path="/" component={Home} />
</Route>
);
```

The redux `initial` state can be entirely filled with data application would be initialized.

server/index.js
```js
const initialState = {
  counter : 1
};

```

**Testing**

Application testing with `jest`.


**License**

**MIT**
