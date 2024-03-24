import React from "react";
import Typography from "@mui/material/Typography";
import { colors } from "./colors";

export const renderRedUppercaseTitle = (title) => (
	<Typography
		variant="subtitle2"
		sx={{ color: colors.red, textTransform: "uppercase" }}
		pb={2}
	>
		{title}
	</Typography>
);

export const renderGraySubtitle = (subtitle) => (
	<Typography
		variant="subtitle2"
		sx={{
			color: colors.gray,
			padding: "16px 0 0 0",
			textTransform: "capitalize",
		}}
	>
		{subtitle}
	</Typography>
);
