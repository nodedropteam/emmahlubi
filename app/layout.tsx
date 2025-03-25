import type { Metadata } from "next";
import "./styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import { SuspenseProvider } from "@/components/SuspenseProvider";
import SmoothScrollProvider from "@/components/smooth-scroll";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SmoothScrollProvider>
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <SuspenseProvider>
                        <main className="min-h-screen w-full relative overflow-hidden bg-background">
                            {/* <PatternBackground /> */}
                            <div className="content-grid w-full max-w-full h-full relative min-h-screen">
                                <Header />
                                {children}
                                <Footer />
                            </div>
                        </main>
                    </SuspenseProvider>
                </body>
            </html>
        </SmoothScrollProvider>
    );
}
