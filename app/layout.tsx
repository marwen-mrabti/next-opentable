import "@/styles/globals.css";
import Navbar from "@/app/components/Navbar";



export const metadata = {
  title: "next-OpenTable",
  description:
    "next-openTable where you can find restaurants, reserve tables, and order food online from the best restaurants in the world.",
  image: "/logo.svg",
};

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
        <div className="m-auto flex  flex-col items-center  bg-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
