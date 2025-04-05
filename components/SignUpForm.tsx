"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";

const SignUpForm: React.FC = () => {
 const {push} = useRouter();
 const [error, setError] = useState("");
 const [isLoading, setIsLoading] = useState(false);
 const handleRegister = async (e: any) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  const res = await fetch("/api/auth/register", {
   method: "POST",
   body: JSON.stringify({
    fullname: e.target.fullname.value,
    email: e.target.email.value,
    password: e.target.password.value,
   }),
  });
  if (res.status === 200) {
   e.target.reset();
   setIsLoading(false);
   push("/sign-in");
  } else {
   setError("Email Sudah Terdaftar!");
   setIsLoading(false);
  }
 };
 return (
  <div className="flex h-full items-center">
   {error !== "" && <div className="text-red-600 font-bold mb-3">{error}</div>}
   <div className="bg-white/20 backdrop-blur-lg w-[340px] h-auto py-10 flex flex-col gap-4 justify-center items-center p-4 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-white">Shopify.io</h1>
    <form
     onSubmit={(e) => handleRegister(e)}
     className="w-full flex flex-col items-center justify-center gap-4">
     <div className="flex flex-col gap-2 w-full">
      <label
       htmlFor="name"
       className="text-white">
       Your Name
      </label>
      <input
       required
       name="name"
       type="name"
       className="w-full border border-white text-white focus:outline-none p-2 rounded"
       placeholder="Name"
      />
     </div>
     <div className="flex flex-col gap-2 w-full">
      <label
       htmlFor="email"
       className="text-white">
       Your Email
      </label>
      <input
       required
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
       required
       name="password"
       type="password"
       className="w-full border border-white text-white focus:outline-none p-2 rounded"
       placeholder="Password"
      />
     </div>
     <button
      disabled={isLoading}
      type="submit"
      className="w-full bg-slate-800 hover:bg-slate-900 cursor-pointer p-2 rounded text-white">
      {isLoading ? "Loading..." : "Daftar"}
     </button>
     <div className="flex gap-2 text-[14px]">
      <h1 className="text-white">Sudah punya akun?</h1>
      <button className="text-blue-300 hover:underline">
       <Link href="/sign-in">Masuk</Link>
      </button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default SignUpForm;
