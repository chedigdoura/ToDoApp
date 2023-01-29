import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

function AddTask({ addtasktotab }) {
  const [NewTask, SetNewTask] = useState({ id: "", text: " ", isDone: false });

  const handleChange = (e) => {
    SetNewTask({ ...NewTask, id: uuidv4(), text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addtasktotab(NewTask);
    SetNewTask({ id: "", text: " ", isDone: false });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter a new task"
          onChange={handleChange}
          value={NewTask.text}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddTask;
