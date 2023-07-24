import { useNavigate } from "react-router-dom"
import clsx from "clsx"
import celesLogo from "assets/images/celes-logo.png"
import { Button } from "components/Button"

export const Error404 = () => {
  const navigate = useNavigate()

  const onClick = () => navigate(-1)

  return (
    <div className={clsx("h-screen", "lg:flex lg:justify-center lg:items-center lg:pt-0", "pt-10")}>
      <div
        className={clsx(
          "bg-white rounded-lg flex flex-col justify-center items-center",
          "lg:w-1/4 lg:p-10 lg:h-auto",
          "p-5 h-full",
        )}
      >
        <div className="flex flex-col justify-center items-center space-y-5">
          <img src={celesLogo} className="w-32 h-10 mb-7" />

          <h1 className="text-3xl lg:text-4xl font-bold text-center">Page not found</h1>

          <span className="text-center">Sorry, the page you are looking for doesn't exist</span>
        </div>

        <Button className="w-full mt-auto lg:mt-5" variant="outline" onClick={onClick}>
          Go back
        </Button>
      </div>
    </div>
  )
}
