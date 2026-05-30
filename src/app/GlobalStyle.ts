import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(108, 99, 255, 0.45);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(108, 99, 255, 0.75);
  }

  body {
    margin: 0;
    min-width: 320px;
    color: #e2e8f0;
    background: #0a0e1a;
    background-image:
      radial-gradient(ellipse at 15% 15%, rgba(108, 99, 255, 0.18) 0%, transparent 55%),
      radial-gradient(ellipse at 85% 85%, rgba(0, 212, 255, 0.12) 0%, transparent 55%),
      radial-gradient(ellipse at 50% 50%, rgba(15, 17, 30, 1) 0%, transparent 100%);
    background-attachment: fixed;
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  a {
    color: inherit;
  }
`;
