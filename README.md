# react-memo
> React.memo polyfill 

* What: https://reactjs.org/docs/react-api.html#reactmemo
* Why: https://medium.com/@trekinbami/using-react-memo-and-memoization-1970eb1ed128
* When: **React.memo** was introduced in [React@16.6.0](https://github.com/facebook/react/blob/master/CHANGELOG.md#1660-october-23-2018). You can use this polyfill until you upgrade your components

### Install

```
$ yarn add react-memo-polyfill
```

### Usage

```javascript
import memo from 'react-memo-polyfill'

function MyComponent(props) { }

memo(MyComponent)
```

Optionally pass your compare function

```javascript
import memo from 'react-memo-polyfill'

function MyComponent(props) { }
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
export default memo(MyComponent, areEqual);
```

### Author

[@zzarcon](https://twitter.com/zzarcon)