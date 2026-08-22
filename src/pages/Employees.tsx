import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Employees = () => {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <Navbar />

        <div className="content">
          <h1>Employees</h1>

          <button className="add-btn">
            + Add Employee
          </button>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Designation</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>EMP001</td>
                <td>Arun Kumar</td>
                <td>IT</td>
                <td>Software Developer</td>
              </tr>

              <tr>
                <td>EMP002</td>
                <td>Priya Sharma</td>
                <td>HR</td>
                <td>HR Executive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Employees;