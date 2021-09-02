import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export default function App() {
    return (
      <>
        <UserProvider>

            <Router>
              <Switch>
                <UnprotectedRoute path="/login" exact>
                  <Login />
                </UnprotectedRoute>
  
                <Route path="/populate-database" exact>
                  <PopulateDatabase />
                </Route>
  
                <UnprotectedRoute path="/sign-up" exact>
                  <SignUp />
                </UnprotectedRoute>
    
                <ProtectedRoute path="/carddys" exact>
                  <PokemonList />
                </ProtectedRoute>
  
                <ProtectedRoute path="/carddy/:id" exact>
                  <MyPokemons />
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