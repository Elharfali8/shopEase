import { Footer, Header } from "@/components";
import "./globals.css";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const metadata = {
  title: "ShopEase",
  description: "shop easy",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en" data-theme="light">
      <body
        className={`antialiased`}
        >
        <Providers >
        <Header />
          {children}
          <Footer />
          </Providers>
          <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </body>
      </html>
      
        </ClerkProvider>
  );
}
