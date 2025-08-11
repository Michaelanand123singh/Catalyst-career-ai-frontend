import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthModal = ({ isOpen, onClose }) => {
  const { login, signup } = useAuth();
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const [data, err] = mode === 'login' ? await login(email, password) : await signup(name, email, password);
    if (err) setError(err.message || 'Authentication failed');
    if (data?.token) onClose();
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl border bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800">{mode === 'login' ? 'Login' : 'Create account'}</h2>
            <button onClick={onClose} className="h-8 w-8 grid place-items-center rounded-md hover:bg-slate-100">
              <X className="h-4 w-4" />
            </button>
          </div>

          {error && <div className="mt-3 text-sm text-rose-600">{error}</div>}

          <form onSubmit={submit} className="mt-4 space-y-3">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            </div>
            <button disabled={loading} type="submit" className="w-full mt-2 px-4 py-2 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-600 disabled:opacity-60">
              {loading ? 'Please wait…' : mode === 'login' ? 'Login' : 'Sign up'}
            </button>
          </form>

          <div className="mt-4 text-sm text-slate-600 text-center">
            {mode === 'login' ? (
              <span>
                Don’t have an account?{' '}
                <button onClick={() => setMode('signup')} className="text-amber-600 font-semibold">Create one</button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button onClick={() => setMode('login')} className="text-amber-600 font-semibold">Login</button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;


