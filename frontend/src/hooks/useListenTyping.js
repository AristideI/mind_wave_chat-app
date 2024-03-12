import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

export default function () {
  const { socket } = useSocketContext();
  const { setIsTyping } = useConversation();

  useEffect(() => {
    socket?.on("receiveTyping", () => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
      }, 1000);
    });

    return () => socket?.off("receiveTyping");
  }, [setIsTyping, socket]);
}
