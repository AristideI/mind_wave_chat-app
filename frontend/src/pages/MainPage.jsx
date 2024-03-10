import Chat from "../components/main/Chat";
import Menu from "../components/main/Menu";

export default function MainPage() {
  return (
    <article className="flex justify-between h-screen">
      <section className="h-full w-1/4 bg-bla-300 border-r border-pup-50/20">
        <Menu />
      </section>
      <section className="h-full w-3/4 bg-bla-200">
        <Chat />
      </section>
    </article>
  );
}
