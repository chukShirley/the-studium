import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { StudyProvider } from "@/components/study-provider";

export const metadata: Metadata = {
  title: { default: "The Studium", template: "%s · The Studium" },
  description: "A place for ordered study, from wonder toward wisdom.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <StudyProvider>
          <SiteHeader />
          {children}
        </StudyProvider>
      </body>
    </html>
  );
}
