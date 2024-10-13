import { Footer, Header } from "@/components";
import "./globals.css";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata = {
  title: "ShopEase",
  description: "shop easy",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`antialiased`}
        >
        <Providers >
        <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
        </ClerkProvider>
  );
}
