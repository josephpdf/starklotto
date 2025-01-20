import type { Metadata } from "next";
import { ScaffoldStarkAppWithProviders } from "~~/components/ScaffoldStarkAppWithProviders";
import "~~/styles/globals.css";
import { ThemeProvider } from "~~/components/ThemeProvider";
import Header from "~~/components/Header";

export const metadata: Metadata = {
  title: "StarkLotto",
  description: "Fast track your starknet journey",
  icons: "/logo.ico",
};

const ScaffoldStarkApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-[#3A0909] to-[#000000] min-h-screen flex flex-col">
        <ThemeProvider enableSystem>
          <ScaffoldStarkAppWithProviders>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
          </ScaffoldStarkAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldStarkApp;
