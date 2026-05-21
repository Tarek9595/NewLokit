import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";
import { userLoginInfo } from "../../store";

export default function ProtectedRoute() {
  const { isLoggedIn } = userLoginInfo();

  const wasLoggedIn = useRef(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn && !wasLoggedIn.current) {
      toast.error("Please login first", {
        id: "auth-error",
        style: {
          borderRadius: "10px",
          background: " #212a2f",
          color: "#fff",
        },
      });
    }
  }, [isLoggedIn]);

  // eslint-disable-next-line react-hooks/refs
  if (!isLoggedIn && !wasLoggedIn.current) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
