import { useState } from "react";

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });
  function handleFormChange() {}
  function handleFormSubmit() {}
  return (
    <form className="flex flex-col gap-6 w-4/5" onSubmit={handleFormSubmit}>
      <label className="flex flex-col w-full gap-1 text-lg">
        Username:
        <input
          className="py-1 px-4 rounded-xl bg-transparent outline-none border border-pup-100"
          type="text"
          name="userName"
          value={userInfo.userName}
          onChange={handleFormChange}
          required
        />
      </label>
      <label className="flex flex-col w-full gap-1 text-lg">
        Password:
        <input
          className="py-1 px-4 rounded-xl bg-transparent outline-none border border-pup-100"
          type="password"
          name="userName"
          value={userInfo.password}
          onChange={handleFormChange}
          required
        />
      </label>
      <button className="bg-pup-100 text-black text-xl py-1 rounded-xl font-semibold">
        Login
      </button>
    </form>
  );
}
