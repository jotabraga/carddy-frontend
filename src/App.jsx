import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useContext } from "react";
import UserContext, { UserProvider } from "./contexts/UserContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";

export default function App() {
    return (
      <>
        <UserProvider>

            <Router>
              <Switch>
                <UnprotectedRoute path="/" exact>
                  <SignIn />
                </UnprotectedRoute>

                <UnprotectedRoute path="/sign-up" exact>
                  <SignUp />
                </UnprotectedRoute>

                <ProtectedRoute path="/carddys" exact>
                  <MainPage />
                </ProtectedRoute>

              </Switch>
            </Router>

        </UserProvider>
      </>
    );
  }

  function ProtectedRoute({ redirect = "/login", ...props }) {
    const { token } = useContext(UserContext);

    if (!token) {
      return <Redirect to={redirect} />;
    }

    return <Route {...props} />;
  }

  function UnprotectedRoute({ redirect = "/", ...props }) {
    const { token } = useContext(UserContext);

    if (token) {
      return <Redirect to={redirect} />;
    }

    return <Route {...props} />;
  }