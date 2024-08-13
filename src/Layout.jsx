import React from "react";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
