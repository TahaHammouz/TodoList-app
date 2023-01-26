import { render} from "@testing-library/react";
import { Header} from "./components/index";


describe("Header Component", () => {
  it("Should render the Header component", () => {
    const { getByTestId } = render(<Header />);
    const headerElement = getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });
  it("Should renders the svg element with the correct attributes", () => {
    const { getByTestId } = render(<Header />);
    const svgElement = getByTestId("header-svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", "126");
    expect(svgElement).toHaveAttribute("height", "48");
    expect(svgElement).toHaveAttribute("viewBox", "0 0 126 48");
    expect(svgElement).toHaveAttribute("fill", "none");
    expect(svgElement).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });
});
