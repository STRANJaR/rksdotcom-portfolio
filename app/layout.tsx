import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReachOut from "@/components/ReachOut";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "favicon.ico",
  title: "Home • Rohit Shrivastav",
  description: "Rohit Shrivastav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  dark:text-sky-1 text-dark-1 font-mono`}
      >
        <ThemeProvider
        attribute='class'
        defaultTheme="system"
        enableSystem
        >
        <Header/>
        <div className="h-16 w-16 bg-purple-1 blur-3xl absolute top-[30%] left-[20%]"></div>
        {/* <div className="h-16 w-16 bg-blue-1 blur-3xl absolute bottom-[10%] right-[20%]"></div> */}
        {children}
        <ReachOut/>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
