import { useState } from "react";
import { apiUrl } from "../../api";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  async function logout() {
    setIsLoading(true);
    try {
      const res = await fetch(`${apiUrl}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("currentUser");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, logout };
}
