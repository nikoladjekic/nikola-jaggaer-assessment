import React from "react";
import Box from "@mui/material/Box";
import ProductOverview from "./top-section/product-overview";
import ProductDescription from "./bottom-section/product-description";
import ProductDetails from "./bottom-section/product-details";
import { colors } from "../../constants/colors";

const Product = ({ product }) => (
	<>
		<Box my={10} pt={3}>
			<ProductOverview
				shortDescription={product.description_short}
				supplierLink={product.supplier_link}
				supplierName={product.supplier_name}
				starsRating={product.stars}
				price={product.price}
				currency={product.currency}
				transportCosts={product.transport_costs}
				vatPercent={product.vat_percent}
				quantity={product.minimum_order_quantity}
				quantityUnit={product.unit}
			/>
		</Box>
		<Box py={5} px={3} bgcolor={colors.lightGray}>
			<ProductDescription description={product.description_long} />
			<Box mt={5}>
				<ProductDetails
					features={product.features}
					attachments={product.attachments}
					keywords={product.keywords}
				/>
			</Box>
		</Box>
	</>
);

export default Product;
