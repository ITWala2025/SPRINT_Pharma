// src/components/layout/MainLayout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Layout wrapper that renders the Header, the page content (children) and the Footer.
 * This preserves the existing visual structure while allowing pages to focus on
 * their own content.
 */
const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;

