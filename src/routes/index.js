import Home from "../pages/home";
import { useRoutes } from "react-router-dom";
import routeConfigs from "./route-configs";

const AppRoutes = () => {
    const pages = routeConfigs.flatMap((i) => i.routes);

    const routes = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        ...pages,
    ]);

    return routes;
}

export default AppRoutes;