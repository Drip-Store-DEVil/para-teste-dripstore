// CODIGO DO COMPONENTE - APENAS SLIDE

// import React from "react";
// import "./style.css";
// import { useState } from "react";
// import imgA from "../../../public/home-slide-1.jpeg";
// import imgB from "../../../public/home-slide-2.jpeg";
// import imgC from "../../../public/home-slide-3.jpeg";
// import imgD from "../../../public/home-slide-4.jpeg";
// import imgE from "../../../public/home-slide-5.jpeg";
// import imgF from "../../../public/home-slide-6.jpeg";
// import imgG from "../../../public/home-slide-7.jpeg";
// import imgH from "../../../public/home-slide-8.jpeg";
// import setaEsquerda from "../../assets/arrow-left.svg";
// import setaDireita from "../../assets/arrow-right.svg";

// const imagensCarrosel = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH];

// export default function Gallery({
//   width = 1440,
//   height = 875,
//   radius = "4px",
//   showThumbs,
// }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === imagensCarrosel.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? imagensCarrosel.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="gallery" style={{ width: "100%", height: "100%" }}>
//       <button onClick={handlePrev} className="gallery-button">
//         <img src={setaEsquerda} alt="Anterior" />
//       </button>

//       <img
//         src={imagensCarrosel[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         style={{ borderRadius: radius, width: "100%", height: "100%" }}
//       />

//       <button onClick={handleNext} className="gallery-button">
//         <img src={setaDireita} alt="Próximo" />
//       </button>

//       {showThumbs && (
//         <div className="thumbnails">
//           {imagensCarrosel.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Thumb ${index + 1}`}
//               style={{
//                 width: showThumbs.width,
//                 height: showThumbs.height,
//                 borderRadius: radius,
//                 border: currentIndex === index ? "2px solid #primary" : "none",
//               }}
//               onClick={() => setCurrentIndex(index)}
//               className="thumbnail"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// CODIGO DO COMPONENTE - SLIDE COM BOLINHAS

// import React, { useState } from "react";
// import "./style.css";
// import imgA from "../../../public/home-slide-1.jpeg";
// import imgB from "../../../public/home-slide-2.jpeg";
// import imgC from "../../../public/home-slide-3.jpeg";
// import imgD from "../../../public/home-slide-4.jpeg";
// import imgE from "../../../public/home-slide-5.jpeg";
// import imgF from "../../../public/home-slide-6.jpeg";
// import imgG from "../../../public/home-slide-7.jpeg";
// import imgH from "../../../public/home-slide-8.jpeg";
// import setaEsquerda from "../../assets/arrow-left.svg";
// import setaDireita from "../../assets/arrow-right.svg";

// const imagensCarrosel = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH];

// export default function Gallery({ radius = "4px" }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < imagensCarrosel.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="gallery" style={{ width: "100%", height: "100%" }}>
//       <button
//         onClick={handlePrev}
//         className="gallery-button"
//         disabled={currentIndex === 0}
//       >
//         <img src={setaEsquerda} alt="Anterior" />
//       </button>

//       <img
//         src={imagensCarrosel[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         style={{ borderRadius: radius, width: "100%", height: "100%" }}
//       />

//       <button
//         onClick={handleNext}
//         className="gallery-button"
//         disabled={currentIndex === imagensCarrosel.length - 1}
//       >
//         <img src={setaDireita} alt="Próximo" />
//       </button>

//       <div className="dots">
//         {imagensCarrosel.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${currentIndex === index ? "active" : ""}`}
//             onClick={() => setCurrentIndex(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }

// CODIGO DO COMPONENTE - SLIDE COM BOLINHAS E THUMBNAILS

import React, { useState } from "react";
import "./style.css";
import imgA from "../../../public/home-slide-1.jpeg";
import imgB from "../../../public/home-slide-2.jpeg";
import imgC from "../../../public/home-slide-3.jpeg";
import imgD from "../../../public/home-slide-4.jpeg";
import imgE from "../../../public/home-slide-5.jpeg";
import imgF from "../../../public/home-slide-6.jpeg";
import imgG from "../../../public/home-slide-7.jpeg";
import imgH from "../../../public/home-slide-8.jpeg";
import setaEsquerda from "../../assets/arrow-left.svg";
import setaDireita from "../../assets/arrow-right.svg";

const imagensCarrosel = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH];

export default function Gallery({
  width = 1440,
  height = 875,
  radius = "4px",
  showThumbs = { width: 117, height: 95 },
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < imagensCarrosel.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="gallery" style={{ width: "100%", height: "100%" }}>
      <button
        onClick={handlePrev}
        className="gallery-button"
        disabled={currentIndex === 0}
      >
        <img src={setaEsquerda} alt="Anterior" />
      </button>

      <img
        src={imagensCarrosel[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ borderRadius: radius, width: "100%", height: "100%" }}
      />

      <button
        onClick={handleNext}
        className="gallery-button"
        disabled={currentIndex === imagensCarrosel.length - 1}
      >
        <img src={setaDireita} alt="Próximo" />
      </button>

      {showThumbs && (
        <div className="thumbnails">
          {imagensCarrosel.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumb ${index + 1}`}
              style={{
                width: showThumbs.width,
                height: showThumbs.height,
                borderRadius: radius,
                border: currentIndex === index ? "2px solid #007bff" : "none",
              }}
              onClick={() => setCurrentIndex(index)}
              className={`thumbnail ${currentIndex === index ? "active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
