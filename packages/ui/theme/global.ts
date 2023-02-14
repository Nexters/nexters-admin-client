import { css } from '@emotion/react';
import reset from 'emotion-reset';

const globalStyle = css`
  ${reset}
  * {
    font-family: inherit;
  }
  body {
    box-sizing: border-box;
    line-height: 160%;
    letter-spacing: -0.005em;
  }
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export { globalStyle };
