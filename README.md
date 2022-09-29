<p align="center">
  <img src="assets/d4dpocket.png" alt="d4dpocket" style="width:320px" />
<p>

<h2 align="center">Doraemon's 4D Pocket for React Native</h2>

# Installation

```sh
yarn add d4dpocket
```

# Usage

```js
// Example:
import { isIphoneX } from 'd4dpocket';
```

### scale
Use for padding, margin, size, fontSize, borderRadius, ....
```js
padding: scale(10)
```

### wScale
Use for width
```js
width: wScale(100)
```

### hScale
Use for height
```js
height: hScale(100)
```

### RFValue
Use for font size
```js
fontSize: RFValue(16)
```

### StylePlatforms
```js
const styles = StyleSheet.create({
  box: {
    ...StylePlatforms({
      tablet: {
        width: 20,
      },
      iPad: {
        width: 25,
        backgroundColor: 'grey',
      },
      iPhoneX: {
        width: 18,
        backgroundColor: 'grey',
      },
      base: {
        width: 15,
      },
    }),
  },
});
```

### isIphoneX
```js
if (isIphoneX()) {
  console.log("isIphoneX");
}
```

### isTablet
```js
if (isTablet()) {
  console.log("isTablet");
}
```

### isNewerVersion
Compare software version
```js
isNewerVersion('1.0.1', '1.0.10') // true
```

### toVnd
Format string to Vnd
```js
toVnd("1000000"); // 1,000,000
```

### limitedString
Default: `limitedString(string, maxLength = 9)`
```js
limitedString("Lorem Ipsum is simply dummy text of the printing and typesetting industry");
// Lorem Ipsum is simply dummy text of the printing...
```

### src/scripts/createChangeEnv.js
Create bash script change env
```sh
node path_library/src/scripts/createChangeEnv.js 'env' 'app_name' 'package_name'
```
Example:
```sh
node path_library/src/scripts/createChangeEnv.js 'dev' 'ABC' 'com.abc.dev'
```

# Running the example app

1. Run `yarn` in repo root
2. Run `yarn example android` or `yarn example ios`
3. Run `yarn example start` to start Metro Bundler

# Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

# License

[MIT](LICENSE)
