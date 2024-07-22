/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "@/components/MDBox";
import MDTypography from "@/components/MDTypography/index.jsx";

// Material Dashboard 2 React base styles
import typography from "@/assets/theme/base/typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Footer() {
  const { size } = typography;

  return (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      color="text"
      fontSize={size.sm}
      px={1.5}
    >
      &copy; {new Date().getFullYear()}, made with
      <MDBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
        <FavoriteIcon color="inherit" fontSize="inherit">
          favorite
        </FavoriteIcon>
      </MDBox>
      by
      <MDTypography variant="button" fontWeight="medium">
        &nbsp;Faisal Shaikh&nbsp;
      </MDTypography>
      for a better web.
    </MDBox>
  );
}

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
