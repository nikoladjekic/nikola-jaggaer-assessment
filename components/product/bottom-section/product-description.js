import React from "react";
import Typography from "@mui/material/Typography";
import { renderRedUppercaseTitle } from "../../../utils/functions";

const ProductDescription = ({ description }) => (
	<>
		{renderRedUppercaseTitle("description")}
		<Typography variant="subtitle2" component="div" width={890}>
			{description}
		</Typography>
	</>
);

export default ProductDescription;
