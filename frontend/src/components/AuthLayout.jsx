import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <article className="px-16 py-5 md:">
      <header className="flex items-center text-3xl gap-6 font-bold font-serif text-pup-50 mb-10">
        <img className="w-12" src="/chat.png" alt="main logo" />
        <p>Chit Chat</p>
      </header>
      <Outlet />
    </article>
  );
}
