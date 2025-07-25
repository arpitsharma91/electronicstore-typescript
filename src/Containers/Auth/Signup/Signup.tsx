import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Signup.css";
import { useNavigate } from "react-router";
import { Shoppingcontext } from "../../../shared/Context/UserContext";
import type { LoginData } from "../../../shared/Models/Interfaces/interface";
import type { UserDataType } from "../../../shared/Models/Types/types";
import { SignupURL } from "../../../shared/services/services";

function Signup() {
  const [validated, setValidated] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const navigate = useNavigate();
  const user = Shoppingcontext();

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const regData: UserDataType = {
      Name: name,
      Email: email,
      Password: password,
      Address: address,
      Region: region,
      Zipcode: zipcode,
    };
    user.registeruserData(regData);
    const signupData: LoginData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    console.log(regData, signupData);
    axios
      .post(SignupURL, signupData)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });

    setValidated(true);
  };

  return (
    <React.Fragment>
      <Card className="SignupOuter">
        <Form noValidate validated={validated}>
          <Form.Group controlId="validationCustom01" className="mb-3">
            <Form.Control
              required
              type="text"
              placeholder="FullName"
              defaultValue={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02" className="mb-3">
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              defaultValue={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom03" className="mb-3">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              defaultValue={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom04" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Complete Address"
              required
              defaultValue={address}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setAddress(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom05" className="mb-3">
            <Form.Control
              type="text"
              placeholder="State"
              required
              defaultValue={region}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setRegion(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom06" className="mb-3">
            <Form.Control
              type="text"
              placeholder="ZipCode"
              required
              defaultValue={zipcode}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setZipcode(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="button" onClick={submitHandler}>
            Submit
          </Button>
        </Form>
      </Card>
    </React.Fragment>
  );
}

export default Signup;
