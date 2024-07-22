import Dashboard from "@/layouts/dashboard/index.jsx";
// import Tables from "@/layouts/tables/index.jsx";
// import Billing from "@/layouts/billing/index.jsx";
import Profile from "@/layouts/profile/index.jsx";
import SignIn from "@/layouts/authentication/sign-in/index.jsx";
import SignUp from "@/layouts/authentication/sign-up/index.jsx";

// @mui icons
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon fontSize="small">dashboard</DashboardIcon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <PersonIcon fontSize="small">person</PersonIcon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    component: <SignIn />,
    route: "/sign-in",
  },
  {
    route: "/sign-up",
    component: <SignUp />,
  },
];

export default routes;
