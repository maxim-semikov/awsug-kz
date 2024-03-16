import type {Metadata} from "next";
import {siteMetadata} from "@/data/siteMetadata";
import {inter} from "@/shared/fonts";
import "./globals.css";


export const metadata: Metadata = {
    title: {
        default: siteMetadata.title,
        template: `%s | ${siteMetadata.title}`
    },
    description: siteMetadata.description,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} m-auto`}>{children}</body>
        </html>
    );
}
