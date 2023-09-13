import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./pages/Login/Login";

test("renders login button", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
