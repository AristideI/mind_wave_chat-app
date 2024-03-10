import { useEffect, useState } from "react";
import { apiUrl } from "../../api";
import toast from "react-hot-toast";
import { getAuthToken } from "./getAuthToken";

export default function useGetConversation() {
  const [isLoading, setIsLoadingState] = useState(false);
  const [conversations, setConversations] = useState([]);
  const token = getAuthToken();

  useEffect(() => {
    async function getConversations() {
      setIsLoadingState(true);
      try {
        const response = await fetch(`${apiUrl}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const users = await response.json();

        if (users.error) {
          throw new Error(users.error);
        }

        setConversations(users);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoadingState(false);
      }
    }

    getConversations();
  }, [token]);

  return { isLoading, conversations };
}
