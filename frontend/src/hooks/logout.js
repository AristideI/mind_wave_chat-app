import toast from "react-hot-toast";
import { apiUrl } from "../../api";

export async function logout() {
  try {
    await fetch(`${apiUrl}/api/auth/logout`, {
      method: "POST",
    });
  } catch (error) {
    toast.error("System Error, Try again");
    return;
  }
}
