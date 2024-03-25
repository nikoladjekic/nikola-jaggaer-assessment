import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ReactComponent as PackageIcon } from "../../../icons/package.svg";
import { colors } from "../../../utils/constants";

const ProductImages = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		if (images?.length) setSelectedImage(images[0]);
	}, []);

	const getPackageImageBox = ({ key, boxSize, iconWidth, iconMargin }) => (
		<Box
			key={key}
			width={boxSize}
			height={boxSize}
			sx={{
				border: `1px solid ${colors.lightGray}`,
				"&:hover": {
					cursor: "pointer",
					borderColor: colors.mediumGray,
				},
			}}
		>
			<Box width={iconWidth} sx={{ margin: `${iconMargin}px` }}>
				<PackageIcon fill={colors.lightGray} />
			</Box>
		</Box>
	);

	return (
		<Box display={"flex"} mr={3}>
			<Stack spacing={2} mr={2}>
				{images
					.filter((img) => img !== selectedImage)
					.map((image) =>
						getPackageImageBox({
							key: image,
							boxSize: 120,
							iconWidth: 40,
							iconMargin: 40,
						})
					)}
			</Stack>
			{getPackageImageBox({
				boxSize: 350,
				iconWidth: 120,
				iconMargin: 115,
			})}
		</Box>
	);
};

export default ProductImages;
