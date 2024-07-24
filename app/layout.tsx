"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import LayoutTabBar from "./components/LayoutTabBar";
import Footer from "./components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
