import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/account" className="ccc">
              Account Management
            </Link>
          </li>
          <li>
            <Link to="/role" className="ccc">
              Role & Permission Management
            </Link>
          </li>
          <li>
            <Link to="/error" className="ccc">
              Error Reporting
            </Link>
          </li>
          <li>
            <Link to="/maintenance" className="ccc">
              System Maintenance
            </Link>
          </li>
          <li>
            <Link to="/update" className="ccc">
              System Update
            </Link>
          </li>
          <li>
            <Link to="/database" className="ccc">
              Database Management
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default SidebarAdmin;
