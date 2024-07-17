import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/app/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React JS - Musaraf Hossain",
  description: "Created by Musaraf Hossain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
