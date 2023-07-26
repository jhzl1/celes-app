import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "components/Button"
import { vi } from "vitest"

describe("test in Button component", () => {
  it("renders without errors", () => {
    render(<Button>Hello</Button>)
    expect(screen.queryByText("Hello")).toBeInTheDocument()
  })

  it("displays children when not loading", () => {
    render(<Button isLoading={false}>Click me</Button>)
    expect(screen.queryByText("Click me")).toBeInTheDocument()
  })

  it("displays loading spinner when isLoading is true", () => {
    render(<Button isLoading={true}>Loading</Button>)
    expect(screen.queryByTestId("loading-spinner")).toBeInTheDocument()
  })

  it("calls onClick handler when clicked and not loading", () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    fireEvent.click(screen.getByText("Click me"))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("does not call onClick handler when clicked and isLoading is true", () => {
    const onClick = vi.fn()
    render(
      <Button isLoading={true} onClick={onClick}>
        Click me
      </Button>,
    )
    const button = screen.queryByTestId("loading-spinner")
    if (button) fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })
})
