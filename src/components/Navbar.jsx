import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import styled, { css } from 'styled-components'
import Hamburger from 'hamburger-react'
import NavTags from './NavTags'
import DarkmodeToggle from "../components/DarkmodeToggle";
import { NavLink } from 'react-router-dom';

const Navbar = ({ handleToggleDarkmode, darkmode }) => {
    const [displayModal, setDisplayModal] = useState(false);
    const { currentUser } = useAuth()

    const githubLink = "https://github.com/Em-codes/quiz-app-with-a-twist"
    const logoSrc = (darkmode ? 'images/brain-dark.png' : 'images/brain-logo.png')
    const gitLogoSrc = (darkmode ? 'images/git-dark.png' : 'images/git-light.png')

    return (
        <div>
            <Header darkmode={darkmode}>

                <NavLink to="/" style={{ textDecoration: 'none', color:'black' }}> <div className="flex items-end">
                    <Logo src={logoSrc} alt="logo" />
                    <LogoText>CELR</LogoText>
                </div>
                </NavLink>
                <div className="flex items-center gap-4">
                    <a href={githubLink}><GithubLogo src={gitLogoSrc} alt="github" /></a>

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
            {currentUser !== null ? <NavTags darkmode={darkmode} displayModal={displayModal} setDisplayModal={setDisplayModal} /> : ''}
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
    transition: background-color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
    box-shadow: 0 1px 1px rgba(0,0,0,0.03), 
                0 2px 2px rgba(0,0,0,0.03), 
                0 4px 4px rgba(0,0,0,0.03), 
                0 8px 8px rgba(0,0,0,0.03),
                0 16px 16px rgba(0,0,0,0.03);

    @media (max-width: 1280px) {
        padding:1rem 1rem;
    }

    ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_1);
    color: var(--colornav) ;
    
    ${LogoText} {
        color:#e0c447;
    }
    ` : ""}
`
const Logo = styled.img`
    width: 40px;
    animation: fadeIn 0.5s ease-in-out;
    
    @keyframes fadeIn {
            0% {opacity: 0;}
            100% {opacity: 1;}
         }
`
const GithubLogo = styled.img`
    width: 30px;
    @media (max-width: 540px) {
        display: none;
    }
`
const LogoText = styled.h1`
    font-size:20px;
    margin-bottom: -1px;
    transition: color 0.3s ease-in-out;
    font-family: 'Kumbh Sans', sans-serif;
    font-family: 'Lobster Two', cursive;
    font-family: 'Pacifico', cursive;
`
export default Navbar
