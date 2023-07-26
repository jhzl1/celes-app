import { DashboardLayout } from "layouts"
import { Products, Error404 } from "pages"
import { AppProvider } from "providers"
import { Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Products />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppProvider>
    </>
  )
}
