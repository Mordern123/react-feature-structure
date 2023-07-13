import * as React from "react";
import { useState, useEffect } from "react";
import { useGetAllPostsQuery } from "../../reducers/apiExample/apiExampleSlice";

const ApiExampleChild = () => {
	const {data, loading, error} = useGetAllPostsQuery();
	console.log('Child:' , data);
	console.log('Child:' , loading);
	console.log('Child:' , error);
	return <h1>Example Child</h1>;
};
export default ApiExampleChild;