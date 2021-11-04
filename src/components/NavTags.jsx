import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdLeaderboard } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { IconContext } from "react-icons";
import LogOutModal from "./LogOutModal";


const NavTags = ({ displayModal, setDisplayModal }) => {
  const [displayLogOutModal, setDisplayLogOutModal] = useState(false)

  return (
    <div>
  
      <div className={`Modal ${displayModal ? "Show" : ""}`}>

        <IconContext.Provider value={{ size: '23px', className: "navs" }}>
          <div className="flex flex-col gap-80 justify-between items-center mt-16">
            <div>
              <IoHome onClick={() => setDisplayModal(!displayModal)} />
              <Link to="/update-profile">
                <ImProfile />
              </Link>
              <MdLeaderboard />
            </div>
            <div>
              <CgLogOut onClick={() => setDisplayLogOutModal(!displayLogOutModal)} />
            </div>
          </div>
        </IconContext.Provider>

      </div>

      <LogOutModal displayLogOutModal={displayLogOutModal} setDisplayLogOutModal={setDisplayLogOutModal}/>
    </div>
  );
}
export default NavTags;