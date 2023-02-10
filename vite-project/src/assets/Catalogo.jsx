import './style/Catalogo.css'
import { Link } from 'react-router-dom';

export function Catalogo(){

    {/* Teste com Constante */}
    const price = [
        "R$ 99,90"
    ];


    return(
        <div class="contCatalogo">

            {/* Primeiras */}
            <div class="Catalogo">
                <img class="imgCatalogo" src="./src/assets/Imagens/1.png"/>
                <p class="nameCatalogo">Camiseta Essencial</p>
                <p class="valorCatalogo">{price}</p>
                <button type="button" class="btn" ><Link class="buttonCatalogo" to="/Cart">Adicionar ao Carrinho</Link></button>
            </div>
            <div class="Catalogo">
                <img class="imgCatalogo" src="./src/assets/Imagens/2.png"/>
                <p class="nameCatalogo">Camiseta Clássica</p>
                <p class="valorCatalogo">R$:169,90</p>
                <button type="button" class="btn" ><Link class="buttonCatalogo" to="/Cart">Adicionar ao Carrinho</Link></button>
            </div>
            <div class="Catalogo">
                <img class="imgCatalogo" src="./src/assets/Imagens/3.png"/>
                <p class="nameCatalogo">Camiseta Casual</p>
                <p class="valorCatalogo">R$:89,90</p>
                <button type="button" class="btn" ><Link class="buttonCatalogo" to="/Cart">Adicionar ao Carrinho</Link></button>
            </div>
            <div class="Catalogo">
                <img class="imgCatalogo" src="./src/assets/Imagens/4.png"/>
                <p class="nameCatalogo">Camiseta Conforto</p>
                <p class="valorCatalogo">R$:259,90</p>
                <button type="button" class="btn" ><Link class="buttonCatalogo" to="/Cart">Adicionar ao Carrinho</Link></button>
            </div>


            {/* Segundas */}
            <div class="Catalogo">
                <img class="imgCatalogo" src="./src/assets/Imagens/8.png"/>
                <p class="nameCatalogo">Camiseta Casual</p>
                <p class="valorCatalogo">R$:59,90</p>
                <button type="button" class="btn" ><Link class="buttonCatalogo" to="/Cart">Adicionar ao Carrinho</Link></button>
            </div>
            <div class="Catalogo">
                <img class="imgCatalogo" src="./src/assets/Imagens/9.png"/>
                <p class="nameCatalogo">Camiseta Essencial</p>
                <p class="valorCatalogo">R$:159,90</p>
                <button type="button" class="btn" ><Link class="buttonCatalogo" to="/Cart">Adicionar ao Carrinho</Link></button>
            </div>
            <div class="Catalogo">
                <img class="imgCatalogo" src="./src/assets/Imagens/10.png"/>
                <p class="nameCatalogo">Camiseta Praia</p>
                <p class="valorCatalogo">R$:199,90</p>
                <button type="button" class="btn" ><Link class="buttonCatalogo" to="/Cart">Adicionar ao Carrinho</Link></button>
            </div>
            <div class="Catalogo">
                <img class="imgCatalogo" src="./src/assets/Imagens/4.png"/>
                <p class="nameCatalogo">Camiseta Conforto</p>
                <p class="valorCatalogo">R$:259,90</p>
                <button type="button" class="btn" ><Link class="buttonCatalogo" to="/Cart">Adicionar ao Carrinho</Link></button>
            </div>
            <div class="Catalogo">
                <img class="imgCatalogo" src="./src/assets/Imagens/2.png"/>
                <p class="nameCatalogo">Camiseta Conforto</p>
                <p class="valorCatalogo">R$:169,90</p>
                <button type="button" class="btn" ><Link class="buttonCatalogo" to="/Cart">Adicionar ao Carrinho</Link></button>
            </div>


        </div>
    );
}