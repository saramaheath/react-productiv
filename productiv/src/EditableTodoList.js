import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */


function EditableTodoList({ todos, update, remove }) {
  console.log({ todos, update, remove }, 'editabletodolist component' )
  return (
    <div>
      {todos.map((todo) => (
        <EditableTodo key={todo.id} todo={todo} update={update} remove={remove} />
      ))}
    </div>
  );
}

export default EditableTodoList;
