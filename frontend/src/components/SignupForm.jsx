import { useState } from "react";

export default function SignupForm() {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    userName: "",
    password: "",
    gender: "male",
  });
  function handleFormChange() {}
  function handleFormSubmit() {}
  return (
    <form
      className="flex flex-col gap-6 w-4/5 mb-2"
      onSubmit={handleFormSubmit}
    >
      <label className="flex flex-col w-full gap-1 text-lg">
        Full Names:
        <input
          className="py-1 px-4 rounded-xl bg-transparent outline-none border border-pup-100"
          type="text"
          name="fullName"
          value={userInfo.fullName}
          onChange={handleFormChange}
          required
        />
      </label>
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
      <label className="flex flex-col w-full gap-1 text-lg">
        Gender:
        <select
          className="py-2 px-4 rounded-xl bg-transparent outline-none border border-pup-100"
          name="gender"
          value={userInfo.gender}
          onChange={handleFormChange}
        >
          <option
            className="bg-pup-100 hover:bg-pup-200 text-black text-lg py-1"
            value="male"
          >
            Male
          </option>
          <option
            className="bg-pup-100 hover:bg-pup-200 text-black text-lg py-1"
            value="female"
          >
            Female
          </option>
        </select>
      </label>
      <button className="bg-pup-100 text-black text-xl py-1 rounded-xl font-semibold">
        Login
      </button>
    </form>
  );
}
