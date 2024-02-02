/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import logob from "./logob.svg";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    const [active,setActive] = useState(false);
    return (
        <header>
            <nav class="navbar is-link" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <div className="brand">
                        <img src={logob} alt="logob"></img>
                        <span className="logob">
                            Mis violetas
                        </span>
                    </div>

                    <a role="button" 
                        onClick={()=> {
                            setActive(!active)
                    }}
                    className={`navbar-burger burger ${active && 'is-active'}`}
                    aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${active && 'is-active'}`}>
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Inicio
                        </a>

                        <a class="navbar-item">
                            Nosotros
                        </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Productos
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    Anillos
                                </a>
                                <a class="navbar-item">
                                    Diademas
                                </a>
                                <a class="navbar-item">
                                    Collares
                                </a>
                                <hr class="navbar-divider"/>
                                <a class="navbar-item">
                                    Reportar un problema
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerCart'>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    );
}
export default NavBar;