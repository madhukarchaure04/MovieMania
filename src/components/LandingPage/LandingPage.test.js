import React from "react";
import LandingPage from "./LandingPage";
import { shallow } from "enzyme";

it("renders Landing Page without crashing", () => {
  shallow(<LandingPage />);
});

it("renders Application Title", () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper).toIncludeText("Movies Mania");
});
