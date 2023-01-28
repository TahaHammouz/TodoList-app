import { render, fireEvent, screen } from "@testing-library/react";
import {
  Header,
  SearchTodo,
  AddToDo,
  ToDoList,
  Task,
  ToDoFooter,
} from "./components/index";
import preview from "jest-preview";

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
  it("Should update the search query state on input change", () => {
    const { getByPlaceholderText } = render(<SearchTodo />);
    const input = getByPlaceholderText("Search Your To-Do");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
  it("Should call the onSearchTodo prop function when the form is submitted", () => {
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

describe("AddTodo", () => {
  it("Should renders input and submit button ", () => {
    const { getByPlaceholderText, getByText } = render(<AddToDo />);
    expect(getByPlaceholderText("Eg. Go To GYM !!")).toBeInTheDocument();
    expect(getByText("Create")).toBeInTheDocument();
  });

  it("Should calls onAddTodo when form is submitted", () => {
    const onAddTodo = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <AddToDo onAddTodo={onAddTodo} />
    );

    const input = getByPlaceholderText("Eg. Go To GYM !!");
    const button = getByText("Create");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);

    expect(onAddTodo).toHaveBeenCalledWith("Test Todo");
  });
});
describe("Todo List", () => {
  it("Should renders a list of to-do items", () => {
    const todos = [
      {
        id: 1,
        text: "test",
        done: false,
      },
      {
        id: 2,
        text: "test2",
        done: false,
      },
    ];
    const { getByText } = render(<ToDoList todos={todos} />);
    expect(getByText("test")).toBeInTheDocument();
    expect(getByText("test2")).toBeInTheDocument();
  });
});
describe("Task component", () => {
  let wrapper;
  const todo = { id: 1, text: "Test Todo", done: false };
  const onToggleTodo = jest.fn();
  const deleteTodo = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <Task todo={todo} onToggleTodo={onToggleTodo} delete={deleteTodo} />
    );
  });

  it("Should render the task text", () => {
    const taskText = wrapper.getByText(todo.text);
    expect(taskText).toBeInTheDocument();
  });

  it("Should call the onToggleTodo function when checkbox is clicked", () => {
    const checkbox = wrapper.getByTestId("checkbox-todo");
    fireEvent.click(checkbox);
    expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
  });
  it("Should call the delete function when the delete button is clicked", () => {
    const deleteButton = wrapper.getByTestId("delete-todo");
    fireEvent.click(deleteButton);
    expect(deleteTodo).toHaveBeenCalledWith(todo.id);
  });
  it('Should have the class "done" when the todo is done', () => {
    wrapper.rerender(
      <Task
        key={todo.id}
        todo={{ ...todo, done: true }}
        onToggleTodo={onToggleTodo}
        delete={deleteTodo}
      />
    );
    expect(wrapper.getByTestId("task-text").style.textDecoration).toBe(
      "line-through"
    );
  });
});
describe("ToDoFooter", () => {
  const todos = [
    { id: 1, text: "Task 1", done: true },
    { id: 2, text: "Task 2", done: false },
    { id: 3, text: "Task 3", done: true },
  ];

  describe("ToDoFooter component", () => {
    it("Should display the number of done todos", () => {
      const { getByText } = render(<ToDoFooter todos={todos} />);
      const doneTodos = getByText("2 of 3");
      expect(doneTodos).toBeInTheDocument();
    });

    it("Should render the correct number of remaining tasks", () => {
      const { getByText } = render(<ToDoFooter todos={todos} />);
      const remainingTasks = getByText("1");
      expect(remainingTasks).toBeInTheDocument();
    });
    test("Should render the correct number of created tasks", () => {
      const { getByText } = render(<ToDoFooter todos={todos} />);
      const totalCount = getByText("3");
      expect(totalCount).toBeInTheDocument();
    });
  });
});
