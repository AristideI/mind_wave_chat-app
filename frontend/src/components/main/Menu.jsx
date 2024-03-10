import Loading from "react-loading";
import useLogout from "../../hooks/useLogout";
import User from "./User";
import useGetConversation from "../../hooks/useGetConversations";
import { getEmoji } from "../../utils/generateEmoji";
import SearchInput from "./SearchInput";

export default function Menu() {
  const { isLoading, conversations } = useGetConversation();
  const { isLoadings, logout } = useLogout();
  return (
    <article className="p-4 flex flex-col gap-4">
      <section className="flex gap-5 items-center">
        <img className="w-12" src="/chat.png" alt="" />
        <p className="font-semibold font-serif text-3xl">Chit Chat</p>
      </section>
      <SearchInput />
      {isLoading ? (
        <div className="h-[70vh] grid place-content-center">
          <Loading
            height={60}
            width={60}
            type="spinningBubbles"
            color="#AFB3FF"
          />
        </div>
      ) : (
        <section className="h-[70vh]  w-full overflow-y-auto custom-scroller">
          {conversations.map((conv, ind) => (
            <User key={ind} conversation={conv} emoji={getEmoji()} />
          ))}
        </section>
      )}

      <button
        className="bg-pup-200 text-pup-50 text-lg font-semibold py-1 rounded-xl"
        onClick={logout}
      >
        {isLoadings ? (
          <Loading
            height={30}
            width={30}
            type="spinningBubbles"
            color="#000000"
          />
        ) : (
          "Logout"
        )}
      </button>
    </article>
  );
}
