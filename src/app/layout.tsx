import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Teacher Salary",
  description: "Find the salary of almost any teacher in British Columbia!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col items-center supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]">
        <Providers>
          <div className="flex flex-col items-center justify-start flex-grow w-full">
            <Header />
            {children}
          </div>
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
