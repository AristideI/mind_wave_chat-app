export default function NotSelected() {
  return (
    <article className="w-full h-full flex flex-col justify-center items-center gap-6 text-pup-50">
      <div className="flex gap-5 items-center">
        <img className="w-12" src="/chat.png" alt="" />
        <p className="font-semibold font-serif text-3xl">Chit Chat</p>
      </div>
      <p className="text-xl">Welcome Aristide Isingizwe 😎</p>
      <p>
        Select a <span className="font-bold font-serif">Chat</span> to start
        messaging
      </p>
    </article>
  );
}
