/// <reference path="index.d.ts" />

import { css } from "styled-components";

export const minWidth = (pixels: number) => (...args: any) => css`
  @media only screen and (min-width: ${pixels}px) {
    ${css(args)};
  }
`;

export const maxWidth = (pixels: number) => (...args: any) => css`
  @media only screen and (max-width: ${pixels}px) {
    ${css(args)};
  }
`;

export const minHeight = (pixels: number) => (...args: any) => css`
  @media only screen and (min-height: ${pixels}px) {
    ${css(args)};
  }
`;

export const maxHeight = (pixels: number) => (...args: any) => css`
  @media only screen and (max-height: ${pixels}px) {
    ${css(args)};
  }
`;
