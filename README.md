# useContext and useRef

I decided to take a course on Udemy to get stronger on my React skills. This particular project focuses on utilizing `useContext()` and `forwardRef()`.

- [Deployed App Link](https://dcalhoun286.github.io/react-complete-guide-useContext-useRef/)

- Check out the course on Udemy: [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
- Course Code and Materials: [GitHub](https://github.com/academind/react-complete-guide-code)

## Author

Dar-Ci Calhoun

## About the App

This React app is a basic login page. Since there are multiple components depend on whether a user is logged in to render certain content (if at all), `Context` is used to avoid passing this data through multiple levels to the various components in the component tree that need it. To give the user visual feedback about invalid form input without unnecessary re-renders of the component, `useRef` is being utilized to highlight the necessary DOM element.

`useReducer` is also being used to manage the state property values that are affected by what the user has entered into the phone. This ensures that only the latest snapshot is captured for validating the form and submitting the user input.
