import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_ROOT_URL}`),
  title: "Roby Codes",
  description: "Hello! 👋 I'm Roby, a Full-Stack Web Developer from Italy.",
  openGraph: {
    title: "Roby Codes",
    description: "Hello! 👋 I'm Roby, a Full-Stack Web Developer from Italy.",
    images: ["/images/meta-image.jpg"],
  },
};

const inter = Bebas_Neue({ weight: ["400"], preload: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
