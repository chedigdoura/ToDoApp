import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Task({ elt, deleteTask, DoneUndoneTask, UpdateTask }) {
  const [NewText, SetNewText] = useState("");
  const handleChange = (e) => {
    SetNewText(e.target.value);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    deleteTask(elt.id);
  };
  const handleDone = () => {
    DoneUndoneTask(elt.id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateTask(elt.id, NewText);
    handleClose();
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title
            style={{ textDecoration: elt.isDone ? "line-through" : "none" }}
          >
            {elt.text}{" "}
          </Card.Title>
          <Button variant="danger" onClick={handleClick}>
            Delete
          </Button>
          <Button variant="success" onClick={handleShow}>
            Update
          </Button>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Done" onClick={handleDone} />
          </Form.Group>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder={elt.text} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Task;
