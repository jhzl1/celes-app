import { Dashboard, Error404, Login } from "pages"
import { AppProvider } from "providers"
import { Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppProvider>
    </>
  )
}
