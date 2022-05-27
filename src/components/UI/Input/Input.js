import React, { useRef, useImperativeHandle } from 'react';

// useImperativeHandle hook is what is allowing us to use manipulate the Input component to be able to use the ref prop. Otherwise, it won't work as components are normally controlled through state/props management in React and React won't normally let us directly call/manipulate. This is an edge case example and should otherwise be used rarely

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    // this hook requires you return an object
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
