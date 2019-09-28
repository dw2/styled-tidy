/// <reference path="index.d.ts" />

import { css } from "styled-components";

export const is = (prop: string) => (...args: [any]) => (props: object) =>
  props[prop] ? css(...args) : "";

export const isnt = (prop: string) => (...args: [any]) => (props: object) =>
  !props[prop] ? css(...args) : "";

export const isAny = (prop: string, matches: any[]) => (...args: [any]) => (
  props: object
) => (matches.includes(props[prop]) ? css(...args) : "");

export const isntAny = (prop: string, matches: any[]) => (...args: [any]) => (
  props: object
) => (!matches.includes(props[prop]) ? css(...args) : "");

export const value = (prop: string) => (props: object) => props[prop];

export const swap = (prop: string, yup: any, nope: any) => (props: object) =>
  props[prop] ? yup : nope;

export const choose = (prop: string, map: object) => (props: object) =>
  map[props[prop]];

export const over = (prop: string, amount: number) => (...args: [any]) => (
  props: object
) => (props[prop] > amount ? css(...args) : "");

export const under = (prop: string, amount: number) => (...args: [any]) => (
  props: object
) => (props[prop] < amount ? css(...args) : "");
