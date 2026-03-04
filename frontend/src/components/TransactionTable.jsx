export default function TransactionTable({ transactions }) {
  return (
    <div className="overflow-x-auto animate-fade-in">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-3 border text-gray-300">Date</th>
            <th className="p-3 border text-gray-300">Type</th>
            <th className="p-3 border text-gray-300">Amount (₦)</th>
            <th className="p-3 border text-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} className="bg-gray-900 hover:bg-gray-800 transition">
              <td className="p-3 border">{t.date}</td>
              <td className="p-3 border">{t.type}</td>
              <td className="p-3 border">{t.amount}</td>
              <td className="p-3 border">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
