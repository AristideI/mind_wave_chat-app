import { useState } from "react";
import toast from "react-hot-toast";
import { apiUrl } from "../../api";

export default function useSignup() {
  const [isLoading, setIsLoading] = useState(false);

  async function signup({ fullName, userName, password, gender }) {
    if (!validateInputs(fullName, userName, password, gender)) {
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword: password,
          gender,
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
  return { isLoading, signup };
}

function validateInputs(fullName, userName, password, gender) {
  if (!fullName || !userName || !password || !gender) {
    toast.error("Fill all inputs");
    return false;
  }

  if (userName !== userName.split(" ").join("")) {
    toast.error("No spaces in Username");
    return false;
  }

  return true;
}
