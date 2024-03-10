import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

export default function SignupPage() {
  return (
    <article className="w-full flex justify-between text-pup-50">
      <img
        className="w-1/3  object-contain"
        src="/logIco4.png"
        alt="login page icon"
      />
      <section className="w-1/3  bg-pup-200/10 rounded-2xl p-4 border border-pup-100/70 flex flex-col justify-around items-center">
        <p className="font-bold font-serif text-xl text-center">Get Started</p>
        <SignupForm />
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-bold font-serif text-lg">
            Login
          </Link>
        </p>
      </section>
      <img
        className="w-1/3  object-contain"
        src="/logIco2.png"
        alt="login page icon"
      />
    </article>
  );
}
