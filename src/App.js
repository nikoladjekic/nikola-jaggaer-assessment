import React from "react";
import Header from "../components/header/header";
import productData from "../data/data.json";

const App = () =>
	productData && (
		<>
			<Header title={productData.article.title} />
			<div>Hello, world!</div>
		</>
	);

export default App;
