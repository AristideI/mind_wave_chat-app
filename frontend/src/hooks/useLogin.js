import { useState } from "react";
import toast from "react-hot-toast";
import { apiUrl } from "../../api";
import { useAuthContext } from "../../context/AuthContext";

export default function useLogin() {
  const { setAuthUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  async function login({ userName, password }) {
    if (!validateInputs(userName, password)) {
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      });
      const currentUser = await response.json();
      if (currentUser.error) {
        throw new Error(currentUser.error);
      }
      setIsLoading(false);
      localStorage.setItem("currentUser", JSON.stringify(currentUser.response));
      localStorage.setItem(
        "chatToken",
        JSON.stringify(currentUser.response.token)
      );
      setAuthUser(currentUser);

      return currentUser;
    } catch (error) {
      toast.error("System Error, Try again");
      setIsLoading(false);
    }
  }
  return { isLoading, login };
}

function validateInputs(userName, password) {
  if (!userName || !password) {
    toast.error("Fill all inputs");
    return false;
  }

  if (userName !== userName.split(" ").join("")) {
    toast.error("No spaces in Username");
    return false;
  }

  return true;
}
