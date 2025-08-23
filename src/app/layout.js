'use client'

import { Slide, ToastContainer } from "react-toastify";
import "./globals.css";
import NextAuthProvider from "@/Providers/NextAuthProvider";
import { useSession } from "next-auth/react";

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <NextAuthProvider>
        <body data-new-gr-c-s-check-loaded="14.1249.0"
          data-gr-ext-installed="">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
            transition={Slide}
          />
          {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
