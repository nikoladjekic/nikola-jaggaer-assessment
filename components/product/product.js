import React from "react";
import Box from "@mui/material/Box";
import ProductOverview from "./top-section/product-overview";

const Product = ({ product }) => (
	<Box mt={10}>
		<ProductOverview
			title={product.title}
			supplierLink={product.supplier_link}
			supplierName={product.supplier_name}
			starsRating={product.stars}
			price={product.price}
			currency={product.currency}
			transportCosts={product.transport_costs}
			vatPercent={product.vat_percent}
			quantity={product.minimum_order_quantity}
		/>
	</Box>
);

export default Product;
