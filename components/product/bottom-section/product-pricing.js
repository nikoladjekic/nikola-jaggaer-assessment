import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { colors } from "../../../utils/constants";
import {
	renderGraySubtitle,
	renderRedUppercaseTitle,
} from "../../../utils/functions";

const ProductPricing = ({
	minOrderQuantity,
	shipping,
	delivery,
	quantityUnit,
	currency,
	priceBreaks,
}) => {
	const getListItem = ({ text, quantity, unit }) => (
		<ListItem sx={{ display: "list-item", padding: "0px" }}>
			<Typography
				variant="body2"
				color={colors.gray}
				component="span"
				mr={1}
			>
				{text}:
			</Typography>
			<Typography variant="body2" component="span" mr={1}>
				{quantity}
			</Typography>
			<Typography variant="body2" component="span">
				{unit}
			</Typography>
		</ListItem>
	);

	const renderOrderingDetailsList = () => (
		<List
			sx={{ margin: "16px 0", padding: "0 16px", listStyleType: "disc" }}
		>
			{getListItem({
				text: "Minimum Order",
				quantity: minOrderQuantity,
				unit: quantityUnit,
			})}
			{getListItem({
				text: "Shipping",
				quantity: shipping,
				unit: currency,
			})}
			{getListItem({
				text: "Delivery",
				quantity: delivery,
				unit: "days",
			})}
		</List>
	);

	const renderPriceBreaksTable = () => (
		<Table size="small" sx={{ width: "auto" }}>
			<TableBody>
				{Object.entries(priceBreaks).map((priceBreak) => (
					<TableRow key={priceBreak[0]}>
						<TableCell align="right">
							ex {priceBreak[0]} {quantityUnit}
						</TableCell>
						<TableCell align="right">
							{priceBreak[1]} {currency}/{quantityUnit}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);

	return (
		<Box bgcolor={colors.white} width={400} p={2}>
			{renderRedUppercaseTitle("pricing & shipping")}
			<Divider />
			{renderOrderingDetailsList()}
			{renderGraySubtitle("price breaks")}
			{renderPriceBreaksTable()}
		</Box>
	);
};

export default ProductPricing;
