import React from "react";
import { Accordion } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import './Blog.css';

const Blog = () => {
  return (
    <div>
        <div className="questions">
            <div>
                <h2>#Difference between Authorization and Authentication</h2>
                <div className="question">
                    <p>
                        <h4>Authorization</h4> <br />
                        <span>i) Authorization determines whether you are authorized to access the resources.</span> <br />
                        <span>ii) It is the process of verifying whether access is allowed or not.</span><br />
                        <span>iii) It determines what user can and cannot access.</span><br />
                        <span>iv) Authentication factors required for authorization may vary, depending on the security level.</span>
                    </p>
                    <p>
                        <h4>Authentication</h4> <br />
                        <span>i) Authentication confirms your identity to grant access to the system.</span><br />
                        <span>ii) It is the process of validating user credentials to gain user access.</span><br />
                        <span>iii) It determines whether user is what he claims to be.</span><br />
                        <span>iv) Authentication usually requires a username and a password.</span>
                    </p>
                </div>
                <h2>#Why are you using firebase? What other options do you have to implement authentication?</h2>
            </div>
        </div>
    </div>
  );
};

export default Blog;
