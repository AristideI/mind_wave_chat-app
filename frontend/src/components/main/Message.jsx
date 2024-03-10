export default function Message() {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-header flex items-end gap-4 mb-1">
        <p className="text-xs opacity-50">12:46</p>
        <p className="font-semibold text-[17px]">Aristide Isingizwe</p>
      </div>
      <div className="chat-bubble">
        I hate you! very much and th e we devided to go there for lungch and we
        fuckec each other after the party but wait and then we continue adding
        other text to check how it behaves
      </div>
    </div>
  );
}
