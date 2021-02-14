import React from "react";
import { Link } from "react-router-dom";

function Navbar({ count }) {
  return (
    <nav class="navbar bg-dark navbar-dark navbar-default">
      <span>
        <h3 class="navbar-brand" href="#" className="fontFam">
          <Link to="/" className="text-decoration-none text-white">
            Shadow{" "}
          </Link>
        </h3>
      </span>

      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/taxis" className="text-decoration-none">
            <span class="nav-link" className="fontFami text-white">
              <span>
                <i class="fas fa-taxi fasSize" />
              </span>{" "}
              <span
                className="badge badge-warning"
                style={{ fontSize: "15px" }}
              >
                {count}
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
