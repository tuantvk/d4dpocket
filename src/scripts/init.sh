#!/bin/bash
_pwd=`pwd`

mkdir -p "$_pwd/documents"
mkdir -p "$_pwd/src"
mkdir -p "$_pwd/src/actions"
mkdir -p "$_pwd/src/components"
mkdir -p "$_pwd/src/context"
mkdir -p "$_pwd/src/hooks"
mkdir -p "$_pwd/src/screens"
mkdir -p "$_pwd/src/icons"
mkdir -p "$_pwd/src/store"
mkdir -p "$_pwd/src/themes"
mkdir -p "$_pwd/src/utils"
touch "$_pwd/.env"
touch "$_pwd/src/components/index.js"
touch "$_pwd/src/context/index.js"
touch "$_pwd/src/hooks/index.js"
touch "$_pwd/src/screens/AppNavigator.js"
touch "$_pwd/src/screens/routes.js"
touch "$_pwd/src/icons/index.js"
touch "$_pwd/src/store/index.js"
touch "$_pwd/src/utils/index.js"

# root/index.js
indexJs="import { AppRegistry, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);"

echo "$indexJs" > "$_pwd/index.js"


# root/src/themes/colors.js
echo "export {};" > "$_pwd/src/themes/colors.js"


# root/src/themes/fontSize.js
echo "export {};" > "$_pwd/src/themes/fontSize.js"


# root/src/themes/index.js
themesJs="import colors from './colors';
import fontSize from './fontSize';

export { colors, fontSize };"

echo "$themesJs" > "$_pwd/src/themes/index.js"

echo "> Done!!!"
