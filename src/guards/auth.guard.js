import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"
import { PublicRoutes } from "../routes/routes"

export const AuthGuard = () => {
  const userState = useSelector(store => store.user)
  return userState.nombre ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  )
}

export default AuthGuard