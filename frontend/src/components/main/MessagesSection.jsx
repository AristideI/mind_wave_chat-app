import { useEffect, useRef } from "react";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import Message from "./Message";

export default function MessagesSection({ isGettingMessages, messages }) {
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <section className="w-full h-[80vh] max-h-[80vh] px-10 md:px-6 sm:px-2 overflow-y-auto custom-scroller ">
      {isGettingMessages ? (
        [...Array(19)].map((_, ind) => <MessageSkeleton key={ind} />)
      ) : messages.length === 0 ? (
        <div className="text-center w-full h-full grid place-content-center">
          Send message to start conversation
        </div>
      ) : (
        messages.map((message, ind) => (
          <div key={ind} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      )}
    </section>
  );
}
