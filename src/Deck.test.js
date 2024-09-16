import React from "react";
import { render } from "@testing-library/react";
import Deck from "./Deck";

it("renders without crashing", function() {
    render(<Deck />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<Deck />);
    expect(asFragment()).toMatchSnapshot();
});