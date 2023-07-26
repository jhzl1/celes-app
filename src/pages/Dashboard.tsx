import { createColumnHelper } from "@tanstack/react-table"
import { Table } from "components/Table"
import { formatDate, sliceProductName } from "helpers"
import { Product } from "interfaces"
import { useQuery } from "react-query"
import { getProducts } from "services"

export const Dashboard = () => {
  const {
    data: products = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  })

  const columnHelper = createColumnHelper<Product>()

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      size: 100,
    }),
    columnHelper.accessor("title", {
      header: "Name",
      size: 300,
      cell: ({ getValue }) => <span>{sliceProductName(getValue(), 40)}</span>,
    }),
    columnHelper.accessor("vendor", {
      header: "Vendor",
    }),
    columnHelper.accessor("product_type", {
      header: "Product type",
    }),
    columnHelper.accessor("variants", {
      header: () => <p className="text-center">In stock</p>,
      size: 100,
      cell: ({ getValue }) => {
        const quantity = getValue()[0].inventory_quantity

        return <p className="text-center">{quantity}</p>
      },
    }),
    columnHelper.accessor("created_at", {
      header: "Created",
      cell: ({ getValue }) => <span>{formatDate(getValue())}</span>,
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

      <Table columns={columns} data={products} isLoading={isLoading} />
    </div>
  )
}
