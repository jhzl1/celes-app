import { createColumnHelper } from "@tanstack/react-table"
import { Table } from "components/Table"
import { sliceProductName } from "helpers"
import { Product } from "interfaces"
import { useQuery } from "react-query"
import { getProducts } from "services"

export const Dashboard = () => {
  const { data: products = [], error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  })

  const columnHelper = createColumnHelper<Product>()

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      size: 80,
    }),
    columnHelper.accessor("title", {
      header: "Name",
      size: 250,
      cell: ({ getValue }) => <span>{sliceProductName(getValue(), 40)}</span>,
    }),
    columnHelper.accessor("vendor", {
      header: "Vendor",
    }),
    columnHelper.accessor("product_type", {
      header: "Product type",
    }),
    columnHelper.accessor("tags", {
      header: "Tags",
      size: 300,

      cell: ({ getValue }) => {
        const values = getValue().split(",")

        return (
          <p className="flex space-x-1">
            {!getValue()
              ? "-"
              : values.map((value) => (
                  <span className="bg-neutral-300 text-sm p-1 rounded-sm font-semibold" key={value}>
                    {value.trim()}
                  </span>
                ))}
          </p>
        )
      },
    }),
  ]

  return (
    <div className="flex flex-col space-y-5">
      <h2 className="font-bold text-2xl">Products</h2>

      {!!error && (
        <div className="bg-red-200 p-3 rounded-md text-red-600">
          <span>An error occurred while fetching the data. Try it again</span>
        </div>
      )}

      <Table columns={columns} data={products} />
    </div>
  )
}
