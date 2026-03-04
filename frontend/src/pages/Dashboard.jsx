import { useAuth } from "../context/AuthContext";
import usePerformanceProfiler from "../hooks/usePerformanceProfiler";

export default function Dashboard() {
  usePerformanceProfiler("Dashboard");
  const { user } = useAuth();

  return (
    <div className="p-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-white">
        Welcome, {user?.name}
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-gray-400">Account Status</h3>
          <p className="text-green-400 font-bold mt-2">Active</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-gray-400">Transactions</h3>
          <p className="text-white mt-2">View history in wallet</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-gray-400">Platform Access</h3>
          <p className="text-white mt-2">Investment & Analytics Enabled</p>
        </div>
      </div>
    </div>
  );
}
