import Footer from "@/components/Footer";
import { Providers } from "./providers";

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
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* NEXTJS WILL NOT COMPILE WITHOUT BODY TAG */}
          <Providers>{children}</Providers>
          <body className="hidden"></body>
        </main>
        <Footer />
      </div>
    </html>
  );
}
