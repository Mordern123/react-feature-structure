import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";


const Main = () => {
	return (
		<BrowserRouter>
			<div>
				<AppRoutes />
			</div>
		</BrowserRouter>
	);
};

export default Main;