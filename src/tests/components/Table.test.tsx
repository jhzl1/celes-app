import { createColumnHelper } from "@tanstack/react-table"
import { fireEvent, render, screen } from "@testing-library/react"
import { Table } from "components/Table"
import { vi } from "vitest"

describe("Test in table component", () => {
  const mockedOnChangePage = vi.fn()
  const mockedOnLimitPerPageChange = vi.fn()

  const columnHelper = createColumnHelper<{ test: string }>()

  const columns = [
    columnHelper.accessor("test", {
      header: "test",
      size: 70,
    }),
  ]
  const commonProps = {
    onChangePage: mockedOnChangePage,
    canGoPrev: true,
    canGoNext: true,
    limitPerPage: 10,
    onLimitPerPageChange: mockedOnLimitPerPageChange,
  }

  it("should render loading indicator when isLoading the data", () => {
    render(<Table columns={columns} data={undefined} isLoading {...commonProps} />)

    const loadingIndicator = screen.getByTestId("loading-indicator")
    expect(loadingIndicator).toBeDefined()
  })

  it("should render data", () => {
    render(
      <Table columns={columns} data={[{ test: "test text" }]} isLoading={false} {...commonProps} />,
    )

    const textInTable = screen.getByText(/test text/i)
    expect(textInTable).toBeInTheDocument()
  })

  it("should render data", () => {
    render(
      <Table columns={columns} data={[{ test: "test text" }]} isLoading={false} {...commonProps} />,
    )

    const textInTable = screen.getByText(/test text/i)
    expect(textInTable).toBeInTheDocument()
  })

  it("should disable back button if canGoBack is false", () => {
    render(
      <Table
        columns={columns}
        data={[{ test: "test text" }]}
        isLoading={false}
        {...commonProps}
        canGoPrev={false}
      />,
    )

    const prevButton = screen.getByTestId("prev-button")

    expect(prevButton).toBeDisabled()
  })

  it("should call onChangePage with valid param", () => {
    render(
      <Table columns={columns} data={[{ test: "test text" }]} isLoading={false} {...commonProps} />,
    )

    const prevButton = screen.getByTestId("prev-button")

    fireEvent.click(prevButton)
    expect(mockedOnChangePage).toBeCalled()
    expect(mockedOnChangePage).toBeCalledTimes(1)
    expect(mockedOnChangePage).toBeCalledWith("previous")

    const nextButton = screen.getByTestId("next-button")

    fireEvent.click(nextButton)
    expect(mockedOnChangePage).toBeCalled()
    expect(mockedOnChangePage).toBeCalledTimes(2)
    expect(mockedOnChangePage).toBeCalledWith("next")
  })
})
