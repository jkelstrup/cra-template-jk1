import React from 'react';

import styled, { keyframes } from 'styled-components/macro';
import logo from 'img/logo.svg';

const App = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${appLogoSpin} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #FF0066;
`;

const Code = styled.code`
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
`;

export default function() {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <Code>src/components/App/App.js</Code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </App>
  );
}
