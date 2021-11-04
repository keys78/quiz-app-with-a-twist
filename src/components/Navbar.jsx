import React, { useState } from 'react'
import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import NavTags from './NavTags'

const Navbar = () => {
    const [displayModal, setDisplayModal] = useState(false);

    return (
        <div>
            <Header>
                <div className="flex items-end">
                    <Logo src="images/brain-logo.png" alt="logo" />
                    <LogoText>CELR</LogoText>
                </div>
                <Hamburger onToggle={toggled => { toggled ? setDisplayModal(true) : setDisplayModal(false) } }
                 size={24} rounded
                />
            </Header>

            <NavTags displayModal={displayModal} setDisplayModal={setDisplayModal} />
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
`
const Logo = styled.img`
    width: 40px;
`
const LogoText = styled.h1`
    font-size:20px;
    margin-bottom: -1px;
`
export default Navbar
