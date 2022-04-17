import React from "react";
import { Accordion } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="questions">
        <div>
          <h2>#Difference between Authorization and Authentication</h2>
          <div className="question-one">
            <p>
              <h4>Authorization</h4> <br />
              <span>
                i) Authorization determines whether you are authorized to access
                the resources.
              </span>{" "}
              <br />
              <span>
                ii) It is the process of verifying whether access is allowed or
                not.
              </span>
              <br />
              <span>iii) It determines what user can and cannot access.</span>
              <br />
              <span>
                iv) Authentication factors required for authorization may vary,
                depending on the security level.
              </span>
            </p>
            <p>
              <h4>Authentication</h4> <br />
              <span>
                i) Authentication confirms your identity to grant access to the
                system.
              </span>
              <br />
              <span>
                ii) It is the process of validating user credentials to gain
                user access.
              </span>
              <br />
              <span>
                iii) It determines whether user is what he claims to be.
              </span>
              <br />
              <span>
                iv) Authentication usually requires a username and a password.
              </span>
            </p>
          </div>

          <h2>
            #Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <div className="question-two">
            <p>
              <span>
                Firebase is service provided by Google.Google Firebase offers
                many features that pitch it as the go-to backend development
                tool for web and mobile apps.It used in Android and Web
                development too.Firebase can be used when you do not want to
                spend a lot of time developing your own backend.We will not have
                to take care of servers, etc, Google will take care of it for
                us. If we do not find the need to develop our own backend,
                Firebase is one of the best options.
              </span>
            </p>
            <p>
              <h4>There has more authentication to implement:</h4>
              <span>Password-based authentication. </span>
              <br />
              <span>Multi-factor authentication</span>
              <br />
              <span>Certificate-based authentication. </span>
              <br />
              <span>Biometric authentication.</span>
              <br />
              <span>Token-based authentication</span>
            </p>
          </div>

          <h2>#What other services does firebase provide other than authentication?</h2>
          <div className="question-three">
            <p>
                <span>
                <h4>Firebase Provides:</h4>
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Predictions</li>
                </ul>
                Moreover it also provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to app.
                </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
