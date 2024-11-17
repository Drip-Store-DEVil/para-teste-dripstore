// import ProductListing from "../../components/ProductListing/App";
// import Layout from "../../components/Layout/App";
// import FilterGroup from "../../components/FilterGroup/App";
// import "./style.css";
// import SectionResultados from "../../components/SectionResultados/App";

// export default function ProductListingPage() {
//   return (
//     <Layout>
//       <SectionResultados />
//       <div className="container">
//         <FilterGroup />
//         <ProductListing />
//       </div>
//     </Layout>
//   );
// }


import React from "react";
import ProductListing from "../../components/ProductListing/App";
import Layout from "../../components/Layout/App";
import FilterGroup from "../../components/FilterGroup/App";
import SectionResultados from "../../components/SectionResultados/App";
import img from "../../assets/tenis.png";
import "./style.css";

const products = [...Array(14)].map((_, index) => ({
  img: img,
  descontooff: "30% OFF",
  title: "Tênis",
  nomeproduto: "K-Swiss V8 - Masculino",
  preco: "$200",
  precodesconto: "$100",
}));

export default function ProductListingPage() {
  return (
    <Layout>
      <SectionResultados />
      <div className="container">
        <FilterGroup />
        <ProductListing products={products} columns={3} rows={5} />
      </div>
    </Layout>
  );
}
