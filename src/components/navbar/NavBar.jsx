import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const userProducts = useSelector((state) => state?.user?.cart);

  const navigate = useNavigate();

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Store
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          {/* Temp */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => navigate("/admin/products")}
            >
              admin
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex", ml: 2 } }}>
            <Button
              sx={{ ml: 2 }}
              color="inherit"
              variant="outlined"
              onClick={() => navigate("/products")}
            >
              user
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => navigate("/cart")}
            >
              <Badge
                badgeContent={
                  userProducts?.product?.length
                    ? userProducts?.product?.length
                    : null
                }
                color="error"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => navigate("/")}
            >
              Log out
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
}
