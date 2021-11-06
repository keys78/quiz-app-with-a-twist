import React from 'react'
import styled, { css } from 'styled-components'
import { CssBaseline, Button } from '@material-ui/core';

const Help = ({ darkmode }) => {
    return (
        <>
            <CssBaseline />
            <HelpWrapper>
                <HelpContainer darkmode={darkmode} className="lg:w-6/12 w-11/12 mx-auto py-10 px-6">
                    <p>Help IS comng Soobg</p>
                </HelpContainer>
            </HelpWrapper>
        </>
    )
}

const HelpWrapper = styled.section`
 padding-top: 6rem;
`
const HelpContainer = styled.div`
  background-color: 'white';
  border-top: 0.6px solid #dbdbdb;
  height: 60vh;
  box-shadow: 0 8px 8px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10), 
              0 8px 8px rgba(0,0,0,0.05), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.03);

  ${({ darkmode }) => darkmode ? css`
    background-color: orange; color:red;`: ""}
`



export default Help
