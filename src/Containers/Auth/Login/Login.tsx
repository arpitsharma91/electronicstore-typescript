import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Shoppingcontext } from "../../../shared/Context/UserContext";
import type { LoginData } from "../../../shared/Models/Interfaces/interface";
import type { SigninData } from "../../../shared/Models/Types/types";
import { Link } from "react-router-dom";
import { loginURL } from "../../../shared/services/services";
import "./Login.css";
function Login() {
  const [validated, setValidated] = useState<boolean>(false);
  const [loginData, setLogindata] = useState<LoginData>({
    email: "",
    password: "",
    returnSecureToken: true,
  });

  const user = Shoppingcontext();
  const navigate = useNavigate();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(loginData);
    axios
      .post(loginURL, loginData)
      .then((response) => {
        console.log(response);
        const expiryDate: any = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        localStorage.setItem("expirationDate", expiryDate);
        const signinData: SigninData = {
          token: response.data.idToken,
          id: response.data.localId,
          //   date: expiryDate,
        };
        console.log(signinData);
        user.login(response.data.idToken, response.data.localId, expiryDate);
        user.checkAuthTimeout(response.data.expiresIn);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    setValidated(true);
  };
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLogindata({ ...loginData, email: event.target.value });
  };
  const passwordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLogindata({ ...loginData, password: event.target.value });
  };

  return (
    <React.Fragment>
      <Card className="LoginOuter">
        <Form noValidate validated={validated} className="LoginForm">
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={emailHandler}
            />
          </Form.Group>
          <Form.Group controlId="validationCustom01" className="mb-5">
            <Form.Control
              required
              name="password"
              type="password"
              placeholder="Password"
              onChange={passwordHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        <div className="LoginBottom">
          <span>New User ??? </span>
          <Link to="/signup">
            <Button variant="link" className="LoginBottomButton">
              SignUp
            </Button>
          </Link>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default Login;
