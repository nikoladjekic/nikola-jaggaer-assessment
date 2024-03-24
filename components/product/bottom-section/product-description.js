import React from "react";
import Typography from "@mui/material/Typography";
import { renderRedUppercaseTitle } from "../../../constants/functions";

const ProductDescription = ({ description }) => (
	<>
		{renderRedUppercaseTitle("description")}
		<Typography variant="subtitle2" component="div" width={900}>
			{description}
		</Typography>
	</>
);

export default ProductDescription;
