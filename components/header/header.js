import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const navItems = ["Heart", "Dots", "Cart"];

const Header = () => {
	return (
		<AppBar component="nav">
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{
						flexGrow: 1,
						display: { xs: "none", sm: "block" },
						color: "orange",
					}}
				>
					Lorem Ipsum Menu
				</Typography>
				<Box sx={{ display: { xs: "none", sm: "block" } }}>
					{navItems.map((item) => (
						<Button key={item} sx={{ color: "#fff" }}>
							{item}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
