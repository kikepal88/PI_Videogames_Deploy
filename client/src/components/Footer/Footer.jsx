import React from "react";

function Footer() {
  return(
    <footer>
      <section className="footer">
        <div className="footer_left">
          <p className="footer_created">Created with 🧡 by</p>
          <div className="footer_logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/Logokike.png?alt=media&token=a00a0fa3-d00d-4a98-b590-b6a853cabff1" alt="Logo Kike" className="img"/>
          </div>
          <p className="footer_and">and</p>
          <div className="henry_logo">
              <img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/LogoHenry.png?alt=media&token=9003324f-456e-4561-87a5-02e7ebd62f3d" alt="Henry's Logo" className="img"/>
          </div>
        </div>
        <div id="footer_menu-nav" className="footer_menu-nav">
          <p>Contact Me:</p>
          <nav>
            <ul>
              <li>
                <a href="https://github.com/kikepal88" target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/github_naranja.svg?alt=media&token=472e54c6-d452-4455-b2ca-91d1550ee2ee" alt="Gihub's Logo"/></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/omarpal/" target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/linkedin_naranja.svg?alt=media&token=544cec5d-e179-4247-9c15-fe766ca2eec4" alt="Gihub's Logo"/></a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  );
}

export default Footer;