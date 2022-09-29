const fs = require('fs');

const argv = process.argv.slice(2);
if (argv?.length === 3) {
  const env = argv[0];
  const appName = argv[1];
  const packageName = argv[2];
  const template = String.raw`#! /usr/bin/env bash

# change env to ${env}
cat env-${env} > .env;

# change .json google-service
cat documents/google-services/google-services-${env}.json > android/app/google-services.json;

cat <<END >android/app/src/main/res/values/strings.xml
<resources>
  <string name="app_name">${appName}</string>
</resources>
END

# auto open file on VS Code
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  code -r package.json;
  code -r .env;
  code -r android/app/build.gradle;
  code -r android/app/src/main/res/values/strings.xml;
  code -r android/app/google-services.json;
fi

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",\t ]//g')

APPLICATION_ID=$(cat android/app/build.gradle \
  | grep applicationId \
  | head -1 \
  | awk '{ print $2 }' \
  | sed 's/[",\t ]//g')

VERSION_CODE=$(cat android/app/build.gradle \
  | grep versionCode \
  | head -1 \
  | awk '{ print $2 }' \
  | sed 's/[\t ]//g')

VERSION_NAME=$(cat android/app/build.gradle \
  | grep versionName \
  | head -1 \
  | awk '{ print $2 }' \
  | sed 's/[",\t ]//g')

APP_NAME=$(cat android/app/src/main/res/values/strings.xml \
  | grep app_name \
  | head -1 \
  | awk -F'[<>]' '/"app_name"/ {print $3}' \
  | sed 's/["]//g')

CURRENT_DATE=$(date +'%Y%m%d')
PACKAGE_NAME="${packageName}"

sed -i "s/$APPLICATION_ID/$PACKAGE_NAME/g" android/app/build.gradle
sed -i "s/$VERSION_CODE/$CURRENT_DATE/g" android/app/build.gradle

NEW_APPLICATION_ID=$(cat android/app/build.gradle \
  | grep applicationId \
  | head -1 \
  | awk '{ print $2 }' \
  | sed 's/[",\t ]//g')

NEW_VERSION_CODE=$(cat android/app/build.gradle \
  | grep versionCode \
  | head -1 \
  | awk '{ print $2 }' \
  | sed 's/[\t ]//g')    

echo "Application ID:" $NEW_APPLICATION_ID;
echo "Version Code:" $NEW_VERSION_CODE;
echo "Version Name:" $VERSION_NAME;
echo "App Name:" $APP_NAME;
echo "========= env ========="
cat .env; echo`;
  const fileName = `${process.env.PWD}/change-${env}.sh`;
  fs.appendFile(fileName, template, (err) => {
    if (err) throw err;
    console.log(`Create file ${fileName} success!`);
  });
} else {
  console.log(
    `Missing argv.\nEx: node path/scripts/createChangeEnv.ts 'env' 'app_name' 'package_name'`
  );
}
