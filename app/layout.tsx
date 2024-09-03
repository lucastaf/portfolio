"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import LayoutTabBar from "./components/LayoutTabBar";
import Footer from "./components/Footer";
import Script from "next/script";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Tahoma, sans-serif",
  },
});

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="microsoft-clarity-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                (function (c, l, a, r, i, t, y) {
                c[a] =
                c[a] ||
                function () {
                  (c[a].q = c[a].q || []).push(arguments);
                };
                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
              })(window, document, "clarity", "script", "nxh8ptjo77");`,
        }}
      />
      <body className={inter.className}>
        <ThemeProvider theme={darkTheme}>
          <LayoutTabBar />
          <main className={styles.main}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
