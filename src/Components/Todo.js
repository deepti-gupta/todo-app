import React, { useState } from "react";
import { Checkbox, Card } from "antd";
import "./Todo.scss";
import { getStorageData, setStorageData, TODOLIST } from "../Container/utils";
import TodoForm from "./ToDoForm";
import { DeleteOutlined } from "@ant-design/icons";

function Todo() {
  const todoList = getStorageData(TODOLIST)
    ? JSON.parse(getStorageData(TODOLIST))
    : [];
  const [todos, setTodos] = useState(todoList);
  // Add TODO
  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
    setStorageData(TODOLIST, newTodos); // Store in Storage
  };
  //Delete TODO
  const deleteTodo = (indexx) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((item, index) => {
      return index !== indexx;
    });
    setTodos(newTodos);
    setStorageData(TODOLIST, newTodos);
  };
  //Complete TODO
  const completeTodo = (index, value) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = value;
    setTodos(newTodos);
    setStorageData(TODOLIST, newTodos);
  };
  console.log(todos);
  return (
    <div className="app">
      <div className="todo-list">
        <Card bordered={true} style={{ width: 350 }} className="todo">
          {todos &&
            todos.map((todo, index) => (
              <div>
                <div index={index}>
                  {" "}
                  <Checkbox
                    key={index}
                    onChange={(e) => completeTodo(index, e.target.checked)}
                    checked={todo.isCompleted}
                  ></Checkbox>
                  <span
                    className={
                      todo.isCompleted ? "todo_text completed" : "todo_text "
                    }
                  >
                    {todo.text}
                  </span>
                  <DeleteOutlined
                    onClick={() => deleteTodo(index)}
                  ></DeleteOutlined>
                </div>
              </div>
            ))}
          <TodoForm addTodo={addTodo} />
        </Card>
      </div>
    </div>
  );
}
export default Todo;
