const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Dayflow</h2>
      <nav>
        <a href="/">Dashboard</a>
        <a href="/employees">Employees</a>
        <a href="/attendance">Attendance</a>
        <a href="/leave">Leave</a>
        <a href="/payroll">Payroll</a>
      </nav>
    </aside>
  );
};

export default Sidebar;