import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";


const EditTodo = ({ show, onHide, handleEditTodo, todo }) => {
  const [editTodo, setEditTodo] = useState({
    title: todo.title,
    description: todo.description,
    priority: todo.priority,
    status: todo.status,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditTodo({ ...editTodo, [name]: value });
  };

  const handleEdit = () => {
    handleEditTodo(todo.id, editTodo);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={editTodo.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              name="description"
              value={editTodo.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Select
              name="priority"
              value={editTodo.priority}
              onChange={handleChange}
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={editTodo.status}
              onChange={handleChange}
            >
              <option value="CREATED">Created</option>
              <option value="STARTED">Started</option>
              <option value="COMPLETED">Completed</option>
              <option value="CANCELLED">Cancelled</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleEdit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTodo;