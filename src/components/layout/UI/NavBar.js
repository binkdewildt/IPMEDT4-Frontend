import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { logOut } from "../../../actions/SessionActions";
import "./NavBar.css";

export const NavBar = () => {
  const score = useSelector((state) => state.quiz.score);
  const inQuiz = useSelector((state) => state.quiz.active);
  const loggedIn = useSelector((state) => state.session.loggedIn);

  //* Inits
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <section className="scoreSection__li">
          {loggedIn && inQuiz && (
            <>
              <p>Score:</p>
              <h1>{score}</h1>
            </>
          )}
        </section>

        <NavLink className="imgSection__li" to="/">
          <img src="/img/postnl-logo.png" alt="PostNL logo"></img>
        </NavLink>

        <section className="signoutSection__li">
          {/* <a onClick={() => dispatch(logOut())}>Uitloggen</a> */}

          <button
            type="button"
            className="a"
            onClick={() => {
              dispatch(logOut());
              navigate("/login");
            }}>
            Uitloggen
          </button>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
