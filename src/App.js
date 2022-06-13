import React from "react";
import { useSelector } from "react-redux";

// Components
import LoginHandler from "./components/layout/Login/LoginHandler";
import { logIn } from "./actions/SessionActions";
import { QuestionsList } from "./components/layout/Questions/QuestionsList";

function App() {
  const isLoggedIn = useSelector((state) => state.session.loggedIn);

  if (isLoggedIn) {
    return <QuestionsList></QuestionsList>;
  }
  return (
    <main>
      <LoginHandler />
    </main>
  );
}

export default App;
