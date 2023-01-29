import React, { useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import FakeData from "./DataBase/FakeData";
import './ToDoApp.css'

function ToDoApp() {
  const [Todos, SetTodos] = useState(FakeData);
  const addtasktotab = (TheNewTask) => {
    SetTodos([...Todos, TheNewTask]);
  };
  const deleteTask = (taskId) => {
    let TableAfterDelete = Todos.filter((elt) => elt.id !== taskId);
    SetTodos(TableAfterDelete);
  };
  const DoneUndoneTask = (Id) => {
    let doneUndoneTable = Todos.map((elt) => {
      if (elt.id === Id) {
        return { ...elt, isDone: !elt.isDone };
      }
      return elt;
    });

    SetTodos(doneUndoneTable);
  };
  const UpdateTask = (id,Uptext)=>{
    let UpdatedTable = Todos.map((elt)=>{
        if (id===elt.id) {
            return {...elt,text:Uptext}
            
        } else { return elt
            
        }
    })
    SetTodos(UpdatedTable)
  }

  return (
    <div>
      <AddTask addtasktotab={addtasktotab} />
      <hr />
      {Todos.map((elt) => (
        <Task
          key={elt.id}
          elt={elt}
          deleteTask={deleteTask}
          DoneUndoneTask={DoneUndoneTask}
          UpdateTask={UpdateTask}
        />
      ))}
    </div>
  );
}

export default ToDoApp;
