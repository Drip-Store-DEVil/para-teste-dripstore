// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import HomePage from "./pages/HomePage/App.jsx";
// import ProductListingPage from "./pages/ProductListingPage/App.jsx";
// import ProductViewPage from "./pages/ProductViewPage/App.jsx"


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <HomePage />
//     <ProductListingPage />
//     <ProductViewPage />
//   </StrictMode>
// );



// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import HomePage from "./pages/HomePage/App.jsx";
// import ProductListingPage from "./pages/ProductListingPage/App.jsx";
// import ProductViewPage from "./pages/ProductViewPage/App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductListingPage />} />
//         <Route path="/products/:id" element={<ProductViewPage />} />
//         <Route path="*" element={<h1>Not Found</h1>} />
//       </Routes>
//     </Router>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../style.css";
import HomePage from "./pages/HomePage/App.jsx";
import ProductListingPage from "./pages/ProductListingPage/App.jsx";
import ProductViewPage from "./pages/ProductViewPage/App.jsx";
import NotFoundPage from "./components/NotFoundPage/App.jsx";
import Acessarconta from "./pages/Acessarconta/App.jsx";
import Cadastro from "./pages/Cadastro/App.jsx";
import Carrinhopage from "./pages/Carrinhopage/App.jsx";
import Comprafinalizada from "./pages/Comprafinalizada/App.jsx";
import Criarconta from "./pages/Criarconta/App.jsx";
import Finalizarcompra from "./pages/Finalizarcompra/App.jsx";
import Meuspedidos from "./pages/Meuspedidos/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/produtos" element={<ProductListingPage />} />

        <Route path="/produtos/detalhes" element={<ProductViewPage />} />

        <Route path="/acessarconta" element={<Acessarconta/>} />

        <Route path="/cadastro" element={<Cadastro/>} />

        <Route path="/carrinho" element={<Carrinhopage />} />

        <Route path="/comprafinalizada" element={<Comprafinalizada />} />

        <Route path="/criarconta" element={<Cadastro/>} />

        <Route path="/finalizarcompra" element={<Finalizarcompra />} />
        <Route path="/meuspedidos" element={<Meuspedidos />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
