export default function User() {
  return (
    <article className="flex gap-4 items-center text-pup-50 pb-2 mb-2 border-b border-pup-100/10">
      <section className="avatar online">
        <div className="w-14 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </section>
      <section className="text-sm">
        <p className="font-semibold text-base">Aristide Isingizwe</p>
        <p>@TheSaint</p>
      </section>
    </article>
  );
}
