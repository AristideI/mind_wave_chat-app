import Loading from "react-loading";
import useLogout from "../../hooks/useLogout";
import User from "./User";
import useGetConversation from "../../hooks/useGetConversations";

export default function Menu() {
  const { isLoading, conversations } = useGetConversation();
  console.log(conversations);
  const { isLoadings, logout } = useLogout();
  return (
    <article className="p-4 flex flex-col gap-4">
      <section className="flex gap-5 items-center">
        <img className="w-12" src="/chat.png" alt="" />
        <p className="font-semibold font-serif text-3xl">Chit Chat</p>
      </section>
      <section>
        <form>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
      </section>
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
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
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
