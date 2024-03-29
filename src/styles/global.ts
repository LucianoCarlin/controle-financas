import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f8f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
    --white: #fff;
    --green: #33cc95;
    --gray200:#E2E8F0;
    --gray300: #CBD5E0;
    --gray600: #4A5568;
    --gray700: #2D3748;
    --gray800: #1A202C;
    --gray900: #171923;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray600);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  } 

  h1, h2, h3, h4, h5, h6 strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0,8,8,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background-color: var(--gray300);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
`;
