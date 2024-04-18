import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CortexCraft",
  description: "Pratique e reforce o seu raciocínio lógico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{ variables: { colorPrimary: "#0ea5e9" } }}
      localization={ptBR}
    >
      <html lang="pt-br">
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
