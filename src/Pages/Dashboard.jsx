import React, { useState } from "react"
import styled from 'styled-components'
import WelcomeWriteUp from "../components/WelcomeWriteUp"


 const Dashboard = ({ darkmode, isActive, setIsActive}) => {
 
  return (
    <>
      <DisplayContainer darkmode={darkmode}>
        <WelcomeWriteUp darkmode={darkmode} isActive={isActive} setIsActive={setIsActive}/>
      </DisplayContainer>
    </>
  )
}

const DisplayContainer = styled.section`
  width: 100vw;
  margin:auto;
  padding-top: 6rem;

  background: ${({ darkmode}) => (darkmode ?'black' : '')};
    color: ${({ darkmode}) => (darkmode ?'white' : '')};
`

export default Dashboard;
