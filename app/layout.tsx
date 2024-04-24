import type { Metadata } from "next";

import "./globals.scss";
import Root from "./Root";

export const metadata: Metadata = {
  title: "Infmovilweb | servicio de TI",
  description: "una empresa que repara equipos informáticos y crea sitios web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Root children={children} />;
}
