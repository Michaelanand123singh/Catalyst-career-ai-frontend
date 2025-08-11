import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="h-screen grid place-items-center text-slate-600">Loading…</div>;
  }
  if (!user) {
    return <Navigate to="/login-redirect" replace state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;


