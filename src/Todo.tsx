import React, { Component } from "react";

interface TodoProps {
  removeTodo: (id: number) => void;
  value: string;
  id: number;
}
export const Todo: React.FC<TodoProps> = ({ removeTodo, value, id }) => {
  const deleteTodo = (id: number) => {
    removeTodo(id);
  };

  return (
    <div>
      {value}
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        X
      </button>
    </div>
  );
};
