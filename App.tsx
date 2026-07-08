import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './lib/auth';
import LandingPage from './pages/LandingPage';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/app/Dashboard';
import Courses from './pages/app/Courses';
import Documents from './pages/app/Documents';
import Tutor from './pages/app/Tutor';
import Summaries from './pages/app/Summaries';
import Flashcards from './pages/app/Flashcards';
import Quizzes from './pages/app/Quizzes';
import Planner from './pages/app/Planner';
import Contracts from './pages/app/Contracts';
import Subscription from './pages/app/Subscription';
import AdminDashboard from './pages/app/AdminDashboard';
import { Spinner } from './components/ui';

function Protected({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner className="h-8 w-8 text-brand-600" />
      </div>
    );
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/app"
        element={
          <Protected>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </Protected>
        }
      />
      <Route path="/app/courses" element={<Protected><AppLayout><Courses /></AppLayout></Protected>} />
      <Route path="/app/documents" element={<Protected><AppLayout><Documents /></AppLayout></Protected>} />
      <Route path="/app/tutor" element={<Protected><AppLayout><Tutor /></AppLayout></Protected>} />
      <Route path="/app/summaries" element={<Protected><AppLayout><Summaries /></AppLayout></Protected>} />
      <Route path="/app/flashcards" element={<Protected><AppLayout><Flashcards /></AppLayout></Protected>} />
      <Route path="/app/quizzes" element={<Protected><AppLayout><Quizzes /></AppLayout></Protected>} />
      <Route path="/app/planner" element={<Protected><AppLayout><Planner /></AppLayout></Protected>} />
      <Route path="/app/contracts" element={<Protected><AppLayout><Contracts /></AppLayout></Protected>} />
      <Route path="/app/subscription" element={<Protected><AppLayout><Subscription /></AppLayout></Protected>} />
      <Route path="/admin" element={<Protected><AppLayout><AdminDashboard /></AppLayout></Protected>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
