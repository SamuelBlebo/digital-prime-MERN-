import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { MantineProvider, Text } from "@mantine/core";

//imported pages
import Home from "./pages/Home";
import About from "./pages/About";

// imported Components
import { HeaderAction } from "./components/HeaderAction";
import { FooterLinks } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <MantineProvider withGlobalStyles withNormalizeCSS>
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
              link: "pricesfags",
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

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          </Routes>
        </div>

        <FooterLinks
          data={[
            {
              title: "Quick Links",
              links: [
                { label: "About", link: "about" },
                { label: "Testimonials", link: "testimonials" },
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
                { label: "+(233) 54 939 0344", link: "tel:5554280940" },
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
