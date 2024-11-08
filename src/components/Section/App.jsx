// import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/App";
import "./style.css";

export default function Section({
  title = "Produtos em alta",
  link = { text: "Veja Mais →", href: "https://redirect.link" },
  children = { ProductCard }}) {
  return (
    <section className="section-container">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <a href={link.href} className="section-link">
          {link.text}
        </a>
      </div>
      <div>
        <ProductCard />
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
};

