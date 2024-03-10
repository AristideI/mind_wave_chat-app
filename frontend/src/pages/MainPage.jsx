import Chat from "../components/main/Chat";
import Menu from "../components/main/Menu";
import NotSelected from "../components/main/NotSelected";

export default function MainPage() {
  const isUserSelected = true;
  return (
    <article className="flex justify-between h-screen">
      <section className="h-full w-1/4 bg-bla-300 border-r border-pup-50/20">
        <Menu />
      </section>
      <section className="h-full w-3/4 bg-bla-200">
        {isUserSelected ? <Chat /> : <NotSelected />}
      </section>
    </article>
  );
}
