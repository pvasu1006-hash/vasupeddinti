import type { Metadata } from "next";
import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // adjust weights as needed
  variable: "--font-poppins",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vasu Peddinti | Portfolio",
  description: "Portfolio Website of Vasu Peddinti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSerif.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
