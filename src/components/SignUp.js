import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SignUp(onHide) {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
   });
    const [errors, setErrors] = useState([])
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  function handleSubmit(event) {
    event.preventDefault()
    fetch("https://task-train-rails-7l2f.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok){
        response.json().then((data) => setData(data)); 
      }else 
      response.json().then((errors) => setErrors(errors.errors))
    })
  }
  

  return (
    <>
     <Button variant="primary" onClick={handleShow}>
        Click here to Sign In 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter a username"
              value={data.username}
              onChange={(event) => setData({ ...data, username: event.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={data.email}
              onChange={(event) => setData({ ...data, email: event.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={data.password}
              onChange={(event) => setData({ ...data, password: event.target.value })}
            />
          </div>
          <div className="d-grid gap-5 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
      {/* {errors.length > 0 && (
    <ul style={{ color: "red" }}>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )} */}
        </Modal.Body> 
      </Modal>
    </>
  );
}
export default SignUp
