"use client";
import {useState} from "react";

export default function AdminProductPage() {
 const [status, setStatus] = useState("");
 const revalidate = async () => {
  const res = await fetch(
   "http://localhost:3000/api/revalidate?tag=products&secret=Kenzyworld29",
   {
    method: "POST",
   }
  );
  if (!res.ok) {
   setStatus("Revalidate Fail");
  } else {
   const response = await res.json();
   if (response.revalidate) {
    setStatus("Revalidated");
   }
  }
 };
 return (
  <div className="flex items-center justify-center h-96 w-3/6 rounded-[12px] mr-5 bg-gradient-to-br from-slate-800 to-slate-500">
   <h1>{status}</h1>
   <button
    className="p-3 bg-white text-black rounded-lg"
    onClick={() => revalidate()}>
    Revalidate
   </button>
  </div>
 );
}
