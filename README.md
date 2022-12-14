<p align="center">
  <img src="assets/d4dpocket.png" alt="d4dpocket" style="width:320px" />
<p>

<h2 align="center">Doraemon's 4D Pocket for React Native</h2>

<p align="center">
  <a href="https://www.npmjs.com/package/d4dpocket"><img src="https://img.shields.io/npm/v/d4dpocket.svg?style=flat-square"></a>
  <a href="https://github.com/tuantvk/d4dpocket"><img src="https://img.shields.io/github/stars/tuantvk/d4dpocket?style=flat-square"></a>
  <a href="https://github.com/tuantvk/d4dpocket"><img src="https://img.shields.io/github/issues/tuantvk/d4dpocket?style=flat-square"></a>
  <a href="https://github.com/tuantvk/d4dpocket"><img src="https://img.shields.io/github/forks/tuantvk/d4dpocket?style=flat-square"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square"></a>
</p>

# Installation

```sh
yarn add d4dpocket
```

# Usage

```js
// Example
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
Use for size, fontSize
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

### isIphone
```js
if (isIphone()) {
  console.log("isIphone");
}
```

### hasIsland
Support iPhone 14 Pro & Pro Max. View more [react-native-iphone-x-helper/pull/44](https://github.com/ptelad/react-native-iphone-x-helper/pull/44)
```js
if (hasIsland()) {
  console.log("hasIsland");
}
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
// isNewerVersion(oldVer, newVer)
isNewerVersion("1.0.1", "1.0.10"); // true
```

### isUUID
```js
isUUID("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d");
// true
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

### formatComma
Default: `formatComma(string, toFixed = 2)`
```js
formatComma("100000");
// 100,000
```

### removeAccent
Remove accent in vietnamese
```js
removeAccent("ch???m v?? h???i");
// cham va hoi
```

## Components

### Button
Inherits [TouchableOpacity](https://reactnative.dev/docs/next/touchableopacity)
```jsx
<Button>Button</Button>
```

### KeyboardSpacer
Inherits [react-native-keyboard-spacer](https://github.com/Andr3wHur5t/react-native-keyboard-spacer)
```jsx
<KeyboardSpacer />
```

### ScrollView
Inherits [ScrollView](https://reactnative.dev/docs/next/scrollview)
```jsx
<ScrollView>{children}</ScrollView>
```

### ImageAspectRatio
Inherits [Image](https://reactnative.dev/docs/next/images)
```jsx
<ImageAspectRatio
  source={{ uri: 'https://exmaple.com/image.png' }}
  style={{ width: 100, height: 100 }}
/>
```

### init.sh
Create default folders and file in project

Reset default style `Text`, `TextInput` in `root/index.js`
```sh
# root
#     /documents
#     /src/actions/index.js
#     /src/components/index.js
#     /src/context/index.js
#     /src/hooks/index.js
#     /src/screens
#                 /AppNavigator.js
#                 /routes.js
#     /src/icons/index.js
#     /src/store/index.js
#     /src/themes/index.js
#                /colors.js
#                /fontSize.js
#     /src/utils/index.js
#     .env
```
Run
```sh
bash node_modules/d4dpocket/src/scripts/init.sh
```

### createChangeEnv.js
Generate file bash script change env
```sh
node node_modules/d4dpocket/src/scripts/createChangeEnv.js 'env' 'app_name' 'package_name'
```
Example
```sh
node node_modules/d4dpocket/src/scripts/createChangeEnv.js 'dev' 'ABC' 'com.abc.dev'
```
File `change-[dev].sh` generated in root project

Run
```sh
bash change-dev.sh
```

### checkInfoPlist.sh
Check file `Info.plist` when release app on App Store

Run
```sh
bash node_modules/d4dpocket/src/scripts/checkInfoPlist.sh

# Do you used Camera? (y/n) y
# Do you used Photo Library? (y/n) y
# Do you used Location Always And When In Use? (y/n) y
# Results:
# +----+----------------------------------------------+
# | ??? | NSAppleMusicUsageDescription
# |---------------------------------------------------|
# | ??? | NSUserTrackingUsageDescription
# |---------------------------------------------------|
# | ??? | NSCameraUsageDescription 
# |---------------------------------------------------|
# | ??? | NSPhotoLibraryUsageDescription 
# |---------------------------------------------------|
# | ??? | NSLocationAlwaysAndWhenInUseUsageDescription 
# +----+----------------------------------------------+
```

### usePaging
Generate file `usePaging.js` in `src/hooks`

Run
```
bash node_modules/d4dpocket/src/scripts/usePaging.sh
```

# Running the example app

1. Run `yarn` in repo root
2. Run `yarn example android` or `yarn example ios`
3. Run `yarn example start` to start Metro Bundler

# Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

# License

[MIT](LICENSE)
