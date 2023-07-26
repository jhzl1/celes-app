import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="bg-white h-screen p-4">leftbar</div>
      <div className="w-full overflow-y-scroll h-screen">
        <div className="px-10 py-4">nabvar</div>
        <div className="p-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
