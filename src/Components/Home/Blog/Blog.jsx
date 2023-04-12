import React from 'react';
import './Blog.css'
import Container from 'react-bootstrap/Container';

const Blog = () => {
  return (
    <Container>
      <div className='blog-page'>
        <h2>a. When should you use context API?</h2>

        <h3>Context API is useful when you need to pass data through the component tree without having to pass props down manually at every level. It's also useful when you have a global state that multiple components need to access and modify.</h3>

        <h2>b. What is a custom hook?</h2>
        <h3>A custom hook is a reusable function that contains stateful logic and can be shared across multiple components. It allows you to extract complex logic from components and reuse it across your application.</h3>
        <h2>c.What is useRef?</h2>
        <h3>useRef is a hook in React that allows you to create a mutable variable that persists across re-renders. It's often used to reference a DOM element or to store values that need to persist between function calls</h3>
        <h2>d.What is useMemo?</h2>
        <h3>useMemo is a hook in React that allows you to memoize expensive computations so that they are only re-evaluated when their dependencies change. It's useful for optimizing performance in components that perform computationally expensive calculations or rendering.</h3>
      </div>




    </Container>
  );
};

export default Blog;