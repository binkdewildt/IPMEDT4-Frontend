import React from "react";
import "./NavBar.css";

export const NavBar = () => {
    return (
    <header>
      <nav>
        <section className="scoreSection__li">
                <p>
                    Score:
                </p>
                <h1>
                    1200
                </h1>
        </section>
        <section className="imgSection__li">
                <img src="/img/postnl-logo.png"></img>
        </section>
        <section className="signoutSection__li">
                <a href="">Uitloggen</a>
            </section>   
      </nav>
    </header>
    );
  };

export default NavBar;