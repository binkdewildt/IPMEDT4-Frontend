import React from "react";
import { useSelector } from "react-redux";

// Components
import LoginHandler from "./components/layout/Login/LoginHandler";
import { logIn } from "./actions/SessionActions";
import { QuestionsList } from "./components/layout/Questions/QuestionsList";
import { Information } from "./components/layout/UI/Information";
import { NavBar } from "./components/layout/UI/NavBar";
import { ProgressBar } from "./components/layout/UI/ProgressBar"
import { Login } from "./components/layout/Login/Login";

function App() {
  const isLoggedIn = useSelector((state) => state.session.loggedIn);

  if (isLoggedIn) {
    return <QuestionsList></QuestionsList>;
  }
  return (
    <main>
      <NavBar />
      <Information />
      <ProgressBar />
    </main>
  );
}

export default App;
