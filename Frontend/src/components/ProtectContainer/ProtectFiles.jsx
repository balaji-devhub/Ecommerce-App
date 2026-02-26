import { Navigate, Route } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectRoute = ({ children }) => {
  const userCheck = Cookies.get('jwt_token')

  if (!userCheck) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectRoute
