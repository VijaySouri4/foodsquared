## FoodSquared

## TO setup the enivironment on a Linux machine for the mobile application, follow the below steps in a terminal. 

1. Install Node JS
````
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install v18.17.0

````
2. Clone this repository to a local directory
````
git clone https://github.com/VijaySouri4/foodsquared
````
3. Download all the required packages
````
yarn
````
4. Setup google API keys:

Create a file called firebase.js in the root folder, at /foodsquared with the following information

```` 
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const AUTH = getAuth(app)

````
5. Start the application with the following application
````
npx expo start
````

6. Download Expo GO app on an Iphone or Android device and scan the generated QR code with the phone's camera.
