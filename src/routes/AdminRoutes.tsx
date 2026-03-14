import { lazy } from "react";
import {
  LayoutDashboard,
  SmartphoneNfc,
  Banknote,
  Printer,
  Target,
  Settings as SettingsIcon,
} from "lucide-react";

// Lazy loading admin pages according to the new folder structure
const Dashboard = lazy(() => import("@/pages/Admin/Overview/Overview"));
const AgentService = lazy(
  () => import("@/pages/Admin/AgentService/AgentService"),
);
const MobileBanking = lazy(
  () => import("@/pages/Admin/MobileBanking/MobileBanking"),
);
const PrintingService = lazy(
  () => import("@/pages/Admin/PrintingService/PrintingService"),
);
const DailyTarget = lazy(() => import("@/pages/Admin/DailyTarget/DailyTarget"));
const Settings = lazy(() => import("@/pages/Admin/Settings/Settings"));

export const adminRoutes = [
  {
    group: "Main Menu",
    items: [
      {
        icon: <LayoutDashboard size={20} />,
        name: "Dashboard",
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        icon: <SmartphoneNfc size={20} />,
        name: "Agent Service",
        path: "agent-service",
        element: <AgentService />,
      },
      {
        icon: <Banknote size={20} />,
        name: "Mobile Banking",
        path: "mobile-banking",
        element: <MobileBanking />,
      },
      {
        icon: <Printer size={20} />,
        name: "Printing Service",
        path: "printing-service",
        element: <PrintingService />,
      },
      {
        icon: <Target size={20} />,
        name: "Daily Target",
        path: "daily-target",
        element: <DailyTarget />,
      },
      {
        icon: <SettingsIcon size={20} />,
        name: "Settings",
        path: "settings",
        element: <Settings />,
      },
    ],
  },
];
