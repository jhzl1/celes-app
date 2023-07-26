import { createColumnHelper } from "@tanstack/react-table"
import { Button } from "components/Button"
import { Table } from "components/Table"
import { ParsedLink } from "helpers"
import { usePagination } from "hooks"
import { Product } from "interfaces"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { getProducts } from "services"

export const Dashboard = () => {
  const { pageInfos, changePageInfos, handleNextPage, activePage } = usePagination()

  const navigate = useNavigate()

  const {
    data: productsResp,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getProducts", activePage],
    queryFn: () => getProducts({ page_info: activePage }),
    refetchOnWindowFocus: false,
    onSuccess({ pageInfos }) {
      changePageInfos(pageInfos as ParsedLink)
    },
  })

  const columnHelper = createColumnHelper<Product>()

  const columns = [
    columnHelper.accessor("image", {
      header: "",
      size: 40,
      cell: ({ getValue }) =>
        getValue()?.src ? (
          <img src={getValue()?.src} className="w-16 h-16 rounded-md" />
        ) : (
          <span className="w-16 h-16 rounded-md flex items-center text-center bg-neutral-400 text-white">
            No image
          </span>
        ),
    }),
    columnHelper.accessor("id", {
      header: "ID",
      size: 100,
    }),
    columnHelper.accessor("title", {
      header: "Name",
      size: 300,
    }),

    columnHelper.accessor("variants", {
      header: () => <p className="text-center">In stock</p>,
      cell: ({ getValue }) => {
        const quantity = getValue().reduce((acc, curr) => acc + curr.inventory_quantity, 0)

        return <p className="text-center">{quantity}</p>
      },
    }),
    columnHelper.display({
      header: "Actions",
      size: 100,
      cell: ({ row }) => (
        <Button variant="outline" onClick={() => navigate(`/productDetail/${row.original.id}`)}>
          More details
        </Button>
      ),
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

      <Table
        columns={columns}
        data={productsResp?.products || []}
        isLoading={isLoading}
        onChangePage={handleNextPage}
        canGoNext={!!pageInfos.next}
        canGoPrev={!!pageInfos.previous}
      />
    </div>
  )
}
