import "./reset.css";
import "./globals.css";
import "./main.css";
import { Open_Sans } from "next/font/google";
import { FC } from "react";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

const RootLayout: FC<LayoutProps<"/">> = ({ children }) => {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
