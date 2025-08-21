import NavBar from "@/Components/Navigations/NavBar";

export default function BaseLayout({ children }) {
  return (
    <>
    <NavBar></NavBar>
      {children}
    </>
  );
}
