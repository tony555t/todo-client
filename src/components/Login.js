import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Login() {
  const [data, setData] = useState( {username:'', password: ''} )
  const [errors, setErrors] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(event){
    event.preventDefault()

    fetch ('https://task-train-rails-7l2f.onrender.com/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if(response.ok){
        response.json().then((data) => setData(data));
        window.location.href = '/todos'
      }else {
        response.json().then((errors) => setErrors(errors.errors))
      }
    })
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click here to Log In 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value= {data.email}
              onChange={(event) => setData({...data, email: event.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value= {data.password}
              onChange={(event) => setData({...data, password: event.target.value })}
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Go To Register
          </Button>
          {/* {errors.map((error) => (
          <span key={error} className="text-red-500">{error}</span>
        ))} */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login
