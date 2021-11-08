import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { pageAnimation } from "../animations"
import { motion } from "framer-motion"

const ForgotPassword = ({ darkmode }) => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError("Failed to reset")
        }

        setLoading(false)
    }

    return (
        <>
            <ForgotPasswordWrapper darkmode={darkmode}>
                <ForgotPasswordContainer
                    variants={pageAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    darkmode={darkmode}
                    className="xl:w-6/12 lg:w-9/12 sm:w-11/12 w-full mx-auto py-6 sm:py-10 sm:px-6 px-3">
                    <FormBody>
                        <h2 className="text-center mb-4">Password Reset </h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <InputGroup id="email">
                                <Label>Email</Label>
                                <Input type="email" ref={emailRef} required />
                            </InputGroup>
                            <Button disabled={loading} className="w-100 mt-4" type="submit">
                                Reset Password
                            </Button>
                        </Form>
                        <div className="w-100 text-center mt-2">
                            <Link to="/login">Login</Link>
                        </div>
                    </FormBody>
                </ForgotPasswordContainer>
            </ForgotPasswordWrapper>
        </>
    )
}


const ForgotPasswordWrapper = styled.div`
  width: 100vw;
  margin:auto;
  padding-top: 6rem;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding:0.8rem 0.3rem;
  }

  ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    transition: background-color 0.3s ease-in-out;
    color: var(--color-primary);
    
    ${ForgotPasswordContainer} {
            background-color: var(--darkmodelayer_1);
            transition: background-color 0.3s ease-in-out;
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

 @media (max-width: 768px) {
  width: 100%;
  }
  
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
const ForgotPasswordContainer = styled(motion.div)`
  border: 0.6px solid #dbdbdb;
  border-radius: 10px;
  background-color: #fcfcfc;
  height: 60vh;
  transition: background-color 0.3s ease-in-out;
  transition: border 0.3s ease-in-out;
 

`
export default ForgotPassword;