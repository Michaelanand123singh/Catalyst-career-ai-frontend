import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const LoginRedirect = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const from = location.state?.from?.pathname || '/';

  if (user) {
    return <Navigate to={from === '/login-redirect' ? '/' : from} replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AuthModal isOpen={open} onClose={() => setOpen(false)} />
      {!open && <Navigate to={from} replace />}
    </div>
  );
};

export default LoginRedirect;


