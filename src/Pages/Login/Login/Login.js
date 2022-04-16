import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from '../../../images/google.png';
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="text-center">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  />
        </Form.Group>
        <button className="w-100 text-black fs-5 border-0" >Login</button>
      </Form>
      <p className="text-center mt-2"><small>New to engrossing photography? <span className="create-account"><Link to='/signup'>Create New Account</Link></span></small></p>

      <div className="divider">
        <div ><hr /></div>
        <p className="mt-2 mx-2">Or</p>
        <div ><hr /></div>
      </div>

      <div className="google-container">
          <Link className="link-container" to="/signup">
            <img src={img} alt="" />
            <p className="mt-3">Continue With Google</p>
          </Link>
        </div>

    </div>
  );
};

export default Login;
