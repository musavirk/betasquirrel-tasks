import AppNavbar from "../Components/AppNavbar";
import Sidebar from "../Components/Sidebar";

function Main({ children }) {
  return (
    <>
      <AppNavbar />
      <div className="d-flex">
        <Sidebar />

        <div className="container-fluid">{children}</div>
      </div>
    </>
  );
}

export default Main;
