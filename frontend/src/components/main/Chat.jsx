import Message from "./Message";
import User from "./User";

export default function Chat() {
  return (
    <article className="flex flex-col justify-between text-pup-50">
      <section className="w-full h-[10vh] bg-bla-300 border-b border-purple-200/20 px-10 py-1 md:px-6 sm:px-2">
        <User conversation={{}} />
      </section>
      <section className="w-full h-[80vh] px-10 md:px-6 sm:px-2 overflow-y-auto custom-scroller">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </section>
      <section className="w-full h-[10vh] bg-bla-300 border-t border-pup-100/20 flex flex-col justify-center px-10 md:px-6 sm:px-2">
        <form className="w-full flex justify-between gap-2 items-center">
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Type message ..."
          />
          <button className="flex items-center bg-pup-200 px-8 py-2 gap-2 rounded-xl">
            <p className="font-semibold text-lg">Send</p>
            <img className="w-5" src="/send.png" alt="" />
          </button>
        </form>
      </section>
    </article>
  );
}
