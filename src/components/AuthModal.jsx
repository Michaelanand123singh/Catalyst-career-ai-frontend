import React, { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const AuthModal = ({ isOpen, onClose }) => {
  const { login, signup } = useAuth();
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const [data, err] =
      mode === "login"
        ? await login(email, password)
        : await signup(name, email, password);

    if (err) setError(err.message || "Authentication failed");
    if (data?.token) onClose();
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Centered modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl border-2 border-emerald-700 bg-white shadow-2xl animate-scaleIn">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-emerald-200">
            <h2 className="text-lg font-semibold text-emerald-900">
              {mode === "login" ? "Login" : "Create Account"}
            </h2>
            <button
              onClick={onClose}
              className="h-8 w-8 grid place-items-center rounded-md hover:bg-emerald-50 text-emerald-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="mx-4 mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-200">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={submit} className="p-6 space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-emerald-800">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-emerald-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-emerald-800">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-emerald-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-800">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md border border-emerald-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                required
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full mt-2 px-4 py-2 rounded-md bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition-colors disabled:opacity-60 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Please wait…
                </>
              ) : mode === "login" ? (
                "Login"
              ) : (
                "Sign up"
              )}
            </button>
          </form>

          {/* Switch mode */}
          <div className="px-6 pb-6 text-sm text-center text-emerald-700">
            {mode === "login" ? (
              <span>
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  Create one
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  Login
                </button>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) }
          to { opacity: 1; transform: scale(1) }
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
