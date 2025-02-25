import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SuspenseProvider } from "@/components/SuspenseProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Emmahlubi — Your trusted financial partner for accounting solutions",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <SuspenseProvider>
                    <div className="content-grid w-full max-w-full h-full relative min-h-screen">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </SuspenseProvider>
            </body>
        </html>
    );
}
