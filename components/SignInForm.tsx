"use client"
import Link from "next/link";

const SignInForm: React.FC = () => {
 const handleLogin = (e: any) => {
  e.preventDefault();
  fetch("/api/auth/sign-in", {
   method: "POST",
   body: JSON.stringify({
    email: e.currentTarget.email.value,
    password: e.currentTarget.password.value,
   }),
  });
 };
 return (
  <div className="flex h-full items-center">
   <div className="bg-white/20 backdrop-blur-lg w-[340px] h-auto py-10 flex flex-col gap-4 justify-center items-center p-4 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-white">Shopify.io</h1>
    <form
     onSubmit={(e) => handleLogin(e)}
     className="w-full flex flex-col items-center justify-center gap-4">
     <div className="flex flex-col gap-2 w-full">
      <label
       htmlFor="email"
       className="text-white">
       Your Email
      </label>
      <input
       name="email"
       type="email"
       className="w-full border border-white text-white focus:outline-none p-2 rounded"
       placeholder="Email"
      />
     </div>
     <div className="flex flex-col gap-2 w-full">
      <label
       htmlFor="password"
       className="text-white">
       Password
      </label>
      <input
       name="password"
       type="password"
       className="w-full border border-white text-white focus:outline-none p-2 rounded"
       placeholder="Password"
      />
     </div>
     <button
      type="submit"
      className="w-full bg-slate-800 p-2 rounded text-white">
      Masuk
     </button>
     <div className="flex gap-2 text-[14px]">
      <h1 className="text-white">Belum punya akun?</h1>
      <button className="text-blue-300 hover:underline">
       <Link href="/sign-up">Buat Akun</Link>
      </button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default SignInForm;
