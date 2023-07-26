import { fireEvent, render, screen } from "@testing-library/react"
import { Error404 } from "pages"
import { MemoryRouter } from "react-router-dom"
import { vi } from "vitest"

const mockedUseNavigate = vi.fn()

vi.mock("react-router-dom", async () => {
  const mod = (await vi.importActual("react-router-dom")) as any
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  }
})

describe("test at Error404 Page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Error404 />
      </MemoryRouter>,
    )
  })

  it("should render Page not found page", () => {
    const titlePage = screen.getByText(/Page not found/i)

    expect(titlePage).toBeInTheDocument()
  })

  it("should call navigate function and return back", () => {
    const goBackButton = screen.getByText(/go back/i)

    fireEvent.click(goBackButton)

    expect(mockedUseNavigate).toBeCalled()
    expect(mockedUseNavigate).toBeCalledTimes(1)
    expect(mockedUseNavigate).toBeCalledWith(-1)
  })
})
