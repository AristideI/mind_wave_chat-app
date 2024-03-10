import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { apiUrl } from "../../api";
import { getAuthToken } from "./getAuthToken";

export default function useGetMessages() {
  const token = getAuthToken();
  const [isGettingMessages, setIsLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  useEffect(() => {
    async function getMessages() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/messages/${selectedConversation._id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages, token]);

  return { isGettingMessages, messages };
}
