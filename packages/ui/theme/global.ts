import { css } from '@emotion/react';
import reset from 'emotion-reset';

const globalStyle = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css');

  ${reset}
  body {
    font-family: 'Pretendard', Pretendard, -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
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
`;

export { globalStyle };
