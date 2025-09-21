import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LandingPage from './components/pages/LandingPage';
import BlogPage from './components/pages/BlogPage';
import DashboardPage from './components/pages/DashboardPage';
import PagesPage from './components/pages/PagesPage';
import LoginPage from './components/pages/LoginPage';
import AdminPanel from './components/AdminPanel';
import MobileBottomNav from './components/MobileBottomNav';
import { AuthProvider, useAuth } from './components/AuthContext';
import Footer from "./components/Footer";

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAdmin, setShowAdmin] = useState(false);
  const { isAuthenticated, isAdmin } = useAuth();

  const handleLoginSuccess = () => {
    if (isAdmin) {
      setShowAdmin(true);
    } else {
      setCurrentPage('home');
    }
  };

  const renderPage = () => {
    if (showAdmin && isAuthenticated && isAdmin) {
      return <AdminPanel onClose={() => setShowAdmin(false)} />;
    }

    switch (currentPage) {
      case 'home':
        return <HeroSection />;
      case 'landing':
        return <LandingPage />;
      case 'blog':
        return <BlogPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'pages':
        return <PagesPage />;
      case 'login':
        return (
          <LoginPage 
            onBack={() => setCurrentPage('home')} 
            onLoginSuccess={handleLoginSuccess}
          />
        );
      default:
        return <HeroSection />;
    }
  };

  const shouldShowHeader = currentPage !== 'login' && !showAdmin;
  const shouldShowBottomNav = currentPage !== 'login' && !showAdmin;
  const shouldShowFooter = currentPage !== 'login' && !showAdmin; // 👈 เพิ่มตรงนี้

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {shouldShowHeader && (
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      )}
      <main className={`flex-grow ${shouldShowBottomNav ? 'pb-16 md:pb-0' : ''}`}>
        {renderPage()}
      </main>
      {shouldShowBottomNav && (
        <MobileBottomNav currentPage={currentPage} onPageChange={setCurrentPage} />
      )}
      {shouldShowFooter && <Footer />} {/* 👈 แสดง Footer ตามเงื่อนไข */}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
