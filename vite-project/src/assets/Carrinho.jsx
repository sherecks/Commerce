import './style/Cart.css'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export function Carrinho(){

    {/* Teste com Constante */}
    const price = [
        "R$ 99,90",
        "R$ 169,90",
        "R$ 209,90",
        "R$ 109,90",
        "R$ 69,90",
        "R$ 49,90"
    ];

    const [index, setIndex] = useState(0);
    const images = [
      "./src/assets/Imagens/1.png",
      "./src/assets/Imagens/2.png",
      "./src/assets/Imagens/10.png",
      "./src/assets/Imagens/9.png",
      "./src/assets/Imagens/3.png",
      "./src/assets/Imagens/8.png"
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((index + 1) % images.length);
      }, 2500);
      return () => clearInterval(intervalId);
    }, [index]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((index + 1) % price.length);
        }, 2500);
        return () => clearInterval(intervalId);
      }, [index]);

    return(
        <div class="contCart">

            <img class="imgCart" src={images[index]} alt={`Image ${index + 1}`}/>

            <div class="cont2Cart">
                <p class="nameCart">Camiseta Essencial</p>
                <p class="valorCart">{price[index]}</p>
                <button href="" type="button" class="buttonCart">Comprar</button>
                
                <p class="descriptionCart">
                Esta camiseta é uma peça clássica.
                Feita de algodão macio e resistente, ela tem um corte casual
                que permite uma ampla liberdade de movimentos.
                Está camiseta é perfeita para o uso
                diário.
                AI Design Aspect...
                </p>

                <button href="" type="button" class="buttonCartBack"><Link class="CartBack" to="/">Continuar Comprando</Link></button>
            </div>

        </div>
    )
}