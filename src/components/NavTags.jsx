import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, {css} from 'styled-components'

import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdLeaderboard } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { IconContext } from "react-icons";
import LogOutModal from "./LogOutModal";


const NavTags = ({ displayModal, darkmode }) => {
  const [displayLogOutModal, setDisplayLogOutModal] = useState(false)

  return (
    <div>

      <NavTagsWrapper darkmode={darkmode} className={`Modal ${displayModal ? "Show" : ""}`}>

        <IconContext.Provider value={{ size: '23px', className: `navs ${darkmode ? 'newNavs' : '' }` }}>
          <div className="flex flex-col gap-80 justify-between items-center mt-16">
            <div>
              <NavLink exact to="/">
                <IoHome />
              </NavLink>
              <NavLink to="/update-profile">
                <ImProfile />
              </NavLink>
              <NavLink to="/leaderboard">
                <MdLeaderboard />
              </NavLink>
              <NavLink to="/help">
                <FiHelpCircle />
              </NavLink>
            </div>
            <div>
              <CgLogOut onClick={() => setDisplayLogOutModal(!displayLogOutModal)} />
            </div>
          </div>
        </IconContext.Provider>

      </NavTagsWrapper>

      <LogOutModal darkmode={darkmode} displayLogOutModal={displayLogOutModal} setDisplayLogOutModal={setDisplayLogOutModal} />
    </div>
  );
}

const NavTagsWrapper = styled.div`
  background-color: white;
   ${({ darkmode }) => darkmode ? css`
    background-color: var(--darkmodelayer_2);
    margin-top: 0.2rem;
    `: ""
    }
`

export default NavTags;