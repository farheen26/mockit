import { Routes, Route } from "react-router-dom";
import CreateMock from "../components/CreateMock";
import ManageMock from "../components/ManageMock";
import TableTest from "../components/TableTest";
import LandingPage from "../pages/LandingPage";

function RouteComponent() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/manage-mock" element={<ManageMock />} />
        <Route path="/create-mock" element={<CreateMock />} />
        <Route path="/test-table" element={<TableTest />} />
      </Routes>
    </>
  );
}

export default RouteComponent;
