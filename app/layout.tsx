"use client";
import "@/styles/globals.css";
import Navbar from "@/app/components/Navbar";

import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen min-h-screen scroll-smooth bg-gray-100 2xl:mx-auto 2xl:max-w-screen-2xl  `}
      >
        <RecoilRoot>
          <div className="m-auto flex  flex-col items-center  bg-white">
            <Navbar />
            {children}
          </div>
        </RecoilRoot>
      </body>
    </html>
  );
}
