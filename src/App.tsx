import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import { MantineProvider, Text } from "@mantine/core";

//imported pages
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Pricesfaqs from "./pages/Pricesfaqs";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

// imported Components
import { HeaderAction } from "./components/HeaderAction";
import { FooterLinks } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* Header & Navigation */}
        <HeaderAction
          links={[
            {
              link: "/",
              label: "Home",
              links: [],
            },
            {
              link: "about",
              label: "About",
              links: [],
            },
            {
              link: "testimonials",
              label: "Testimonials",
              links: [],
            },
            {
              link: "pricesfaqs",
              label: "Price & FAQS",
              links: [],
            },
            {
              link: "blogs",
              label: "Blog",
              links: [],
            },

            // {
            //   link: "zoo",
            //   label: "loo",
            //   links: [
            //     {
            //       link: "baz",
            //       label: "boo",
            //     },
            //     {
            //       link: "goo",
            //       label: "moo",
            //     },
            //   ],
            // },
          ]}
        />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricesfaqs" element={<Pricesfaqs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
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
                { label: "Blogs", link: "blog" },
                { label: "Contact", link: "contact" },
              ],
            },
            {
              title: "Contact Info",
              links: [
                {
                  label: "info@digitalprimegh.com",
                  link: "mailto:info@digitalprimegh.com",
                },
                { label: "+(233) 54 939 0344", link: "tel:549390344" },
                {
                  label: "Fiapa Close , Spintex, Accra, Ghana",
                  link: "contact",
                },
                { label: "Contact Form", link: "contact/#quote" },
              ],
            },
          ]}
        />
      </MantineProvider>
    </Router>
  );
}
