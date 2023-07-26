import { DashboardLayout } from "layouts"
import { Products, Error404, ProductDetail } from "pages"
import { AppProvider } from "providers"
import { Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Products />} />
            <Route path="/productDetail/:productId" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppProvider>
    </>
  )
}
