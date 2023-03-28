import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import EditTodo from "./EditTodo";

function TodosPage() {
  const [data, setData] = useState([]);
  const [editTodo, setEditTodo] = useState([])
  const [showEditModal, setShowEditModal] = useState(false);

  
  useEffect(() => {
    setData([]);
    fetch("https://task-train-rails-7l2f.onrender.com/todos")
      .then((response) => {
          // console.log(response);
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData.data);
        setData(responseData.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEditTodo = (id) => {
    fetch(`https://task-train-rails-7l2f.onrender.com/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editTodo)
    })
    
    .then((response) => response.json())
    .then((formData) => {
      console.log(formData)
      setEditTodo(formData.data)
      // console.log(setEditTodo)
    })
    .catch((error) => {
      console.error(error);
    });    
  }

  const handleDeleteTodo = (id) => {
    fetch (`https://task-train-rails-7l2f.onrender.com/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data.filter((todo) => todo.id !== id))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  
   const handleShowEditModal = (todo) => {
    setEditTodo(todo);
    setShowEditModal(true);
  }
  

  return (
    <Container>
      <Row>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date Created</th>              
              <th>Priority</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo) => (
              <tr key={todo.id}
              onClick={() => setShowEditModal(true)}
              style={ {cursor: 'pointer'} }
              >
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.created_at}</td>                
                <td>
                  <Badge
                    bg={
                      todo.priority === "HIGH"
                        ? "danger"
                        : todo.priority === "MEDIUM"
                        ? "warning"
                        : "primary"
                    }>
                    {todo.priority}
                  </Badge>{" "}
                </td>
                <td>
                  <Badge
                    bg={
                      todo.status === "COMPLETED"
                        ? "info"
                        : todo.status === "STARTED"
                        ? "dark"
                        : "success"
                    }>
                    {todo.status}
                  </Badge>{" "}
                </td>
                <td>
                    <div className="d-flex">
                      <Button variant="secondary" onClick={() => setShowEditModal(true)} >Edit</Button>{" "}
                      <Button variant="danger" onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                    </div>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="info" size="lg" onClick={ event => window.location.href='/addtodo' }>
          Add a Task
        </Button>
      </Row>
      <EditTodo
      show={showEditModal}
      onHide={() => setShowEditModal(false)}
      handleEditTodo={handleEditTodo}
      todo={editTodo}
      setTodo={setEditTodo}
    />
    </Container>
  );
}

export default TodosPage;
