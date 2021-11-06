import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import styled, { css } from 'styled-components'
import Hamburger from 'hamburger-react'
import NavTags from './NavTags'
import DarkmodeToggle from "../components/DarkmodeToggle";

const Navbar = ({ handleToggleDarkmode, darkmode }) => {
    const [displayModal, setDisplayModal] = useState(false);
    const { currentUser } = useAuth()
    const gitLogo = "https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png"
    const githubLink = "https://github.com/Em-codes/quiz-app-with-a-twist"

    return (
        <div>
            <Header darkmode={darkmode}>
                <div className="flex items-end">
                    <Logo src="images/brain-logo.png" alt="logo" />
                    <LogoText>CELR</LogoText>
                </div>
                <div className="flex items-center gap-4">
                    <a href={githubLink}><GithubLogo src={gitLogo} alt="github" /></a>

                    {currentUser !== null ?
                        <Hamburger onToggle={toggled => { toggled ? setDisplayModal(true) : setDisplayModal(false) }}
                            size={24} rounded
                        />
                        : ''
                    }

                    <label className="switch">
                        <input
                            type="checkbox"
                            onChange={handleToggleDarkmode}
                            checked={darkmode}
                        />
                        <span className="slider round" />
                    </label>
                </div>

            </Header>
            {/* <DarkmodeToggle darkmode={darkmode} /> */}
            {currentUser !== null ? <NavTags displayModal={displayModal} setDisplayModal={setDisplayModal} /> : ''}
        </div>

    )
}

const Header = styled.section`
    width: 100vw;
    height: 80px;
    display: flex;
    padding:1rem 6rem;
    justify-content: space-between;
    align-items: center;
    background-color: aliceblue;
    box-shadow: 0 1px 1px rgba(0,0,0,0.03), 
                0 2px 2px rgba(0,0,0,0.03), 
                0 4px 4px rgba(0,0,0,0.03), 
                0 8px 8px rgba(0,0,0,0.03),
                0 16px 16px rgba(0,0,0,0.03);


    ${({ darkmode }) => darkmode ? css`
    background-color: rgb(1, 5, 32);
    color: var(--color-white); ` : ""}
`
const Logo = styled.img`
    width: 40px;
`
const GithubLogo = styled.img`
    width: 30px;
`
const LogoText = styled.h1`
    font-size:20px;
    margin-bottom: -1px;
`
export default Navbar
