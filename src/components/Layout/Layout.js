import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-4 py-6 w-full max-w-7xl mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;