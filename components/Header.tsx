import Link from "next/link";

export default function Header() {
 return (
  <header className="sticky z-10 top-0 p-5 px-10 bg-gradient-to-br from-slate-500 to-slate-800 flex justify-between items-center">
   <Link href="/">
    <h1 className="text-2xl font-bold italic text-white">Sellaris</h1>
   </Link>
   <div className="flex gap-5 items-center text-white">
    <Link href="/product">Product</Link>
    <Link href="/sign-in">Masuk</Link>
   </div>
  </header>
 );
}
