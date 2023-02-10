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

        <div class="contImg">

        <p class="Textoimg">
                Acompanhe a moda e a atitude da rua com
                nossa coleção exclusiva! Com peças confortáveis
                e descoladas, você vai se sentir livre para
                encarar qualquer desafio com estilo.
        </p>
        <img class="Sliderimg" src={images[index]} alt={`Image ${index + 1}`} />

        </div>
        
      </div>
    );

}



