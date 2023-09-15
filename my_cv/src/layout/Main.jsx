import CvSidebar from "../components/Cvsidebar";
import CvNavbar from "../components/Cvnavbar";

function Main({ children }) {
  return (
    <>
      <CvNavbar />
      <div className="d-flex">
        <CvSidebar />

        <div className="container-fluid">{children}</div>
      </div>
    </>
  );
}

export default Main;
