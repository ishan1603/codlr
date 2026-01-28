import { Footer } from "@/modules/home/footer";
import { Header } from "@/modules/home/header";
import { ThemeProvider } from "@/components/providers/theme-providers";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Codlr - Editor",
    default: "Code Editor ",
  },
};
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="z-20 relative w-full pt-0">{children}</main>
      </ThemeProvider>
      <Footer />
    </>
  );
}
