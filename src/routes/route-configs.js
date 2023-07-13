import exampleRoutes from "./example-routes";
import apiExampleRoutes from "./api-example-routes";

const routeConfigs = [
	{
		name: "example",
		title: "Example",
		routes: exampleRoutes,
	},
	{
		name: "apiExample",
		title: "apiExample",
		routes: apiExampleRoutes,
	}
];

export default routeConfigs;