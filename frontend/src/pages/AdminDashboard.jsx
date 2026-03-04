import AnalyticsChart from "../components/AnalyticsChart";
import TransactionTable from "../components/TransactionTable";
import Loader from "../components/common/Loader";

export default function AdminDashboard({ analyticsData, transactions }) {
  if (!analyticsData || !transactions) return <Loader />;

  return (
    <div className="p-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-white mb-6">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <AnalyticsChart data={analyticsData} />
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
}
