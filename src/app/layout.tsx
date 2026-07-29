import type { Metadata } from "next";
import "./globals.css";
import { EnquiryProvider } from '@/components/EnquiryProvider';

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-gen expertise",
  description: "Enterprise learning programs tailored for impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><EnquiryProvider>{children}</EnquiryProvider></body>
    </html>
  );
}
