'use client'

import Footer from "@/Components/Footer/Footer";
import RootLoading from "@/Components/loading/RootLoading";
import NavBar from "@/Components/Navigations/NavBar";
import { useSession } from "next-auth/react";

export default function BaseLayout({ children }) {

  const { status } = useSession()

  if (status === "loading") {
    return <RootLoading></RootLoading>
  }

  return (
    <>
      <NavBar></NavBar>
      <div className="min-h-screen ">
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
