import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop finance platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body className={`${inter.className}`}>
        {/* header */}
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with ❤️ by Asutosh Behera</p>
            </div>
          </footer>
        </body>
      </ClerkProvider>
    </html>
  );
}
