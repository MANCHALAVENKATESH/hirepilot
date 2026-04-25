import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from '../../pages/DashboardPage'
import JobsPage from '../../pages/JobsPage'
import PipelinePage from '../../pages/PipelinePage'
import CandidateDetailPage from '../../pages/CandidatePage'
import AssessmentCreatePage from '../../pages/AssessmentCreatePage'
import AssessmentPlayerPage from '../../pages/ExamPage'
import CreateJobPage from '../../pages/CreateJobPage'
import NotificationsPage from '../../pages/NotificationPage'
import AnalyticsPage from '../../pages/AnalyticsPage'
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/pipeline" element={<PipelinePage />} />
      <Route path="/candidates" element={<CandidateDetailPage />} />
      <Route path="/assessments" element={<AssessmentCreatePage />} />
      <Route path="/exam" element={<AssessmentPlayerPage />} />
      <Route path="/createjob" element={<CreateJobPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />

    </Routes>
  )
}