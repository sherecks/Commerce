import './style/Slider.css'
import { useState, useEffect } from "react";

export function Sliderimg() {

    const [index, setIndex] = useState(0);
    const images = [
      "./src/assets/Imagens/5.png",
      "./src/assets/Imagens/6.png",
      "./src/assets/Imagens/7.png"
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((index + 1) % images.length);
      }, 4000);
      return () => clearInterval(intervalId);
    }, [index]);

  
    return (
      <div>
        <img class="Sliderimg" src={images[index]} alt={`Image ${index + 1}`} />
      </div>
    );

}



