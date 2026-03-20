import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Home from "./features/home/pages/Home.jsx";
import Login from "./features/auth/pages/Login.jsx";
import Signup from "./features/auth/pages/Signup.jsx";
import ResourcePage from "./features/placeholders/pages/ResourcePage.jsx";
import ResourceRequestPage from "./features/placeholders/pages/ResourceRequestPage.jsx";
import LiveClassPage from "./features/placeholders/pages/LiveClassPage.jsx";
import StudyPlanPage from "./features/placeholders/pages/StudyPlanPage.jsx";
import MyDashboardPage from "./features/dashboard/pages/MyDashboardPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/resource" element={<ResourcePage />} />
          <Route path="/resource-request" element={<ResourceRequestPage />} />
          <Route path="/live-class" element={<LiveClassPage />} />
          <Route path="/study-plan" element={<StudyPlanPage />} />
          <Route path="/my-dashboard" element={<MyDashboardPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
