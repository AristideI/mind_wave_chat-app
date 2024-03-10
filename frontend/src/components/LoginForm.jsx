import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import Loading from "react-loading";

export default function LoginForm() {
  const navigate = useNavigate();
  const { isLoading, login } = useLogin();
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });

  function handleFormChange(e) {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const user = await login(userInfo);
    if (user) {
      navigate("/");
    }
  }

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
          name="password"
          value={userInfo.password}
          onChange={handleFormChange}
          required
        />
      </label>
      <button className="bg-pup-100 text-black text-xl py-1 rounded-xl font-semibold grid place-content-center">
        {isLoading ? (
          <Loading
            height={30}
            width={30}
            type="spinningBubbles"
            color="#000000"
          />
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
}
