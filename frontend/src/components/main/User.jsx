import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

export default function User({ conversation, emoji }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id);

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <article
      onClick={() => setSelectedConversation(conversation)}
      className={`${
        isSelected ? "bg-pup-200" : ""
      } flex justify-between items-center py-2 mb-2 border-b border-pup-100/10 hover:bg-pup-200`}
    >
      <article className="flex gap-4 items-center text-pup-50 ">
        <section className={`${isOnline ? "online" : "offline"} avatar`}>
          <div className="w-14 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </section>
        <section className="text-sm">
          <p className="font-semibold text-base">{conversation.fullName}</p>
          <p>@{conversation.userName}</p>
        </section>
      </article>
      <section className="justify-self-start">{emoji}</section>
    </article>
  );
}
