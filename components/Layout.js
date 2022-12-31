import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <div className=" min-h-screen">{children}</div>
    <Footer />
  </>
);

export default Layout;