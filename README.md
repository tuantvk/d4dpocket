# d4dpocket
<h2 align="center">Doraemon's 4D Pocket</h2>

<p align="center">
  <img src="assets/d4dpocket.png" alt="d4dpocket" style="width:300px" />
<p>

# Installation

```sh
yarn add d4dpocket
```

# Usage

```js
import { isIphoneX } from 'd4dpocket';
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

### src/scripts/createChangeEnv.js
Create bash script change env
```sh
node path_library/src/scripts/createChangeEnv.js 'env' 'app_name' 'package_name'
```
Example:
```sh
node path_library/src/scripts/createChangeEnv.js 'dev' 'ABC' 'com.abc.dev'
```

# License

MIT
