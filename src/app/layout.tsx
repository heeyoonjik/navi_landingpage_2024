import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";

// <meta
//   property='og:description'
//   content='모두에게 걱정없는 한 끼가 당연해지는 그 날까지
//   편리한 식사 예약 서비스 플랫폼'
// />
// <meta property='og:type' content='website' />
// <meta property='og:title' content='나비얌' />
// <meta property='og:url' content='https://www.nanumnavi.com/' />
// <meta property='og:locale' content='ko_KR' />
// <meta property='og:image' content='/img/shareThumbnail.png' />

export const metadata: Metadata = {
  applicationName: "나비얌",
  referrer: "origin-when-cross-origin",
  keywords: ["나눔비타민", "나비얌", "결식아동"],
  colorScheme: "dark",
  creator: "나눔비타민",
  publisher: "나눔비타민",
  title: "나비얌",
  description:
    "모두에게 걱정없는 한 끼가 당연해지는 그 날까지 편리한 식사 예약 서비스 플랫폼",
  openGraph: {
    title: "나비얌",
    description:
      "모두에게 걱정없는 한 끼가 당연해지는 그 날까지 편리한 식사 예약 서비스 플랫폼",
    url: "https://www.nanumnavi.com/",
    siteName: "나비얌",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
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
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
