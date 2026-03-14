import { MoreHorizontal, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const transactions = [
  {
    id: "TRX-837482",
    date: "13 Mar, '26  10:45 AM",
    service: "Flexiload (Grameenphone)",
    amount: "৳ 100.00",
    status: "Completed",
    type: "debit",
    avatar: "GP",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "TRX-837483",
    date: "13 Mar, '26  09:30 AM",
    service: "bKash Cash In",
    amount: "৳ 5,000.00",
    status: "Completed",
    type: "credit",
    avatar: "bK",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: "TRX-837484",
    date: "12 Mar, '26  04:15 PM",
    service: "Photocopy Service",
    amount: "৳ 50.00",
    status: "Completed",
    type: "credit",
    avatar: "PC",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "TRX-837485",
    date: "12 Mar, '26  02:10 PM",
    service: "Nagad Send Money",
    amount: "৳ 1,500.00",
    status: "Pending",
    type: "debit",
    avatar: "NG",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "TRX-837486",
    date: "11 Mar, '26  11:25 AM",
    service: "Printing Service",
    amount: "৳ 200.00",
    status: "Failed",
    type: "debit",
    avatar: "PR",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Recent Transactions</h2>
          <p className="text-sm text-gray-500 mt-1">Latest activity across all services</p>
        </div>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-md transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-4 font-semibold text-gray-400 text-xs tracking-wider uppercase">Service</th>
              <th className="pb-4 font-semibold text-gray-400 text-xs tracking-wider uppercase">Transaction ID</th>
              <th className="pb-4 font-semibold text-gray-400 text-xs tracking-wider uppercase">Date & Time</th>
              <th className="pb-4 font-semibold text-gray-400 text-xs tracking-wider uppercase">Amount</th>
              <th className="pb-4 font-semibold text-gray-400 text-xs tracking-wider uppercase">Status</th>
              <th className="pb-4 font-semibold text-gray-400 text-xs tracking-wider uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactions.map((trx, index) => (
              <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                <td className="py-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-md flex items-center justify-center font-bold text-sm bg-opacity-30 ${trx.color}`}>
                      {trx.avatar}
                    </div>
                    <span className="font-semibold text-slate-800">{trx.service}</span>
                  </div>
                </td>
                <td className="py-5 text-sm font-medium text-slate-600">
                  {trx.id}
                </td>
                <td className="py-5 text-sm text-gray-500">
                  {trx.date}
                </td>
                <td className="py-5">
                  <div className="flex items-center gap-2">
                    {trx.type === "credit" ? (
                      <ArrowDownLeft className="size-4 text-emerald-500" />
                    ) : (
                      <ArrowUpRight className="size-4 text-rose-500" />
                    )}
                    <span className={`font-bold ${trx.type === "credit" ? "text-emerald-600" : "text-slate-800"}`}>
                      {trx.amount}
                    </span>
                  </div>
                </td>
                <td className="py-5">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                      trx.status === "Completed"
                        ? "bg-emerald-50 text-emerald-600"
                        : trx.status === "Pending"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-rose-50 text-rose-600"
                    }`}
                  >
                    {trx.status}
                  </span>
                </td>
                <td className="py-5 text-right">
                  <button className="p-2 text-gray-400 hover:text-slate-800 hover:bg-gray-100 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="size-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
