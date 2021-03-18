import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/start/i);
  expect(linkElement).toBeInTheDocument();
});

/*
Itt szeretnék további teszteket

1. Az app.js -ben lévő funciók tesztelése (pl. setTxt)

2. ha modosul az "inp" value (bele ír a user)
akkor változnia kell a "txt1" tartalmának is. 
*/
