import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children, role}) => {
    const { user, token } = useSelector((state) => state.auth);
  if (!token) {
    return <Navigate to="/login" />
  }

  console.log(user.role);
  console.log(role);
  
  

  if (user && role && user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children
}

export default ProtectedRoute