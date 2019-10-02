/// <reference path="index.d.ts" />

import { css } from "styled-components";

export const is = (prop: string, value: any = null) => (
  str: any,
  ...args: any[]
) => (props: object) => {
  const match = value === null ? !!props[prop] : props[prop] === value;
  return match ? css(str, ...args) : "";
};

export const isnt = (prop: string, value: any = null) => (
  str: any,
  ...args: any[]
) => (props: object) => {
  const match = value === null ? !props[prop] : props[prop] !== value;
  return match ? css(str, ...args) : "";
};

export const isAny = (prop: string, matches: any[]) => (
  str: any,
  ...args: any[]
) => (props: object) =>
  matches.includes(props[prop]) ? css(str, ...args) : "";

export const isntAny = (prop: string, matches: any[]) => (
  str: any,
  ...args: any[]
) => (props: object) =>
  !matches.includes(props[prop]) ? css(str, ...args) : "";

export const value = (prop: string) => (props: object) => props[prop];

export const swap = (prop: string, yup: any, nope: any) => (props: object) =>
  props[prop] ? yup : nope;

export const choose = (prop: string, map: object) => (props: object) =>
  map[props[prop]];

export const over = (prop: string, amount: number) => (
  str: any,
  ...args: any[]
) => (props: object) => (props[prop] > amount ? css(str, ...args) : "");

export const under = (prop: string, amount: number) => (
  str: any,
  ...args: any[]
) => (props: object) => (props[prop] < amount ? css(str, ...args) : "");
