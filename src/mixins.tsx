/// <reference path="index.d.ts" />

import { css } from "styled-components";
import { getColorChannels } from "./helpers";

export const rem = (pixels: number, base: number = 16): string =>
  `${pixels / base}rem`;

export const opacify = (color: string, adjust: number): string => {
  const [r, g, b, a] = getColorChannels(color);

  return `rgba(${r},${g},${b},${Math.min(a + adjust, 1)})`;
};

export const transparentize = (color: string, adjust: number): string => {
  const [r, g, b, a] = getColorChannels(color);

  return `rgba(${r},${g},${b},${Math.max(a - adjust, 0)})`;
};

export const flex = (direction: string, align: string, justify: string) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`;

export const grid = (cols: number, colGap: number, rowGap?: number) =>
  css`
    display: grid;
    grid-template-columns: repeat(${cols}, 1fr);
    grid-column-gap: ${rem(colGap)};
    grid-row-gap: ${rem(typeof rowGap === "number" ? rowGap : colGap)};
  `;

export const position = (
  value: string,
  top: string,
  right?: string,
  bottom?: string,
  left?: string
) => css`
  position: ${value};
  top: ${top};
  right: ${right || top};
  bottom: ${bottom || top};
  left: ${left || right || top};
`;
