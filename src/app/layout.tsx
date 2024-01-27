import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "나비얌",
  description:
    "모두에게 걱정없는 한 끼가 당연해지는 그 날까지 편리한 식사 예약 서비스 플랫폼",
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
