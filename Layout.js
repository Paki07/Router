import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <div className="Layoutstyle">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/FetchData">FetchData</Link>
          </li>
          <li>
            <Link to="Forms">Forms</Link>
          </li>
        </ul>
      <Outlet />
    </div>
  )
};

export default Layout;