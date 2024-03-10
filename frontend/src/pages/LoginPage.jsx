import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <article className="w-full flex justify-between text-pup-50">
      <img
        className="w-1/3  object-contain"
        src="/logIco1.png"
        alt="login page icon"
      />
      <section className="w-1/3  bg-pup-200/10 rounded-2xl p-4 border border-pup-100/70 flex flex-col justify-around items-center">
        <p className="font-bold font-serif text-xl text-center">Welcome Back</p>
        <LoginForm />
        <p className="text-center">
          {"Don't"} have an account?{" "}
          <Link to="/signup" className="font-bold font-serif text-lg">
            Register
          </Link>
        </p>
      </section>
      <img
        className="w-1/3  object-contain"
        src="/logIco3.png"
        alt="login page icon"
      />
    </article>
  );
}
