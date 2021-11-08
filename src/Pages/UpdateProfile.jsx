import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styled, { css } from "styled-components"
import { pageAnimation } from "../animations"
import { motion } from "framer-motion"


const UpdateProfile = ({ darkmode }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
      history.push('/')
    }).catch(() => {
      setError('failed to update account')
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <CoverAll darkmode={darkmode}>
      <UpdateProfileContainer
       variants={pageAnimation}
       initial="hidden"
       animate="visible"
       exit="exit"
       darkmode={darkmode}
      className="xl:w-6/12 lg:w-9/12 sm:w-11/12 w-full mx-auto py-6 sm:py-10 sm:px-6 px-3">
        <FormBody>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <InputGroup id="email">
              <Label>Email</Label>
              <Input type="email" defaultValue={currentUser.email} ref={emailRef} placeholder={'Enter new email to update'} required />
            </InputGroup>
            <InputGroup id="password">
              <Label>Password</Label>
              <Input type="password" ref={passwordRef} placeholder={'Leave blank to keep the same'} />
            </InputGroup>
            <InputGroup id="password-confirm">
              <Label>Password Confirmation</Label>
              <Input type="password" ref={passwordConfirmRef} placeholder={'Leave blank to keep the same'} />
            </InputGroup>

            <div className="flex justify-between items-center w-full">
              <Link to="/">Cancel</Link>
              <Button disabled={loading} className="w-30 mt-2" type="submit">
                Update
              </Button>
            </div>

          </Form>
        </FormBody>

      </UpdateProfileContainer>
    </CoverAll>
  )
}

const CoverAll = styled.div`
  width: 100vw;
  margin:auto;
  padding-top: 6rem;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding:0.8rem 0.3rem;
  }

  ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-primary);

    @media (max-width: 768px) {
    padding:0.8rem 0.9rem;
  }
    
    ${UpdateProfileContainer} {
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
const UpdateProfileContainer = styled(motion.div)`
  border-top: 0.6px solid #dbdbdb;
  border-radius:10px;
  background-color: #fcfcfc;
  transition: background-color 0.3s ease-in-out;
  height: 60vh;
  box-shadow: 0 8px 8px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10), 
              0 8px 8px rgba(0,0,0,0.05), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.03);

   @media (max-width: 768px) {
    height:fit-content;
  }

${({ darkmode }) => darkmode ? css`
    background-color: black;
    color: var(--color-white);`: ""
  }
`

export default UpdateProfile;