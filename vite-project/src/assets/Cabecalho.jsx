import './style/Cab.css';
import { Link } from 'react-router-dom';


export function Cabecalho (){ 
    return(
        <header>
            <div class="contHeader">
                <h1><Link class="Title" to="/">Commerce</Link></h1>


                <ul>
                    <li><Link class="textHeader" to="/Product">Produtos</Link></li>
                    <li class="textHeader">Categorias</li>
                    <li class="textHeader">Ofertas</li>
                    <li><Link class="textHeaderIcon" to="/Cart"><span class="material-symbols-outlined">shopping_cart</span></Link></li>
                </ul>
                
            </div>
        </header>
    );
}