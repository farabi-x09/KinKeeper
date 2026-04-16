import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/NavBer";
import FooterPage from "@/components/homepage/Footer";
import Providers from "./lib/providers";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "",
  icons: {
    icon: "/favicon.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="retro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
        <Navber></Navber>
        {children}
        <FooterPage></FooterPage>
         <ToastContainer 
          position="bottom-right"
          autoClose={2000}
        />
        </Providers>
        </body>
    </html>
  );
}
