import { css } from '@emotion/react';

import { rem } from './common';

export const boxModel = (sizePrefix = '') => {
  return css`
    .border${sizePrefix} {
      border: ${rem(1)} solid black !important;
    }
    .border-top${sizePrefix} {
      border-top: ${rem(1)} solid black !important;
    }
    .border-right${sizePrefix} {
      border-right: ${rem(1)} solid black !important;
    }
    .border-bottom${sizePrefix} {
      border-bottom: ${rem(1)} solid black !important;
    }
    .border-left${sizePrefix} {
      border-left: ${rem(1)} solid black !important;
    }
    .border${sizePrefix}-0 {
      border: 0 !important;
    }
    .border-top${sizePrefix}-0 {
      border-top: 0 !important;
    }
    .border-right${sizePrefix}-0 {
      border-right: 0 !important;
    }
    .border-bottom${sizePrefix}-0 {
      border-bottom: 0 !important;
    }
    .border-left${sizePrefix}-0 {
      border-left: 0 !important;
    }
    .visible${sizePrefix} {
      visibility: visible !important;
    }
    .invisible${sizePrefix} {
      visibility: hidden !important;
    }
    .d${sizePrefix}-flex {
      display: flex !important;
    }
    .d${sizePrefix}-block {
      display: block !important;
    }
    .d${sizePrefix}-inline-block {
      display: inline-block !important;
    }
    .d${sizePrefix}-inline {
      display: inline !important;
    }
    .d${sizePrefix}-none {
      display: none !important;
    }
    .flex${sizePrefix}-row {
      flex-direction: row !important;
    }
    .flex${sizePrefix}-column {
      flex-direction: column !important;
    }
    .flex${sizePrefix}-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex${sizePrefix}-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex${sizePrefix}-wrap {
      flex-wrap: wrap !important;
    }
    .flex${sizePrefix}-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex${sizePrefix}-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex${sizePrefix}-fill {
      flex: 1 1 auto !important;
    }
    .flex-grow${sizePrefix}-0 {
      flex-grow: 0 !important;
    }
    .flex-grow${sizePrefix}-1 {
      flex-grow: 1 !important;
    }
    .flex-shrink${sizePrefix}-0 {
      flex-shrink: 0 !important;
    }
    .flex-shrink${sizePrefix}-1 {
      flex-shrink: 1 !important;
    }
    .justify-content${sizePrefix}-start {
      justify-content: flex-start !important;
    }
    .justify-content${sizePrefix}-end {
      justify-content: flex-end !important;
    }
    .justify-content${sizePrefix}-center {
      justify-content: center !important;
    }
    .justify-content${sizePrefix}-between {
      justify-content: space-between !important;
    }
    .justify-content${sizePrefix}-around {
      justify-content: space-around !important;
    }
    .align-items${sizePrefix}-start {
      align-items: flex-start !important;
    }
    .align-items${sizePrefix}-end {
      align-items: flex-end !important;
    }
    .align-items${sizePrefix}-center {
      align-items: center !important;
    }
    .align-items${sizePrefix}-baseline {
      align-items: baseline !important;
    }
    .align-items${sizePrefix}-stretch {
      align-items: stretch !important;
    }
    .align-content${sizePrefix}-start {
      align-content: flex-start !important;
    }
    .align-content${sizePrefix}-end {
      align-content: flex-end !important;
    }
    .align-content${sizePrefix}-center {
      align-content: center !important;
    }
    .align-content${sizePrefix}-between {
      align-content: space-between !important;
    }
    .align-content${sizePrefix}-around {
      align-content: space-around !important;
    }
    .align-content${sizePrefix}-stretch {
      align-content: stretch !important;
    }
    .align-self${sizePrefix}-auto {
      align-self: auto !important;
    }
    .align-self${sizePrefix}-start {
      align-self: flex-start !important;
    }
    .align-self${sizePrefix}-end {
      align-self: flex-end !important;
    }
    .align-self${sizePrefix}-center {
      align-self: center !important;
    }
    .align-self${sizePrefix}-baseline {
      align-self: baseline !important;
    }
    .align-self${sizePrefix}-stretch {
      align-self: stretch !important;
    }
    .m${sizePrefix}-auto {
      margin: auto !important;
    }
    .m${sizePrefix}-x-auto {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    .m${sizePrefix}-left-auto {
      margin-left: auto !important;
    }
    .m${sizePrefix}-right-auto {
      margin-right: auto !important;
    }
    .float${sizePrefix}-right {
      float: right;
    }
    .float${sizePrefix}-left {
      float: left;
    }
    .clear${sizePrefix} {
      clear: both;
    }
    .clear${sizePrefix}-left {
      clear: left;
    }
    .clear${sizePrefix}-right {
      clear: right;
    }
    .w${sizePrefix}-auto {
      width: auto !important;
    }
    .w${sizePrefix}-100 {
      width: 100% !important;
    }
    .m-half {
      margin: ${rem(4)};
    }
    .mt-half {
      margin-top: ${rem(4)};
    }
    .mb-half {
      margin-bottom: ${rem(4)};
    }
    .ml-half {
      margin-left: ${rem(4)};
    }
    .mr-half {
      margin-right: ${rem(4)};
    }
    .mx-half {
      margin-left: ${rem(4)};
      margin-right: ${rem(4)};
    }
    .my-half {
      margin-top: ${rem(4)};
      margin-bottom: ${rem(4)};
    }
    .p-half {
      padding: ${rem(4)};
    }
    .pt-half {
      padding-top: ${rem(4)};
    }
    .pb-half {
      padding-bottom: ${rem(4)};
    }
    .pl-half {
      padding-left: ${rem(4)};
    }
    .pr-half {
      padding-right: ${rem(4)};
    }
    .px-half {
      padding-left: ${rem(4)};
      padding-right: ${rem(4)};
    }
    .py-half {
      padding-top: ${rem(4)};
      padding-bottom: ${rem(4)};
    }
    ${Array(12)
    .fill(1)
    .reduce((previousValue, _, currentIndex) => {
      const index = currentIndex - 1;
      return css`
          ${previousValue}
          .m${sizePrefix}-${index} {
            margin: ${rem(index * 8)} !important;
          }
          .mt${sizePrefix}-${index} {
            margin-top: ${rem(index * 8)} !important;
          }
          .mr${sizePrefix}-${index} {
            margin-right: ${rem(index * 8)} !important;
          }
          .mb${sizePrefix}-${index} {
            margin-bottom: ${rem(index * 8)} !important;
          }
          .ml${sizePrefix}-${index} {
            margin-left: ${rem(index * 8)} !important;
          }
          .mx${sizePrefix}-${index} {
            margin-left: ${rem(index * 8)} !important;
            margin-right: ${rem(index * 8)} !important;
          }
          .my${sizePrefix}-${index} {
            margin-top: ${rem(index * 8)} !important;
            margin-bottom: ${rem(index * 8)} !important;
          }
          .m${sizePrefix}-m-${index} {
            margin: ${rem(-8)} !important;
          }
          .mt${sizePrefix}-m-${index} {
            margin-top: ${rem(-8)} !important;
          }
          .mr${sizePrefix}-m-${index} {
            margin-right: ${rem(-8)} !important;
          }
          .mb${sizePrefix}-m-${index} {
            margin-bottom: ${rem(-8)} !important;
          }
          .ml${sizePrefix}-m-${index} {
            margin-left: ${rem(-8)} !important;
          }
          .mx${sizePrefix}-m-${index} {
            margin-left: ${rem(-8)} !important;
            margin-right: ${rem(-8)} !important;
          }
          .my${sizePrefix}-m-${index} {
            margin-top: ${rem(-8)} !important;
            margin-bottom: ${rem(-8)} !important;
          }
          .p${sizePrefix}-${index} {
            padding: ${rem(index * 8)} !important;
          }
          .pt${sizePrefix}-${index} {
            padding-top: ${rem(index * 8)} !important;
          }
          .pr${sizePrefix}-${index} {
            padding-right: ${rem(index * 8)} !important;
          }
          .pb${sizePrefix}-${index} {
            padding-bottom: ${rem(index * 8)} !important;
          }
          .pl${sizePrefix}-${index} {
            padding-left: ${rem(index * 8)} !important;
          }
          .px${sizePrefix}-${index} {
            padding-left: ${rem(index * 8)} !important;
            padding-right: ${rem(index * 8)} !important;
          }
          .py${sizePrefix}-${index} {
            padding-top: ${rem(index * 8)} !important;
            padding-bottom: ${rem(index * 8)} !important;
          }
          .p${sizePrefix}-m-${index} {
            padding: ${rem(-8)} !important;
          }
          .pt${sizePrefix}-m-${index} {
            padding-top: ${rem(-8)} !important;
          }
          .pr${sizePrefix}-m-${index} {
            padding-right: ${rem(-8)} !important;
          }
          .pb${sizePrefix}-m-${index} {
            padding-bottom: ${rem(-8)} !important;
          }
          .pl${sizePrefix}-m-${index} {
            padding-left: ${rem(-8)} !important;
          }
          .px${sizePrefix}-m-${index} {
            padding-left: ${rem(-8)} !important;
            padding-right: ${rem(-8)} !important;
          }
          .py${sizePrefix}-m-${index} {
            padding-top: ${rem(-8)} !important;
            padding-bottom: ${rem(-8)} !important;
          }
        `;
    }, '')}
  `;
};
