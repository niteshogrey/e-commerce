import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children, role}) => {
    const { user, token } = useSelector((state) => state.auth);
  if (!user && !token) {
    return <Navigate to="/login" />
  }

  if (!role.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children
}

export default ProtectedRoute