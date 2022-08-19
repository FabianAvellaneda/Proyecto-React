import React from 'react'
import Icono from "../../img/Icono/icon.jpg";

export const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={ Icono } alt="" width="100"/>
                </div>
            </a>

            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
            </ul>
            <div classNAme="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total"></span>
            </div>
        </header>
    )
}