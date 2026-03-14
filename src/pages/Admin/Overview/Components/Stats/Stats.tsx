import { Wallet, TrendingUp, CreditCard, Activity } from "lucide-react";

const statsData = [
  {
    title: "Total Balance",
    amount: "৳ 24,500.00",
    trend: "+2.5%",
    isPositive: true,
    icon: Wallet,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Today's Revenue",
    amount: "৳ 8,450.00",
    trend: "+12.5%",
    isPositive: true,
    icon: TrendingUp,
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Total Transactions",
    amount: "145",
    trend: "-4.2%",
    isPositive: false,
    icon: CreditCard,
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Active Services",
    amount: "12",
    trend: "+1.2%",
    isPositive: true,
    icon: Activity,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export default function OverviewStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold text-slate-800">
                {stat.amount}
              </h3>
            </div>
            <div className={`p-3 rounded-md ${stat.color}`}>
              <stat.icon className={`size-6 ${stat.iconColor}`} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span
              className={`text-sm font-semibold px-2 py-0.5 rounded-md ${
                stat.isPositive
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {stat.trend}
            </span>
            <span className="text-sm text-gray-400 font-medium">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
