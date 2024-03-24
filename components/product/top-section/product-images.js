import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ReactComponent as PackageIcon } from "../../../icons/package.svg";
import { colors } from "../../../utils/constants";

const ProductImages = ({ images }) => {
	const renderLeftStack = () => (
		<Stack spacing={2} mr={2}>
			{images?.slice(1).map((image) => (
				<Box
					key={image}
					width={100}
					height={100}
					sx={{
						border: `1px solid ${colors.lightGray}`,
						"&:hover": {
							cursor: "pointer",
							borderColor: colors.mediumGray,
						},
					}}
				>
					<Box width={40} sx={{ margin: "30px" }}>
						<PackageIcon fill={colors.lightGray} />
					</Box>
				</Box>
			))}
		</Stack>
	);

	const renderSelectedImage = () => (
		<Box
			width={350}
			height={350}
			sx={{
				border: `1px solid ${colors.lightGray}`,
				"&:hover": {
					cursor: "pointer",
					borderColor: colors.mediumGray,
				},
			}}
		>
			<Box width={120} sx={{ margin: "115px" }}>
				<PackageIcon fill={colors.lightGray} />
			</Box>
		</Box>
	);

	return (
		<Box display={"flex"} mr={3}>
			{renderLeftStack()}
			{renderSelectedImage()}
		</Box>
	);
};

export default ProductImages;
