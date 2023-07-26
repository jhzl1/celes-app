import { Link, Outlet } from "react-router-dom"
import celesLogo from "assets/images/celes-logo.png"
import { MenuIcon, TagIcon, UserIcon } from "assets/icons"
import { useState } from "react"
import clsx from "clsx"

export const DashboardLayout = () => {
  const [showNavbar, setShowNavbar] = useState(true)

  return (
    <div className="flex relative">
      <div
        className={clsx(
          "bg-white h-screen p-8 w-80 flex flex-col items-center space-y-7 transition-all duration-200 absolute",
          {
            "-left-96": !showNavbar,
            "left-0": showNavbar,
          },
        )}
      >
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
      <div
        className={clsx("w-full overflow-y-scroll h-screen transition-all duration-200", {
          "ml-80": showNavbar,
          "ml-0": !showNavbar,
        })}
      >
        <div className="px-10 py-4 flex justify-between">
          <button
            className="bg-neutral-300 rounded-md p-3 hover:bg-neutral-400 text-primary transition-all duration-200"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <MenuIcon />
          </button>

          <div className="bg-neutral-300 flex justify-center items-center p-3 rounded-full relative">
            <UserIcon />

            <span className="h-2 w-2 bg-green-500 rounded-full absolute right-0 bottom-1" />
          </div>
        </div>
        <div className="p-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
