import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/Navigations/NavBar";

export default function BaseLayout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <div className="min-h-screen">
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
