
# React Native Learning Series

Welcome to my React Native learning series! In this repository, I document my journey of learning React Native through various projects and concepts. The goal is to explore the essential features of React Native, improve my understanding of mobile app development, and build practical applications.

## Table of Contents

- [Getting Started](#getting-started)
- [Learning Objectives](#learning-objectives)
- [Projects](#projects)
  - [Project 1: Props in React Native](#project-1-props-in-react-native)
  - [Project 2: Styling in React Native](#project-2-styling-in-react-native)
- [Technologies Used](#technologies-used)
- [Future Goals](#future-goals)
- [License](#license)

## Getting Started

To get started with this repository and run the projects locally, you need to have **React Native** installed on your machine. Follow the instructions below to set up the environment:

### Prerequisites

- [Node.js](https://nodejs.org/en/) (Install the latest LTS version)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) for Android development (or Xcode for iOS development)

### Install Dependencies

Clone this repository to your local machine and navigate into the project directory:

```bash
git clone https://github.com/karan-hub/ReactNative-Learning.git
cd ReactNative-Learning
```

Install the required dependencies:

```bash
npm install
```

Now, you can run the project on your device or emulator:

```bash
npm run android  # For Android
npm run ios      # For iOS
```

## Learning Objectives

Throughout this series, I am focusing on the following core learning objectives:

- **React Native Basics**: Understanding the components, navigation, and state management in React Native.
- **Styling and Layouts**: Using styles to build responsive layouts.
- **Props & State**: Deep dive into passing data between components.
- **Handling User Input**: Learn about forms, touch events, and managing inputs in React Native.
- **API Integration**: Fetching data from external APIs and displaying it in the app.
- **Native Modules**: Interacting with native device features like the camera, GPS, and more.

## Projects

### Project 1: Props in React Native

In this project, I learned how to pass data between components using props. Props allow components to be dynamic and reusable. Here’s a simple example where we pass the user’s name and display it:

```jsx
<ProfileCard Name={"karan"} Age={20} Location={"nsk"}/>
```

### Project 2: Styling in React Native

I explored how to style React Native components using **StyleSheet**. In this example, I used basic styling techniques like `padding`, `margin`, `flex`, and `alignItems` to create a user profile card.

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
```

## Technologies Used

- **React Native**: Framework for building mobile applications.
- **JavaScript**: Programming language used to develop the app.
- **React Navigation**: Library for routing and navigation in React Native.
- **StyleSheet**: Used for styling React Native components.
- **Expo**: Used for testing and deploying the application during development.
- **Git**: Version control to manage the codebase.

## Future Goals

Here are some of the things I aim to explore and implement in the future:

- State management with **Redux**.
- Integrating APIs like **Firebase** for authentication and **Cloudinary** for image uploads.
- Building a full-fledged mobile application.
- Performance optimization and testing in React Native.

## License

This repository is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
