import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./view/Dashboard";
import Student from "./view/Student";
import Inventory from "./view/Inventory";
import Staff from "./view/Staff";
import Accounts from "./view/Accounts";
import Library from "./view/Library";
import Studentform from "./view/Studentform";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/staff",
    element: <Staff />,
  },
  {
    path: "/account",
    element: <Accounts />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
  {
    path: "/library",
    element: <Library />,
  },
]);
export default router;
