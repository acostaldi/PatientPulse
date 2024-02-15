### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/): JavaScript runtime
- [npm](https://www.npmjs.com/): Node package manager
- [React Native](https://reactnative.dev/): A JavaScript framework for building mobile apps
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static typing
- [Expo CLI](https://docs.expo.dev/get-started/installation/): Command-line tools for Expo

### Installation

1. **Node.js and npm:**
   - Download and install Node.js from [here](https://nodejs.org/).
   - npm is included with Node.js, so no separate installation is needed.

2. **React Native:**
   - Install React Native globally using npm:

     ```bash
     npm install -g react-native
     ```

3. **TypeScript:**
   - Install TypeScript globally using npm:

     ```bash
     npm install -g typescript
     ```

4. **Expo CLI:**
   - Install Expo CLI globally using npm:

     ```bash
     npm install -g expo-cli
     ```

### Running the App

1. **Clone the Repository:**
   - Clone the project repository to your local machine:

     ```bash
     git clone <repository-url>
     ```

2. **Navigate to the Project:**
   - Change into the project directory:

     ```bash
     cd project-directory
     ```

3. **Create a New Branch:**
   - If you are working on a new feature or bug fix, create a new branch off the `dev` branch:

     ```bash
     git checkout dev
     git pull origin dev
     git checkout -b feature/new-feature-name
     ```

     Replace `new-feature-name` with a descriptive name for your feature.

4. **Install Dependencies:**
   - Install project dependencies using npm:

     ```bash
     npm install
     ```

5. **Start the Expo Dev Server:**
   - Start the Expo development server:

     ```bash
     npx expo start
     ```

6. **Run on Device or Emulator:**
   - Follow the instructions from the Expo DevTools to run the app on your preferred device or emulator.