import Example1 from "../pages/example/example1";
import Example2 from "../pages/example/example2";
import ExampleChild from "../pages/example/exampleChild";
import ExampleChild2 from "../pages/example/exampleChild2";

const exampleRoutes = [
	{
		path: "/example1",
		element: <Example1 />,
		children: [
			{
				path: "child",
				element: <ExampleChild />,
				children: [
					{
						path: "child2",
						element: <ExampleChild2 />,
					},
				],
			},
			{
				path: "child2",
				element: <ExampleChild2 />,
			},
		],
	},
	{
		path: "/example2",
		element: <Example2 />,
	},
];

export default exampleRoutes;