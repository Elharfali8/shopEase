import { Footer, Header } from "@/components";
import "./globals.css";
import { Providers } from "./providers";



export const metadata = {
  title: "ShopEase",
  description: "shop easy",
};

export default function RootLayout({ children }) {
  return (
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
  );
}
