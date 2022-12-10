import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const FormData = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const inputHander = (e) => {
    setText(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  return (
    <form className="form" onSubmit={formHandler} action="">
      <input
        type="text"
        className="input"
        value={text}
        onChange={inputHander}
        placeholder="Enter todo list here..."
      />
    </form>
  );
};

export default FormData;
