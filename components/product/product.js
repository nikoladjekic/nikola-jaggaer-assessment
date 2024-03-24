import React from "react";
import Box from "@mui/material/Box";
import ProductImages from "./top-section/product-images";
import ProductOverview from "./top-section/product-overview";
import ProductDescription from "./bottom-section/product-description";
import ProductDetails from "./bottom-section/product-details";
import ProductPricing from "./bottom-section/product-pricing";
import { colors } from "../../utils/constants";

const Product = ({ product }) => (
	<>
		<Box mt={9} px={2} py={5} display={"flex"}>
			<ProductImages images={product?.images} />
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
			<Box mt={5} display={"flex"}>
				<ProductDetails
					features={product.features}
					attachments={product.attachments}
					keywords={product.keywords}
				/>
				<ProductPricing
					minOrderQuantity={product.minimum_order_quantity}
					shipping={product.transport_costs}
					delivery={product.delivery_time}
					quantityUnit={product.unit}
					currency={product.currency}
					priceBreaks={product.price_breaks}
					keywords={product.keywords}
				/>
			</Box>
		</Box>
	</>
);

export default Product;
