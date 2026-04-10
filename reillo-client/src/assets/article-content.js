const articles = [
  {
    name: "understanding-react-props-and-styling",
    title: "Understanding React Props and Styling",
    description: "Learn how to pass data between components and style them effectively in React.",
    content: [
      "Props (short for properties) allow you to pass data from a parent component to a child component. They are read-only and essential for building reusable and flexible components.",
      "Props Example:\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\n\n<Welcome name=\"John\" />",
      "React supports multiple styling approaches depending on your needs. You can use inline styles for dynamic styling, CSS files for global styles, CSS Modules for scoped styles, and CSS-in-JS libraries for advanced features.",
      "Inline Style Example:\nconst buttonStyle = { \n  backgroundColor: '#8b6f47',\n  color: '#faf8f5',\n  padding: '0.5rem 1rem'\n};\n<button style={buttonStyle}>Click me</button>",
      "CSS Classes provide semantic meaning and better maintainability. You can dynamically apply classes based on component state.",
      "Dynamic Classes Example:\nconst isActive = true;\nconst className = isActive ? 'button button-primary' : 'button button-secondary';\n<button className={className}>Submit</button>"
    ]
  },
  {
    name: "react-component-lifecycle",
    title: "React Component Lifecycle",
    description: "Master the lifecycle methods and understand component rendering phases.",
    content: [
      "React components have a lifecycle that involves three main phases: Mounting, Updating, and Unmounting.",
      "Mounting Phase: This is when the component is being created and being inserted into the DOM. The methods called are:\n- constructor()\n- render()\n- componentDidMount()",
      "The componentDidMount() method is called after the component is rendered. This is the perfect place to make API calls, set up timers, or update the DOM.",
      "Example:\ncomponentDidMount() {\n  fetch('/api/data')\n    .then(res => res.json())\n    .then(data => this.setState({ data }));\n}",
      "Updating Phase: This occurs when the component is being re-rendered due to props or state changes. Methods called are:\n- render()\n- componentDidUpdate()\n- shouldComponentUpdate()",
      "Unmounting Phase: This is the final phase when the component is being removed from the DOM. Use componentWillUnmount() to clean up resources like timers or event listeners."
    ]
  },
  {
    name: "react-hooks-and-state-management",
    title: "React Hooks and State Management",
    description: "Explore modern React with hooks and effective state management patterns.",
    content: [
      "React Hooks are functions that let you use state and other React features in functional components. The most basic hook is useState.",
      "useState Hook Example:\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}",
      "The useEffect hook allows you to perform side effects in functional components. It runs after the component renders and has replaced lifecycle methods in many cases.",
      "useEffect Example:\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n  \n  return () => {\n    document.title = 'Reillo';\n  };\n}, [count]);",
      "Custom hooks let you extract component logic into reusable functions. They are JavaScript functions whose names start with 'use'.",
      "For complex state management, consider libraries like Redux, Context API, or Zustand to manage application-wide state efficiently."
    ]
  },
  {
    name: "react-routing-navigation",
    title: "React Router and Client-Side Navigation",
    description: "Build single-page applications with client-side routing and navigation.",
    content: [
      "React Router is a library that enables dynamic route matching, location transition handling, and location history management. It allows you to build single-page applications with navigation without page refreshes.",
      "Basic Setup:\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
      "The Link component navigates to different routes without causing a page reload. It's more efficient than using regular anchor tags.",
      "Link Example:\nimport { Link } from 'react-router-dom';\n\n<nav>\n  <Link to=\"/\">Home</Link>\n  <Link to=\"/articles\">Articles</Link>\n  <Link to=\"/about\">About</Link>\n</nav>",
      "Dynamic routing allows you to capture URL parameters. Use the useParams hook to retrieve these parameters in your components.",
      "useParams Example:\nfunction ArticlePage() {\n  const { id } = useParams();\n  return <h1>Article {id}</h1>;\n}\n\n<Route path=\"/articles/:id\" element={<ArticlePage />} />"
    ]
  },
  {
    name: "best-practices-react-development",
    title: "Best Practices in React Development",
    description: "Learn industry-standard practices and patterns for writing maintainable React code.",
    content: [
      "Component Composition: Break your UI into small, focused components. Each component should have a single responsibility, making them easier to test and reuse.",
      "Keys in Lists: Always provide unique keys when rendering lists. Keys help React identify which items have changed, improving performance.\n\nGood:\n<ul>\n  {items.map(item => <li key={item.id}>{item.name}</li>)}\n</ul>",
      "Prop Validation: Use PropTypes or TypeScript to validate component props. This helps catch bugs early and serves as documentation.",
      "PropTypes Example:\nimport PropTypes from 'prop-types';\n\nButton.propTypes = {\n  label: PropTypes.string.isRequired,\n  onClick: PropTypes.func.isRequired,\n  disabled: PropTypes.bool\n};",
      "Performance Optimization: Use React.memo for components that don't need frequent re-renders, useMemo for expensive computations, and useCallback for memoized callback functions.",
      "Code Splitting: Use dynamic imports and React.lazy() to split your code into smaller chunks that are loaded on demand, improving initial page load time."
    ]
  },
  {
    name: "styling-with-css-modules",
    title: "Advanced Styling with CSS Modules",
    description: "Create scoped, maintainable styles using CSS Modules in React applications.",
    content: [
      "CSS Modules are CSS files where class names are scoped locally by default. This prevents naming conflicts and makes styles more maintainable.",
      "CSS Modules Example:\n/* Button.module.css */\n.primary {\n  background-color: #8b6f47;\n  color: #faf8f5;\n  padding: 0.5rem 1rem;\n}",
      "To use CSS Modules in React, import the stylesheet as a JavaScript object and apply classes using the imported object.",
      "Usage Example:\nimport styles from './Button.module.css';\n\nfunction Button() {\n  return <button className={styles.primary}>Click me</button>;\n}",
      "One of the main advantages of CSS Modules is that class names are scoped to the component, eliminating naming conflicts in larger projects.",
      "You can compose multiple classes and use conditional logic to apply styles dynamically based on component props and state."
    ]
  }
];

export default articles;