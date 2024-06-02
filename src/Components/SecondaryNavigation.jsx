import * as React from "react";
import AppBar from "@mui/material/AppBar";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'transparent',
    borderBottom: '1px solid rgb(192, 20, 20)',
  },
}));

function SecondaryNavigation() {
  return (
    <main>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black", height: "60px" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
          <CustomMenuItem>Latest</CustomMenuItem>
          <CustomMenuItem>Think</CustomMenuItem>
          <CustomMenuItem>Health</CustomMenuItem>
        </Box>
      </AppBar>
    </main>
  );
}

export default SecondaryNavigation;

