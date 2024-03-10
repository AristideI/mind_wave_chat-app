import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { apiUrl } from "../../api";
import { getAuthToken } from "./getAuthToken";

export default function useSendMessage() {
  const token = getAuthToken();
  const [isLoading, setIsLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();

  async function sendMessage(message) {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${apiUrl}/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, sendMessage };
}
