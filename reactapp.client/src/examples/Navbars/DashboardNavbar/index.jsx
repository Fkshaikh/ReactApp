import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MDBox from "@/components/MDBox";
import MDInput from "@/components/MDInput";
import Breadcrumbs from "@/examples/Breadcrumbs";
import NotificationItem from "@/examples/Items/NotificationItem";
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "@/context";
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
} from "@/examples/Navbars/DashboardNavbar/styles";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    transparentNavbar,
    fixedNavbar,
    openConfigurator,
    darkMode,
  } = controller;
  const route = useLocation().pathname.split("/").slice(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (fixedNavbar) setNavbarType("sticky");
    else setNavbarType("static");

    const handleTransparentNavbar = () => {
      setTransparentNavbar(
        dispatch,
        (fixedNavbar && window.scrollY === 0) || !fixedNavbar
      );
    };

    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        icon={<LogoutIcon />}
        title="LogOut"
        onClick={handleLogout}
      />
    </Menu>
  );

  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;
      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }
      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) =>
        navbar(theme, { transparentNavbar, absolute, light, darkMode })
      }
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini })}
        >
          <Breadcrumbs
            icon="home"
            title={route[route.length - 1]}
            route={route}
            light={light}
          />
        </MDBox>
        {!isMini && (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            <MDBox pr={1}>
              <MDInput label="Search here" />
            </MDBox>
            <MDBox color={light ? "white" : "inherit"}>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <AccountCircleIcon sx={iconsStyle} />
              </IconButton>
              {renderMenu()}
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
