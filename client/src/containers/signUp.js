import React, { useState } from "react";
import axios from 'axios';
import { Button, ControlLabel, FormGroup, FormControl } from "react-bootstrap";
import "./signUp.css";

export default function SignUp(props) {
  const [username, setUsername] = useState("KevinKim");
  const [password, setPassword] = useState("password");
  const [firstName, setFirstName] = useState("Kevin");
  const [lastName, setLastName] = useState("Kim");
  const [confirmPassword, setConfirmPassword] = useState("password");

  function validateForm() {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      username.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    );
  }
  
  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName
    }

    axios.post('http://localhost:3000/user/add', user)
      .then(res => {
        props.setUserID(res.data._id);
        props.userHasAuthenticated(true);
        props.history.push("/");
      })
      .catch(() => alert("Username taken."));
  }
  
  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <FormGroup bsSize="large">
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup bsSize="large">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}