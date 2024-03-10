import User from "./User";

export default function Menu() {
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
      <section className="max-h-[70vh]  w-full overflow-y-auto custom-scroller">
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
      <button className="bg-pup-200 text-pup-50 text-lg font-semibold py-1 rounded-xl">
        Logout
      </button>
    </article>
  );
}
