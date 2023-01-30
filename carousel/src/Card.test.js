import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("works when you click on the right arrow", () => {
    render(<Card/>)
});

test("matches snapshot", () => {
    const { asFragment } = render(<Card/> );
    expect(asFragment()).toMatchSnapshot();
  });