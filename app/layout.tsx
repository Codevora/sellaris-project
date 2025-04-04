"use client";
import {usePathname} from "next/navigation";

import "./globals.css";
import Header from "@/components/Header";

const disableHeader = [
 "/dashboard",
 "/dashboard/products",
 "/dashboard/analytics",
 "/sign-in",
 "/sign-up"
];

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const pathname = usePathname();
 return (
  <html lang="en">
   <body>
    {!disableHeader.includes(pathname) && <Header />}
    {children}
   </body>
  </html>
 );
}
