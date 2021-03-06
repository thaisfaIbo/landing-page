import React from "react";
import Button from "./";
import { render } from "@testing-library/react";
import ThemeWrapper from "../../../utils/test/themeWrapper";
import { size } from "atomic-design-types";

describe("Atom - Button", () => {
  test("smoke test", () => {
    const { getByText } = render(
      ThemeWrapper(<Button text="Button" onClick={() => {}} design="text" />)
    );
    expect(getByText(/Button/)).toBeInTheDocument();
  });

  test("should render disabled", () => {
    const { getByText } = render(
      ThemeWrapper(<Button text="Button" disabled onClick={() => {}} />)
    );
    expect(getByText(/Button/)).toBeDisabled();
  });

  describe("Sizes", () => {
    const cases: Array<[size, string]> = [
      ["small", "1rem"],
      ["normal", "1.8rem"],
      ["large", "3rem"],
    ];

    test.each(cases)(
      "should render size %p with correct styles",
      (size, fontSize) => {
        const { getByText } = render(
          ThemeWrapper(<Button text={size} size={size} onClick={() => {}} />)
        );
        expect(getByText(size)).toHaveStyle(`font-size: ${fontSize}`);
      }
    );
  });
});
