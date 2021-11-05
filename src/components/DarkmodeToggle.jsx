import React, { useState } from "react";
import styled, { css } from "styled-components";



export default function DarkmodeToggle({ darkmode }) {
  const pageTitle = darkmode ? "Darkmode" : "Lightmode";

  
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