import React, { Component, FormEvent, useState } from "react";
import { Todo } from "./Todo";
import "./App.css";

interface ListItem {
  id: number;
  value: string;
}

let todoCounter = 1;
const InitList: ListItem[] = [
  {
    id: 1,
    value: "Buy Milk",
  },
  {
    id: 2,
    value: "Write tutorial",
  },
];

const App: React.FC = () => {
  const [list, setList] = useState(InitList);
  const [item, setItem] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newItem = {
      id: todoCounter++,
      value: item.slice(),
    };
    setList(list.concat(newItem));
    setItem("");
  };

  const handleRemove = (id: number) => {
    setList(list.filter((c) => c.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Add Todo</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              autoFocus
              value={item}
              onChange={handleInputChange}
              placeholder="Enter a task"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
        </div>
      </form>
      <div className="row todo-list">
        <div className="col-md-6">
          <h3>Lists</h3>
          {!list.length ? (
            <div className="no-task">
              All of your tasks are complete. Nicely done!
            </div>
          ) : (
            <ul>
              {list.map((item) => {
                return (
                  <li key={item.id}>
                    <Todo {...item} removeTodo={handleRemove} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
