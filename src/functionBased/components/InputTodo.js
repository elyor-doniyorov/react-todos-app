/* eslint-disable react/prefer-stateless-function, react/button-has-type,
react/destructuring-assignment, react/state-in-constructor, react/prop-types,
no-unused-vars */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
/* eslint-enable react/prefer-stateless-function, react/button-has-type,
react/destructuring-assignment, react/state-in-constructor, react/prop-types,
no-unused-vars */
