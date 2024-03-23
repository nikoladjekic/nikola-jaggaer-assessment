import React from "react";
import Header from "../components/header/header";
import productData from "../data/data.json";
import Product from "../components/product/product";

const App = () => {
	return (
		productData && (
			<>
				<Header title={productData.article.title} />
				<Product product={productData.article} />
			</>
		)
	);
};

export default App;
