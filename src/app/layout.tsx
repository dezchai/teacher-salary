import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className="flex flex-col items-center justify-center h-screen">
        <Providers>
          <div className="flex flex-col items-center justify-start flex-grow">
            <Header />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
