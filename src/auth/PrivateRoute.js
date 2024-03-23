import { Route, Navigate, useContext } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = Boolean(user);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? (
        <Element />
      ) : (
        <Navigate to="/sign-in" replace />
      )}
    />
  );
};

export default PrivateRoute;