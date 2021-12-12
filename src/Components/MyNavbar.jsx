  import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'


   
const MyNavBar = () => {
    return (
      <Navbar variant="dark" expand="lg">
        {/* <Container>
      <Nav className="navbar navbar-expand-lg navbar-light"> */}
        <Link to="/">
          <div className="navbar-brand">
            <img
              src="assets/logoblack.jpg"
              alt="logo"
              style={{ width: "100px", height: "55px" }}
              className="img-fluid"
            />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item ">
                <a className="nav-link">Home</a>
              </li>
            </Link>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                TV Shows
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Recently Added
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                My List
              </a>
            </li>
          </ul>

          <div className="nav-top-right d-flex">
            {/* <!-- Search icon --> */}
            <i className="bi bi-search nav-icons text-light"></i>

            <a className="nav-link">KIDS</a>

            <i className="bi bi-bell-fill nav-icons text-light"></i>
            <Link to="/backoffice">
              <div
                className="btn btn-outline-light mx-3"
                style={{ fontSize: "small" }}
              >
                admin
              </div>
            </Link>
            <div className="btn-group">
              <button
                className="btn btn-secondary dropdown-toggle avatar-btn "
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="assets/avatar.png"
                  className="small-avatar-img rounded"
                  style={{ height: "30px" }}
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-dark avatar-dropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/avatar.png"
                        className="small-avatar-img mr-2 rounded"
                      />{" "}
                      who's that?
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Manage Profiles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Profile.html">
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="setting.html">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Help Center
                  </a>
                </li>
                <li>{/* <hr className="dropdown-divider"> */}</li>
                <li>
                  <a className="dropdown-item" href="#">
                    Singout Netflix
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        /
      </Navbar>
    );
};

export default MyNavBar
   
