import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/ui/preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "No Books University | Build a Business That Doesn't Depend On You",
  description:
    "No Books University helps founders and service-based businesses build systems, SOPs, departments, teams and operational infrastructure that make the business more structured, scalable and less founder-dependent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-brand selection:text-white text-base leading-relaxed">
        <Preloader />
        <Navbar />
        <main className="flex-1 bg-[#030303] text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
