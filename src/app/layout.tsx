import type { Metadata } from "next";

import { DESCRIPTION, TITLE } from "@/constants/info";

import "@/styles/global.module.scss";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
