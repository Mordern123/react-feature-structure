import * as React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const ExampleChild = () => {
	return (
		<>
			<h1>Example Child</h1>
			<Outlet />
		</>
	);
};
export default ExampleChild;