import Example1 from "../pages/example/example1";
import Example2 from "../pages/example/example2";
import ExampleChild from "../pages/example/exampleChild";

const exampleRoutes = [
	{
		path: "/example1",
		element: <Example1 />,
		children: [
			{
				path: "child",
				element: <ExampleChild />,
			},
		],
	},
	{
		path: "/example2",
		element: <Example2 />,
	},
];

export default exampleRoutes;