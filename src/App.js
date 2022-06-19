import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthRoute from "./RoutesMiddleware/AuthRoute";
import AdminRoute from "./RoutesMiddleware/AdminRoute";

// Components
import { QuestionsList } from "./components/layout/Questions/QuestionsList";
import { NavBar } from "./components/layout/UI/NavBar";
import { ProgressBar } from "./components/layout/UI/ProgressBar";
import { Learnpath } from "./components/layout/UI/Learnpath";
import { Login } from "./components/layout/Login/Login";
import { Register } from "./components/layout/Login/Register";
import { AdminStartpage } from "./components/layout/Admin/AdminStartpage";
import { AdminAddOpenQuestion } from "./components/layout/Admin/AdminAddOpenQuestion";
import { AdminAddMultipleChoice } from "./components/layout/Admin/AdminAddMultipleChoice";

import { Loading } from "./components/layout/UI/Loading";

function App() {
  //* Variables
  const isLoggedIn = useSelector((state) => state.session.loggedIn);
  const inQuiz = useSelector((state) => state.quiz.inQuiz);

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
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

            <Route
              exact
              path="/dashboard"
              element={
                <AdminRoute>
                  <AdminStartpage />
                </AdminRoute>
              }
            />

            <Route
              exact
              path="/dashboard/addOpenQuestion"
              element={
                <AdminRoute>
                  <AdminAddOpenQuestion />
                </AdminRoute>
              }
            />

            <Route
              exact
              path="/dashboard/addMcQuestion"
              element={
                <AdminRoute>
                  <AdminAddMultipleChoice />
                </AdminRoute>
              }
            />

            <Route
              exact
              path="/"
              element={
                <AuthRoute>
                  <Learnpath />
                </AuthRoute>
              }
            />

            <Route exact path="/quiz" element={<QuestionsList />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          {isLoggedIn && inQuiz && <ProgressBar />}
        </main>
      </Suspense>
    </Router>
  );
}

export default App;
