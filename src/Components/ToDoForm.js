import React, { useState } from "react";
import { Button, Input } from "antd";
function TodoForm(props) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props.addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Add to todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "200px" }}
      />
      <Button type="primary" style={{ width: "max" }} onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
