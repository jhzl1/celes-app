import { BackIcon, SpinIcon } from "assets/icons"
import { formatDate } from "helpers"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { getProductDetail } from "services/getProductDetail"

export const ProductDetail = () => {
  const { productId } = useParams<"productId">()

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    enabled: !!productId,
    queryKey: ["getProductDetail"],
    queryFn: () => getProductDetail(productId as string),
    keepPreviousData: false,
  })

  const navigate = useNavigate()
  const productImage = product?.image?.src

  return (
    <div className="space-y-4">
      <div className="flex space-x-5 items-center">
        <button
          className="bg-neutral-300 rounded-md p-2 hover:bg-neutral-400 text-primary transition-all duration-200"
          onClick={() => navigate(-1)}
          data-testid="back-btn"
        >
          <BackIcon />
        </button>
        <h1 className="font-bold text-2xl">Product detail</h1>
      </div>

      {!!error && (
        <div className="bg-red-200 p-3 rounded-md text-red-600">
          <span>An error occurred while fetching the data. Try it again</span>
        </div>
      )}

      <div className="bg-white rounded-md p-3 flex justify-center w-full">
        {isLoading && (
          <div className="flex flex-col space-y-3 justify-center items-center p-3">
            <SpinIcon className="animate-spin" />
            <span>Loading...</span>
          </div>
        )}

        {product && (
          <div className="grid lg:grid-cols-2 gap-4 w-full items-center">
            {productImage ? (
              <img src={product?.image?.src} className="w-[300px] h-[300px] place-self-center" />
            ) : (
              <span className="place-self-center">No image</span>
            )}

            <div className="space-y-3">
              <p>
                <strong>Name:</strong> {product?.title}
              </p>
              <p>
                <strong>ID:</strong> {product?.id}
              </p>

              <p>
                <strong>Description:</strong> {product?.body_html}
              </p>
              <p>
                <strong>Vendor:</strong> {product?.vendor}
              </p>
              <p>
                <strong>Last update:</strong> {formatDate(product?.updated_at || "")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
