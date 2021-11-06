import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styled, { css } from "styled-components"

const Signup = ({ darkmode }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)

      const newToken = JSON.parse(localStorage.getItem('scoreBoard')) 
      if(newToken === null) {
          localStorage.setItem('scoreBoard', JSON.stringify([]))
      } else {}

      history.push("/")
      localStorage.setItem('scoreBoard', JSON.stringify([]))
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <SignUpWrapper darkmode={darkmode}>
        <SignUpContainer className="lg:w-6/12 w-11/12 mx-auto py-10 px-6">
          <FormBody>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <InputGroup id="email">
                <Label>Email</Label>
                <Input type="email" ref={emailRef} required />
              </InputGroup>
              <InputGroup id="password">
                <Label>Password</Label>
                <Input type="password" ref={passwordRef} required />
              </InputGroup>
              <InputGroup id="password-confirm">
                <Label>Password Confirmation</Label>
                <Input type="password" ref={passwordConfirmRef} required />
              </InputGroup>
              <Button disabled={loading} className="w-100 mt-4" type="submit">
                Sign Up
              </Button>
            </Form>
          </FormBody>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </SignUpContainer>
      </SignUpWrapper>

    </>
  )
}

const SignUpWrapper = styled.div`
  width: 100vw;
  margin:auto;
  padding-top: 6rem;

  ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-primary);
    
    ${SignUpContainer} {
            background-color: var(--darkmodelayer_1);
            border:none;
          }
    ${Input} {
            background-color: var(--darkmodelayer_3);
          }
    ${FormBody} {
        color: var(--color-primary);
          }
   
    `: ""
  }
 
`
const FormBody = styled.div`
 width: 80%;
 margin:auto;
  
`
const Label = styled.label`
 display:block;
  
`
const InputGroup = styled.div`
 padding-bottom: 1rem;
  
`
const Input = styled.input`
 padding:10px 8px;
 border-radius: 5px;
 width: 100%;
 background-color: #ececec;

 ::-webkit-input-placeholder {
    color: #ce6262;
    opacity: 0.5;
  }
  :-ms-input-placeholder {
     color: #cf7b7b;
     opacity: 0.5;
  }

  &:focus {
        outline: none;
    }

`
const SignUpContainer = styled.div`
  border: 0.6px solid #dbdbdb;
  background-color: #fcfcfc;
  height: 60vh;
 
${({ darkmode }) => darkmode ? css`
    background-color: black;
    color: var(--color-white);
    
    `: ""
  }
`

export default Signup;