/// <reference path="index.d.ts" />

import { css } from "styled-components";
import { getColorChannels } from "./helpers";

export const rem = (pixels: number, base: number = 16): string =>
  pixels === 0 ? "0" : `${pixels / base}rem`;

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

export const grid = (
  cols: number,
  colGap: string | number,
  rowGap?: string | number
) => {
  const colGapUnits = typeof colGap === "number" ? rem(colGap) : colGap;
  const rowGapUnits =
    typeof rowGap === "number" ? rem(rowGap) : rowGap || colGapUnits;

  return css`
    display: grid;
    grid-template-columns: repeat(${cols}, 1fr);
    grid-column-gap: ${colGapUnits};
    grid-row-gap: ${rowGapUnits};
  `;
};

export const position = (
  value: string,
  top: string | number,
  right?: string | number,
  bottom?: string | number,
  left?: string | number
) => {
  const topUnits = typeof top === "number" ? rem(top) : top;
  const rightUnits = typeof right === "number" ? rem(right) : right || topUnits;
  const bottomUnits =
    typeof bottom === "number" ? rem(bottom) : bottom || topUnits;
  const leftUnits = typeof left === "number" ? rem(left) : left || rightUnits;

  return css`
    position: ${value};
    top: ${topUnits};
    right: ${rightUnits};
    bottom: ${bottomUnits};
    left: ${leftUnits};
  `;
};
