import React from "react"
import styled, {css} from 'styled-components'
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
  background-color:'white';
  transition: background-color 0.3s ease-in-out;
  ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-primary);
    
    `: ""
    }
`

export default Dashboard;
