import React from "react";
import { useSelector } from "react-redux";

// Components
import LoginHandler from "./components/layout/Login/LoginHandler";
import { logIn } from "./actions/SessionActions";
import { QuestionsList } from "./components/layout/Questions/QuestionsList";
import { QuestionsListOpen } from "./components/layout/Questions/QuestionsListOpen";
import { Information } from "./components/layout/UI/Information";
import { NavBar } from "./components/layout/UI/NavBar";
import { ProgressBar } from "./components/layout/UI/ProgressBar"
import { Learnpath } from "./components/layout/UI/Learnpath"
import { Login } from "./components/layout/Login/Login";
import { AdminStartpage, adminStartpage } from "./components/layout/Admin/AdminStartpage";
import { AdminAddMultipleChoice } from "./components/layout/Admin/AdminAddMultipleChoice";

function App() {
  const isLoggedIn = useSelector((state) => state.session.loggedIn);

  if (isLoggedIn) {
    return <QuestionsList></QuestionsList>;
  }
  return (
    <main>
      <NavBar />
      <AdminAddMultipleChoice />
    </main>
  );
}

export default App;
