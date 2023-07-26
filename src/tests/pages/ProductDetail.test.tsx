import { act, fireEvent, render, screen } from "@testing-library/react"
import { ProductDetail } from "pages"
import { QueryClient, QueryClientProvider } from "react-query"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { getProductDetail } from "services/getProductDetail"
import { productMockedResponde } from "tests/productMockedResponse"
import { MockedFunction, vi } from "vitest"

const mockedUseNavigate = vi.fn()
const mockedGetProduct = getProductDetail as MockedFunction<typeof getProductDetail>

vi.mock("services/getProductDetail")

vi.mock("react-router-dom", async () => {
  const mod = (await vi.importActual("react-router-dom")) as any
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  }
})

describe("test at ProductDetail page", () => {
  const queryClient = new QueryClient()

  beforeEach(async () => {
    mockedGetProduct.mockResolvedValue(productMockedResponde as never)

    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={["/productDetail/1"]}>
            <Routes>
              <Route path="/productDetail/:productId" element={<ProductDetail />} />
            </Routes>
          </MemoryRouter>
        </QueryClientProvider>,
      )
    })
  })

  it("should call navigate function and return back", () => {
    const goBackButton = screen.getByTestId("back-btn")
    fireEvent.click(goBackButton)

    expect(mockedUseNavigate).toBeCalled()
    expect(mockedUseNavigate).toBeCalledTimes(1)
    expect(mockedUseNavigate).toBeCalledWith(-1)
  })

  it("should render the product id", () => {
    const textProductId = screen.getByText(/8139883446580/i)
    expect(textProductId).toBeInTheDocument()
  })
})
