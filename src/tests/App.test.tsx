import { render, screen } from "@testing-library/react"
import { App } from "App"

describe("App", () => {
  it("renders menu", () => {
    render(<App />)
    const headline = screen.getByText(/MENU/i)
    expect(headline).toBeInTheDocument()
  })
})
