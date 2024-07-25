import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nanumnavi.com"),
  title: "나비얌",
  description: "우리 동네 착한 가게와 함께하는 따뜻한 식사 플랫폼",
  openGraph: {
    title: "나비얌",
    description: "우리 동네 착한 가게와 함께하는 따뜻한 식사 플랫폼",
    url: "https://www.nanumnavi.com",
    siteName: "/sitemap.xml",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="b9055b066922ca52bd4b7f7b7f6be2001439887c"
        />
        <meta name="thumbnail" content="/thumbnail.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
