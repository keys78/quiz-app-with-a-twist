import React from "react"
import styled, {css} from 'styled-components'
import WelcomeWriteUp from "../components/WelcomeWriteUp"


 const Dashboard = ({ darkmode, setIsActive}) => {
 
  return (
    <>
      <DisplayContainer darkmode={darkmode}>
        <WelcomeWriteUp darkmode={darkmode} setIsActive={setIsActive}/>
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

  @media (max-width: 768px) {
    padding:0.8rem 0.3rem;
  }

  ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-primary);

    @media (max-width: 768px) {
    padding:0.8rem 0.9rem;
  }
    
    `: ""
    }
`

export default Dashboard;
