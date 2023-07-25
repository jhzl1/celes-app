import { GoogleIcon } from "assets/icons"
import celesLogo from "assets/images/celes-logo.png"
import { Button } from "components/Button"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()

  const onLogin = () => {
    navigate("/")
  }

  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <img src={celesLogo} className="w-64 h-20 m-auto" />

      <div className="h-full bg-gradient-to-b from-blue-600 to-blue-800 rounded-s-3xl flex justify-center items-center">
        <div className="flex flex-col bg-white rounded-lg lg:p-10 space-y-4 w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">Welcome back!</h1>
          <span className="text-center">Please, log in or create your account.</span>
          <Button onClick={onLogin}>
            <p className="flex justify-center space-x-3">
              <GoogleIcon />
              <span>Continue with Google</span>
            </p>
          </Button>
        </div>
      </div>
    </div>
  )
}
