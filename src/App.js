import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoute from "./RoutesMiddleware/AuthRoute";
import AdminRoute from "./RoutesMiddleware/AuthRoute";

// Components
import { QuestionsList } from "./components/layout/Questions/QuestionsList";
import { NavBar } from "./components/layout/UI/NavBar";
import { ProgressBar } from "./components/layout/UI/ProgressBar";
import { Learnpath } from "./components/layout/UI/Learnpath";
import { Login } from "./components/layout/Login/Login";
import { Register } from "./components/layout/Login/Register";
import { AdminStartpage } from "./components/layout/Admin/AdminStartpage";

import { Loading } from "./components/layout/UI/Loading";

function App() {
  //* Variables
  const isLoggedIn = useSelector((state) => state.session.loggedIn);
  const inQuiz = useSelector((state) => state.quiz.active);

  //* Inits
  const dispatch = useDispatch();

  //* Effects
  useEffect(() => {
    let session = JSON.parse(sessionStorage.getItem("session"));
    if (session) {
      dispatch({ type: "SET_SESSION", payload: session });
    }
  }, []);

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
                <AdminRoute>
                  <AdminStartpage />
                </AdminRoute>
              }
            />

            <Route
              path="/"
              element={
                <AuthRoute>
                  <Learnpath />
                </AuthRoute>
              }
            />

            <Route path="/quiz" element={<QuestionsList />} />
          </Routes>

          {isLoggedIn && inQuiz && <ProgressBar />}
        </main>
      </Suspense>
    </Router>
  );
}

export default App;
