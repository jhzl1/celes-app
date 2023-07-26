import { Table, flexRender } from "@tanstack/react-table"

type Props = Table<any>

export const TableBody = ({ getRowModel }: Props) => {
  return (
    <tbody className="bg-white">
      {getRowModel().rows.map((row) => {
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id} className="py-3 px-4 border-b border-b-neutral-300">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}
