import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import styled, { css } from 'styled-components'
import { Stack } from '@mui/material';
import { CssBaseline, Button } from '@material-ui/core';
import useStyles from "../components/MaterialUI-styles"
import { GoZap } from "react-icons/go";

const WelcomeWriteUp = ({ darkmode, isActive, setIsActive }) => {
    const { currentUser } = useAuth()
    const myClasses = useStyles();
    const history = useHistory();

    const startAssesment = () => {
        history.push('/your-test-is-on-!')
        setIsActive(true)
    }


    return (
        <>
            <CssBaseline />
            <WriteUpContainer darkmode={darkmode} className="lg:w-6/12 w-11/12 mx-auto py-10 px-6">
                <div className="title">
                    <ImgIcon src="images/apptitude-test.png" alt="bulb" />
                    <h1>Apptitude Assesment</h1>
                </div>
                <Article >
                    <br />
                    {/* Welcome <strong>{currentUser.email}</strong>. You will have <strong>10mins</strong> to complete the assessment. */}
                    You might not finish all <strong>30 questions</strong> but do your best to answer as many as you can.<br /><br />
                    Please make sure you have have uninterrupted time to complete the assesments.

                    You are not permitted to use calculators or any other problem-solving-devices.
                    Do have a pen and paper with you when you take the assesment.<br /><br />

                    Your time begins as soon as you click the "START ASSESMENT" button.
                </Article>

                <Stack spacing={4} justifyContent="center" alignItems="center" direction="row">
                    <Button onClick={startAssesment} startIcon={<GoZap />}
                        className={myClasses.startButton}
                        variant="outlined">
                        START ASSESMENT
                    </Button>
                </Stack>
            </WriteUpContainer>
        </>
    )
}

const WriteUpContainer = styled.section`
  background-color: 'white';
  border-top: 0.6px solid #dbdbdb;
  height: 60vh;
  box-shadow: 0 8px 8px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10), 
              0 8px 8px rgba(0,0,0,0.05), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.03);

  ${({ darkmode }) => darkmode ? css`
    background-color: orange; color:red;`: "" }
`
const ImgIcon = styled.img`
  width: 50px;
  transform: rotate(90deg);
`
const Article = styled.article`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
  color: #021220;
`

export default WelcomeWriteUp
