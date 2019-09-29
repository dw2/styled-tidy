/// <reference path="index.d.ts" />

import { render, cleanup } from "@testing-library/react";
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import "jest-styled-components";
import {
  is,
  isnt,
  isAny,
  isntAny,
  value,
  swap,
  choose,
  over,
  under,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  rem,
  opacify,
  transparentize,
  flex,
  grid
} from "./styled-tidy";

declare interface TestProps {
  enabled?: boolean;
  size?: string;
  amount?: number;
}

export const setup = (node: any) =>
  render(<ThemeProvider theme={{}}>{node}</ThemeProvider>);

describe("styed-tidy", () => {
  afterEach(cleanup);

  describe("'is' matcher", () => {
    const Test = styled.div<TestProps>`
      ${is("enabled")`color: green`};
    `;

    it("should render the given CSS when matched", () => {
      const { getByText } = setup(<Test enabled>test</Test>);
      expect(getByText("test")).toHaveStyleRule("color", "green");
    });

    it("should not render the given CSS when not matched", () => {
      const { getByText } = setup(<Test>test</Test>);
      expect(getByText("test")).not.toHaveStyleRule("color");
    });
  });

  describe("'is' matcher with a mixin", () => {
    it("should render the given CSS when matched", () => {
      const Test = styled.div<TestProps>`
        ${is("enabled")`height: ${rem(16)}`};
      `;
      const { getByText } = setup(<Test enabled>test</Test>);
      expect(getByText("test")).toHaveStyleRule("height", "1rem");
    });
  });

  describe("'isnt' matcher", () => {
    const Test = styled.div<TestProps>`
      ${isnt("enabled")`color: red`};
    `;

    it("should not render the given CSS when matched", () => {
      const { getByText } = setup(<Test enabled>test</Test>);
      expect(getByText("test")).not.toHaveStyleRule("color");
    });

    it("should render the given CSS when not matched", () => {
      const { getByText } = setup(<Test>test</Test>);
      expect(getByText("test")).toHaveStyleRule("color", "red");
    });
  });

  describe("'isAny' matcher", () => {
    const Test = styled.div<TestProps>`
      ${isAny("size", ["small", "medium"])`color: green`};
    `;

    it("should render the given CSS when matched", () => {
      const { getByText, rerender } = setup(<Test size="small">test</Test>);

      expect(getByText("test")).toHaveStyleRule("color", "green");
      rerender(<Test size="medium">test</Test>);
      expect(getByText("test")).toHaveStyleRule("color", "green");
    });

    it("should not render the given CSS when not matched", () => {
      const { getByText, rerender } = setup(<Test>test</Test>);

      expect(getByText("test")).not.toHaveStyleRule("color");
      rerender(<Test size="large">test</Test>);
      expect(getByText("test")).not.toHaveStyleRule("color");
    });
  });

  describe("'isntAny' matcher", () => {
    const Test = styled.div<TestProps>`
      ${isntAny("size", ["small", "medium"])`color: green`};
    `;

    it("should render the given CSS when matched", () => {
      const { getByText, rerender } = setup(<Test size="small">test</Test>);

      expect(getByText("test")).not.toHaveStyleRule("color");
      rerender(<Test size="medium">test</Test>);
      expect(getByText("test")).not.toHaveStyleRule("color");
    });

    it("should not render the given CSS when not matched", () => {
      const { getByText, rerender } = setup(<Test>test</Test>);

      expect(getByText("test")).toHaveStyleRule("color", "green");
      rerender(<Test size="large">test</Test>);
      expect(getByText("test")).toHaveStyleRule("color", "green");
    });
  });

  describe("'value' matcher", () => {
    it("should render the given value", () => {
      const Test = styled.div<TestProps>`
        width: ${value("size")};
      `;
      const { getByText } = setup(<Test size="4rem">test</Test>);
      expect(getByText("test")).toHaveStyleRule("width", "4rem");
    });
  });

  describe("'swap' matcher", () => {
    const Test = styled.div<TestProps>`
      color: ${swap("enabled", "green", "red")};
    `;

    it("should render the second param when the given prop is true", () => {
      const { getByText } = setup(<Test enabled>test</Test>);
      expect(getByText("test")).toHaveStyleRule("color", "green");
    });

    it("should render the second param when the given prop is false", () => {
      const { getByText } = setup(<Test>test</Test>);
      expect(getByText("test")).toHaveStyleRule("color", "red");
    });
  });

  describe("'choose' matcher", () => {
    it("should render the matching option for the given prop", () => {
      const sizes = {
        small: "10px",
        medium: "20px",
        large: "30px"
      };
      const Test = styled.div<TestProps>`
        width: ${choose("size", sizes)};
      `;
      const { getByText, rerender } = setup(<Test size="small">test</Test>);

      expect(getByText("test")).toHaveStyleRule("width", "10px");
      rerender(<Test size="medium">test</Test>);
      expect(getByText("test")).toHaveStyleRule("width", "20px");
      rerender(<Test size="large">test</Test>);
      expect(getByText("test")).toHaveStyleRule("width", "30px");
    });
  });

  describe("'over' matcher", () => {
    const Test = styled.div<TestProps>`
      ${over("amount", 10)`color: green`};
    `;

    it("should render the given CSS when the prop is greater than the given number", () => {
      const { getByText } = setup(<Test amount={11}>test</Test>);
      expect(getByText("test")).toHaveStyleRule("color", "green");
    });

    it("should  not render the given CSS when the prop is less than the given number", () => {
      const { getByText } = setup(<Test amount={9}>test</Test>);
      expect(getByText("test")).not.toHaveStyleRule("color");
    });
  });

  describe("'under' matcher", () => {
    const Test = styled.div<TestProps>`
      ${under("amount", 10)`color: green`};
    `;

    it("should render the given CSS when the prop is less than the given number", () => {
      const { getByText } = setup(<Test amount={9}>test</Test>);
      expect(getByText("test")).toHaveStyleRule("color", "green");
    });

    it("should  not render the given CSS when the prop is greater than the given number", () => {
      const { getByText } = setup(<Test amount={10}>test</Test>);
      expect(getByText("test")).not.toHaveStyleRule("color");
    });
  });

  describe("'minWidth' media query", () => {
    it("renders a min-width media query with the given CSS", () => {
      const Test = styled.div<TestProps>`
        ${minWidth(420)`display: flex`};
      `;
      const { getByText } = setup(<Test>test</Test>);

      expect(getByText("test")).toHaveStyleRule("display", "flex", {
        media: "only screen and (min-width: 420px)"
      });
    });
  });

  describe("'maxWidth' media query", () => {
    it("renders a max-width media query with the given CSS", () => {
      const Test = styled.div<TestProps>`
        ${maxWidth(420)`display: flex`};
      `;
      const { getByText } = setup(<Test>test</Test>);

      expect(getByText("test")).toHaveStyleRule("display", "flex", {
        media: "only screen and (max-width: 420px)"
      });
    });
  });

  describe("'minHeight' media query", () => {
    it("renders a min-height media query with the given CSS", () => {
      const Test = styled.div<TestProps>`
        ${minHeight(420)`display: flex`};
      `;
      const { getByText } = setup(<Test>test</Test>);

      expect(getByText("test")).toHaveStyleRule("display", "flex", {
        media: "only screen and (min-height: 420px)"
      });
    });
  });

  describe("'maxHeight' media query", () => {
    it("renders a max-height media query with the given CSS", () => {
      const Test = styled.div<TestProps>`
        ${maxHeight(420)`display: flex`};
      `;
      const { getByText } = setup(<Test>test</Test>);

      expect(getByText("test")).toHaveStyleRule("display", "flex", {
        media: "only screen and (max-height: 420px)"
      });
    });
  });

  describe("'rem' mixin", () => {
    it("calculates rem values", () => {
      expect(rem(16)).toBe("1rem");
      expect(rem(4)).toBe("0.25rem");
      expect(rem(16, 8)).toBe("2rem");
      expect(rem(16, 32)).toBe("0.5rem");
    });
  });

  describe("'opacify' mixin", () => {
    it("correctly adjusts an rgb value", () => {
      expect(opacify("rgb(255,255,255)", 0.2)).toBe("rgba(255,255,255,1)");
    });

    it("correctly adjusts an rgba value", () => {
      expect(opacify("rgb(255,255,255,0.5)", 0.2)).toBe(
        "rgba(255,255,255,0.7)"
      );
    });

    it("correctly adjusts an hex value", () => {
      expect(opacify("#FFFFFF", 0.2)).toBe("rgba(255,255,255,1)");
    });
  });

  describe("'transparentize' mixin", () => {
    it("correctly adjusts an rgb value", () => {
      expect(transparentize("rgb(255,255,255)", 0.2)).toBe(
        "rgba(255,255,255,0.8)"
      );
    });

    it("correctly adjusts an rgba value", () => {
      expect(transparentize("rgb(255,255,255,0.5)", 0.2)).toBe(
        "rgba(255,255,255,0.3)"
      );
    });

    it("correctly adjusts an hex value", () => {
      expect(transparentize("#FFFFFF", 0.2)).toBe("rgba(255,255,255,0.8)");
    });
  });

  describe("'flex' mixin", () => {
    it("sets the given flexbox CSS attributes", () => {
      const Test = styled.div<TestProps>`
        ${flex("column-reverse", "center", "flex-end")};
      `;
      const { getByText } = setup(<Test>test</Test>);
      const test = getByText("test");

      expect(test).toHaveStyleRule("display", "flex");
      expect(test).toHaveStyleRule("flex-direction", "column-reverse");
      expect(test).toHaveStyleRule("align-items", "center");
      expect(test).toHaveStyleRule("justify-content", "flex-end");
    });
  });

  describe("'grid' mixin", () => {
    it("sets the given grid CSS attributes", () => {
      const Test = styled.div<TestProps>`
        ${grid(4, 16, 24)};
      `;
      const { getByText } = setup(<Test>test</Test>);
      const test = getByText("test");

      expect(test).toHaveStyleRule("display", "grid");
      expect(test).toHaveStyleRule("grid-template-columns", "repeat(4,1fr)");
      expect(test).toHaveStyleRule("grid-column-gap", "1rem");
      expect(test).toHaveStyleRule("grid-row-gap", "1.5rem");
    });

    it("sets the row gap equal to the column gap when row gap is not given", () => {
      const Test = styled.div<TestProps>`
        ${grid(2, 16)};
      `;
      const { getByText } = setup(<Test>test</Test>);

      expect(getByText("test")).toHaveStyleRule("grid-row-gap", "1rem");
    });
  });
});
