import React from "react";

export const Register = () => {
  return(
    <section className="loginWrapper">
      <section className="sectionLeft">
        <img src="/img/add-account.png" className="loginImg desktop-only"></img>
        <p className="secondary-text-color"> Equal flow exportbaan </p>
        <h1 className="main-text-color"> Account aanmaken </h1>
      </section>
      <section className="sectionRight">
          <form>
            <label htmlFor="email"> Email: </label>
            <input
              placeholder=""
            />

            <label htmlFor="voornaam"> Voornaam: </label>
            <input
              placeholder=""
            />

            <label htmlFor="password"> Wachtwoord: </label>
            <input
              placeholder=""
            />

            <label htmlFor="password2"> Wachtwoord herhalen: </label>
            <input
              placeholder=""
            />

            <section className="formButtonSection">
              <button type="submit" className="primary-button-style-1"> Account aanmaken </button>
              <a href="/"> Ik heb al een account </a>
            </section>
          </form>
      </section>
    </section>
  );
};
