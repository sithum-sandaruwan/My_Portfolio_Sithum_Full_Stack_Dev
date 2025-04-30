import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sithum Sandaruwan ",
  description: "You can find out about me here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.chtlConfig = { chatbotId: "9156332336" };`,
          }}
        />

        <script
          async
          data-id="9156332336"
          id="chatling-embed-script"
          type="text/javascript"
          src="https://chatling.ai/js/embed.js"
        />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
