import { useReactTable, getCoreRowModel, ColumnDef } from "@tanstack/react-table"
import { useEffect, useState } from "react"
import { TableHeader } from "./TableHeader"
import { TableBody } from "./TableBody"
import { Product } from "interfaces"
import { SpinIcon } from "assets/icons"
import { ParsedLink } from "helpers"
import { Button } from "components/Button"

interface Props {
  columns: ColumnDef<Product, any>[]
  data: Product[]
  isLoading: boolean
  onChangePage: (direcction: keyof ParsedLink) => void
  canGoPrev: boolean
  canGoNext: boolean
  limitPerPage: number
  onLimitPerPageChange: (newLimit: number) => void
}

export const Table = ({
  columns,
  data,
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

  return (
    <>
      {isLoading ? (
        <div className=" bg-white rounded-md p-3 flex justify-center w-full">
          <div className="flex flex-col space-y-3 justify-center items-center p-3">
            <SpinIcon className="animate-spin" />
            <span>Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div>
            {/* <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 font-lg shadow border border-block"
              placeholder="Search all columns..."
            /> */}
          </div>
          <div className="h-2" />
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
      )}
    </>
  )
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />
}
