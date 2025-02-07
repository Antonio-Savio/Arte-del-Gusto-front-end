import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({
  display: 'swap',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arte del Gusto Delicatessen",
  description: "Arte del Gusto é uma delicatessen que celebra a verdadeira arte dos sabores. Inspirada nas tradições italianas, oferece uma seleção exclusiva de produtos artesanais, desde queijos e embutidos até pães frescos e vinhos especiais. Cada detalhe é pensado para proporcionar uma experiência gastronômica autêntica, unindo sofisticação e aconchego.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className}`}
      >
        <Toaster
            position="bottom-right"
            reverseOrder={false}
        />
        
        {children}
      </body>
    </html>
  );
}
