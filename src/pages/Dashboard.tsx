import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <Navbar />

        <div className="content">
          <h1>Dashboard</h1>
          <p>Welcome to Dayflow HRMS</p>

          <div className="stats">
            <StatCard title="Total Employees" value="120" />
            <StatCard title="Present Today" value="98" />
            <StatCard title="On Leave" value="12" />
            <StatCard title="Pending Requests" value="10" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;