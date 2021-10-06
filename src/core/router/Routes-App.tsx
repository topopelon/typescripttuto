import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { session } from "../../features/auth/domain/services/session";
import UserContext from "../context/userContext";
import { routerManager } from "./user-control/router-manager";

export const RoutesApp = () => {
  const [user, setUser] = useState(session.getUser());

  useEffect(() => {
    setUser(session.getUser());
  }, []);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          {routerManager(user).map((route, index) => {
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
    </UserContext.Provider>
  );
};
