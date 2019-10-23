import "styled-components";
import { string } from "prop-types";

declare module "styled-components" {
  export interface DefaultTheme {}
}

declare module "styled-tidy" {
  export function is(
    prop: string,
    value?: any
  ): (str: any, ...args: any[]) => (props: object) => string;
  export function isnt(
    prop: string,
    value?: any
  ): (str: any, ...args: any[]) => (props: object) => string;
  export function isAny(
    prop: string,
    matches: any[]
  ): (str: any, ...args: any[]) => (props: object) => string;
  export function isntAny(
    prop: string,
    matches: any[]
  ): (str: any, ...args: any[]) => (props: object) => string;
  export function value(prop: string): (props: object) => any;
  export function swap(
    prop: string
  ): (yup: any, nope: any) => (props: object) => any;
  export function choose(prop: string, map: object): (props: object) => any;
  export function over(
    prop: string,
    amount: number
  ): (str: any, ...args: any[]) => (props: object) => string;
  export function under(
    prop: string,
    amount: number
  ): (str: any, ...args: any[]) => (props: object) => string;
  export function between(
    prop: string,
    from: number,
    to: number
  ): (str: any, ...args: any[]) => (props: object) => string;
  export function minWidth(pixels: number): (...args: any[]) => string;
  export function maxWidth(pixels: number): (...args: any[]) => string;
  export function minHeight(pixels: number): (...args: any[]) => string;
  export function maxHeight(pixels: number): (...args: any[]) => string;
  export function rem(pixels: number, base?: number): string;
  export function opacify(color: string, adjust: number): string;
  export function transparentize(color: string, adjust: number): string;
  export function flex(
    direction: string,
    align: string,
    justify: string
  ): string;
  export function grid(
    cols: number,
    colGap: string | number,
    rowGap?: string | number
  ): string;
  export function position(
    value: string,
    top: string | number,
    right?: string | number,
    bottom?: string | number,
    left?: string | number
  ): string;
}
