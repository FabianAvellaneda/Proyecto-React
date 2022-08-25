import React from 'react'
import Icono from "../../img/Icono/Icon.png";

export const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={ Icono } alt="" height="100" width="200"/>
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
        </header>
    )
}