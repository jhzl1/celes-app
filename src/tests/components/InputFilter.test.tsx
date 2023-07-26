import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { InputFilter } from "components/InputFilter"
import { vi } from "vitest"

describe("InputFilter", () => {
  it("renders without errors", () => {
    render(<InputFilter value="" onChange={() => {}} />)
    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toBeInTheDocument()
  })

  it("displays the initial value correctly", () => {
    render(<InputFilter value="Hello" onChange={() => {}} />)
    const inputElement = screen.getByDisplayValue("Hello")
    expect(inputElement).toBeInTheDocument()
  })

  it("calls the onChange callback when input value changes", async () => {
    const handleChange = vi.fn()
    render(<InputFilter value="" onChange={handleChange} />)
    const inputElement = screen.getByRole("textbox")
    fireEvent.change(inputElement, { target: { value: "New value" } })
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith("New value")
    })
  })

  it("clears the input value when clear button is clicked", () => {
    render(<InputFilter value="Hello" onChange={() => {}} />)
    const clearButton = screen.getByRole("button")
    fireEvent.click(clearButton)
    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toHaveValue("")
  })
})
