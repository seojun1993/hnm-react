import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ( { setAuthenticate } ) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(authenticateAction.login(id, password))
    navigate('/');

  }
  return (
    <Container>
      <Form onSubmit={(e) => {loginUser(e)}}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setId(e.target.value) } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value) }/>
        </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>
      </Form>
    </Container>
  )
}

export default Login
