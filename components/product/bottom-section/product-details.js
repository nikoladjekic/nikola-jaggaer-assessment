import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Chip from "@mui/material/Chip";
import { ReactComponent as AttachmentIcon } from "../../../icons/attachment.svg";
import { colors } from "../../../utils/constants";
import {
	renderGraySubtitle,
	renderRedUppercaseTitle,
} from "../../../utils/functions";

const ProductDetails = ({ features, attachments, keywords }) => {
	const renderFeaturesList = () => (
		<List sx={{ padding: "0 16px", listStyleType: "disc" }}>
			{Object.entries(features).map((feature) => (
				<ListItem
					key={feature[0] + feature[1]}
					sx={{ display: "list-item", padding: "0px" }}
				>
					<Typography
						variant="body2"
						color={colors.gray}
						component="span"
						mr={1}
					>
						{feature[0]}:
					</Typography>
					<Typography variant="body2" component="span">
						{feature[1]}
					</Typography>
				</ListItem>
			))}
		</List>
	);

	const renderAttachmentsList = () => (
		<List sx={{ padding: "0" }}>
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

	const renderKeywords = () =>
		keywords.map((keyword) => (
			<Chip
				key={keyword}
				label={keyword}
				size="small"
				sx={{ margin: "3px 10px 0 0" }}
			/>
		));

	return (
		<Box bgcolor={colors.white} width={400} p={2} mr={3}>
			{renderRedUppercaseTitle("details")}
			<Divider />
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
