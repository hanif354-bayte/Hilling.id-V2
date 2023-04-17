Hiling.id V2 (Redux Thunk & Redux Saga)
===
```
Muhammad Hadi Arsa (120140150)

Aplikasi Hiling.id Version 2 ini menerapkan konsep redux thunk, redux saga, dan menggunakan API IP
```

## App Link
Link App Download => [Hiling.id-V2](https://expo.dev/artifacts/eas/ud32M3pB9FPQJ726vth1Dy.apk)

Apk Preview 
---
## Landing Page 
<p align="center">
    <img width="250px" src="./src/assets/Tampilan Home Apk.jpg">
</p>

## Testing Unit
<p align="center">
    <img width="500px" src="./src/assets/Testing Unit.jpeg">
</p>

## Library
```
React Native
Expo
Jest
Redux
React Native Vector Icons
Redux Mock Store
```

## Repo Structure
```
/
├─ src/                   # All assets, components, db, and screen. Also routes
│  ├─ assets/             # Dummy or images and video
│  ├─ components/         # All components are here
│  |   └─ homeFrom.js
│  |   └─ index.js     
│  |   └─ resultCard.js
│  ├─ database/           # Currently dummy data with JSON type
│  ├─ redux/
│  ├─ futures/
│       └─ info.js        # Action File Fetch Redux
│       └─ info.test.js   # Jest Testing Unit Info Fetch Redux 
│       └─ developer.js   # Developer for state based on Action
│       └─ ticket.js      # Ticket for state based on Action
│       └─ store.js       # Middleware File Redux 
│  ├─ routes/             # Stack navigator keep here 
│  │    └─ index.js       # Work as third layer route and make it into component 
│  ├─ screen/             # Put all of layout or screen file
|  ├─   └─ Home.js        # Home Page
|  ├─   └─ resultPage.js  # Searching Result
|  ├─   └─ index.js       # Second layer route to call from routes/index.js
│
├─ App.js                 # Main js to be rendered, 
├─.gitattributes
├─ .gitignore
├─ README.md
├─ app.json
├─ babel.config.json
├─ eas.json
├─ jest.config.json
├─ package-lock.json
├─ package.json
├─ tailwain.config.js
├─ yarn.lock
```

## Installation
Run the following command below in project terminal root to build android apk
```
yarn install
```
or
```
npm install
```
&nbsp;
Next is run the same function as git init inside expo
```
npx expo install expo-updates
```
&nbsp;
Build inside expo
```
expo build:android
```
or
```
npm install -g eas-cli
eas build -p android
```
&nbsp;
Then wait and follow the instruction if it the first build, generate a new key and choose apk. 
Last if expo need login in terminal input same as your expo.dev account
&nbsp;

