import { useEffect } from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store";

export default function ProtectedRoute() {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) {
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

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
