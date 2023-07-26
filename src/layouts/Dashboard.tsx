import { Link, Outlet } from "react-router-dom"
import celesLogo from "assets/images/celes-logo.png"
import { MenuIcon, TagIcon, UserIcon } from "assets/icons"

export const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="bg-white h-screen p-8 w-80 flex flex-col items-center space-y-7">
        <img src={celesLogo} className="w-52 h-16" />

        <div className="h-px bg-neutral-200 w-full" />

        <div className="w-full flex flex-col space-y-4">
          <p className="text-left w-full font-bold ml-3">MENU</p>

          <Link
            to="/"
            className="w-full p-3 rounded-md text-primary font-semibold flex space-x-3 transition-all duration-200 hover:bg-neutral-200"
          >
            <TagIcon /> <span>Products</span>
          </Link>
        </div>
      </div>
      <div className="w-full overflow-y-scroll h-screen">
        <div className="px-10 py-4 flex justify-between">
          <button className="bg-neutral-300 rounded-md p-3 hover:bg-neutral-400 text-primary transition-all duration-200">
            <MenuIcon />
          </button>

          <div className="bg-neutral-300 flex justify-center items-center p-3 rounded-full relative">
            <UserIcon />

            <span className="h-2 w-2 bg-green-500 rounded-full absolute right-0 bottom-2" />
          </div>
        </div>
        <div className="p-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
