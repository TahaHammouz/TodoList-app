import { render, fireEvent } from "@testing-library/react";
import { Header, SearchTodo } from "./components/index";

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

describe("SearchTodo", () => {
  it("should update the search query state on input change", () => {
    const { getByPlaceholderText } = render(<SearchTodo />);
    const input = getByPlaceholderText("Search Your To-Do");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
  it("should call the onSearchTodo prop function when the form is submitted", () => {
    const onSearchTodo = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchTodo onSearchTodo={onSearchTodo} />
    );
    const input = getByPlaceholderText("Search Your To-Do");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.keyUp(input.form, { key: "Enter", code: 13 });
    expect(onSearchTodo).toHaveBeenCalledWith("test");
  });
});
