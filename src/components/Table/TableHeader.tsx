import { Table, flexRender } from "@tanstack/react-table"
import { Product } from "interfaces"

type Props = Table<Product>

export const TableHeader = ({ getHeaderGroups }: Props) => {
  return (
    <thead>
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className="bg-[#f7f9fc] py-3 px-4 text-left border-b border-b-neutral-300"
                style={{
                  width: header.getSize() !== 0 ? header.getSize() : 150,
                }}
              >
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}
