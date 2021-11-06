import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styled, { css } from "styled-components"


const Login = ({ darkmode }) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)

            const newToken = JSON.parse(localStorage.getItem('scoreBoard')) 
            if(newToken === null) {
                localStorage.setItem('scoreBoard', JSON.stringify([]))
            } else {}
            
            history.push("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <LoginWrapper darkmode={darkmode}>
            <LoginContainer className="lg:w-6/12 w-11/12 mx-auto py-10 px-6">
                <FormBody>
                    <h2 className="text-center mb-4">Login</h2>
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
                        <Button disabled={loading} className="w-100 mt-4" type="submit">
                            Log In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                </FormBody>
                <div className="w-100 text-center mt-2">
                    Don't have account? <Link to="/signup">Sign Up</Link>
                </div>
            </LoginContainer>
        </LoginWrapper>
    )
}

const LoginWrapper = styled.div`
  width: 100vw;
  margin:auto;
  padding-top: 6rem;
  transition: background-color 0.3s ease-in-out;

  ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-primary);
    
    ${LoginContainer} {
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
 transition: background-color 0.3s ease-in-out;
 &:focus {
        outline: none;
    }

`
const LoginContainer = styled.div`
  border: 0.6px solid #dbdbdb;
  border-radius: 10px;
  background-color: #fcfcfc;
  height: 60vh;
  transition: background-color 0.3s ease-in-out;
  transition: border 0.3s ease-in-out;
 

`
export default Login;