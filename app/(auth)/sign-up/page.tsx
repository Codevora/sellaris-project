import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

export default function SignUp() {
 return (
  <div className="h-screen flex flex-col items-center bg-gradient-to-br from-slate-500 to-slate-800">
   <header className="w-full p-4 px-10 flex justify-between items-center">
    <Link href="/">
     <h1 className="text-2xl font-bold italic text-white">Sellaris</h1>
    </Link>
    <Link href="/">
     <h1 className="text-white">Contact Us</h1>
    </Link>
   </header>
   <SignUpForm />
  </div>
 );
}
