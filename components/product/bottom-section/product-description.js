import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { colors } from "../../../constants/colors";

const ProductDescription = ({ description }) => (
	<>
		<Typography
			variant="subtitle2"
			component="div"
			sx={{ color: colors.red }}
		>
			DESCRIPTION
		</Typography>
		<Typography variant="subtitle2" component="div" width={900}>
			{description}
		</Typography>
	</>
);

export default ProductDescription;
