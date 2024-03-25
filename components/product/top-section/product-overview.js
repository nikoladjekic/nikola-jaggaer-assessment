import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { colors } from "../../../utils/constants";
import { ReactComponent as DiscountIcon } from "../../../icons/discount.svg";
import { ReactComponent as AddIcon } from "../../../icons/add.svg";

const ProductOverview = ({
	shortDescription,
	supplierLink,
	supplierName,
	starsRating,
	price,
	currency,
	transportCosts,
	vatPercent,
	quantity,
	quantityUnit,
}) => {
	const [ratingValue, setRatingValue] = useState(starsRating);

	const renderTitle = () => (
		<Typography
			variant="subtitle1"
			component="div"
			sx={{ lineHeight: "18px" }}
			mb={1}
		>
			{shortDescription}
		</Typography>
	);

	const renderSupplier = () => (
		<Box component="div">
			<Typography variant="body2" component="span" color={colors.gray}>
				by
			</Typography>
			<Link href={supplierLink} underline="none" pl={1}>
				<Typography variant="body2" sx={{ display: "inline" }}>
					{supplierName}
				</Typography>
			</Link>
		</Box>
	);

	const renderRating = () => (
		<Box component="div" mt={2} mb={3}>
			<Rating
				value={ratingValue}
				onChange={(event, newValue) => {
					setRatingValue(newValue);
				}}
			/>
		</Box>
	);

	const renderPrice = () => (
		<>
			<Box display={"inline-flex"} alignItems={"center"}>
				<Typography variant="body1" component="span" mr={1}>
					{price} {currency}
				</Typography>
				<Typography
					variant="subtitle2"
					component="span"
					color={colors.gray}
					mr={1}
				>
					+ {transportCosts} {currency} shipping
				</Typography>
				<DiscountIcon width="18px" />
			</Box>
			<Typography variant="subtitle2" color={colors.gray}>
				all prices incl. {vatPercent}% taxes
			</Typography>
		</>
	);

	const renderQuantity = () => (
		<Box display={"inline-flex"} alignItems={"center"} sx={{ mt: "auto" }}>
			<TextField
				id="outlined-basic"
				size="small"
				label={quantity}
				variant="outlined"
				sx={{ width: "60px" }}
			/>
			<Typography variant="body2" component="span" ml={1} mr={3}>
				{quantityUnit}
			</Typography>
			<Button
				variant="contained"
				size="small"
				color="error"
				sx={{ background: colors.red, textTransform: "none" }}
				startIcon={<AddIcon width="20px" fill={colors.white} />}
			>
				Add to cart
			</Button>
		</Box>
	);

	return (
		<Box width={400} height={350} display={"flex"} flexDirection={"column"}>
			{renderTitle()}
			{renderSupplier()}
			{renderRating()}
			{renderPrice()}
			{renderQuantity()}
		</Box>
	);
};

export default ProductOverview;
