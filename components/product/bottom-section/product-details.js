import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import { colors } from "../../../constants/colors";
import { ReactComponent as AttachmentIcon } from "../../../icons/attachment.svg";

const ProductDetails = ({ features, attachments, keywords }) => {
	const renderRedTitle = (title) => (
		<Typography
			variant="subtitle2"
			sx={{ color: colors.red, textTransform: "uppercase" }}
			p={2}
		>
			{title}
		</Typography>
	);

	const renderGraySubtitle = (subtitle) => (
		<Typography
			variant="subtitle2"
			sx={{
				color: colors.gray,
				padding: "16px 16px 0 16px",
				textTransform: "capitalize",
			}}
		>
			{subtitle}
		</Typography>
	);

	const renderFeaturesList = () => (
		<List sx={{ padding: "0 30px", listStyleType: "disc" }}>
			{Object.entries(features).map((feature) => (
				<ListItem
					key={feature[0] + feature[1]}
					sx={{ display: "list-item", padding: "0px" }}
				>
					<>
						<Typography
							sx={{ display: "inline" }}
							variant="body2"
							color={colors.gray}
							component="div"
							mr={1}
						>
							{feature[0]}:
						</Typography>
						<Typography
							sx={{ display: "inline" }}
							variant="body2"
							component="div"
						>
							{feature[1]}
						</Typography>
					</>
				</ListItem>
			))}
		</List>
	);

	const renderAttachmentsList = () => (
		<List sx={{ padding: "0 16px" }}>
			{attachments.map((attachment) => (
				<ListItem key={attachment.file_name} sx={{ padding: "0px" }}>
					<ListItemIcon sx={{ minWidth: "18px" }}>
						<AttachmentIcon width="14px" />
					</ListItemIcon>
					<Link href={attachment.file_link} underline="none">
						<Typography variant="body2">
							{attachment.file_label}
						</Typography>
					</Link>
				</ListItem>
			))}
		</List>
	);

	const renderKeywords = () => (
		<Box ml={2}>
			{keywords.map((keyword) => (
				<Chip
					label={keyword}
					size="small"
					sx={{ marginRight: "10px" }}
				/>
			))}
		</Box>
	);

	return (
		<Box bgcolor={colors.white} width={400} pb={3}>
			{renderRedTitle("details")}
			<Divider variant="middle" />
			{renderGraySubtitle("features")}
			{renderFeaturesList()}
			{renderGraySubtitle("attachments")}
			{renderAttachmentsList()}
			{renderGraySubtitle("keywords")}
			{renderKeywords()}
		</Box>
	);
};

export default ProductDetails;
