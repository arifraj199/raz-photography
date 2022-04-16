import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from '../../../images/google.png';

const Signup = () => {
  return (
    <div>
      <div className="form-container">
        <h2 className="text-center">Sign Up</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <button className="w-100 text-black fs-5 border-0">Sign Up</button>
        </Form>
        <p className="text-center mt-2">
          <small>
            Already Have an Account?{" "}
            <span className="create-account">
              <Link to="/login">Login</Link>
            </span>
          </small>
        </p>

        <div className="divider">
          <div>
            <hr />
          </div>
          <p className="mt-2 mx-2">Or</p>
          <div>
            <hr />
          </div>
        </div>

        <div className="google-container">
          <Link className="link-container" to="/signup">
            <img src={img} alt="" />
            <p className="mt-3">Continue With Google</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
