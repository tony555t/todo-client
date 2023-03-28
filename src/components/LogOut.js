

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Button from 'react-bootstrap/Button';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('https://task-train-rails-7l2f.onrender.com/logout', {
        method: 'DELETE',
     })
     .then((response) => {
        if (response.ok) {
            console.log(response)
            navigate('/login');
        }
    });
  };

  const handleConfirm = () => {
    confirmAlert({
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: handleLogout,
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <Button variant="secondary" onClick={handleConfirm}>
            LOG OUT
    </Button>
  );
};

export default LogOut;