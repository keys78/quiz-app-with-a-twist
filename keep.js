import React, { useState } from "react";
import styled, { css } from "styled-components";
import "./styles.css";

const fetchLSItem = itemName => window.localStorage.getItem(itemName);
const setLSItem = (itemName, value) =>
  window.localStorage.setItem(itemName, value);

export default function App() {
  const initDarkmodeSetting = fetchLSItem("darkmode") === "true";
  const [darkmode, setDarkmode] = useState(initDarkmodeSetting);
  const pageTitle = darkmode ? "Darkmode" : "Lightmode";

  const handleToggleDarkmode = () => {
    const newDarkmodeValue = !darkmode;

    setDarkmode(newDarkmodeValue);
    setLSItem("darkmode", newDarkmodeValue);
  };

  return (
    <AppWrapper darkmode={darkmode}>
      <h1>{pageTitle}</h1>
      <Card>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book.
      </Card>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleToggleDarkmode}
          checked={darkmode}
        />
        <span className="slider round" />
      </label>
    </AppWrapper>
  );
}

const Card = styled.div`
  background-color: var(--color-grey-1);
  border-radius: var(--global-radius);
  margin-bottom: 16px;
  padding: 16px;
  transition: background-color 0.3s ease-in-out;
`;

const AppWrapper = styled.div`
  padding: 16px;
  transition: background-color 0.3s ease-in-out;

  ${({ darkmode }) =>
    darkmode
      ? css`
          background-color: var(--color-darkmode-layer-1);
          color: var(--color-white);

          ${Card} {
            background-color: var(--color-darkmode-layer-2);
          }
        `
      : ""}
`;