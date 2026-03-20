import { useAuth } from "../../../context/AuthContext";

const MyDashboardPage = () => {
  const { user } = useAuth();

  return (
    <section className="page-shell">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-900">My Dashboard</h1>
        <p className="mt-3 text-sm text-slate-600">This is your protected student area.</p>

        <div className="mt-6 grid gap-4 rounded-2xl bg-slate-50 p-5 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Username</p>
            <p className="mt-1 font-medium text-slate-900">{user?.username}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
            <p className="mt-1 font-medium text-slate-900">{user?.email}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Current Year</p>
            <p className="mt-1 font-medium text-slate-900">{user?.currentYear}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Current Semester</p>
            <p className="mt-1 font-medium text-slate-900">{user?.currentSemester}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDashboardPage;
