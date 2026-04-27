import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";

import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";

import DashboardPage from "../../pages/DashboardPage";
import JobsPage from "../../pages/JobsPage";
import PipelinePage from "../../pages/PipelinePage";
import CandidateDetailPage from "../../pages/CandidatePage";
import AssessmentCreatePage from "../../pages/AssessmentCreatePage";
import AssessmentPlayerPage from "../../pages/ExamPage";
import CreateJobPage from "../../pages/CreateJobPage";
import NotificationsPage from "../../pages/NotificationPage";
import AnalyticsPage from "../../pages/AnalyticsPage";
import IntegrationsPage from "../../pages/IntegrationPage";
import SettingsPage from "../../pages/SettingsPage";
import ProfilePage from "../../pages/ProfilePage";
import NonTechnicalInterviewPage from "../../pages/AIInterviewPage";
import AddCandidatePage from "../../pages/AddCandidatate";
import CandidateListPage from "../../pages/CandidateListPage";

export default function AppRouter() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={token ? <Navigate to="/dashboard" replace /> : <LoginPage />}
      />
    
      <Route
        path="/signup"
        element={token ? <Navigate to="/dashboard" replace /> : <SignupPage />}
      />

      {/* Protected Routes */}
      <Route
        path="/aiinterview"
        element={
          <PrivateRoute>
            <NonTechnicalInterviewPage />
          </PrivateRoute>
        }
      />

         <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/jobs"
        element={
          <PrivateRoute>
            <JobsPage />
          </PrivateRoute>
        }
      />
        <Route
        path="/addcandidate"
        element={
          <PrivateRoute>
            <AddCandidatePage />
          </PrivateRoute>
        }
      />

    <Route
        path="/candidateslist"
        element={
          <PrivateRoute>
            <CandidateListPage />
          </PrivateRoute>
        }
      />
      

      <Route
        path="/pipeline"
        element={
          <PrivateRoute>
            <PipelinePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/candidates"
        element={
          <PrivateRoute>
            <CandidateDetailPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/assessments"
        element={
          <PrivateRoute>
            <AssessmentCreatePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/exam"
        element={
          <PrivateRoute>
            <AssessmentPlayerPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/createjob"
        element={
          <PrivateRoute>
            <CreateJobPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/notifications"
        element={
          <PrivateRoute>
            <NotificationsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <PrivateRoute>
            <AnalyticsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/integrations"
        element={
          <PrivateRoute>
            <IntegrationsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <SettingsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      {/* Root */}
      <Route
        path="/"
        element={
          token ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Unknown Routes */}
      <Route
        path="*"
        element={
          token ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}
