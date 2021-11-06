import React from 'react'
import styled, { css } from 'styled-components'


const Help = ({ darkmode }) => {
    return (
        <>
            <HelpWrapper darkmode={darkmode}>
                <HelpContainer darkmode={darkmode} className="lg:w-6/12 w-11/12 mx-auto py-10 px-6">
                    <div className="mx-auto">
                        <h1 className="text-center pb-10">NEED HELP?</h1>
                        <p>~ Did you notice a bug with the app?</p>
                        <p>~ Do you want to contact the developer?</p>
                        <p>~ Are you are developer and want to collaborate on future projects?</p>
                        <p>~ Are you a recruiter and in need of someone to hire?</p>
                        <p>~ Do you have other suggestions?</p>

                        <div className="flex sm:flex-row flex-col justify-between item-center pt-8">
                            <p className="text-red-600">
                                Contact the developer &nbsp; {`>>>>> `}
                            </p>
                            <div>
                                <a className="no-underline" href="tel:5554280940">Call: &nbsp;+234 810 8243 267</a><br />
                                <a className="no-underline" href="mailto:rahzy24@email.com">Mail: &nbsp; rahzy24@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </HelpContainer>
            </HelpWrapper>
        </>
    )
}

const HelpWrapper = styled.section`
 padding-top: 6rem;
 transition: background-color 0.3s ease-in-out;

 ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_3);
    color: var(--color-primary);
    
    ${HelpContainer} {
            background-color: var(--darkmodelayer_1);
            border:none;
          }
    `: ""
    }
`
const HelpContainer = styled.div`
  background-color:white;
  transition: background-color 0.3s ease-in-out;
  border-top: 0.6px solid #dbdbdb;
  height: 60vh;
  box-shadow: 0 8px 8px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10), 
              0 8px 8px rgba(0,0,0,0.05), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.03);

`



export default Help
