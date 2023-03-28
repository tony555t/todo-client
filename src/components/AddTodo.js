import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { Container, Row } from "react-bootstrap";


const AddTodo = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
  });
  const [errors, setErrors] = useState([]);

  function handleSubmit(event){
    event.preventDefault()

    // if (!formData.title || !formData.description || !formData.status || !formData.priority) {
    //   alert("Please fill in all fields")
    //   return;
    // }
    console.log(formData)

    fetch("https://task-train-rails-7l2f.onrender.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to add todo');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Task added:", data);
        setFormData(data)
        console.log(setFormData)
      })
      .catch((errors) => setErrors(errors));
  };


  return (
    <Container>
      <Row>
        <FormGroup>
          <Label for="first">Title</Label>
          <Input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Enter a preferred Title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="last">Description</Label>
          <Input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Enter a Description"
          />
        </FormGroup>
        <FormGroup>
          <Label for="last">Status</Label>
          <Input
            type="text"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })
            }
            placeholder="CREATED, STARTED, COMPLETED or CANCELLED"
          />
        </FormGroup>
        <FormGroup>
          <Label for="last">Priority</Label>
          <Input
            type="text"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })
            }
            placeholder="LOW, MEDIUM or HIGH"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Row>
    </Container>
  );
};

export default AddTodo;