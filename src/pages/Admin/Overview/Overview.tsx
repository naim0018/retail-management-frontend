import QuickActions from "./Components/Actions/Actions";
import OverviewStats from "./Components/Stats/Stats";
import RecentTransactions from "./Components/Transactions/Transactions";

const Overview = () => {
  return (
    <div className="w-full fade-in zoom-in duration-300">
      <div className="w-full space-y-8">
        
        {/* Top Summary Stats */}
        <OverviewStats />

        {/* Main Content Layout - Full Width */}
        <div className="grid grid-cols-1 gap-8">
          
          {/* Quick Actions Panel */}
          <div className="w-full bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Services & Actions</h2>
              <p className="text-sm text-gray-500 mt-1">Select a service to initiate a new transaction or request</p>
            </div>
            <QuickActions />
          </div>

        </div>

        {/* Transactions Table Section */}
        <div className="w-full">
          <RecentTransactions />
        </div>

      </div>
    </div>
  );
};

export default Overview;
