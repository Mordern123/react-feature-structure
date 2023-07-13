import * as React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useGetAllPostsQuery } from "../../reducers/apiExample/apiExampleSlice";

const ApiExample1 = () => {
	const {data, loading, error} = useGetAllPostsQuery();

	console.log('Posts:' , data);
	console.log('Posts:' , loading);
	console.log('Posts:' , error);

	return (
		<React.Fragment>
			<h1>API Example(RTK Query)</h1>
			<Outlet />
		</React.Fragment>
	);
};
export default ApiExample1;