import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Header from "../Header";

test("should have no violations", async () => {
  const { container } = render(<Header>Hello</Header>);
  expect(await axe(container)).toHaveNoViolations();
});
