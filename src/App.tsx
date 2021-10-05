import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { routerManager } from "./core/router/user-control/router-manager";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routerManager().map((route, index) => {
          return (
            <Route
              exact={route.exact}
              path={route.path}
              key={index}
              component={(props: any) => {
                return <route.component {...props} />;
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
