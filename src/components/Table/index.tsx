import { useReactTable, getCoreRowModel, ColumnDef } from "@tanstack/react-table"
import { TableHeader } from "./TableHeader"
import { TableBody } from "./TableBody"
import { Product } from "interfaces"
import { SpinIcon } from "assets/icons"
import { ParsedLink } from "helpers"
import { Button } from "components/Button"

interface Props {
  columns: ColumnDef<Product, any>[]
  data: Product[] | undefined
  isLoading: boolean
  onChangePage: (direcction: keyof ParsedLink) => void
  canGoPrev: boolean
  canGoNext: boolean
  limitPerPage: number
  onLimitPerPageChange: (newLimit: number) => void
}

export const Table = ({
  columns,
  data = [],
  isLoading,
  onChangePage,
  canGoNext,
  canGoPrev,
  limitPerPage,
  onLimitPerPageChange,
}: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (isLoading)
    return (
      <div className="bg-white rounded-md p-3 flex justify-center w-full">
        <div className="flex flex-col space-y-3 justify-center items-center p-3">
          <SpinIcon className="animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    )

  return (
    <>
      {!!data && data.length > 0 ? (
        <>
          <div className="rounded-md border shadow overflow-hidden">
            <table className="table-fixed w-full">
              <TableHeader {...table} />

              <TableBody {...table} />
            </table>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Button onClick={() => onChangePage("previous")} disabled={!canGoPrev}>
              {"< Previous"}
            </Button>
            <Button onClick={() => onChangePage("next")} disabled={!canGoNext}>
              {"Next >"}
            </Button>

            <select
              value={limitPerPage}
              onChange={(e) => {
                onLimitPerPageChange(Number(e.target.value))
              }}
              className="p-2 rounded-md"
            >
              {[5, 10, 15, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <div className="w-full bg-white p-3 rounded-md">
          <p className="text-center">No data</p>
        </div>
      )}
    </>
  )
}
