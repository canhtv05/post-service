import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";

import type { Metadata } from "next";
import "./globals.css";

const chirpFont = localFont({
  src: [
    {
      path: "./fonts/Chirp-Bold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Chirp-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Chirp-Medium.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Chirp-Regular.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-chirp",
  // performance font face
  display: "swap",
});

export const metadata: Metadata = {
  title: "CanhTV",
  description: "My blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${chirpFont.variable} antialiased`} suppressHydrationWarning>
        <NextTopLoader height={2} showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
