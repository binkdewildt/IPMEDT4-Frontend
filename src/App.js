import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoute from "./RoutesMiddleware/AuthRoute";

// Components
import { LoginHandler } from "./components/layout/Login/LoginHandler";
import { logIn } from "./actions/SessionActions";
import { QuestionsList } from "./components/layout/Questions/QuestionsList";
import { QuestionsListOpen } from "./components/layout/Questions/QuestionsListOpen";
import { Information } from "./components/layout/UI/Information";
import { NavBar } from "./components/layout/UI/NavBar";
import { ProgressBar } from "./components/layout/UI/ProgressBar";
import { Learnpath } from "./components/layout/UI/Learnpath";
import { Login } from "./components/layout/Login/Login";
import { Register } from "./components/layout/Login/Register";
import {
  AdminStartpage,
  adminStartpage,
} from "./components/layout/Admin/AdminStartpage";
import { AdminAddMultipleChoice } from "./components/layout/Admin/AdminAddMultipleChoice";
import { AdminAddOpenQuestion } from "./components/layout/Admin/AdminAddOpenQuestion";

import { Loading } from "./components/layout/UI/Loading";

function App() {
  const isLoggedIn = useSelector((state) => state.session.loggedIn);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <main>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={
                <AuthRoute>
                  <AdminStartpage />
                </AuthRoute>
              }
            />

            <Route
              path="/"
              element={
                <AuthRoute>
                  <Learnpath />
                  {/* <AdminStartpage /> */}
                </AuthRoute>
              }
            />

            <Route path="/quiz" element={<QuestionsList />} />
            {/* <Route path="/" element={<Learnpath />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/quiz" element={<QuestionsList />} /> */}

            {/* <AuthRoute path="/login" type="quest">
            <Login />
          </AuthRoute>

          <AuthRoute path="/" type="private">
            <Learnpath />
          </AuthRoute> */}
          </Routes>

          {isLoggedIn && <ProgressBar />}
        </main>
      </Suspense>
    </Router>
  );
}

export default App;
