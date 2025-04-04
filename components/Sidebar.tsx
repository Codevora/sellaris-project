import Link from "next/link";

export default function Sidebar() {
 return (
  <div className="fixed flex flex-col items-center justify-between left-0 top-0 z-10 h-full w-60 bg-gray-800 p-5">
   <Link href="/">
    <h1 className="text-2xl font-bold italic text-white">Sellaris</h1>
   </Link>
   <Link href="/">
    <h1 className="text-white">Contact Us</h1>
   </Link>
  </div>
 );
}
