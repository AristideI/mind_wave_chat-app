import { useState } from "react";
import toast from "react-hot-toast";
import { apiUrl } from "../../api";

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  async function login({ userName, password }) {
    if (!validateInputs(userName, password)) {
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
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
      setIsLoading(false);
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
