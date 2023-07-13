import ApiExampleChild from "../pages/apiexample/apiExampleChild";
import ApiExample1 from "../pages/apiexample/apiExample1";

const apiExampleRoutes = [
	{
		path: "/apiexample1",
		element: <ApiExample1 />,
		children: [
			{
				path: "child",
				element: <ApiExampleChild/>,
			},
		],
	},
];

export default apiExampleRoutes;