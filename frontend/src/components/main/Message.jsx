import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useConversation from "../../zustand/useConversation";
dayjs.extend(relativeTime);

export default function Message({ message }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { selectedConversation } = useConversation();

  const isUserSender = currentUser._id === message.senderId;
  console.log(isUserSender);

  return (
    <div
      className={`${
        isUserSender ? "chat-end" : "chat-start"
      } chat chat-start mb-4`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              isUserSender
                ? currentUser.profilePic
                : selectedConversation.profilePic
            }
          />
        </div>
      </div>
      {isUserSender ? (
        <div className="chat-header flex items-end gap-4 mb-2">
          <p className="text-xs opacity-50">
            {dayjs(message.createdAt).fromNow()}
          </p>
          <p className="font-semibold text-[17px]">
            {isUserSender
              ? currentUser.fullName
              : selectedConversation.fullName}
          </p>
        </div>
      ) : (
        <div className="chat-header flex items-end gap-4 mb-1">
          <p className="font-semibold text-[17px]">
            {isUserSender
              ? currentUser.fullName
              : selectedConversation.fullName}
          </p>
          <p className="text-xs opacity-50">
            {dayjs(message.createdAt).fromNow()}
          </p>
        </div>
      )}

      <div
        className={`${
          isUserSender ? "bg-pup-200" : "bg-bla-100"
        } chat-bubble text-pup-50`}
      >
        {message.message}
      </div>
    </div>
  );
}
