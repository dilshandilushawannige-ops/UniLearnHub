import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProfileDropdown = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-12 z-40 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-soft"
    >
      {!isAuthenticated ? (
        <div className="space-y-2">
          <Link
            to="/login"
            onClick={onClose}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={onClose}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Signup
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-800">{user?.username}</p>
            <p className="mt-1 text-xs text-slate-600">{user?.email}</p>
            <p className="mt-2 text-xs text-slate-600">Year: {user?.currentYear}</p>
            <p className="text-xs text-slate-600">Semester: {user?.currentSemester}</p>
          </div>

          <Link
            to="/my-dashboard"
            onClick={onClose}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            My Dashboard
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full rounded-xl bg-brand-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
