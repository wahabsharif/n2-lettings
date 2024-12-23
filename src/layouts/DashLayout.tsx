import ProtectedRoute from "@/components/auth/ProtectedRoute";
import SideBar from "@/components/dashboard/SideBar";
import { Metadata } from "next";
import "@/styles/dash.css";
export const generateMetadata = ({
  pageTitle,
}: {
  pageTitle?: string;
}): Metadata => ({
  title: pageTitle ? `${pageTitle} - N2 Dash` : "N2 Dash",
});

interface DashLayoutProps {
  children: React.ReactNode;
}

const DashLayout: React.FC<DashLayoutProps> = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        <SideBar />
        <main className="min-h-screen w-full py-2 overflow-y-auto">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default DashLayout;
