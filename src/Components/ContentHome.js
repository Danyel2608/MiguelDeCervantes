import './ContentHome.css';

function ContentHome() {
    return (
        <div className='content-menu'>
            <h3>Nuestra Carta</h3>
            <div className="menu-cervantes" id='nuestra-carta'>
                <div className="menu-left">
                    <div className="tostas">
                        <div className="tostas-precio">
                            <h4 className='title'>Pinchos</h4>
                            <h4>1,20€</h4>
                        </div>
                        <ul>
                            <li>Atún con tomate rallado y aceite</li>
                            <li>Tortilla de patatas</li>
                            <li>Lomo con queso</li>
                            <li>Bacon con queso</li>
                        </ul>
                    </div>
                    <div className="sándwiches">
                        <h4 className='title'>Sándwiches</h4>
                        <ul>
                            <li><div className="mixto">
                                <p>Mixto(jamón y queso)</p>
                                <p><strong>1,50€</strong></p>
                            </div></li>
                            <li><div className="vegetal">
                                <p>Vegetal(atún,lechuga,tomate y mayonesa)</p>
                                <p><strong>1,80€</strong></p>
                            </div></li>
                        </ul>
                    </div>
                    <div className="bocadillos">
                        <div className="bocadillos-precio">
                            <h4 className='title'>Bocadillos Fríos</h4>
                            <h4>2,20€</h4>
                        </div>
                        <ul>
                            <li><div className='bocadillos-info'>
                                <p><strong>Bocadillos de embutido</strong></p>
                                <p>Salchichón, chorizo, paté, pavo, jamón york y
                                    queso</p>
                            </div></li>
                        </ul>
                    </div>
                    <div className="bocadillos">
                        <div className="bocadillos-precio">
                            <h4 className='title'>Bocadillos Calientes</h4>
                            <h4>2,50€</h4>
                        </div>
                        <div className="bocadillos-calientes-info">
                            <p>*Se le pone un poquito de aove de Jaén</p>
                        </div>
                        <ul>
                            <li><div>
                                <p><strong>Federico García Lorca</strong></p>
                                <p>Bocadillo de lomo con queso*</p>
                            </div></li>
                            <li><div>
                                <p><strong>Gustavo Adolfo Bécquer</strong></p>
                                <p>Bocadillo de lomo o magreta con alioli</p>
                            </div></li>
                            <li><div>
                                <p><strong>Lope de Vega</strong></p>
                                <p>Bocadillo de lomo,queso y tomate*</p>
                            </div></li>
                            <li><div>
                                <p><strong>Federico de Quevedo</strong></p>
                                <p>Bocadillo de pechuga de pollo con tomate y queso*</p>
                            </div></li>
                            <li><div>
                                <p><strong>Sancho Panza</strong></p>
                                <p>Bocadillo de bacon con queso</p>
                            </div></li>
                            <li><div>
                                <p><strong>Antonio Machado</strong></p>
                                <p>Bocadillo de tortilla de patatas*</p>
                            </div></li>
                            <li><div>
                                <p><strong>Miguel de Cervantes</strong></p>
                                <p>Bocadillo de huevo cocido,tomate,lechuga y atún</p>
                            </div></li>
                        </ul>
                    </div>
                    <div className="tostadas">
                        <div className="tostadas-precio">
                            <h4 className='title'>Tostadas</h4>
                            <h4>1,10€</h4>
                        </div>
                        <ul>
                            <li><div>
                                <p>Tostada de tomate con aove de Jaén</p>
                            </div></li>
                            <li><div>
                                <p>Tostada de mantequilla y mermelada</p>
                            </div></li>
                            <li><div>
                                <p>Tostada con jamón york y queso</p>
                            </div></li>
                        </ul>
                    </div>
                    <div className="bollería">
                        <h4 className='title'>Bollería y dulces</h4>
                        <ul>
                            <li><div>
                                <p>Bolleria dulce</p>
                                <p><strong>1,20€</strong></p>
                            </div></li>
                            <li><div>
                                <p>Kit-kat y variados</p>
                                <p><strong>1,00€</strong></p>
                            </div></li>
                        </ul>
                    </div>
                    <div className="pizzetas">
                        <div className="pizzetas-precio">
                            <h4 className='title'>Pizzetas</h4>
                            <h4>1,80€</h4>
                        </div>
                    </div>
                    <div className="quesadillas">
                        <h4 className='title'>Quesadillas</h4>
                        <ul>
                            <li>
                                <div>
                                    <p>Quesadilla de tortilla,bacon,tomate,lechuga y queso</p>
                                    <p><strong>3,00€</strong></p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Media quesadilla</p>
                                    <p><strong>1,80€</strong></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-rigth">
                    <div className="aperitivos">
                        <h4 className='title'>Aperitivos</h4>
                        <ul>
                            <li><div>
                                <p>Nuggets de pollo</p>
                                <p><strong>1,80€</strong></p>
                            </div></li>
                            <li><div>
                                <p>Aceitunas</p>
                                <p><strong>1,00€</strong></p>
                            </div></li>
                            <li><div>
                                <p>Patatas fritas dos salsas</p>
                                <p><strong>1,00€</strong></p>
                            </div></li>
                        </ul>
                    </div>
                    <div className="hamburguesas">
                        <div className="hamburguesas-precio">
                            <h4 className='title'>Hamburguesas</h4>
                            <h4>5,00€</h4>
                        </div>
                        <ul>
                            <li><div>
                                <p><strong>Hamburguesa mixta</strong>con tomate,
                                    lechuga, cebolla, bacon, queso, ketchup
                                    y mayonesa acompañada de patatas
                                    fritas o ensalada.
                                </p>
                            </div></li>
                            <li><div>
                                <p><strong>Hamburguesa de pollo</strong>con lechuga,
                                    tomate, cebolla, queso, ketchup y
                                    mayonesa acompañada de patatas
                                    fritas o ensalada.

                                </p>
                            </div></li>
                        </ul>
                    </div>
                    <div className="empanadas">
                        <h4 className='title'>Empanadas</h4>
                        <ul>
                            <li><div>
                                <p>Empanada completa(por encargo)</p>
                                <p><strong>9€</strong></p>
                            </div></li>
                            <li><div>
                                <p>Trozo de empanada</p>
                                <p><strong>1,50€</strong></p>
                            </div></li>
                        </ul>
                    </div>
                    <div className="platos-combinados">
                        <div className="platos-combinados-precio">
                            <h4 className='title'>Platos combinados</h4>
                            <h4>5,00€</h4>
                        </div>
                        <ul>
                            <li>Dos huevos fritos con bacon, patatas fritas y
                                ensalada
                            </li>
                            <li>Dos huevos fritos con lomo, patatas fritas y
                                ensalada
                            </li>
                            <li>Dos huevos fritos con pechuga de pollo,
                                patatas fritas y ensalada
                            </li>
                        </ul>
                    </div>
                    <div className="bebidas-calientes">
                        <h4 className='title'>Bedidas Calientes</h4>
                        <ul>
                            <li><div>
                                <p>Café solo,manchado o con leche</p>
                                <p><strong> 1,20€</strong></p>
                            </div>
                            </li>
                            <li><div>
                                <p>Café bombón</p>
                                <p><strong> 1,40€</strong></p>
                            </div>
                            </li>
                            <li><div>
                                <p>Café americano</p>
                                <p><strong> 1,20</strong></p>
                            </div>
                            </li>
                            <li><div>
                                <p>Infusiones</p>
                                <p><strong> 1,20€</strong></p>
                            </div>
                            </li>
                            <li><div>
                                <p>Colacao</p>
                                <p><strong> 1,20€</strong></p>
                            </div>
                            </li>
                            <p>*Tenemos leche de soja,desnatada y sin lactosa</p>
                        </ul>
                    </div>
                    <div className="bebidas-frias">
                        <h4 className='title'>Bedidas Frías</h4>
                        <ul>
                            <li><div>
                                <p>Refrescos</p>
                                <p><strong> 1,20€</strong></p>
                            </div>
                            </li>
                            <li><div>
                                <p>Cerveza 0,0</p>
                                <p><strong> 1,20€</strong></p>
                            </div>
                            </li>
                            <li><div>
                                <p>Zumo</p>
                                <p><strong> 1,20€</strong></p>
                            </div>
                            </li>
                            <li><div>
                                <p>Agua(0,50 ml)</p>
                                <p><strong> 1,00€</strong></p>
                            </div>
                            </li>
                            <li><div>
                                <p>Agua(1,50 l)</p>
                                <p><strong> 1,50€</strong></p>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className="promociones">
                        <h4 className="title">¡PROMOCIONES!</h4>
                        <ul>
                            <li>
                                <div>
                                    <p>Café + trozo de tarta casera</p>
                                    <p><strong>3,00€</strong></p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Café + trozo de empanada</p>
                                    <p><strong>2,40€</strong></p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Refresco + trozo de empanada</p>
                                    <p><strong>2,50€</strong></p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Refresco + picho de tortilla</p>
                                    <p><strong>2,20€</strong></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-diario">
                        <div className="menu-dia-precio"><div>
                            <h4 className='title'>Menú del día</h4>
                            <h4>8€</h4>
                        </div>
                            <p>Incluye pan,una bebida,postre o café</p></div>
                        <div className="plato-dia">
                            <div>
                                <h4 className='title'>Plato del día</h4>
                                <h4>5€</h4>
                            </div>
                            <p>Incluye pan,una bebida,postre o café</p>
                        </div>
                    </div>
                    <div className="info-menu-diario">
                        <p>*EL MENÚ Y PALTO DEL DÍA HAY QUE RESERVARLO CON 24H DE ANTELACIÓN</p>
                    </div>
                    <div className="racion">
                        <div className="racion-para-llevar">
                            <div>
                                <h4 className='title'>Ración para llevar</h4>
                                <h4>4€</h4>
                            </div>
                        </div>
                    </div>
                    <div className="promo">
                        <h3>¡PROMO DESAYUNOS!</h3>
                        <h3>COMBINA TU CAFÉ CON TOSTADA O BOLLERIA POR 2,20€</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentHome;
