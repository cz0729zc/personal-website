import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张驰 Zhang Chi | 嵌入式软件开发",
  description:
    "张驰的个人作品集网站，展示嵌入式软件开发、STM32、ESP32、FreeRTOS、LVGL、SmartTrain-Node 和智慧果园项目。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
