import React from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Navbar from './Navbar'
import styled from 'styled-components'
import { Stack } from '@mui/material';
import { CssBaseline, Button } from '@material-ui/core';
import useStyles from "./MaterialUI-styles";
import { GoZap } from "react-icons/go";

export default function Dashboard() {
  const { currentUser } = useAuth()
  const myClasses = useStyles();

  return (
    <>
      <CssBaseline />
      <Navbar />

      <DisplayContainer>
        <div className="lg:w-6/12 w-11/12 mx-auto border py-10 px-6">
          <div className="title">
            <ImgIcon src="https://o.remove.bg/downloads/9add4aa4-6c1b-4704-b593-52ac0347e4eb/electronic-icon-processor-symbol-consciousness-computer-removebg-preview.png" alt="bulb" />
            <h1>Apptitude Assesment</h1>
          </div>
          <Article >
            <br />
            Welcome <strong>{currentUser.email}</strong>. You will have <strong>10mins</strong> to complete the assessment.
            You might not finish all <strong>30 questions</strong> but do your best to answer as many as you can.<br /><br />
            Please make sure you have have uninterrupted time to complete the assesments.

            You are not permitted to use calculators or any other problem-solving-devices.
            Do have a pen and paper with you when you take the assesment.<br /><br />

            Your time begins as soon as you click the "START ASSESMENT" button.
          </Article>

          <Stack spacing={4} justifyContent="center" alignItems="center" direction="row">
            <Button startIcon={<GoZap />} className={myClasses.startButton} variant="outlined">START ASSESMENT</Button>
          </Stack>

        </div>
      </DisplayContainer>
    </>
  )
}

const DisplayContainer = styled.section`
  width: 100vw;
  margin:auto;
  margin-top: 6rem;
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