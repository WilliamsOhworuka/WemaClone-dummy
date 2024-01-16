import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import { AppProvider } from "@/components/appProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wema Clone",
  description: "Wema dashboard clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Sidebar />
          <Topbar />
          <main className="pt-[112px] ml-0 tab:ml-64 pb-3 px-5 bg-[whitesmoke] h-screen overflow-y-auto transition-all duration-300 ease-in-out">
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
