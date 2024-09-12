import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { StoreProvider } from "@/utils/storeProvider";

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700' ], subsets: ['latin']});

export const metadata: Metadata = {
  title: "TManager",
  description: "Home page Manage team, task and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
