import React from "react";
import { Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import img from "../../../images/google.png";

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (user || user1) {
    console.log(user);
    navigate("/");
  }

  const handleSignupForm = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    console.log(email, password, confirmPassword);

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <div>
      <div className="form-container">
        <h2 className="text-center">Sign Up</h2>
        <Form onSubmit={handleSignupForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirmPassword" required />
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
          <Link onClick={()=> signInWithGoogle()} className="link-container" to="/signup">
            <img src={img} alt="" />
            <p className="mt-3">Continue With Google</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
