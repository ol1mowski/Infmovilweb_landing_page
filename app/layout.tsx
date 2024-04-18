import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import './globals.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infmovilweb | servicio de TI",
  description: "una empresa que repara equipos informáticos y crea sitios web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href='/favicon.ico' type="image/x-icon" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
