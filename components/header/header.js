import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { colors } from "../../utils/constants";
import { ReactComponent as HeartIcon } from "../../icons/favorite.svg";
import { ReactComponent as FactsSoftIcon } from "../../icons/facts-soft.svg";
import { ReactComponent as CartIcon } from "../../icons/cart.svg";

const Header = ({ title }) => {
	const navItems = [
		<HeartIcon fill={colors.gray} />,
		<FactsSoftIcon fill={colors.gray} />,
		<CartIcon fill={colors.gray} />,
	];

	return (
		<AppBar component="nav" color="grey">
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{
						flexGrow: 1,
						display: { xs: "none", sm: "block" },
						color: colors.red,
					}}
				>
					{title}
				</Typography>
				<Box sx={{ "& button": { p: 2 } }}>
					{navItems.map((item, index) => (
						<Button key={item + index}>{item}</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
