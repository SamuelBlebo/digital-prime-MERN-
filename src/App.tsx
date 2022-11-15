import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

//imported pages
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Pricesfaqs from "./pages/Pricesfaqs";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

// imported Components
// import { HeaderAction } from "./components/HeaderAction";
import { HeaderMegaMenu } from "./components/HeaderMegaMenu";
import { FooterLinks } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
        }}
      >
        {/* Header & Navigation */}
        <HeaderMegaMenu />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricesfaqs" element={<Pricesfaqs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <FooterLinks
          data={[
            {
              title: "Quick Links",
              links: [
                { label: "About", link: "/about" },
                { label: "Testimonials", link: "/testimonials" },
                { label: "Price & FAQs", link: "pricesfaqs" },
                { label: "Blogs", link: "blogs" },
                { label: "Contact", link: "contact" },
              ],
            },
            {
              title: "Contact Info",
              links: [
                {
                  label: "info@digitalprimegh.com",
                  link: "#",
                },
                { label: "+(233) 54 939 0344", link: "#" },
                {
                  label: "Fiapa Close , Spintex, Accra, Ghana",
                  link: "#",
                },
                { label: "Contact Form", link: "#" },
              ],
            },
          ]}
        />
      </MantineProvider>
    </Router>
  );
}
