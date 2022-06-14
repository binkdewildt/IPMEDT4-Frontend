import React from "react";
import { useSelector } from "react-redux";

// Components
import LoginHandler from "./components/layout/Login/LoginHandler";
import { logIn } from "./actions/SessionActions";
import { QuestionsList } from "./components/layout/Questions/QuestionsList";
import { NavBar } from "./components/layout/UI/NavBar";

function App() {
  const isLoggedIn = useSelector((state) => state.session.loggedIn);

  if (isLoggedIn) {
    return <QuestionsList></QuestionsList>;
  }
  return (
    <main>
      <NavBar />
      <QuestionsList />
    </main>
  );
}

export default App;
