import React from "react";
import { Navbar, Footer } from "./SharedComponent";

const SharedLayout = () => {
  return (
    <>
      <main>
        <div className="bottom-effect"></div>

        <Footer />
      </main>
    </>
  );
};

export default SharedLayout;
