import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return(
    <header>
      <section className="header">
        <div className="header_left">
          <Link to='/'>
            <div className="henry_logo">
              <img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/LogoHenry.png?alt=media&token=9003324f-456e-4561-87a5-02e7ebd62f3d" alt="Henry's Logo" className="img"/>
            </div>
          </Link>
          <h3>Games</h3>
          <div className="control_logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/game-controller_naranja.svg?alt=media&token=b40d1a60-3ec7-4e0e-85ba-95f2fc3b6103" alt="Controller's logo" className="img"/>
          </div>
        </div>
        <div className="header_right">
          <a href="https://github.com/kikepal88" target="_blank" rel="noreferrer">
            <div className="github_logo">
              <img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/github_naranja.svg?alt=media&token=472e54c6-d452-4455-b2ca-91d1550ee2ee" alt="Gihub's Logo" className="img"/>
            </div>
            <p>Repository</p>
          </a>
        </div>
      </section>
    </header>
  );
}

export default Header;
