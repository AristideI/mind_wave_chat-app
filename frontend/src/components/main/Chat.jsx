import NotSelected from "./NotSelected";
import useConversation from "../../zustand/useConversation";
import { useEffect, useRef, useState } from "react";
import useSendMessage from "../../hooks/useSendMessages";
import toast from "react-hot-toast";
import Loading from "react-loading";
import useGetMessages from "../../hooks/useGetMessages";
import MessagesSection from "./MessagesSection";

export default function Chat() {
  const [currentMessage, setCurrentMessage] = useState("");
  const { isLoading, sendMessage } = useSendMessage();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { isGettingMessages, messages } = useGetMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  async function handleSendMessage(e) {
    e.preventDefault();
    if (!currentMessage) {
      toast.error("Write message");
    }
    await sendMessage(currentMessage);
    setCurrentMessage("");
  }

  return selectedConversation ? (
    <article className="flex flex-col justify-between text-pup-50">
      <section className="w-full h-[10vh] bg-bla-300 border-b border-purple-200/20 px-10 py-1 md:px-6 sm:px-2">
        <Header conversation={selectedConversation} />
      </section>
      <MessagesSection
        isGettingMessages={isGettingMessages}
        messages={messages}
      />
      <section className="w-full h-[10vh] bg-bla-300 border-t border-pup-100/20 flex flex-col justify-center px-10 md:px-6 sm:px-2">
        <form
          className="w-full flex justify-between gap-2 items-center"
          onSubmit={handleSendMessage}
        >
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type message ..."
          />
          <button className="bg-pup-200 px-8 py-2  rounded-xl">
            {isLoading ? (
              <Loading
                height={30}
                width={30}
                type="spinningBubbles"
                color="#000000"
              />
            ) : (
              <div className="flex items-center gap-2">
                <p className="font-semibold text-lg">Send</p>
                <img className="w-5" src="/send.png" alt="" />
              </div>
            )}
          </button>
        </form>
      </section>
    </article>
  ) : (
    <NotSelected />
  );
}

function Header({ conversation }) {
  return (
    <article className="flex justify-between items-center pb-2">
      <article className="flex gap-4 items-center text-pup-50 ">
        <section className="avatar online">
          <div className="w-14 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </section>
        <section className="text-sm">
          <p className="font-semibold text-base">{conversation.fullName}</p>
          <p>@{conversation.userName}</p>
        </section>
      </article>
    </article>
  );
}
