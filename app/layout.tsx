import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://shbilpleie.no";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "SH Bilpleie — Profesjonell bilpleie i Vesterålen",
  description:
    "SH Bilpleie og Service Halvorsen i Vesterålen. Polering, keramisk coating, interiørrens, ozonbehandling og folie. Sertifisert verksted med RUPES, CarPro og Koch-Chemie. Ring 915 34 263.",
  keywords: [
    "bilpleie Sortland",
    "bilpleie Stokmarknes",
    "bilpleie Vesterålen",
    "keramisk coating",
    "polering Sortland",
    "lakk korrigering Vesterålen",
    "ozonbehandling bil",
    "skinnbehandling",
    "SH Bilpleie",
  ],
  openGraph: {
    title: "SH Bilpleie — Vesterålen",
    description:
      "Profesjonell bilpleie og keramisk coating i Vesterålen. RUPES, CarPro, Koch-Chemie.",
    type: "website",
    locale: "nb_NO",
    url: BASE_URL,
    siteName: "SH Bilpleie",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-100">{children}</body>
    </html>
  );
}
