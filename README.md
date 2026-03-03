### 1) What is JSX, and why is it used?

#### Answer: 

JSX or JavaScript XML helps us to use HTML like code inside of JavaScript. It makes code easier to read and write. It allows to use HTML and JavaScript together.
We use JSX because it improves developer experience and allows us to combine UI structure and logic in the same place.


### 2) What is the difference between State and Props?

#### Answer: 

Props are read-only data passed from a parent component to a child component. They are used to make components reusable and configurable.
State, on the other hand, is managed inside a component and is used to store data that can change over time.
When state changes, the component re-renders.
So in short: Props are external and not changeable, and State is internal and changeable.

### 3) What is the useState hook, and how does it work?
#### Answer: 

The useState hook is a React Hook that allows functional components to manage state.
It returns an array with two values: the current state and a function to update it.
When we call the state updater function, React schedules a re-render and updates the UI with the new state value.
It helps functional components have state without needing class components.

### 4) How can you share state between components in React?

#### Answer: 

The most common way to share state between components is by lifting the state up to their closest common parent and passing it down via props.
For larger applications, we can use the Context API to avoid prop drilling.
In complex applications, we may use state management libraries like Redux.
The approach depends on the size and complexity of the application.

### 5) How is event handling done in React?

#### Answer: 

Event handling in React is similar to HTML but uses camelCase syntax, like onClick instead of onclick.
We pass a function as the event handler, and React automatically handles the event object.
React uses a synthetic event system for cross-browser compatibility.
We can also pass arguments to handlers using arrow functions.