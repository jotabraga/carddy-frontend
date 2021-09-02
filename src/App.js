import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useContext } from "react";
import UserContext, { UserProvider } from "./contexts/UserContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

export default function App() {
    return (
      <>
        <UserProvider>

            <Router>
              <Switch>
                <UnprotectedRoute path="/login" exact>
                  <Login />
                </UnprotectedRoute> 
  
                <UnprotectedRoute path="/sign-up" exact>
                  <SignUp />
                </UnprotectedRoute>
    
                <ProtectedRoute path="/carddys" exact>
                  <Dashboard />
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