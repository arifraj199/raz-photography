import React from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import img from "../../../images/google.png";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import "./Login.css";

const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  if(loading){
    return <LoadingSpinner></LoadingSpinner>
}

  if(user || user1){
    navigate(from, { replace: true });
  }


  const handleLoginForm = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleLoginForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
          />
        </Form.Group>
        <button className="w-100 text-black fs-5 border-0">Login</button>
      </Form>
      <p className="text-center mt-2">
        <small>
          New to engrossing photography?{" "}
          <span className="create-account">
            <Link to="/signup">Create New Account</Link>
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

      <div className="google-container w-100">
        <button onClick={()=> signInWithGoogle()} className="link-container">
            <img src={img} alt="" />
            <p className="mt-3">Continue With Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
