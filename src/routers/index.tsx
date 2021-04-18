import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

const routes = [
  { path: "/", exact: true, main: () => <Home /> },
  {
    path: "/about",
    main: () => <About />,
  },
];

function Index() {
  return (
    <Switch>
      {routes.map((route, i) => {
        return (
          <Route key={i} path={route.path} exact={route.exact}>
            {route.main}
          </Route>
        );
      })}
    </Switch>
  );
}

export default Index;
