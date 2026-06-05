import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张驰 Zhang Chi | Embedded Systems & IoT Developer",
  description:
    "张驰的个人作品集网站，展示嵌入式系统、IoT 节点、SmartTrain-Node、智慧果园灌溉系统和技术文章。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
