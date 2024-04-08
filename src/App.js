import { Suspense } from "react";
import LogIn from "./LogIn";
import Signup from "./SignUp";
import { Route, Switch, useHistory } from "react-router-dom/cjs/react-router-dom";
import Home from "./Home";
import CompanyInfo from "./CompanyInfo";
function App() {
  const history=useHistory()
  const isLogin=JSON.parse(localStorage.getItem("signup"))
  if(!isLogin){
    history.push("/signup")
  }
  return (
    <>
      <Suspense>
          <Switch> 
            <Route path="/" exact>
              <LogIn/>
            </Route>
            <Route path="/signup" exact>
              <Signup/>
            </Route>
            <Route path="/home" exact>
              <Home/>
            </Route>
            <Route path="/companyinfo" exact>
              <CompanyInfo/>
            </Route>
          </Switch>
        </Suspense>
    </>
  );
}

export default App;
